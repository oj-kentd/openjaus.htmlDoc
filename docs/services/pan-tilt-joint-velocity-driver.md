---
title: PanTiltJointVelocityDriver
---

# PanTiltJointVelocityDriver

| Property | Value |
| --- | --- |
| **Version** | 2.0 |
| **URN** | `urn:jaus:jss:manipulator:PanTiltJointVelocityDriver` |

## Description

The function of The Pan Tilt Joint Velocity Driver is to perform closed-loop joint velocity control.  The input is the desired instantaneous desired joint velocities for the pan tilt mechanism.  It is assumed that the pan tilt mechanism begins motion immediately after receiving the Set Pan Tilt Joint Velocity message. To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Pan Tilt Specification Service and a Pan Tilt Motion Profile Service.

## Message Set

| ID | Message |
| --- | --- |
| `2631h` | [QueryCommandedPanTiltJointVelocity](/messages/query-commanded-pan-tilt-joint-velocity-2631) |
| `4631h` | [ReportCommandedPanTiltJointVelocity](/messages/report-commanded-pan-tilt-joint-velocity-4631) |
| `0623h` | [SetPanTiltJointVelocity](/messages/set-pan-tilt-joint-velocity-0623) |

## State Machine Diagram

![PanTiltJointVelocityDriver State Machine Diagram](/smDiagrams/PanTiltJointVelocityDriver.png)

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
<td rowspan="1">PanTiltJointVelocityDriverDefaultLoop</td>
<td><a href="/messages/query-commanded-pan-tilt-joint-velocity-2631
">QueryCommandedPanTiltJointVelocity</a></td>
<td><code></code></td>
<td><a href="/messages/report-commanded-pan-tilt-joint-velocity-4631
">sendReportCommandedPanTiltJointVelocity</a>
</td>
</tr><tr>
<td align="center" rowspan="1">B</td>
<td rowspan="1">PanTiltJointVelocityDriverReadyLoop</td>
<td><a href="/messages/set-pan-tilt-joint-velocity-0623
">SetPanTiltJointVelocity</a></td>
<td><code>isControllingClient &amp;&amp; panTiltMotionProfileExists</code></td>
<td>setPanTiltJointVelocity
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
<td>sendReportCommandedPanTiltJointVelocity</td>
<td>Send Action
</td>
<td>Send a Report Commanded Pan Tilt joint velocities message
<br>
<i>Output Message:</i> <a href="/messages/report-commanded-pan-tilt-joint-velocity-4631
">ReportCommandedPanTiltJointVelocity
</a></td>
</tr><tr>
<td>setPanTiltJointVelocity</td>
<td></td>
<td>Set the desired velocities for the individual joints of the Pan Tilt mechanism
</td>
</tr><tr>
<td>stopMotion</td>
<td>Exit Action
</td>
<td>Stop motion of the pan tilt unit.
</td>
</tr></tbody></table>

