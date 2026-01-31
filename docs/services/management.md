---
title: Management
---

# Management

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:core:Management` |

## Description

The Management Service provides a state machine for component life-cycle management to help clients understand how the component will react to commands and queries.

## Internal Events

| ID | Event |
| --- | --- |
| `8D03h` | [Failure](/messages/failure-8d03) |
| `8D02h` | [Initialized](/messages/initialized-8d02) |

## Message Set

| ID | Message |
| --- | --- |
| `0007h` | [ClearEmergency](/messages/clear-emergency-0007) |
| `2002h` | [QueryStatus](/messages/query-status-2002) |
| `4002h` | [ReportStatus](/messages/report-status-4002) |
| `0005h` | [Reset](/messages/reset-0005) |
| `0004h` | [Resume](/messages/resume-0004) |
| `0006h` | [SetEmergency](/messages/set-emergency-0006) |
| `0002h` | [Shutdown](/messages/shutdown-0002) |
| `0003h` | [Standby](/messages/standby-0003) |

## State Machine Diagram

![Management State Machine Diagram](/smDiagrams/Management.png)

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
<td align="center" rowspan="3">AC-H</td>
<td rowspan="3">ControlAvailableReleaseControlTransition</td>
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
</tr><tr>
<td align="center" rowspan="1">AC-D</td>
<td rowspan="1">ControlAvailableRequestControlTransition</td>
<td><a href="/messages/request-control-000d
">RequestControl</a></td>
<td><code>!isDefaultAuthorityGreater</code></td>
<td>resetTimer
, sendConfirmControlAccepted
, setAuthority
, storeAddress
</td>
</tr><tr>
<td align="center" rowspan="1">I</td>
<td rowspan="1">ControlledEmergencyLoop</td>
<td><a href="/messages/reset-0005
">Reset</a></td>
<td><code></code></td>
<td></td>
</tr><tr>
<td align="center" rowspan="1">F</td>
<td rowspan="1">ControlledFailureTransition</td>
<td><a href="/messages/failure-8d03
">Failure</a></td>
<td><code></code></td>
<td>emptyStateStack
, sendRejectControlToController
</td>
</tr><tr>
<td align="center" rowspan="3">AC-E</td>
<td rowspan="3">ControlledNotAvailableDefaultLoop</td>
<td><a href="/messages/request-control-000d
">RequestControl</a></td>
<td><code></code></td>
<td>sendConfirmControlNotAvailable
</td>
</tr>
<tr>
<td><a href="/messages/release-control-000e
">ReleaseControl</a></td>
<td><code></code></td>
<td>sendRejectControlNotAvailable
</td>
</tr>
<tr>
<td><a href="/messages/access-control-timeout-8d01
">AccessControlTimeout</a></td>
<td><code></code></td>
<td>resetTimer
</td>
</tr><tr>
<td align="center" rowspan="1">A</td>
<td rowspan="1">InitializedTransition</td>
<td><a href="/messages/initialized-8d02
">Initialized</a></td>
<td><code></code></td>
<td></td>
</tr><tr>
<td align="center" rowspan="1">H2</td>
<td rowspan="1">ManagementControlledLoop</td>
<td><a href="/messages/query-status-2002
">QueryStatus</a></td>
<td><code></code></td>
<td><a href="/messages/report-status-4002
">sendReportStatus</a>
</td>
</tr><tr>
<td align="center" rowspan="1">H1</td>
<td rowspan="1">ManagementNotControlledDefaultLoop</td>
<td><a href="/messages/query-status-2002
">QueryStatus</a></td>
<td><code></code></td>
<td><a href="/messages/report-status-4002
">sendReportStatus</a>
</td>
</tr><tr>
<td align="center" rowspan="1">L</td>
<td rowspan="1">NotControlledFailureTransition</td>
<td><a href="/messages/failure-8d03
">Failure</a></td>
<td><code></code></td>
<td>emptyStateStack
</td>
</tr><tr>
<td align="center" rowspan="1">AC-A</td>
<td rowspan="1">NotControlledNotAvailableDefaultLoop</td>
<td><a href="/messages/request-control-000d
">RequestControl</a></td>
<td><code></code></td>
<td>sendConfirmControlNotAvailable
</td>
</tr><tr>
<td align="center" rowspan="1">B</td>
<td rowspan="1">Pause</td>
<td><a href="/messages/standby-0003
">Standby</a></td>
<td><code>isControllingClient</code></td>
<td></td>
</tr><tr>
<td align="center" rowspan="1">J2</td>
<td rowspan="1">PopFromControlledEmergency</td>
<td><a href="/messages/clear-emergency-0007
">ClearEmergency</a></td>
<td><code>isIDStored</code></td>
<td>deleteID
</td>
</tr><tr>
<td align="center" rowspan="1">J1</td>
<td rowspan="1">PopFromNotControlledEmergency</td>
<td><a href="/messages/clear-emergency-0007
">ClearEmergency</a></td>
<td><code>isIDStored</code></td>
<td>deleteID
</td>
</tr><tr>
<td align="center" rowspan="1">G2</td>
<td rowspan="1">PushToControlledEmergency</td>
<td><a href="/messages/set-emergency-0006
">SetEmergency</a></td>
<td><code></code></td>
<td>storeID
</td>
</tr><tr>
<td align="center" rowspan="1">G1</td>
<td rowspan="1">PushToNotControlledEmergency</td>
<td><a href="/messages/set-emergency-0006
">SetEmergency</a></td>
<td><code></code></td>
<td>storeID
</td>
</tr><tr>
<td align="center" rowspan="1">D</td>
<td rowspan="1">ResetTransition</td>
<td><a href="/messages/reset-0005
">Reset</a></td>
<td><code>isControllingClient</code></td>
<td>sendRejectControlToController
</td>
</tr><tr>
<td align="center" rowspan="1">E</td>
<td rowspan="1">ShutdownTransition</td>
<td><a href="/messages/shutdown-0002
">Shutdown</a></td>
<td><code>isControllingClient</code></td>
<td>emptyStateStack
, sendRejectControlToController
</td>
</tr><tr>
<td align="center" rowspan="1">C</td>
<td rowspan="1">ToReady</td>
<td><a href="/messages/resume-0004
">Resume</a></td>
<td><code>isControllingClient</code></td>
<td></td>
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
<td>deleteID</td>
<td></td>
<td>
</td>
</tr><tr>
<td>emptyStateStack</td>
<td></td>
<td>
</td>
</tr><tr>
<td>resetTimer</td>
<td></td>
<td>
</td>
</tr><tr>
<td>sendConfirmControlNotAvailable</td>
<td></td>
<td>Send a confirm control message with the specified response code to requesting client
</td>
</tr><tr>
<td>sendRejectControlNotAvailable</td>
<td></td>
<td>
</td>
</tr><tr>
<td>sendRejectControlToController</td>
<td></td>
<td>
</td>
</tr><tr>
<td>sendReportStatus</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/report-status-4002
">ReportStatus
</a></td>
</tr><tr>
<td>storeID</td>
<td></td>
<td>
</td>
</tr></tbody></table>

