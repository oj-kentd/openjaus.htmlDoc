---
title: ManipulatorEndEffectorVelocityStateSensor
---

# ManipulatorEndEffectorVelocityStateSensor

| Property | Value |
| --- | --- |
| **Version** | 2.0 |
| **URN** | `urn:jaus:jss:manipulator:ManipulatorEndEffectorVelocityStateSensor` |

## Description

The function of the End Effector Velocity State Sensor is to report the velocity state of the tool tip as defined by two length-three vectors, i.e., ? and vtool. These vectors respectively represent the angular velocity of the end effector coordinate system and the linear velocity of the tool tip as measured with respect to the manipulator base coordinate system.  To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service and a Manipulator Tool Offset Service.

## Message Set

| ID | Message |
| --- | --- |
| `2616h` | [QueryEndEffectorVelocityState](/messages/query-end-effector-velocity-state-2616) |
| `4616h` | [ReportEndEffectorVelocityState](/messages/report-end-effector-velocity-state-4616) |

## State Machine Diagram

![ManipulatorEndEffectorVelocityStateSensor State Machine Diagram](/smDiagrams/ManipulatorEndEffectorVelocityStateSensor.png)

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
<td rowspan="1">ManipulatorEndEffectorVelocityStateSensorDefaultLoop</td>
<td><a href="/messages/query-end-effector-velocity-state-2616
">QueryEndEffectorVelocityState</a></td>
<td><code></code></td>
<td><a href="/messages/report-end-effector-velocity-state-4616
">sendReportEndEffectorVelocityState</a>
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
<td>sendReportEndEffectorVelocityState</td>
<td>Send Action
</td>
<td>Send a report end effector velocity state message
<br>
<i>Output Message:</i> <a href="/messages/report-end-effector-velocity-state-4616
">ReportEndEffectorVelocityState
</a></td>
</tr></tbody></table>

