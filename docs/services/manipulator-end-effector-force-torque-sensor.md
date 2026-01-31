---
title: ManipulatorEndEffectorForceTorqueSensor
---

# ManipulatorEndEffectorForceTorqueSensor

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:ManipulatorEndEffectorForceTorqueSensor` |

## Description

The Manipulator End Effector Force Torque Sensor Service provides a means to get force or torque information from manipulator end effector.  The data is reported in the End Effector Coordinate System, as defined in Section 3.2.3 of [AS6057].

## Message Set

| ID | Message |
| --- | --- |
| `D998h` | [QueryManipulatorEndEffectorForceTorque](/messages/query-manipulator-end-effector-force-torque-d998) |
| `D999h` | [ReportManipulatorEndEffectorForceTorque](/messages/report-manipulator-end-effector-force-torque-d999) |

## State Machine Diagram

![ManipulatorEndEffectorForceTorqueSensor State Machine Diagram](/smDiagrams/ManipulatorEndEffectorForceTorqueSensor.png)

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
<td rowspan="1">ManipulatorEndEffectorForceTorqueSensorDefaultLoop</td>
<td><a href="/messages/query-manipulator-end-effector-force-torque-d998
">QueryManipulatorEndEffectorForceTorque</a></td>
<td><code></code></td>
<td><a href="/messages/report-manipulator-end-effector-force-torque-d999
">sendReportManipulatorEndEffectorForceTorque</a>
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
<td>sendReportManipulatorEndEffectorForceTorque</td>
<td>Send Action
</td>
<td>Send a Report ManipulatorEndEffectorForceTorque Capabilities message
<br>
<i>Output Message:</i> <a href="/messages/report-manipulator-end-effector-force-torque-d999
">ReportManipulatorEndEffectorForceTorque
</a></td>
</tr></tbody></table>

