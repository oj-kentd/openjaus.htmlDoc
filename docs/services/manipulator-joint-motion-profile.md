---
title: ManipulatorJointMotionProfile
---

# ManipulatorJointMotionProfile

| Property | Value |
| --- | --- |
| **Version** | 2.0 |
| **URN** | `urn:jaus:jss:manipulator:ManipulatorJointMotionProfile` |

## Description

The function of the Joint Motion Profile Service is to allow for configuration of the motion profile for all services co-located on this component.  The Set Motion Profile message is used to set maximum velocity and acceleration rates for each of the joint parameters.  All motions utilize the motion profile data that was most recently sent.

## Message Set

| ID | Message |
| --- | --- |
| `2607h` | [QueryJointMotionProfile](/messages/query-joint-motion-profile-2607) |
| `4607h` | [ReportJointMotionProfile](/messages/report-joint-motion-profile-4607) |
| `0607h` | [SetJointMotionProfile](/messages/set-joint-motion-profile-0607) |

## State Machine Diagram

![ManipulatorJointMotionProfile State Machine Diagram](/smDiagrams/ManipulatorJointMotionProfile.png)

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
<td rowspan="1">ManipulatorJointMotionProfileControlledLoop</td>
<td><a href="/messages/set-joint-motion-profile-0607
">SetJointMotionProfile</a></td>
<td><code>isControllingClient</code></td>
<td>setJointMotionProfile
</td>
</tr><tr>
<td align="center" rowspan="1">A</td>
<td rowspan="1">ManipulatorJointMotionProfileDefaultLoop</td>
<td><a href="/messages/query-joint-motion-profile-2607
">QueryJointMotionProfile</a></td>
<td><code>motionProfileExists</code></td>
<td><a href="/messages/report-joint-motion-profile-4607
">sendReportJointMotionProfile</a>
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
<td>sendReportJointMotionProfile</td>
<td>Send Action
</td>
<td>Send a Report Motion Profile message
<br>
<i>Output Message:</i> <a href="/messages/report-joint-motion-profile-4607
">ReportJointMotionProfile
</a></td>
</tr><tr>
<td>setJointMotionProfile</td>
<td></td>
<td>Set the motion profile parameters for the manipulator.
</td>
</tr></tbody></table>

