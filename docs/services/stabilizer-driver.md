---
title: StabilizerDriver
---

# StabilizerDriver

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:ugv:StabilizerDriver` |

## Description

The StabilizerDriver provides the means to control platform stabilizers, such as flippers

## Message Set

| ID | Message |
| --- | --- |
| `2505h` | [QueryStabilizerCapabilities](/messages/query-stabilizer-capabilities-2505) |
| `2503h` | [QueryStabilizerEffort](/messages/query-stabilizer-effort-2503) |
| `2504h` | [QueryStabilizerPosition](/messages/query-stabilizer-position-2504) |
| `4505h` | [ReportStabilizerCapabilities](/messages/report-stabilizer-capabilities-4505) |
| `4503h` | [ReportStabilizerEffort](/messages/report-stabilizer-effort-4503) |
| `4504h` | [ReportStabilizerPosition](/messages/report-stabilizer-position-4504) |
| `0503h` | [SetStabilizerEffort](/messages/set-stabilizer-effort-0503) |
| `0504h` | [SetStabilizerPosition](/messages/set-stabilizer-position-0504) |

## State Machine Diagram

![StabilizerDriver State Machine Diagram](/smDiagrams/StabilizerDriver.png)

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
<td align="center" rowspan="3">A</td>
<td rowspan="3">StabilizerDriverDefaultLoop</td>
<td><a href="/messages/query-stabilizer-effort-2503
">QueryStabilizerEffort</a></td>
<td><code></code></td>
<td><a href="/messages/report-stabilizer-effort-4503
">sendReportStabilizerEffort</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-stabilizer-capabilities-2505
">QueryStabilizerCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-stabilizer-capabilities-4505
">sendReportStabilizerCapabilities</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-stabilizer-position-2504
">QueryStabilizerPosition</a></td>
<td><code></code></td>
<td><a href="/messages/report-stabilizer-position-4504
">sendReportStabilizerPosition</a>
</td>
</tr><tr>
<td align="center" rowspan="2">B</td>
<td rowspan="2">StabilizerDriverReadyLoop</td>
<td><a href="/messages/set-stabilizer-effort-0503
">SetStabilizerEffort</a></td>
<td><code>isControllingClient &amp;&amp; stabilizersExist</code></td>
<td>setStabilizerEffort
</td>
</tr>
<tr>
<td><a href="/messages/set-stabilizer-position-0504
">SetStabilizerPosition</a></td>
<td><code>( isControllingClient &amp;&amp; stabilizersExist ) &amp;&amp; areReachable</code></td>
<td>setStabilizerPosition
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
<td>sendReportStabilizerCapabilities</td>
<td>Send Action
</td>
<td>Send a Report Stabilizer Capabilities message
<br>
<i>Output Message:</i> <a href="/messages/report-stabilizer-capabilities-4505
">ReportStabilizerCapabilities
</a></td>
</tr><tr>
<td>sendReportStabilizerEffort</td>
<td>Send Action
</td>
<td>Send a Report Stabilizer Effort message
<br>
<i>Output Message:</i> <a href="/messages/report-stabilizer-effort-4503
">ReportStabilizerEffort
</a></td>
</tr><tr>
<td>sendReportStabilizerPosition</td>
<td>Send Action
</td>
<td>Send a Report Stabilizer Position message
<br>
<i>Output Message:</i> <a href="/messages/report-stabilizer-position-4504
">ReportStabilizerPosition
</a></td>
</tr><tr>
<td>setStabilizerEffort</td>
<td></td>
<td>Set the actuator effort levels for the specified Stabilizers.
</td>
</tr><tr>
<td>setStabilizerPosition</td>
<td></td>
<td>Set the position for the specified Stabilizers.
</td>
</tr><tr>
<td>stopMotion</td>
<td>Exit Action
</td>
<td>Stop motion on all stabilizers.
</td>
</tr></tbody></table>

