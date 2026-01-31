---
title: DigitalVideo
---

# DigitalVideo

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:environmentSensing:DigitalVideo` |

## Description

This service provides access to the capabilities and configuration of the digital visual sensor, allowing the controlling component to set the visual sensor to a particular operational profile. The actual transmission of the video stream is outside the scope of this service. The ability to start, stop and pause the video stream is provided in the message protocol. There may also be mechanisms in the chosen video transmission protocol to control the video stream. In such situations, the messages defined herein are redundant and either mechanism may be used by sensor's client.

## Message Set

| ID | Message |
| --- | --- |
| `0805h` | [ControlDigitalVideoSensorStream](/messages/control-digital-video-sensor-stream-0805) |
| `2808h` | [QueryDigitalVideoSensorCapabilities](/messages/query-digital-video-sensor-capabilities-2808) |
| `2809h` | [QueryDigitalVideoSensorConfiguration](/messages/query-digital-video-sensor-configuration-2809) |
| `4808h` | [ReportDigitalVideoSensorCapabilities](/messages/report-digital-video-sensor-capabilities-4808) |
| `4809h` | [ReportDigitalVideoSensorConfiguration](/messages/report-digital-video-sensor-configuration-4809) |
| `0804h` | [SetDigitalVideoSensorConfiguration](/messages/set-digital-video-sensor-configuration-0804) |

## State Machine Diagram

![DigitalVideo State Machine Diagram](/smDiagrams/DigitalVideo.png)

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
<td align="center" rowspan="2">B</td>
<td rowspan="2">DigitalVideoControlledLoop</td>
<td><a href="/messages/set-digital-video-sensor-configuration-0804
">SetDigitalVideoSensorConfiguration</a></td>
<td><code>isControllingClient</code></td>
<td><a href="/messages/confirm-sensor-configuration-0801
">sendConfirmSensorConfiguration</a>
, updateDigitalVideoSensorConfiguration
</td>
</tr>
<tr>
<td><a href="/messages/control-digital-video-sensor-stream-0805
">ControlDigitalVideoSensorStream</a></td>
<td><code>isControllingClient</code></td>
<td>modifyDigitalVideoSensorStream
</td>
</tr><tr>
<td align="center" rowspan="2">A</td>
<td rowspan="2">DigitalVideoDefaultLoop</td>
<td><a href="/messages/query-digital-video-sensor-capabilities-2808
">QueryDigitalVideoSensorCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-digital-video-sensor-capabilities-4808
">sendReportDigitalVideoSensorCapabilities</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-digital-video-sensor-configuration-2809
">QueryDigitalVideoSensorConfiguration</a></td>
<td><code></code></td>
<td><a href="/messages/report-digital-video-sensor-configuration-4809
">sendReportDigitalVideoSensorConfiguration</a>
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
<td>modifyDigitalVideoSensorStream</td>
<td></td>
<td>Modify the video stream according to the specified message.
</td>
</tr><tr>
<td>sendConfirmSensorConfiguration</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/confirm-sensor-configuration-0801
">ConfirmSensorConfiguration
</a></td>
</tr><tr>
<td>sendReportDigitalVideoSensorCapabilities</td>
<td>Send Action
</td>
<td>Send a ReportDigitalVideoSensorCapabilities message
<br>
<i>Output Message:</i> <a href="/messages/report-digital-video-sensor-capabilities-4808
">ReportDigitalVideoSensorCapabilities
</a></td>
</tr><tr>
<td>sendReportDigitalVideoSensorConfiguration</td>
<td>Send Action
</td>
<td>Send a ReportDigitalVideoSensorConfiguration message
<br>
<i>Output Message:</i> <a href="/messages/report-digital-video-sensor-configuration-4809
">ReportDigitalVideoSensorConfiguration
</a></td>
</tr><tr>
<td>updateDigitalVideoSensorConfiguration</td>
<td></td>
<td>Update the sensor user controllable configuration parameters according to the ones specified.
</td>
</tr></tbody></table>

