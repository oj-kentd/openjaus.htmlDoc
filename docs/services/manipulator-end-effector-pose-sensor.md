---
title: ManipulatorEndEffectorPoseSensor
---

# ManipulatorEndEffectorPoseSensor

| Property | Value |
| --- | --- |
| **Version** | 2.0 |
| **URN** | `urn:jaus:jss:manipulator:ManipulatorEndEffectorPoseSensor` |

## Description

The function of the End Effector Pose Sensor Service is to report the position and orientation of the tool tip with respect to the manipulator base coordinate system. To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service and a Manipulator Tool Offset Service.

## Message Set

| ID | Message |
| --- | --- |
| `2615h` | [QueryEndEffectorPose](/messages/query-end-effector-pose-2615) |
| `4615h` | [ReportEndEffectorPose](/messages/report-end-effector-pose-4615) |

## State Machine Diagram

![ManipulatorEndEffectorPoseSensor State Machine Diagram](/smDiagrams/ManipulatorEndEffectorPoseSensor.png)

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
<td rowspan="1">ManipulatorEndEffectorPoseSensorDefaultLoop</td>
<td><a href="/messages/query-end-effector-pose-2615
">QueryEndEffectorPose</a></td>
<td><code></code></td>
<td><a href="/messages/report-end-effector-pose-4615
">sendReportEndEffectorPose</a>
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
<td>sendReportEndEffectorPose</td>
<td>Send Action
</td>
<td>Send a report end effector pose message
<br>
<i>Output Message:</i> <a href="/messages/report-end-effector-pose-4615
">ReportEndEffectorPose
</a></td>
</tr></tbody></table>

