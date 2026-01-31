---
title: LocalPoseSensor
---

# LocalPoseSensor

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:mobility:LocalPoseSensor` |

## Description

The function of the Local Pose Sensor is to report the local position and orientation of the platform.  The Report Local Pose message provides the position and orientation of the platform relative to a local reference frame.  The origin of the local reference frame may be altered using the Set Local Pose message, which sets the current position and orientation of the platform to the specified values.  Platform orientation is defined in Section 3 of this document.

## Message Set

| ID | Message |
| --- | --- |
| `2403h` | [QueryLocalPose](/messages/query-local-pose-2403) |
| `4403h` | [ReportLocalPose](/messages/report-local-pose-4403) |
| `0403h` | [SetLocalPose](/messages/set-local-pose-0403) |

## State Machine Diagram

![LocalPoseSensor State Machine Diagram](/smDiagrams/LocalPoseSensor.png)

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
<td rowspan="1">LocalPoseControlledLoop</td>
<td><a href="/messages/set-local-pose-0403
">SetLocalPose</a></td>
<td><code>isControllingClient</code></td>
<td>updateLocalPose
</td>
</tr><tr>
<td align="center" rowspan="1">B</td>
<td rowspan="1">LocalPoseDefaultLoop</td>
<td><a href="/messages/query-local-pose-2403
">QueryLocalPose</a></td>
<td><code></code></td>
<td><a href="/messages/report-local-pose-4403
">sendReportLocalPose</a>
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
<td>sendReportLocalPose</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/report-local-pose-4403
">ReportLocalPose
</a></td>
</tr><tr>
<td>updateLocalPose</td>
<td></td>
<td>
</td>
</tr></tbody></table>

