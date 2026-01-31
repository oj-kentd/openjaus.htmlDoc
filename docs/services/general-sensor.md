---
title: GeneralSensor
---

# GeneralSensor

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:GeneralSensor` |

## Description

The General Sensor Service provides a mechanism for discovering and controlling a sensor.  This service is expected to be inherited for specific sensor types, but provides a set of generic messages for common capabilities such as managing power state.

## Message Set

| ID | Message |
| --- | --- |
| `DAB0h` | [QueryGeneralSensorCapabilities](/messages/query-general-sensor-capabilities-dab0) |
| `DAB1h` | [QueryGeneralSensorConfiguration](/messages/query-general-sensor-configuration-dab1) |
| `DAB3h` | [ReportGeneralSensorCapabilities](/messages/report-general-sensor-capabilities-dab3) |
| `DAB4h` | [ReportGeneralSensorConfiguration](/messages/report-general-sensor-configuration-dab4) |
| `DAB2h` | [SetGeneralSensorConfiguration](/messages/set-general-sensor-configuration-dab2) |

## State Machine Diagram

![GeneralSensor State Machine Diagram](/smDiagrams/GeneralSensor.png)

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
<td align="center" rowspan="1">B</td>
<td rowspan="1">GeneralSensorControlledLoop</td>
<td><a href="/messages/set-general-sensor-configuration-dab2
">SetGeneralSensorConfiguration</a></td>
<td><code>isControllingClient &amp;&amp; isSupported</code></td>
<td>setGeneralSensorConfiguration
</td>
</tr><tr>
<td align="center" rowspan="2">A</td>
<td rowspan="2">GeneralSensorDefaultLoop</td>
<td><a href="/messages/query-general-sensor-capabilities-dab0
">QueryGeneralSensorCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-general-sensor-capabilities-dab3
">sendReportGeneralSensorCapabilities</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-general-sensor-configuration-dab1
">QueryGeneralSensorConfiguration</a></td>
<td><code></code></td>
<td><a href="/messages/report-general-sensor-configuration-dab4
">sendReportGeneralSensorConfiguration</a>
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
<td>sendReportGeneralSensorCapabilities</td>
<td>Send Action
</td>
<td>Send a Report General Sensor Capabilities message
<br>
<i>Output Message:</i> <a href="/messages/report-general-sensor-capabilities-dab3
">ReportGeneralSensorCapabilities
</a></td>
</tr><tr>
<td>sendReportGeneralSensorConfiguration</td>
<td>Send Action
</td>
<td>Send a Report General Sensor Configuration message
<br>
<i>Output Message:</i> <a href="/messages/report-general-sensor-configuration-dab4
">ReportGeneralSensorConfiguration
</a></td>
</tr><tr>
<td>setGeneralSensorConfiguration</td>
<td></td>
<td>Set General Sensor Configuration
</td>
</tr></tbody></table>

