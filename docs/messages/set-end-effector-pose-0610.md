---
title: SetEndEffectorPose
---

# Message: SetEndEffectorPose

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `0610h` |

## Description

This message defines the desired end-effector position and orientation.  The coordinates of the tool point are defined in terms of the vehicle coordinate system.  The orientation of the end-effector is defined by a unit quaternion (d ; a, b, c) which specifies the axis and angle of rotation that was used to establish the orientation of the end-effector coordinate system with respect to the vehicle coordinate system.

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
Real Lower Limit: -30.0<br>
Real Upper Limit: 30.0<br>
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
Real Lower Limit: -30.0<br>
Real Upper Limit: 30.0<br>
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
Real Lower Limit: -30.0<br>
Real Upper Limit: 30.0<br>
</td>
</tr>
<tr>
<td align="center">4</td>
<td>DComponentOfUnitQuaternionQ</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -1.0<br>
Real Upper Limit: 1.0<br>
</td>
</tr>
<tr>
<td align="center">5</td>
<td>AComponentOfUnitQuaternionQ</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -1.0<br>
Real Upper Limit: 1.0<br>
</td>
</tr>
<tr>
<td align="center">6</td>
<td>BComponentOfUnitQuaternionQ</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -1.0<br>
Real Upper Limit: 1.0<br>
</td>
</tr>
<tr>
<td align="center">7</td>
<td>CComponentOfUnitQuaternionQ</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -1.0<br>
Real Upper Limit: 1.0<br>
</td>
</tr>
</tbody></table>

