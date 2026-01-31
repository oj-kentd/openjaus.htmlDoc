---
title: SetToolOffset
---

# Message: SetToolOffset

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `0604h` |

## Description

This message specifies the coordinates of the end-effector tool point (End Effector Pose) in terms of the End Effector Coordinate System.  For a six-axis robot, this coordinate system is defined by having its origin located at the intersection of the S6 joint axis vector and the user defined link vector a67.  The Z axis of the coordinate system is along S6 and the X axis is along the a67 vector.

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
<td>ToolPointCoordinateX</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meter</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -15.0<br>
Real Upper Limit: 15.0<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>ToolPointCoordinateY</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meter</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -15.0<br>
Real Upper Limit: 15.0<br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>ToolPointCoordinateZ</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meter</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -15.0<br>
Real Upper Limit: 15.0<br>
</td>
</tr>
</tbody></table>

