---
title: AEODRSDigitalAudioSensor
---

# AEODRSDigitalAudioSensor

| Property | Value |
| --- | --- |
| **Version** | 1.4 |
| **URN** | `urn:jaus:jss:exp:aeodrs:DigitalAudioSensor` |

## Description

The DigitalAudioSensor service encodes analog audio at the UGV, and provides the resulting audio stream to a client.  The service provides a means of configuring encoded stream format, and of selecting and reporting current stream parameters (such as format, sample width and selected bit rate). The Service can support multiple Sensor devices, providing each with a sensor ID, and allowing separate configuration of each device's stream. Clients of the Service must provide to the Service for each Sensor the endpoint (Client) IP address and port to which the Service will stream.

## Message Set

| ID | Message |
| --- | --- |
| `DE04h` | [ControlDigitalAudioSensorStream](/messages/control-digital-audio-sensor-stream-de04) |
| `EE01h` | [QueryDigitalAudioSensorCapabilities](/messages/query-digital-audio-sensor-capabilities-ee01) |
| `EE02h` | [QueryDigitalAudioSensorConfiguration](/messages/query-digital-audio-sensor-configuration-ee02) |
| `EE03h` | [QueryDigitalAudioSensorStreamEndpoint](/messages/query-digital-audio-sensor-stream-endpoint-ee03) |
| `FE01h` | [ReportDigitalAudioSensorCapabilities](/messages/report-digital-audio-sensor-capabilities-fe01) |
| `FE02h` | [ReportDigitalAudioSensorConfiguration](/messages/report-digital-audio-sensor-configuration-fe02) |
| `FE03h` | [ReportDigitalAudioSensorStreamEndpoint](/messages/report-digital-audio-sensor-stream-endpoint-fe03) |
| `DE02h` | [SetDigitalAudioSensorConfiguration](/messages/set-digital-audio-sensor-configuration-de02) |
| `DE03h` | [SetDigitalAudioSensorStreamEndpoint](/messages/set-digital-audio-sensor-stream-endpoint-de03) |

## State Machine Diagram

![AEODRSDigitalAudioSensor State Machine Diagram](/smDiagrams/AEODRSDigitalAudioSensor.png)

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
<td align="center" rowspan="3">B</td>
<td rowspan="3">AEODRSDigitalAudioSensorControlledLoop</td>
<td><a href="/messages/set-digital-audio-sensor-configuration-de02
">SetDigitalAudioSensorConfiguration</a></td>
<td><code>isControllingClient</code></td>
<td>setDigitalAudioSensorConfigurationAction
</td>
</tr>
<tr>
<td><a href="/messages/control-digital-audio-sensor-stream-de04
">ControlDigitalAudioSensorStream</a></td>
<td><code>isControllingClient</code></td>
<td>controlDigitalAudioSensorStreamAction
</td>
</tr>
<tr>
<td><a href="/messages/set-digital-audio-sensor-stream-endpoint-de03
">SetDigitalAudioSensorStreamEndpoint</a></td>
<td><code>isControllingClient</code></td>
<td>setDigitalAudioSensorStreamEndpointAction
</td>
</tr><tr>
<td align="center" rowspan="3">A</td>
<td rowspan="3">AEODRSDigitalAudioSensorDefaultLoop</td>
<td><a href="/messages/query-digital-audio-sensor-capabilities-ee01
">QueryDigitalAudioSensorCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-digital-audio-sensor-capabilities-fe01
">sendReportDigitalAudioSensorCapabilities</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-digital-audio-sensor-configuration-ee02
">QueryDigitalAudioSensorConfiguration</a></td>
<td><code></code></td>
<td><a href="/messages/report-digital-audio-sensor-configuration-fe02
">sendReportDigitalAudioSensorConfiguration</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-digital-audio-sensor-stream-endpoint-ee03
">QueryDigitalAudioSensorStreamEndpoint</a></td>
<td><code></code></td>
<td><a href="/messages/report-digital-audio-sensor-stream-endpoint-fe03
">sendReportDigitalAudioSensorStreamEndpoint</a>
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
<td>controlDigitalAudioSensorStreamAction</td>
<td></td>
<td>Perform stream control action specified.
</td>
</tr><tr>
<td>sendReportDigitalAudioSensorCapabilities</td>
<td>Send Action
</td>
<td>Construct and send a ReportDigitalAudioSensorCapabilities message to requestor.
<br>
<i>Output Message:</i> <a href="/messages/report-digital-audio-sensor-capabilities-fe01
">ReportDigitalAudioSensorCapabilities
</a></td>
</tr><tr>
<td>sendReportDigitalAudioSensorConfiguration</td>
<td>Send Action
</td>
<td>Construct and send a ReportDigitalAudioSensorConfiguration message to requestor.
<br>
<i>Output Message:</i> <a href="/messages/report-digital-audio-sensor-configuration-fe02
">ReportDigitalAudioSensorConfiguration
</a></td>
</tr><tr>
<td>sendReportDigitalAudioSensorStreamEndpoint</td>
<td>Send Action
</td>
<td>Construct and send a ReportDigitalAudioSensorStreamEndpoint message to requestor.
<br>
<i>Output Message:</i> <a href="/messages/report-digital-audio-sensor-stream-endpoint-fe03
">ReportDigitalAudioSensorStreamEndpoint
</a></td>
</tr><tr>
<td>setDigitalAudioSensorConfigurationAction</td>
<td></td>
<td>Set the sensor digital audio format and format parameters as specified in the received SetDigitalAudioSensor message.
</td>
</tr><tr>
<td>setDigitalAudioSensorStreamEndpointAction</td>
<td></td>
<td>Set the destination for the audio stream to the given endpoint
</td>
</tr></tbody></table>

