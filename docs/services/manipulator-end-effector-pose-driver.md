---
title: ManipulatorEndEffectorPoseDriver
---

# ManipulatorEndEffectorPoseDriver

| Property | Value |
| --- | --- |
| **Version** | 2.0 |
| **URN** | `urn:jaus:jss:manipulator:ManipulatorEndEffectorPoseDriver` |

## Description

The function of the End Effector Pose Driver is to perform closed-loop position and orientation control of the tool tip.  The input is the desired position and orientation of the end effector pose specified in the manipulator base coordinate system. It is assumed that the manipulator begins motion immediately after receiving the Set End Effector Pose message. To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service, a Manipulator Tool Offset Service, and a Manipulator Joint Motion Profile Service.

## Message Set

| ID | Message |
| --- | --- |
| `2610h` | [QueryCommandedEndEffectorPose](/messages/query-commanded-end-effector-pose-2610) |
| `4610h` | [ReportCommandedEndEffectorPose](/messages/report-commanded-end-effector-pose-4610) |
| `0610h` | [SetEndEffectorPose](/messages/set-end-effector-pose-0610) |

## State Machine Diagram

![ManipulatorEndEffectorPoseDriver State Machine Diagram](/smDiagrams/ManipulatorEndEffectorPoseDriver.png)

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
<td rowspan="1">ManipulatorEndEffectorPoseDriverDefaultLoop</td>
<td><a href="/messages/query-commanded-end-effector-pose-2610
">QueryCommandedEndEffectorPose</a></td>
<td><code></code></td>
<td><a href="/messages/report-commanded-end-effector-pose-4610
">sendReportCommandedEndEffectorPose</a>
</td>
</tr><tr>
<td align="center" rowspan="1">B</td>
<td rowspan="1">ManipulatorEndEffectorPoseDriverReadyLoop</td>
<td><a href="/messages/set-end-effector-pose-0610
">SetEndEffectorPose</a></td>
<td><code>isControllingClient &amp;&amp; motionProfileExists</code></td>
<td>setEndEffectorPose
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
<td>setEndEffectorPose</td>
<td></td>
<td>Set the desired position and orientation for the manipulator end-effector
</td>
</tr><tr>
<td>stopMotion</td>
<td>Exit Action
</td>
<td>
</td>
</tr></tbody></table>

