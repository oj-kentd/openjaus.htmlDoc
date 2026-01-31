---
title: ManipulatorActuatorForceTorqueDriver
---

# ManipulatorActuatorForceTorqueDriver

| Property | Value |
| --- | --- |
| **Version** | 2.0 |
| **URN** | `urn:jaus:jss:manipulator:ManipulatorActuatorForceTorqueDriver` |

## Description

The function of the Actuator Force/Torque Driver is to perform closed-loop force control (for a prismatic actuator) and closed-loop torque control (for a revolute actuator). To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service.

## Message Set

| ID | Message |
| --- | --- |
| `2613h` | [QueryCommandedActuatorForceTorque](/messages/query-commanded-actuator-force-torque-2613) |
| `4613h` | [ReportCommandedActuatorForceTorque](/messages/report-commanded-actuator-force-torque-4613) |
| `0613h` | [SetActuatorForceTorque](/messages/set-actuator-force-torque-0613) |

## State Machine Diagram

![ManipulatorActuatorForceTorqueDriver State Machine Diagram](/smDiagrams/ManipulatorActuatorForceTorqueDriver.png)

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
<td rowspan="1">ManipulatorActuatorForceTorqueDriverDefaultLoop</td>
<td><a href="/messages/query-commanded-actuator-force-torque-2613
">QueryCommandedActuatorForceTorque</a></td>
<td><code></code></td>
<td><a href="/messages/report-commanded-actuator-force-torque-4613
">sendReportCommandedActuatorForceTorque</a>
</td>
</tr><tr>
<td align="center" rowspan="1">B</td>
<td rowspan="1">ManipulatorActuatorForceTorqueDriverReadyLoop</td>
<td><a href="/messages/set-actuator-force-torque-0613
">SetActuatorForceTorque</a></td>
<td><code>isControllingClient</code></td>
<td>setActuatorForceTorque
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
<td>sendReportCommandedActuatorForceTorque</td>
<td>Send Action
</td>
<td>Send a Report Commanded Actuator Force Torque message
<br>
<i>Output Message:</i> <a href="/messages/report-commanded-actuator-force-torque-4613
">ReportCommandedActuatorForceTorque
</a></td>
</tr><tr>
<td>setActuatorForceTorque</td>
<td></td>
<td>Set the desired actuator forces and torques
</td>
</tr></tbody></table>

