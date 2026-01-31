---
title: ReportPanTiltSpecifications
---

# Message: ReportPanTiltSpecifications

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4620h` |

## Description

This message provides the joint angle and joint velocity limits for the pan tilt mechanism.

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
Bit 0: PanTiltCoordinateSysX<br>
Bit 1: PanTiltCoordinateSysY<br>
Bit 2: PanTiltCoordinateSysZ<br>
Bit 3: DComponentOfUnitQuaternionQ<br>
Bit 4: AComponentOfUnitQuaternionQ<br>
Bit 5: BComponentOfUnitQuaternionQ<br>
Bit 6: CComponentOfUnitQuaternionQ<br>
</td>
</tr><tr>
<td align="center">2</td>
<td>PanTiltCoordinateSysX</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meter</td>
<td align="center"><i>true</i></td>
<td>x coordinate of origin of pan tilt coordinate system measured with respect to vehicle coordinate system<br><br>
Real Lower Limit: -30.0<br>
Real Upper Limit: 30.0<br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>PanTiltCoordinateSysY</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meter</td>
<td align="center"><i>true</i></td>
<td>x coordinate of origin of pan tilt coordinate system measured with respect to vehicle coordinate system<br><br>
Real Lower Limit: -30.0<br>
Real Upper Limit: 30.0<br>
</td>
</tr>
<tr>
<td align="center">4</td>
<td>PanTiltCoordinateSysZ</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meter</td>
<td align="center"><i>true</i></td>
<td>x coordinate of origin of pan tilt coordinate system measured with respect to vehicle coordinate system<br><br>
Real Lower Limit: -30.0<br>
Real Upper Limit: 30.0<br>
</td>
</tr>
<tr>
<td align="center">5</td>
<td>DComponentOfUnitQuaternionQ</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units one</td>
<td align="center"><i>true</i></td>
<td>quaternion q = d + ai +bj + ck defines the orientation of the manipulator coordinate system measured with respect to the vehicle coordinate system<br><br>
Real Lower Limit: -1.0<br>
Real Upper Limit: 1.0<br>
</td>
</tr>
<tr>
<td align="center">6</td>
<td>AComponentOfUnitQuaternionQ</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units one</td>
<td align="center"><i>true</i></td>
<td>quaternion q = d + ai +bj + ck defines the orientation of the manipulator coordinate system measured with respect to the vehicle coordinate system<br><br>
Real Lower Limit: -1.0<br>
Real Upper Limit: 1.0<br>
</td>
</tr>
<tr>
<td align="center">7</td>
<td>BComponentOfUnitQuaternionQ</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units one</td>
<td align="center"><i>true</i></td>
<td>quaternion q = d + ai +bj + ck defines the orientation of the manipulator coordinate system measured with respect to the vehicle coordinate system<br><br>
Real Lower Limit: -1.0<br>
Real Upper Limit: 1.0<br>
</td>
</tr>
<tr>
<td align="center">8</td>
<td>CComponentOfUnitQuaternionQ</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units one</td>
<td align="center"><i>true</i></td>
<td>quaternion q = d + ai +bj + ck defines the orientation of the manipulator coordinate system measured with respect to the vehicle coordinate system<br><br>
Real Lower Limit: -1.0<br>
Real Upper Limit: 1.0<br>
</td>
</tr>
<tr>
<td align="center">9</td>
<td>Joint1MinValue</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units radians</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -25.132741228718345<br>
Real Upper Limit: 25.132741228718345<br>
</td>
</tr>
<tr>
<td align="center">10</td>
<td>Joint1MaxValue</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units radians</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -25.132741228718345<br>
Real Upper Limit: 25.132741228718345<br>
</td>
</tr>
<tr>
<td align="center">11</td>
<td>Joint1MaxSpeed</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units radians per second</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 31.41592653589793<br>
</td>
</tr>
<tr>
<td align="center">12</td>
<td>Joint2MinValue</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units radians</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -25.132741228718345<br>
Real Upper Limit: 25.132741228718345<br>
</td>
</tr>
<tr>
<td align="center">13</td>
<td>Joint2MaxValue</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units radians</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -25.132741228718345<br>
Real Upper Limit: 25.132741228718345<br>
</td>
</tr>
<tr>
<td align="center">14</td>
<td>Joint2MaxSpeed</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units radians per second</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 31.41592653589793<br>
</td>
</tr>
</tbody></table>

