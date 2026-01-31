---
title: SetDigitalAudioSensorStreamEndpoint
---

# Message: SetDigitalAudioSensorStreamEndpoint

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `DE03h` |

## Description

This message enables the Sensor client to specify the client IP endpoint to which the DigitalAudioSensor's digital audio stream associated with the specified ID should be sent.

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
<td><a href="#sensoridrec">SensorIdRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
<tr>
<td align="center">2</td>
<td><a href="#endpointrecord">EndpointRecord</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
</tbody></table>

