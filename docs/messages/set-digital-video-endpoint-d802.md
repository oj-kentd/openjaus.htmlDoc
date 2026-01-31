---
title: SetDigitalVideoEndpoint
---

# Message: SetDigitalVideoEndpoint

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `D802h` |

## Description

This message sets the RTP endpoint for the video stream associated with the specified digital video sensor device.

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

