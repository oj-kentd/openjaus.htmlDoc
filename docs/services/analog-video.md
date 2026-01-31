---
title: AnalogVideo
---

# AnalogVideo

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:environmentSensing:AnalogVideo` |

## Description

This service provides access to the capabilities and configuration of the analog visual sensor, allowing the controlling component to set the visual sensor to a particular operational profile. The actual transmission of the video stream is outside the scope of this service.

## Message Set

| ID | Message |
| --- | --- |
| `2810h` | [QueryAnalogVideoSensorCapabilities](/messages/query-analog-video-sensor-capabilities-2810) |
| `2811h` | [QueryAnalogVideoSensorConfiguration](/messages/query-analog-video-sensor-configuration-2811) |
| `4810h` | [ReportAnalogVideoSensorCapabilities](/messages/report-analog-video-sensor-capabilities-4810) |
| `4811h` | [ReportAnalogVideoSensorConfiguration](/messages/report-analog-video-sensor-configuration-4811) |
| `0806h` | [SetAnalogVideoSensorConfiguration](/messages/set-analog-video-sensor-configuration-0806) |

## State Machine Diagram

![AnalogVideo State Machine Diagram](/smDiagrams/AnalogVideo.png)

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
<td rowspan="1">AnalogVideoControlledLoop</td>
<td><a href="/messages/set-analog-video-sensor-configuration-0806
">SetAnalogVideoSensorConfiguration</a></td>
<td><code>isControllingClient</code></td>
<td><a href="/messages/confirm-sensor-configuration-0801
">sendConfirmSensorConfiguration</a>
, updateAnalogVideoSensorConfiguration
</td>
</tr><tr>
<td align="center" rowspan="2">A</td>
<td rowspan="2">AnalogVideoDefaultLoop</td>
<td><a href="/messages/query-analog-video-sensor-capabilities-2810
">QueryAnalogVideoSensorCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-analog-video-sensor-capabilities-4810
">sendReportAnalogVideoSensorCapabilities</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-analog-video-sensor-configuration-2811
">QueryAnalogVideoSensorConfiguration</a></td>
<td><code></code></td>
<td><a href="/messages/report-analog-video-sensor-configuration-4811
">sendReportAnalogVideoSensorConfiguration</a>
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
<td>
<i>Output Message:</i> <a href="/messages/confirm-sensor-configuration-0801
">ConfirmSensorConfiguration
</a></td>
</tr><tr>
<td>sendReportAnalogVideoSensorCapabilities</td>
<td>Send Action
</td>
<td>Send a ReportAnalogVideoSensorCapabilities message
<br>
<i>Output Message:</i> <a href="/messages/report-analog-video-sensor-capabilities-4810
">ReportAnalogVideoSensorCapabilities
</a></td>
</tr><tr>
<td>sendReportAnalogVideoSensorConfiguration</td>
<td>Send Action
</td>
<td>Send a ReportAnalogVideoSensorConfiguration message
<br>
<i>Output Message:</i> <a href="/messages/report-analog-video-sensor-configuration-4811
">ReportAnalogVideoSensorConfiguration
</a></td>
</tr><tr>
<td>updateAnalogVideoSensorConfiguration</td>
<td></td>
<td>Update the sensor user controllable configuration parameters according to the ones specified.
</td>
</tr></tbody></table>

