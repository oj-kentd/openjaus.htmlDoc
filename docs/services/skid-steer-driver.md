---
title: SkidSteerDriver
---

# SkidSteerDriver

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:ugv:SkidSteerDriver` |

## Description

The SkidSteer Driver provides the means to control skid steer vehicles

## Message Set

| ID | Message |
| --- | --- |
| `2501h` | [QuerySkidSteerEffort](/messages/query-skid-steer-effort-2501) |
| `4501h` | [ReportSkidSteerEffort](/messages/report-skid-steer-effort-4501) |
| `0501h` | [SetSkidSteerEffort](/messages/set-skid-steer-effort-0501) |

## State Machine Diagram

![SkidSteerDriver State Machine Diagram](/smDiagrams/SkidSteerDriver.png)

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
<td align="center" rowspan="1">A</td>
<td rowspan="1">SkidSteerDriverDefaultLoop</td>
<td><a href="/messages/query-skid-steer-effort-2501
">QuerySkidSteerEffort</a></td>
<td><code></code></td>
<td><a href="/messages/report-skid-steer-effort-4501
">sendReportSkidSteerEffort</a>
</td>
</tr><tr>
<td align="center" rowspan="1">B</td>
<td rowspan="1">SkidSteerDriverReadyLoop</td>
<td><a href="/messages/set-skid-steer-effort-0501
">SetSkidSteerEffort</a></td>
<td><code>isControllingClient</code></td>
<td>setSkidSteerEffort
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
<td>sendReportSkidSteerEffort</td>
<td>Send Action
</td>
<td>Send a Report Skid Steer Effort message
<br>
<i>Output Message:</i> <a href="/messages/report-skid-steer-effort-4501
">ReportSkidSteerEffort
</a></td>
</tr><tr>
<td>setSkidSteerEffort</td>
<td></td>
<td>Set the actuator effort level for each track of the vehicle.
</td>
</tr><tr>
<td>stopMotion</td>
<td>Exit Action
</td>
<td>Stop motion on both sides.
</td>
</tr></tbody></table>

