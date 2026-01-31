---
title: ManipulatorEndEffectorVelocityStateDriver
---

# ManipulatorEndEffectorVelocityStateDriver

| Property | Value |
| --- | --- |
| **Version** | 2.0 |
| **URN** | `urn:jaus:jss:manipulator:ManipulatorEndEffectorVelocityStateDriver` |

## Description

The function of the End Effector Velocity State Driver is to perform closed-loop velocity control of the tool tip.  The velocity state of the tool tip is defined by two length-three vectors, i.e., �?‰e and vtool,e.  These vectors respectively represent the angular velocity of the end effector coordinate system and the linear velocity of the tool tip as measured with respect to the manipulator base coordinate system.  It is assumed that the manipulator begins motion immediately after receiving the Set End Effector Velocity State message. To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service, a Manipulator Tool Offset Service, and a Manipulator Joint Motion Profile Service.

## Message Set

| ID | Message |
| --- | --- |
| `2612h` | [QueryCommandedEndEffectorVelocityState](/messages/query-commanded-end-effector-velocity-state-2612) |
| `4612h` | [ReportCommandedEndEffectorVelocityState](/messages/report-commanded-end-effector-velocity-state-4612) |
| `0612h` | [SetEndEffectorVelocityState](/messages/set-end-effector-velocity-state-0612) |

## State Machine Diagram

![ManipulatorEndEffectorVelocityStateDriver State Machine Diagram](/smDiagrams/ManipulatorEndEffectorVelocityStateDriver.png)

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
<td rowspan="1">ManipulatorEndEffectorVelocityStateDriverDefaultLoop</td>
<td><a href="/messages/query-commanded-end-effector-velocity-state-2612
">QueryCommandedEndEffectorVelocityState</a></td>
<td><code></code></td>
<td><a href="/messages/report-commanded-end-effector-velocity-state-4612
">sendReportCommandedEndEffectorVelocityState</a>
</td>
</tr><tr>
<td align="center" rowspan="1">B</td>
<td rowspan="1">ManipulatorEndEffectorVelocityStateDriverReadyLoop</td>
<td><a href="/messages/set-end-effector-velocity-state-0612
">SetEndEffectorVelocityState</a></td>
<td><code>isControllingClient &amp;&amp; motionProfileExists</code></td>
<td>setEndEffectorVelocityState
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
<td>sendReportCommandedEndEffectorVelocityState</td>
<td>Send Action
</td>
<td>Send a Report Commanded End effector velocity state message
<br>
<i>Output Message:</i> <a href="/messages/report-commanded-end-effector-velocity-state-4612
">ReportCommandedEndEffectorVelocityState
</a></td>
</tr><tr>
<td>setEndEffectorVelocityState</td>
<td></td>
<td>Set the desired velocity state for the end-effector
</td>
</tr><tr>
<td>stopMotion</td>
<td>Exit Action
</td>
<td>
</td>
</tr></tbody></table>

