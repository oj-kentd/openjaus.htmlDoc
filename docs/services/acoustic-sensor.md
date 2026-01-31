---
title: AcousticSensor
---

# AcousticSensor

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:AcousticSensor` |

## Description

The Acoustic Sensor Service provides a mechanism for controlling and obtaining data from an acoustic sensor.  The service itself is designed to support a wide variety of underlying hardware, so the Query/Report Capabilities pair inherited from the parent General Sensor Service allows a client to discover the abilities of a particular implementation.  While the service is flexible enough to support a number of use cases, the expected application is shooter detection.

## Message Set

| ID | Message |
| --- | --- |
| `DAB5h` | [QueryAcousticSensorStatus](/messages/query-acoustic-sensor-status-dab5) |
| `DAB6h` | [ReportAcousticSensorStatus](/messages/report-acoustic-sensor-status-dab6) |

## State Machine Diagram

![AcousticSensor State Machine Diagram](/smDiagrams/AcousticSensor.png)

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
<td rowspan="1">AcousticSensorDefaultLoop</td>
<td><a href="/messages/query-acoustic-sensor-status-dab5
">QueryAcousticSensorStatus</a></td>
<td><code></code></td>
<td><a href="/messages/report-acoustic-sensor-status-dab6
">sendReportAcousticSensorStatus</a>
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
<td>sendReportAcousticSensorStatus</td>
<td>Send Action
</td>
<td>Send a Report Acoustic Sensor Status message
<br>
<i>Output Message:</i> <a href="/messages/report-acoustic-sensor-status-dab6
">ReportAcousticSensorStatus
</a></td>
</tr></tbody></table>

