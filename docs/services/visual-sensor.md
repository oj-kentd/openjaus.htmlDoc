---
title: VisualSensor
---

# VisualSensor

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:environmentSensing:VisualSensor` |

## Description

This service provides access to the basic capabilities and configuration of a visual sensor, allowing the controlling component to set the visual sensor to a particular operational profile. The Query Sensor Geometric Properties message can be used to determine the geometric relationship between the sensor and the vehicle coordinate system. Three possible coordinate responses are possible; (a) the service does not know the sensor�s position, (b) the sensor coordinate system is fixed with respect to the vehicle and (c) the sensor is attached to some manipulator. These cases are supported by the Report Sensor Geometric Properties message and are described therein.

## Message Set

| ID | Message |
| --- | --- |
| `0801h` | [ConfirmSensorConfiguration](/messages/confirm-sensor-configuration-0801) |
| `2806h` | [QueryVisualSensorCapabilities](/messages/query-visual-sensor-capabilities-2806) |
| `2807h` | [QueryVisualSensorConfiguration](/messages/query-visual-sensor-configuration-2807) |
| `2805h` | [QueryVisualSensorGeometricProperties](/messages/query-visual-sensor-geometric-properties-2805) |
| `4806h` | [ReportVisualSensorCapabilities](/messages/report-visual-sensor-capabilities-4806) |
| `4807h` | [ReportVisualSensorConfiguration](/messages/report-visual-sensor-configuration-4807) |
| `4805h` | [ReportVisualSensorGeometricProperties](/messages/report-visual-sensor-geometric-properties-4805) |
| `0803h` | [SetVisualSensorConfiguration](/messages/set-visual-sensor-configuration-0803) |

## State Machine Diagram

![VisualSensor State Machine Diagram](/smDiagrams/VisualSensor.png)

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
<td rowspan="1">VisualSensorControlledLoop</td>
<td><a href="/messages/set-visual-sensor-configuration-0803
">SetVisualSensorConfiguration</a></td>
<td><code>isControllingClient</code></td>
<td><a href="/messages/confirm-sensor-configuration-0801
">sendConfirmSensorConfiguration</a>
, updateVisualSensorConfiguration
</td>
</tr><tr>
<td align="center" rowspan="3">A</td>
<td rowspan="3">VisualSensorDefaultLoop</td>
<td><a href="/messages/query-visual-sensor-capabilities-2806
">QueryVisualSensorCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-visual-sensor-capabilities-4806
">sendReportVisualSensorCapabilities</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-visual-sensor-configuration-2807
">QueryVisualSensorConfiguration</a></td>
<td><code></code></td>
<td><a href="/messages/report-visual-sensor-configuration-4807
">sendReportVisualSensorConfiguration</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-visual-sensor-geometric-properties-2805
">QueryVisualSensorGeometricProperties</a></td>
<td><code></code></td>
<td><a href="/messages/report-visual-sensor-geometric-properties-4805
">sendReportVisualSensorGeometricProperties</a>
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
<td>sendConfirmSensorConfiguration</td>
<td>Send Action
</td>
<td>Send sendConfirmVisualSensorConfiguration message
<br>
<i>Output Message:</i> <a href="/messages/confirm-sensor-configuration-0801
">ConfirmSensorConfiguration
</a></td>
</tr><tr>
<td>sendReportVisualSensorCapabilities</td>
<td>Send Action
</td>
<td>Send a ReportVisualSensorCapabilities message
<br>
<i>Output Message:</i> <a href="/messages/report-visual-sensor-capabilities-4806
">ReportVisualSensorCapabilities
</a></td>
</tr><tr>
<td>sendReportVisualSensorConfiguration</td>
<td>Send Action
</td>
<td>Send a ReportVisualSensorConfiguration message
<br>
<i>Output Message:</i> <a href="/messages/report-visual-sensor-configuration-4807
">ReportVisualSensorConfiguration
</a></td>
</tr><tr>
<td>sendReportVisualSensorGeometricProperties</td>
<td>Send Action
</td>
<td>Send a ReportVisualSensorGeometricProperties message
<br>
<i>Output Message:</i> <a href="/messages/report-visual-sensor-geometric-properties-4805
">ReportVisualSensorGeometricProperties
</a></td>
</tr><tr>
<td>updateVisualSensorConfiguration</td>
<td></td>
<td>Update the sensor user controllable configuration parameters according to the ones specified.
</td>
</tr></tbody></table>

