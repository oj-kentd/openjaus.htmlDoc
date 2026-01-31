---
title: PanTiltJointPositionDriver
---

# PanTiltJointPositionDriver

| Property | Value |
| --- | --- |
| **Version** | 2.0 |
| **URN** | `urn:jaus:jss:manipulator:PanTiltJointPositionDriver` |

## Description

The function of the Pan Tilt Joint Position Driver is to perform closed-loop joint position control.  A single target is provided via the Set Pan Tilt Joint Position message.  The target remains unchanged until a new Set Pan Tilt Joint Position message is received.  To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Pan Tilt Specification Service and a Pan Tilt Motion Profile Service.

## Message Set

| ID | Message |
| --- | --- |
| `2628h` | [QueryCommandedPanTiltJointPosition](/messages/query-commanded-pan-tilt-joint-position-2628) |
| `4628h` | [ReportCommandedPanTiltJointPosition](/messages/report-commanded-pan-tilt-joint-position-4628) |
| `0622h` | [SetPanTiltJointPosition](/messages/set-pan-tilt-joint-position-0622) |

## State Machine Diagram

![PanTiltJointPositionDriver State Machine Diagram](/smDiagrams/PanTiltJointPositionDriver.png)

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
<td rowspan="1">PanTiltJointPositionDriverDefaultLoop</td>
<td><a href="/messages/query-commanded-pan-tilt-joint-position-2628
">QueryCommandedPanTiltJointPosition</a></td>
<td><code></code></td>
<td><a href="/messages/report-commanded-pan-tilt-joint-position-4628
">sendReportCommandedPanTiltJointPosition</a>
</td>
</tr><tr>
<td align="center" rowspan="1">B</td>
<td rowspan="1">PanTiltJointPositionDriverReadyLoop</td>
<td><a href="/messages/set-pan-tilt-joint-position-0622
">SetPanTiltJointPosition</a></td>
<td><code>isControllingClient &amp;&amp; panTiltMotionProfileExists</code></td>
<td>setPanTiltJointPosition
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
<td>sendReportCommandedPanTiltJointPosition</td>
<td>Send Action
</td>
<td>Send a Report Commanded Pan Tilt Joint Positions message
<br>
<i>Output Message:</i> <a href="/messages/report-commanded-pan-tilt-joint-position-4628
">ReportCommandedPanTiltJointPosition
</a></td>
</tr><tr>
<td>setPanTiltJointPosition</td>
<td></td>
<td>Set the desired joint values for the pan tilt mechanism
</td>
</tr><tr>
<td>stopMotion</td>
<td>Exit Action
</td>
<td>Stop motion of the pan tilt unit.
</td>
</tr></tbody></table>

