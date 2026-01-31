---
title: Odometry
---

# Odometry

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:ugv:OdometryService` |

## Description

The Odometry Service provides platform odometry (distance travelled) information

## Message Set

| ID | Message |
| --- | --- |
| `2515h` | [QueryOdometry](/messages/query-odometry-2515) |
| `4515h` | [ReportOdometry](/messages/report-odometry-4515) |
| `0515h` | [ResetOdometry](/messages/reset-odometry-0515) |

## State Machine Diagram

![Odometry State Machine Diagram](/smDiagrams/Odometry.png)

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
<td align="center" rowspan="1">B</td>
<td rowspan="1">OdometryControlledLoop</td>
<td><a href="/messages/reset-odometry-0515
">ResetOdometry</a></td>
<td><code>isControllingClient</code></td>
<td>resetTripOdometer
</td>
</tr><tr>
<td align="center" rowspan="1">A</td>
<td rowspan="1">OdometryDefaultLoop</td>
<td><a href="/messages/query-odometry-2515
">QueryOdometry</a></td>
<td><code></code></td>
<td><a href="/messages/report-odometry-4515
">sendReportOdometry</a>
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
<td>resetTripOdometer</td>
<td></td>
<td>Reset the specified trip odometer to zero.
</td>
</tr><tr>
<td>sendReportOdometry</td>
<td>Send Action
</td>
<td>Send a Report Odometry message
<br>
<i>Output Message:</i> <a href="/messages/report-odometry-4515
">ReportOdometry
</a></td>
</tr></tbody></table>

