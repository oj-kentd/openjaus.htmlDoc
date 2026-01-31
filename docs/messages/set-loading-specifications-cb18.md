---
title: SetLoadingSpecifications
---

# Message: SetLoadingSpecifications

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `CB18h` |

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
<td>LoadingSpecificationsRecBitField</td>
<td>BitField<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
[0, 0] : <i>TrailerAttached</i> (range: 0 ... 1)<br>[1, 1] : <i>RollerPresent</i> (range: 0 ... 1)<br></td>
</tr>
<tr>
<td align="center">2</td>
<td>VehicleLoad</td>
<td>Float</td>
<td></td>
<td align="center"><i>false</i></td>
<td>Weight of the load</td>
</tr>
<tr>
<td align="center">3</td>
<td>LoadHeight</td>
<td>Float</td>
<td></td>
<td align="center"><i>false</i></td>
<td>Height of the load, measured along the vehicle coordinate frame Z axis</td>
</tr>
<tr>
<td align="center">4</td>
<td>LoadWidth</td>
<td>Float</td>
<td></td>
<td align="center"><i>false</i></td>
<td>Width of the load, measured along the vehicle coordinate frame Y axis</td>
</tr>
<tr>
<td align="center">5</td>
<td>LoadLength</td>
<td>Float</td>
<td></td>
<td align="center"><i>false</i></td>
<td>Length of the load, measured along the vehicle coordinate frame X axis</td>
</tr>
<tr>
<td align="center">6</td>
<td>LoadCenterX</td>
<td>Float</td>
<td></td>
<td align="center"><i>false</i></td>
<td>Distance along the X axis from the vehicle coordinate frame to the center of the load</td>
</tr>
<tr>
<td align="center">7</td>
<td>LoadCenterY</td>
<td>Float</td>
<td></td>
<td align="center"><i>false</i></td>
<td>Distance along the Y axis from the vehicle coordinate frame to the center of the load</td>
</tr>
<tr>
<td align="center">8</td>
<td>LoadCenterZ</td>
<td>Float</td>
<td></td>
<td align="center"><i>false</i></td>
<td>Distance along the Z axis from the vehicle coordinate frame to the center of the load</td>
</tr>
</tbody></table>

