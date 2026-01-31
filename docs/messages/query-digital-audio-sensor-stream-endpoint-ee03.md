---
title: QueryDigitalAudioSensorStreamEndpoint
---

# Message: QueryDigitalAudioSensorStreamEndpoint

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `EE03h` |

## Description

This AEODRS-specific message enables a Sensor client to query the sensor to determine the current IP endpoint to which the Sensor will send / is sending the RTP audio stream associated with the specified Sensor ID.

## Message Format

<table border="1" class="jaus-table">
<tbody><tr>
<th align="left" colspan="6"><font size="+2">
<b>Message Format</b></font></th>
</tr>
<tr>
<td align="center"><b>Field #</b></td>
<td><b>Field</b></td>
<td><b>Type</b></td>
<td><b>Units</b></td>
<td align="center"><b>Optional</b></td>
<td><b>Interpretation</b></td>
</tr>
<tr>
<td align="center">1</td>
<td>SensorID</td>
<td>Unsigned Short</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>Selector specifying one sensor device from the set of devices supported by the service. A value of zero is used to request the endpoints of all implemented audio sensor devices.<br>
</td>
</tr>
</tbody></table>

