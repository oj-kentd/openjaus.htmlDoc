---
title: AccessControl
---

# AccessControl

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:core:AccessControl` |

## Description

The Access Control service offers a basic interface for acquiring preemptable exclusive control to one or more related services that utilize this function. Once the exclusive control is established, the related services shall only execute commands originating from the controlling component. The authority code parameter of this service is used for preemption and is to be set equal to that of its controlling client. This service always grants control to the highest authority client that is requesting exclusive control. Commands from all other clients are ignored unless from a client with higher authority.This service maintains two values, a default value and a current value of a field called authority code. The default value is the value that the service is pre-configured with. Access is provided to clients based on the value of their authority code in comparison to the current value of this service.State transitions between the Available and NotAvailable nested states are behaviors that are deferred to service definitions that derive from this service.

## Internal Events

| ID | Event |
| --- | --- |
| `8D01h` | [AccessControlTimeout](/messages/access-control-timeout-8d01) |

## Message Set

| ID | Message |
| --- | --- |
| `000Fh` | [ConfirmControl](/messages/confirm-control-000f) |
| `2001h` | [QueryAuthority](/messages/query-authority-2001) |
| `200Dh` | [QueryControl](/messages/query-control-200d) |
| `2003h` | [QueryTimeout](/messages/query-timeout-2003) |
| `0010h` | [RejectControl](/messages/reject-control-0010) |
| `000Eh` | [ReleaseControl](/messages/release-control-000e) |
| `4001h` | [ReportAuthority](/messages/report-authority-4001) |
| `400Dh` | [ReportControl](/messages/report-control-400d) |
| `4003h` | [ReportTimeout](/messages/report-timeout-4003) |
| `000Dh` | [RequestControl](/messages/request-control-000d) |
| `0001h` | [SetAuthority](/messages/set-authority-0001) |

## State Machine Diagram

![AccessControl State Machine Diagram](/smDiagrams/AccessControl.png)

## State Transitions

<table border="1" class="jaus-table">
<tbody><tr>
<th align="left" colspan="100"><font size="+2">
<b>State Transitions</b></font></th></tr>
<tr>
<td><b>Label</b></td>
<td><b>Transition</b></td>
<td><b>Trigger</b></td>
<td><b>Conditional</b></td>
<td><b>Actions</b></td>
</tr>
<tr>
<td align="center" rowspan="1">C</td>
<td rowspan="1">AcceptControlTransition</td>
<td><a href="/messages/request-control-000d
">RequestControl</a></td>
<td><code>!isDefaultAuthorityGreater</code></td>
<td>resetTimer
, sendConfirmControlAccepted
, setAuthority
, storeAddress
</td>
</tr><tr>
<td align="center" rowspan="4">D</td>
<td rowspan="4">ControlledLoopback</td>
<td><a href="/messages/request-control-000d
">RequestControl</a></td>
<td><code>isCurrentAuthorityLess &amp;&amp; !isControllingClient</code></td>
<td>resetTimer
, sendConfirmControlAccepted
, sendRejectControlToController
, setAuthority
, storeAddress
</td>
</tr>
<tr>
<td><a href="/messages/request-control-000d
">RequestControl</a></td>
<td><code>!isCurrentAuthorityLess &amp;&amp; !isControllingClient</code></td>
<td>sendConfirmControlInsufficientAuthority
</td>
</tr>
<tr>
<td><a href="/messages/request-control-000d
">RequestControl</a></td>
<td><code>!isDefaultAuthorityGreater &amp;&amp; isControllingClient</code></td>
<td>resetTimer
, sendConfirmControlAccepted
, setAuthority
</td>
</tr>
<tr>
<td><a href="/messages/set-authority-0001
">SetAuthority</a></td>
<td><code>isControllingClient &amp;&amp; isAuthorityValid</code></td>
<td>setAuthority
</td>
</tr><tr>
<td align="center" rowspan="5">A</td>
<td rowspan="5">DefaultStateLoop</td>
<td><a href="/messages/query-authority-2001
">QueryAuthority</a></td>
<td><code></code></td>
<td><a href="/messages/report-authority-4001
">sendReportAuthority</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-timeout-2003
">QueryTimeout</a></td>
<td><code></code></td>
<td><a href="/messages/report-timeout-4003
">sendReportTimeout</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-control-200d
">QueryControl</a></td>
<td><code></code></td>
<td><a href="/messages/report-control-400d
">sendReportControl</a>
</td>
</tr>
<tr>
<td><a href="/messages/confirm-control-000f
">ConfirmControl</a></td>
<td><code></code></td>
<td>updateControlledList
</td>
</tr>
<tr>
<td><a href="/messages/reject-control-0010
">RejectControl</a></td>
<td><code></code></td>
<td>updateControlledList
</td>
</tr><tr>
<td align="center" rowspan="2">B</td>
<td rowspan="2">NotControlledLoopback</td>
<td><a href="/messages/request-control-000d
">RequestControl</a></td>
<td><code>isDefaultAuthorityGreater</code></td>
<td>sendConfirmControlInsufficientAuthority
</td>
</tr>
<tr>
<td><a href="/messages/release-control-000e
">ReleaseControl</a></td>
<td><code></code></td>
<td>sendRejectControlReleased
</td>
</tr><tr>
<td align="center" rowspan="3">E</td>
<td rowspan="3">ReleaseControlTransition</td>
<td><a href="/messages/release-control-000e
">ReleaseControl</a></td>
<td><code>isControllingClient</code></td>
<td>sendRejectControlReleased
</td>
</tr>
<tr>
<td><a href="/messages/request-control-000d
">RequestControl</a></td>
<td><code>isDefaultAuthorityGreater &amp;&amp; isControllingClient</code></td>
<td>sendRejectControlToController
</td>
</tr>
<tr>
<td><a href="/messages/access-control-timeout-8d01
">AccessControlTimeout</a></td>
<td><code></code></td>
<td>sendRejectControlReleased
</td>
</tr></tbody></table>

## Actions

<table border="1" class="jaus-table">
<tbody><tr>
<th align="left" colspan="4"><font size="+2">
<b>Actions</b></font></th></tr>
<tr>
<td><b>Action Name</b></td>
<td><b>Type</b></td>
<td><b>Description</b></td>
</tr>
<tr>
<td>init</td>
<td>Entry Action
</td>
<td>Set the service�s current authority value to the default authority value
</td>
</tr><tr>
<td>resetTimer</td>
<td></td>
<td>Reset the timer
</td>
</tr><tr>
<td>sendConfirmControlAccepted</td>
<td></td>
<td>Send a confirm control message with the specified response code to requesting client
</td>
</tr><tr>
<td>sendConfirmControlInsufficientAuthority</td>
<td></td>
<td>Send a confirm control message with the specified response code to requesting client
</td>
</tr><tr>
<td>sendRejectControlReleased</td>
<td></td>
<td>
</td>
</tr><tr>
<td>sendRejectControlToController</td>
<td></td>
<td>
</td>
</tr><tr>
<td>sendReportAuthority</td>
<td>Send Action
</td>
<td>Send a Report Authority message to querying client reporting the current authority value of this service
<br>
<i>Output Message:</i> <a href="/messages/report-authority-4001
">ReportAuthority
</a></td>
</tr><tr>
<td>sendReportControl</td>
<td>Send Action
</td>
<td>Send a Report Control message with the specified control value
<br>
<i>Output Message:</i> <a href="/messages/report-control-400d
">ReportControl
</a></td>
</tr><tr>
<td>sendReportTimeout</td>
<td>Send Action
</td>
<td>Send a Report Timeout message specifying the timeout period of this service
<br>
<i>Output Message:</i> <a href="/messages/report-timeout-4003
">ReportTimeout
</a></td>
</tr><tr>
<td>setAuthority</td>
<td></td>
<td>Set the current authority value of this service to the specified authority
</td>
</tr><tr>
<td>storeAddress</td>
<td></td>
<td>
</td>
</tr><tr>
<td>updateControlledList</td>
<td></td>
<td>Modifies list of controlled components based on confirm or reject messages
</td>
</tr></tbody></table>

