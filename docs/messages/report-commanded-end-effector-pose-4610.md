---
title: ReportCommandedEndEffectorPose
---

# Message: ReportCommandedEndEffectorPose

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4610h` |

## Description

This message provides the receiver with the commanded pose of the end effector.

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

