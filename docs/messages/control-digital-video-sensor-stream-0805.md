---
title: ControlDigitalVideoSensorStream
---

# Message: ControlDigitalVideoSensorStream

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `0805h` |

## Description

This message is used to control the playback state of the video stream from a digital video service. The actual stream protocol for this is outside the scope of the protocol. The streaming mechanism selected may support other methods to control the stream within its own protocol. In such a case, this message shall be a redunant mechanism and a service client may choose to use either the native protocol or this message for stream control.

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
<td>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>StreamState</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>Play</i><br>1: <i>Pause</i><br>2: <i>Stop</i><br></td>
</tr>
</tbody></table>

