---
title: PanTiltJointPositionSensor
---

# PanTiltJointPositionSensor

| Property | Value |
| --- | --- |
| **Version** | 2.0 |
| **URN** | `urn:jaus:jss:manipulator:PanTiltJointPositionSensor` |

## Description

The function of the Pan Tilt Joint Position Sensor Service is to report the values of the two joint angles of the pan tilt mechanism when queried. To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Pan Tilt Specification Service.

## Message Set

| ID | Message |
| --- | --- |
| `2622h` | [QueryPanTiltJointPosition](/messages/query-pan-tilt-joint-position-2622) |
| `4622h` | [ReportPanTiltJointPosition](/messages/report-pan-tilt-joint-position-4622) |

## State Machine Diagram

![PanTiltJointPositionSensor State Machine Diagram](/smDiagrams/PanTiltJointPositionSensor.png)

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
<td rowspan="1">PanTiltJointPositionSensorDefaultLoop</td>
<td><a href="/messages/query-pan-tilt-joint-position-2622
">QueryPanTiltJointPosition</a></td>
<td><code></code></td>
<td><a href="/messages/report-pan-tilt-joint-position-4622
">sendReportPanTiltJointPosition</a>
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
<td>sendReportPanTiltJointPosition</td>
<td>Send Action
</td>
<td>Send Report Pan Tilt Joint Positions message to the service that sent the query
<br>
<i>Output Message:</i> <a href="/messages/report-pan-tilt-joint-position-4622
">ReportPanTiltJointPosition
</a></td>
</tr></tbody></table>

