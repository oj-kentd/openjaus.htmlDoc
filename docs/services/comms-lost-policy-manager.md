---
title: CommsLostPolicyManager
---

# CommsLostPolicyManager

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:CommsLostPolicyManager` |

## Description

The Comms Lost Policy Manager Service provides a mechanism for setting the behavior of a platform when communication is lost with the current controller.

## Internal Events

| ID | Event |
| --- | --- |
| `8D10h` | [CommsLost](/messages/comms-lost-8d10) |
| `8D11h` | [CommsRestored](/messages/comms-restored-8d11) |

## Message Set

| ID | Message |
| --- | --- |
| `C402h` | [QueryCommsLostCapabilities](/messages/query-comms-lost-capabilities-c402) |
| `C403h` | [QueryCommsLostConfiguration](/messages/query-comms-lost-configuration-c403) |
| `C404h` | [QueryCommsLostStatus](/messages/query-comms-lost-status-c404) |
| `C412h` | [ReportCommsLostCapabilities](/messages/report-comms-lost-capabilities-c412) |
| `C413h` | [ReportCommsLostConfiguration](/messages/report-comms-lost-configuration-c413) |
| `C414h` | [ReportCommsLostStatus](/messages/report-comms-lost-status-c414) |
| `C401h` | [SetCommsLostPolicy](/messages/set-comms-lost-policy-c401) |
| `C411h` | [SetCommsLostPolicyResponse](/messages/set-comms-lost-policy-response-c411) |

## State Machine Diagram

![CommsLostPolicyManager State Machine Diagram](/smDiagrams/CommsLostPolicyManager.png)

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
<td align="center" rowspan="2">B</td>
<td rowspan="2">CommsLostPolicyManagerControlledLoop</td>
<td><a href="/messages/set-comms-lost-policy-c401
">SetCommsLostPolicy</a></td>
<td><code>isControllingClient &amp;&amp; isSupportedCommand</code></td>
<td><a href="/messages/set-comms-lost-policy-response-c411
">sendSetCommsLostPolicyResponse</a>
, setCommsLostPolicy
</td>
</tr>
<tr>
<td><a href="/messages/set-comms-lost-policy-c401
">SetCommsLostPolicy</a></td>
<td><code>isControllingClient &amp;&amp; !isSupportedCommand</code></td>
<td><a href="/messages/set-comms-lost-policy-response-c411
">sendSetCommsLostPolicyResponse</a>
</td>
</tr><tr>
<td align="center" rowspan="5">A</td>
<td rowspan="5">CommsLostPolicyManagerDefaultLoop</td>
<td><a href="/messages/query-comms-lost-capabilities-c402
">QueryCommsLostCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-comms-lost-capabilities-c412
">sendReportCommsLostCapabilities</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-comms-lost-configuration-c403
">QueryCommsLostConfiguration</a></td>
<td><code></code></td>
<td><a href="/messages/report-comms-lost-configuration-c413
">sendReportCommsLostConfiguration</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-comms-lost-status-c404
">QueryCommsLostStatus</a></td>
<td><code></code></td>
<td><a href="/messages/report-comms-lost-status-c414
">sendReportCommsLostStatus</a>
</td>
</tr>
<tr>
<td><a href="/messages/comms-lost-8d10
">CommsLost</a></td>
<td><code></code></td>
<td>executeCommsLostPolicy
</td>
</tr>
<tr>
<td><a href="/messages/comms-restored-8d11
">CommsRestored</a></td>
<td><code></code></td>
<td>executeCommsRegainedPolicy
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
<td>executeCommsLostPolicy</td>
<td></td>
<td>Execute the configured comms-lost behavior.
</td>
</tr><tr>
<td>executeCommsRegainedPolicy</td>
<td></td>
<td>Execute the configured comms-regained behavior.
</td>
</tr><tr>
<td>sendReportCommsLostCapabilities</td>
<td>Send Action
</td>
<td>Send a ReportCommsLostCapabilies message
<br>
<i>Output Message:</i> <a href="/messages/report-comms-lost-capabilities-c412
">ReportCommsLostCapabilities
</a></td>
</tr><tr>
<td>sendReportCommsLostConfiguration</td>
<td>Send Action
</td>
<td>Send a ReportCommsLostConfiguration message
<br>
<i>Output Message:</i> <a href="/messages/report-comms-lost-configuration-c413
">ReportCommsLostConfiguration
</a></td>
</tr><tr>
<td>sendReportCommsLostStatus</td>
<td>Send Action
</td>
<td>Send a ReportCommsLostStatus message
<br>
<i>Output Message:</i> <a href="/messages/report-comms-lost-status-c414
">ReportCommsLostStatus
</a></td>
</tr><tr>
<td>sendSetCommsLostPolicyResponse</td>
<td>Send Action
</td>
<td>Send a SetCommsLostPolicyResponse message
<br>
<i>Output Message:</i> <a href="/messages/set-comms-lost-policy-response-c411
">SetCommsLostPolicyResponse
</a></td>
</tr><tr>
<td>setCommsLostPolicy</td>
<td></td>
<td>Set the specified policy as enabled.
</td>
</tr></tbody></table>

