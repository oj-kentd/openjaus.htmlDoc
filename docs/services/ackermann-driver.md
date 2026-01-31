---
title: AckermannDriver
---

# AckermannDriver

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:ugv:AckermannDriver` |

## Description

The AckermannDriver provides the means to control Ackermann steered vehicles

## Message Set

| ID | Message |
| --- | --- |
| `2500h` | [QueryAckermannConfiguration](/messages/query-ackermann-configuration-2500) |
| `4500h` | [ReportAckermannConfiguration](/messages/report-ackermann-configuration-4500) |
| `0500h` | [SetAckermannConfiguration](/messages/set-ackermann-configuration-0500) |

## State Machine Diagram

![AckermannDriver State Machine Diagram](/smDiagrams/AckermannDriver.png)

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
<td rowspan="1">AckermannDriverDefaultLoop</td>
<td><a href="/messages/query-ackermann-configuration-2500
">QueryAckermannConfiguration</a></td>
<td><code></code></td>
<td><a href="/messages/report-ackermann-configuration-4500
">sendReportAckermannConfiguration</a>
</td>
</tr><tr>
<td align="center" rowspan="1">B</td>
<td rowspan="1">AckermannDriverReadyLoop</td>
<td><a href="/messages/set-ackermann-configuration-0500
">SetAckermannConfiguration</a></td>
<td><code>isControllingClient</code></td>
<td>setAckermannConfiguration
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
<td>sendReportAckermannConfiguration</td>
<td>Send Action
</td>
<td>Send a Report Report Ackerlann Configuration message
<br>
<i>Output Message:</i> <a href="/messages/report-ackermann-configuration-4500
">ReportAckermannConfiguration
</a></td>
</tr><tr>
<td>setAckermannConfiguration</td>
<td></td>
<td>Set the throttle, brake, and steering angle for the vehicle.
</td>
</tr><tr>
<td>stopMotion</td>
<td>Exit Action
</td>
<td>Stop motion on all actuators.
</td>
</tr></tbody></table>

