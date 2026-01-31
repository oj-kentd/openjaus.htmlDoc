---
title: PanTiltMotionProfile
---

# PanTiltMotionProfile

| Property | Value |
| --- | --- |
| **Version** | 2.0 |
| **URN** | `urn:jaus:jss:manipulator:PanTiltMotionProfileService` |

## Description

The function of the Pan Tilt Motion Profile Service is to allow for configuration of the motion profile for all services co-located on this component. The Set Pan Tilt Motion Profile message is used to set maximum velocity and acceleration rates for each of the two variable joint parameters. All motions utilize the motion profile data that was most recently sent.

## Message Set

| ID | Message |
| --- | --- |
| `2627h` | [QueryPanTiltMotionProfile](/messages/query-pan-tilt-motion-profile-2627) |
| `4627h` | [ReportPanTiltMotionProfile](/messages/report-pan-tilt-motion-profile-4627) |
| `0627h` | [SetPanTiltMotionProfile](/messages/set-pan-tilt-motion-profile-0627) |

## State Machine Diagram

![PanTiltMotionProfile State Machine Diagram](/smDiagrams/PanTiltMotionProfile.png)

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
<td rowspan="1">PanTiltMotionProfileControlledLoop</td>
<td><a href="/messages/set-pan-tilt-motion-profile-0627
">SetPanTiltMotionProfile</a></td>
<td><code>isControllingClient</code></td>
<td>setPanTiltMotionProfile
</td>
</tr><tr>
<td align="center" rowspan="1">A</td>
<td rowspan="1">PanTiltMotionProfileDefaultLoop</td>
<td><a href="/messages/query-pan-tilt-motion-profile-2627
">QueryPanTiltMotionProfile</a></td>
<td><code>panTiltMotionProfileExists</code></td>
<td><a href="/messages/report-pan-tilt-motion-profile-4627
">sendReportPanTiltMotionProfile</a>
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
<td>sendReportPanTiltMotionProfile</td>
<td>Send Action
</td>
<td>Send a Report Pan Tilt Motion Profile message
<br>
<i>Output Message:</i> <a href="/messages/report-pan-tilt-motion-profile-4627
">ReportPanTiltMotionProfile
</a></td>
</tr><tr>
<td>setPanTiltMotionProfile</td>
<td></td>
<td>Set the motion profile parameters for the pan tilt mechanism
</td>
</tr></tbody></table>

