---
title: ForceTorqueSensor
---

# ForceTorqueSensor

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:ForceTorqueSensor` |

## Description

The Force Torque Sensor Service provides a means to get force or torque information from one or more devices.  The data can be reported in either the sensor coordinate system or the vehicle coordinate system (if supported).

## Message Set

| ID | Message |
| --- | --- |
| `D991h` | [QueryForceTorque](/messages/query-force-torque-d991) |
| `D990h` | [QueryForceTorqueCapabilities](/messages/query-force-torque-capabilities-d990) |
| `D993h` | [ReportForceTorque](/messages/report-force-torque-d993) |
| `D992h` | [ReportForceTorqueCapabilities](/messages/report-force-torque-capabilities-d992) |

## State Machine Diagram

![ForceTorqueSensor State Machine Diagram](/smDiagrams/ForceTorqueSensor.png)

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
<td align="center" rowspan="2">A</td>
<td rowspan="2">ForceTorqueSensorDefaultLoop</td>
<td><a href="/messages/query-force-torque-capabilities-d990
">QueryForceTorqueCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-force-torque-capabilities-d992
">sendReportForceTorqueCapabilities</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-force-torque-d991
">QueryForceTorque</a></td>
<td><code></code></td>
<td><a href="/messages/report-force-torque-d993
">sendReportForceTorque</a>
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
<td>sendReportForceTorque</td>
<td>Send Action
</td>
<td>Send a ReportForceTorque message
<br>
<i>Output Message:</i> <a href="/messages/report-force-torque-d993
">ReportForceTorque
</a></td>
</tr><tr>
<td>sendReportForceTorqueCapabilities</td>
<td>Send Action
</td>
<td>Send a ReportForceTorqueCapabilities message
<br>
<i>Output Message:</i> <a href="/messages/report-force-torque-capabilities-d992
">ReportForceTorqueCapabilities
</a></td>
</tr></tbody></table>

