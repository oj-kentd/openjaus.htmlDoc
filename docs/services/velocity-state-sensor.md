---
title: VelocityStateSensor
---

# VelocityStateSensor

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:mobility:VelocityStateSensor` |

## Description

The Velocity State Sensor has the responsibility of reporting the instantaneous velocity of the platform.  The velocity state of a rigid body is defined as the set of parameters that are necessary to calculate the velocity of any point in that rigid body.  Six parameters are required to specify a velocity state of a rigid body in terms of some fixed reference coordinate system.  The first three parameters represent the velocity components of a point in the rigid body that is coincident with the origin of the fixed reference.  The second three components represent the  instantaneous angular velocity components.  It is possible to represent the six velocity state parameters as a screw, about which the rigid body is rotating and translating along at that instant. The reference frame for the velocity state sensor component is selected as a fixed coordinate system that at this instant is co-located with and aligned with the vehicle or system coordinate system.  Thus the message data 'velocity x', 'velocity y', and 'velocity z' represents the current velocity of the subsystem's control point at this instant.  For example if 'velocity x' has a value of 3 m/sec and 'velocity y' and 'velocity z' are zero, then the vehicle is moving in the forward direction at a velocity of 3 m/sec.  The message data 'omega x', 'omega  y', and 'omega z' represent the actual rate of change of orientation or angular velocity of the vehicle about its coordinate axes.

## Message Set

| ID | Message |
| --- | --- |
| `2404h` | [QueryVelocityState](/messages/query-velocity-state-2404) |
| `4404h` | [ReportVelocityState](/messages/report-velocity-state-4404) |

## State Machine Diagram

![VelocityStateSensor State Machine Diagram](/smDiagrams/VelocityStateSensor.png)

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
<td rowspan="1">VelocityStateDefaultLoop</td>
<td><a href="/messages/query-velocity-state-2404
">QueryVelocityState</a></td>
<td><code></code></td>
<td><a href="/messages/report-velocity-state-4404
">sendReportVelocityState</a>
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
<td>sendReportVelocityState</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/report-velocity-state-4404
">ReportVelocityState
</a></td>
</tr></tbody></table>

