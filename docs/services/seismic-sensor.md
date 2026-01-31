---
title: SeismicSensor
---

# SeismicSensor

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:SeismicSensor` |

## Description

The Seismic Sensor Service provides a mechanism for controlling and obtaining data from an seismic sensor.  The service itself is designed to support a wide variety of underlying hardware, so the Query/Report Capabilities pair allows a client to discover the abilities of a particular implementation.  While the service is flexible enough to support a number of use cases, the expected application is intruder detection.

## Message Set

| ID | Message |
| --- | --- |
| `DAB7h` | [QuerySeismicSensorStatus](/messages/query-seismic-sensor-status-dab7) |
| `DAB8h` | [ReportSeismicSensorStatus](/messages/report-seismic-sensor-status-dab8) |

## State Machine Diagram

![SeismicSensor State Machine Diagram](/smDiagrams/SeismicSensor.png)

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
<td rowspan="1">SeismicSensorDefaultLoop</td>
<td><a href="/messages/query-seismic-sensor-status-dab7
">QuerySeismicSensorStatus</a></td>
<td><code></code></td>
<td><a href="/messages/report-seismic-sensor-status-dab8
">sendReportSeismicSensorStatus</a>
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
<td>sendReportSeismicSensorStatus</td>
<td>Send Action
</td>
<td>Send a Report Seismic Sensor Status message
<br>
<i>Output Message:</i> <a href="/messages/report-seismic-sensor-status-dab8
">ReportSeismicSensorStatus
</a></td>
</tr></tbody></table>

