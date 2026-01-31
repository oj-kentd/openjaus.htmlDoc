---
title: QueryDigitalVideoEndpoint
---

# Message: QueryDigitalVideoEndpoint

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `E802h` |

## Description

This message requests a report of the currently configured RTP endpoint for the requested digital video sensor device.

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
<td>sensorID (see AS6060) identifies a digital video sensor device supported by the service.<br>
</td>
</tr>
</tbody></table>

