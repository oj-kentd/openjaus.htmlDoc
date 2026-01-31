---
title: GuardedTeleopPolicyManager
---

# GuardedTeleopPolicyManager

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:GuardedTeleopPolicyManager` |

## Description

The Guarded Teleop Policy Manager service provides a mechanism for setting the behavior of a platform during teleoperation.

## Message Set

| ID | Message |
| --- | --- |
| `C502h` | [QueryGuardedTeleopCapabilities](/messages/query-guarded-teleop-capabilities-c502) |
| `C503h` | [QueryGuardedTeleopConfiguration](/messages/query-guarded-teleop-configuration-c503) |
| `C504h` | [QueryGuardedTeleopStatus](/messages/query-guarded-teleop-status-c504) |
| `C512h` | [ReportGuardedTeleopCapabilities](/messages/report-guarded-teleop-capabilities-c512) |
| `C513h` | [ReportGuardedTeleopConfiguration](/messages/report-guarded-teleop-configuration-c513) |
| `C514h` | [ReportGuardedTeleopStatus](/messages/report-guarded-teleop-status-c514) |
| `C501h` | [SetGuardedTeleopPolicy](/messages/set-guarded-teleop-policy-c501) |
| `C511h` | [SetGuardedTeleopPolicyResponse](/messages/set-guarded-teleop-policy-response-c511) |

## State Machine Diagram

![GuardedTeleopPolicyManager State Machine Diagram](/smDiagrams/GuardedTeleopPolicyManager.png)

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
<td rowspan="2">GuardedTeleopPolicyManagerControlledLoop</td>
<td><a href="/messages/set-guarded-teleop-policy-c501
">SetGuardedTeleopPolicy</a></td>
<td><code>isControllingClient &amp;&amp; isSupportedCommand</code></td>
<td>sendSetGuardedTeleopPolicyResponseSuccess
</td>
</tr>
<tr>
<td><a href="/messages/set-guarded-teleop-policy-c501
">SetGuardedTeleopPolicy</a></td>
<td><code>isControllingClient &amp;&amp; !isSupportedCommand</code></td>
<td>sendSetGuardedTeleopPolicyResponseNotSupported
</td>
</tr><tr>
<td align="center" rowspan="3">A</td>
<td rowspan="3">GuardedTeleopPolicyManagerDefaultLoop</td>
<td><a href="/messages/query-guarded-teleop-capabilities-c502
">QueryGuardedTeleopCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-guarded-teleop-capabilities-c512
">sendReportGuardedTeleopCapability</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-guarded-teleop-configuration-c503
">QueryGuardedTeleopConfiguration</a></td>
<td><code></code></td>
<td><a href="/messages/report-guarded-teleop-configuration-c513
">sendReportGuardedTeleopConfiguration</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-guarded-teleop-status-c504
">QueryGuardedTeleopStatus</a></td>
<td><code></code></td>
<td><a href="/messages/report-guarded-teleop-status-c514
">sendReportGuardedTeleopStatus</a>
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
<td>sendReportGuardedTeleopCapability</td>
<td>Send Action
</td>
<td>Send a ReportGuardedTeleopCapability message
<br>
<i>Output Message:</i> <a href="/messages/report-guarded-teleop-capabilities-c512
">ReportGuardedTeleopCapabilities
</a></td>
</tr><tr>
<td>sendReportGuardedTeleopConfiguration</td>
<td>Send Action
</td>
<td>Send a ReportGuardedTeleopConfiguration message
<br>
<i>Output Message:</i> <a href="/messages/report-guarded-teleop-configuration-c513
">ReportGuardedTeleopConfiguration
</a></td>
</tr><tr>
<td>sendReportGuardedTeleopStatus</td>
<td>Send Action
</td>
<td>Send a ReportGuardedTeleopStatus message
<br>
<i>Output Message:</i> <a href="/messages/report-guarded-teleop-status-c514
">ReportGuardedTeleopStatus
</a></td>
</tr><tr>
<td>sendSetGuardedTeleopPolicyResponseNotSupported</td>
<td></td>
<td>
</td>
</tr><tr>
<td>sendSetGuardedTeleopPolicyResponseSuccess</td>
<td></td>
<td>
</td>
</tr><tr>
<td>setGuardedTeleopPolicy</td>
<td></td>
<td>Set the specified policy as enabled.
</td>
</tr></tbody></table>

