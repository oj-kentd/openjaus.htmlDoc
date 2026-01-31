---
title: QueryDigitalAudioCapabilities
---

# Message: QueryDigitalAudioCapabilities

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `DABEh` |

## Description

This message is used to query the full set of capabilities (supported performance levels) for one or more sensors.  A SensorID of zero (0) may be used to query all sensors supported by the service in a single message.

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
<td>Zero (0) may be used to request all sensors supported by the service. Otherwise, only the data for the specified sensor is returned.<br>
</td>
</tr>
</tbody></table>

