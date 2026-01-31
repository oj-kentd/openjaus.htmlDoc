---
title: ReportOdometry
---

# Message: ReportOdometry

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4515h` |

## Description

Returns odometry information

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
<td>OdometryType</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
1: <i>PLATFORM</i><br>2: <i>TRIP_A</i><br>3: <i>TRIP_B</i><br>4: <i>TRIP_C</i><br></td>
</tr>
<tr>
<td align="center">2</td>
<td>OdometryValue</td>
<td>Unsigned Integer</td>
<td>units meter</td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

