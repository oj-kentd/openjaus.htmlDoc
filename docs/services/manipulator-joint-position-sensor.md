---
title: ManipulatorJointPositionSensor
---

# ManipulatorJointPositionSensor

| Property | Value |
| --- | --- |
| **Version** | 2.0 |
| **URN** | `urn:jaus:jss:manipulator:ManipulatorJointPositionSensor` |

## Description

The function of the Joint Position Sensor Service is to report the values of manipulator joint positions when queried.  To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service.

## Message Set

| ID | Message |
| --- | --- |
| `2602h` | [QueryJointPosition](/messages/query-joint-position-2602) |
| `4602h` | [ReportJointPosition](/messages/report-joint-position-4602) |

## State Machine Diagram

![ManipulatorJointPositionSensor State Machine Diagram](/smDiagrams/ManipulatorJointPositionSensor.png)

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
<td rowspan="1">ManipulatorJointPositionSensorDefaultLoop</td>
<td><a href="/messages/query-joint-position-2602
">QueryJointPosition</a></td>
<td><code></code></td>
<td><a href="/messages/report-joint-position-4602
">sendReportJointPosition</a>
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
<td>sendReportJointPosition</td>
<td>Send Action
</td>
<td>Send Report Joint Positions message to the service that sent the query
<br>
<i>Output Message:</i> <a href="/messages/report-joint-position-4602
">ReportJointPosition
</a></td>
</tr></tbody></table>

