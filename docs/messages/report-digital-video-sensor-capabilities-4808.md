---
title: ReportDigitalVideoSensorCapabilities
---

# Message: ReportDigitalVideoSensorCapabilities

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4808h` |

## Description

This message is used to report the sensors� capabilities upon reciept of a Query Digital Video Sensor Capabilities message. Capabilities include sensor properties, values and ranges which can be modified by the Set Digital Video Sensor Configuration message.

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
<td><a href="#digitalvideosensorcapabiliteslist">DigitalVideoSensorCapabilitesList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

