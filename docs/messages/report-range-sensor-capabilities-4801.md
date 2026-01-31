---
title: ReportRangeSensorCapabilities
---

# Message: ReportRangeSensorCapabilities

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4801h` |

## Description

This message is used to report the range sensors� capabilities upon reciept of a Query Range Sensor Capabilities message. Capabilities include both static sensor properties and valid values and ranges for properties which can be modified by the Set Range Sensor Capabilities Message.

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
<td><a href="#rangesensorcapabilitieslist">RangeSensorCapabilitiesList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

