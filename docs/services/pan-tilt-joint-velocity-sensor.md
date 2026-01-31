---
title: PanTiltJointVelocitySensor
---

# PanTiltJointVelocitySensor

| Property | Value |
| --- | --- |
| **Version** | 2.0 |
| **URN** | `urn:jaus:jss:manipulator:PanTiltJointVelocitySensor` |

## Description

The function of the Pan Tilt Joint Velocity Sensor Service is to report the values of the two joint velocities of the pan tilt mechanism when queried. To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Pan Tilt Specification Service.

## Message Set

| ID | Message |
| --- | --- |
| `2623h` | [QueryPanTiltJointVelocity](/messages/query-pan-tilt-joint-velocity-2623) |
| `4623h` | [ReportPanTiltJointVelocity](/messages/report-pan-tilt-joint-velocity-4623) |

## State Machine Diagram

![PanTiltJointVelocitySensor State Machine Diagram](/smDiagrams/PanTiltJointVelocitySensor.png)

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
<td rowspan="1">PanTiltJointVelocitySensorDefaultLoop</td>
<td><a href="/messages/query-pan-tilt-joint-velocity-2623
">QueryPanTiltJointVelocity</a></td>
<td><code></code></td>
<td><a href="/messages/report-pan-tilt-joint-velocity-4623
">sendReportPanTiltJointVelocity</a>
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
<td>sendReportPanTiltJointVelocity</td>
<td>Send Action
</td>
<td>Send Report Pan Tilt Joint Velocity message to the service that sent the query
<br>
<i>Output Message:</i> <a href="/messages/report-pan-tilt-joint-velocity-4623
">ReportPanTiltJointVelocity
</a></td>
</tr></tbody></table>

