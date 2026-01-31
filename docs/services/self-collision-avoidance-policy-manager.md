---
title: SelfCollisionAvoidancePolicyManager
---

# SelfCollisionAvoidancePolicyManager

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:SelfCollisionAvoidancePolicyManager` |

## Description

The Self-Collision Avoidance Policy Manager Service provides a mechanism to determine supported self-collision avoidance capabilities, configure avoidance behaviors, and solicit status information.

## Message Set

| ID | Message |
| --- | --- |
| `C522h` | [QuerySelfCollisionAvoidanceCapabilities](/messages/query-self-collision-avoidance-capabilities-c522) |
| `C523h` | [QuerySelfCollisionAvoidanceConfiguration](/messages/query-self-collision-avoidance-configuration-c523) |
| `C524h` | [QuerySelfCollisionAvoidanceStatus](/messages/query-self-collision-avoidance-status-c524) |
| `C526h` | [ReportSelfCollisionAvoidanceCapabilities](/messages/report-self-collision-avoidance-capabilities-c526) |
| `C527h` | [ReportSelfCollisionAvoidanceConfiguration](/messages/report-self-collision-avoidance-configuration-c527) |
| `C528h` | [ReportSelfCollisionAvoidanceStatus](/messages/report-self-collision-avoidance-status-c528) |
| `C521h` | [SetSelfCollisionAvoidancePolicy](/messages/set-self-collision-avoidance-policy-c521) |
| `C525h` | [SetSelfCollisionAvoidancePolicyResponse](/messages/set-self-collision-avoidance-policy-response-c525) |

## State Machine Diagram

![SelfCollisionAvoidancePolicyManager State Machine Diagram](/smDiagrams/SelfCollisionAvoidancePolicyManager.png)

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
<td rowspan="2">SelfCollisionAvoidancePolicyManagerControlledLoop</td>
<td><a href="/messages/set-self-collision-avoidance-policy-c521
">SetSelfCollisionAvoidancePolicy</a></td>
<td><code>isControllingClient &amp;&amp; isSupportedCommand</code></td>
<td>sendSetSelfCollisionAvoidancePolicyResponseSuccess
, setSelfCollisionAvoidancePolicy
</td>
</tr>
<tr>
<td><a href="/messages/set-self-collision-avoidance-policy-c521
">SetSelfCollisionAvoidancePolicy</a></td>
<td><code>isControllingClient &amp;&amp; !isSupportedCommand</code></td>
<td>sendSetSelfCollisionAvoidancePolicyResponseUnsupported
</td>
</tr><tr>
<td align="center" rowspan="3">A</td>
<td rowspan="3">SelfCollisionAvoidancePolicyManagerDefaultLoop</td>
<td><a href="/messages/query-self-collision-avoidance-capabilities-c522
">QuerySelfCollisionAvoidanceCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-self-collision-avoidance-capabilities-c526
">sendReportSelfCollisionAvoidanceCapabilities</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-self-collision-avoidance-configuration-c523
">QuerySelfCollisionAvoidanceConfiguration</a></td>
<td><code></code></td>
<td><a href="/messages/report-self-collision-avoidance-configuration-c527
">sendReportSelfCollisionAvoidanceConfiguration</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-self-collision-avoidance-status-c524
">QuerySelfCollisionAvoidanceStatus</a></td>
<td><code></code></td>
<td><a href="/messages/report-self-collision-avoidance-status-c528
">sendReportSelfCollisionAvoidanceStatus</a>
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
<td>sendReportSelfCollisionAvoidanceCapabilities</td>
<td>Send Action
</td>
<td>Send ReportSelfCollisionAvoidanceCapabilities message
<br>
<i>Output Message:</i> <a href="/messages/report-self-collision-avoidance-capabilities-c526
">ReportSelfCollisionAvoidanceCapabilities
</a></td>
</tr><tr>
<td>sendReportSelfCollisionAvoidanceConfiguration</td>
<td>Send Action
</td>
<td>Send ReportSelfCollisionAvoidanceConfiguration message
<br>
<i>Output Message:</i> <a href="/messages/report-self-collision-avoidance-configuration-c527
">ReportSelfCollisionAvoidanceConfiguration
</a></td>
</tr><tr>
<td>sendReportSelfCollisionAvoidanceStatus</td>
<td>Send Action
</td>
<td>Send ReportSelfCollisionAvoidanceStatus message
<br>
<i>Output Message:</i> <a href="/messages/report-self-collision-avoidance-status-c528
">ReportSelfCollisionAvoidanceStatus
</a></td>
</tr><tr>
<td>sendSetSelfCollisionAvoidancePolicyResponseSuccess</td>
<td></td>
<td>
</td>
</tr><tr>
<td>sendSetSelfCollisionAvoidancePolicyResponseUnsupported</td>
<td></td>
<td>
</td>
</tr><tr>
<td>setSelfCollisionAvoidancePolicy</td>
<td></td>
<td>Set the specified policy as enabled
</td>
</tr></tbody></table>

