---
title: ResetOdometry
---

# Message: ResetOdometry

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `0515h` |

## Description

Resets odometry value. PLATFORM is not a valid value to reset

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
<td>TripType</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
2: <i>TRIP_A</i><br>3: <i>TRIP_B</i><br>4: <i>TRIP_C</i><br></td>
</tr>
</tbody></table>

