---
title: MagneticSensor
---

# MagneticSensor

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:MagneticSensor` |

## Description

The Magnetic Sensor Service provides a mechanism for controlling and obtaining data from an magnetic sensor.  The service itself is designed to support a wide variety of underlying hardware, so the Query/Report Capabilities pair allows a client to discover the abilities of a particular implementation.

## Message Set

| ID | Message |
| --- | --- |
| `DAB9h` | [QueryMagneticSensorStatus](/messages/query-magnetic-sensor-status-dab9) |
| `DABAh` | [ReportMagneticSensorStatus](/messages/report-magnetic-sensor-status-daba) |

## State Machine Diagram

![MagneticSensor State Machine Diagram](/smDiagrams/MagneticSensor.png)

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
<td rowspan="1">MagneticSensorDefaultLoop</td>
<td><a href="/messages/query-magnetic-sensor-status-dab9
">QueryMagneticSensorStatus</a></td>
<td><code></code></td>
<td><a href="/messages/report-magnetic-sensor-status-daba
">sendReportMagneticSensorStatus</a>
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
<td>sendReportMagneticSensorStatus</td>
<td>Send Action
</td>
<td>Send a Report Magnetic Sensor Status message
<br>
<i>Output Message:</i> <a href="/messages/report-magnetic-sensor-status-daba
">ReportMagneticSensorStatus
</a></td>
</tr></tbody></table>

