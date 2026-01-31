---
title: ReportManipulatorEndEffectorForceTorque
---

# Message: ReportManipulatorEndEffectorForceTorque

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `D999h` |

## Description

This message is used to report the forces and torques experienced at the manipulator end effector, using the End Effector Coordinate System.

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
<td>Presence Vector</td>
<td>Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Bit 0: ForceX<br>
Bit 1: ForceY<br>
Bit 2: ForceZ<br>
Bit 3: TorqueX<br>
Bit 4: TorqueY<br>
Bit 5: TorqueZ<br>
</td>
</tr><tr>
<td align="center">2</td>
<td>ForceX</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units newton</td>
<td align="center"><i>true</i></td>
<td>Force experienced in the X-direction of the End Effector Coordinate System.<br><br>
Real Lower Limit: -100000.0<br>
Real Upper Limit: 100000.0<br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>ForceY</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units newton</td>
<td align="center"><i>true</i></td>
<td>Force experienced in the Y-direction of the End Effector Coordinate System.<br><br>
Real Lower Limit: -100000.0<br>
Real Upper Limit: 100000.0<br>
</td>
</tr>
<tr>
<td align="center">4</td>
<td>ForceZ</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units newton</td>
<td align="center"><i>true</i></td>
<td>Force experienced in the Z-direction of the End Effector Coordinate System.<br><br>
Real Lower Limit: -100000.0<br>
Real Upper Limit: 100000.0<br>
</td>
</tr>
<tr>
<td align="center">5</td>
<td>TorqueX</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units newton meter</td>
<td align="center"><i>true</i></td>
<td>Torque experienced around the X-axis of the End Effector Coordinate System.<br><br>
Real Lower Limit: -1000000.0<br>
Real Upper Limit: 1000000.0<br>
</td>
</tr>
<tr>
<td align="center">6</td>
<td>TorqueY</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units newton meter</td>
<td align="center"><i>true</i></td>
<td>Torque experienced around the Y-axis of the End Effector Coordinate System.<br><br>
Real Lower Limit: -1000000.0<br>
Real Upper Limit: 1000000.0<br>
</td>
</tr>
<tr>
<td align="center">7</td>
<td>TorqueZ</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units newton meter</td>
<td align="center"><i>true</i></td>
<td>Torque experienced around the Z-axis of the End Effector Coordinate System.<br><br>
Real Lower Limit: -1000000.0<br>
Real Upper Limit: 1000000.0<br>
</td>
</tr>
</tbody></table>

