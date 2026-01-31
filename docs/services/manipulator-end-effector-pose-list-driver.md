---
title: ManipulatorEndEffectorPoseListDriver
---

# ManipulatorEndEffectorPoseListDriver

| Property | Value |
| --- | --- |
| **Version** | 2.0 |
| **URN** | `urn:jaus:jss:manipulator:ManipulatorEndEffectorPoseListDriver` |

## Description

The function of the End Effector Pose List Driver is to perform closed-loop control of a sequence of positions and orientations of the tool tip specified in the manipulator base coordinate system. The sequence of targets is specified by one or more SetElement messages, as defined by the List Manager Service [AS6009]. To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service, a Manipulator Tool Offset Service, and a Manipulator Joint Motion Profile Service.

## Message Set

| ID | Message |
| --- | --- |
| `2610h` | [QueryCommandedEndEffectorPose](/messages/query-commanded-end-effector-pose-2610) |
| `4610h` | [ReportCommandedEndEffectorPose](/messages/report-commanded-end-effector-pose-4610) |

## State Machine Diagram

![ManipulatorEndEffectorPoseListDriver State Machine Diagram](/smDiagrams/ManipulatorEndEffectorPoseListDriver.png)

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
<td rowspan="1">EndEffectorPoseListDriverDefaultLoop</td>
<td><a href="/messages/report-commanded-end-effector-pose-4610
">ReportCommandedEndEffectorPose</a></td>
<td><code></code></td>
<td><a href="/messages/report-commanded-end-effector-pose-4610
">sendReportCommandedEndEffectorPose</a>
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
<td>sendReportCommandedEndEffectorPose</td>
<td>Send Action
</td>
<td>Send a Report Commanded End Effector Pose message
<br>
<i>Output Message:</i> <a href="/messages/report-commanded-end-effector-pose-4610
">ReportCommandedEndEffectorPose
</a></td>
</tr><tr>
<td>stopMotion</td>
<td>Exit Action
</td>
<td>
</td>
</tr></tbody></table>

