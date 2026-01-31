---
title: ManipulatorJointForceTorqueSensor
---

# ManipulatorJointForceTorqueSensor

| Property | Value |
| --- | --- |
| **Version** | 2.0 |
| **URN** | `urn:jaus:jss:manipulator:ManipulatorJointForceTorqueSensor` |

## Description

The function of the Joint Force/Torque Sensor is to report the values of instantaneous torques (for revolute joints) and forces (for prismatic joints) that are applied at the individual joints of the manipulator kinematic model when queried.  To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service.

## Message Set

| ID | Message |
| --- | --- |
| `2605h` | [QueryJointForceTorque](/messages/query-joint-force-torque-2605) |
| `4605h` | [ReportJointForceTorque](/messages/report-joint-force-torque-4605) |

## State Machine Diagram

![ManipulatorJointForceTorqueSensor State Machine Diagram](/smDiagrams/ManipulatorJointForceTorqueSensor.png)

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
<td rowspan="1">ManipulatorJointForceTorqueSensorDefaultLoop</td>
<td><a href="/messages/query-joint-force-torque-2605
">QueryJointForceTorque</a></td>
<td><code></code></td>
<td><a href="/messages/report-joint-force-torque-4605
">sendReportJointForceTorque</a>
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
<td>sendReportJointForceTorque</td>
<td>Send Action
</td>
<td>Send Report Joint Force Torques message to the service that sent the query
<br>
<i>Output Message:</i> <a href="/messages/report-joint-force-torque-4605
">ReportJointForceTorque
</a></td>
</tr></tbody></table>

