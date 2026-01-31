---
title: SetGlobalVector
---

# Message: SetGlobalVector

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `0407h` |

## Description

This message is used to set the driving vector based on the global coordinate system. Field #2 sets the desired speed of the platform. The desired heading angle is set in field #4 and is defined in a right hand sense about the Z axis of the global coordinate system (the Z axis points downward) where North is defined as zero degrees. Field #3 sets the desired Altitude in accordance with the WGS 84 standard. The desired roll angle is set in field #5 and is also defined in a right hand sense about the X axis of the global coordinate system. The desired pitch angle is set in field #6 in a right hand sense about the Y axis.

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
Bit 0: Speed<br>
Bit 1: Altitude<br>
Bit 2: Heading<br>
Bit 3: Roll<br>
Bit 4: Pitch<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>Speed</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units meters per second</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 327.67<br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>Altitude</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meter</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -10000.0<br>
Real Upper Limit: 35000.0<br>
</td>
</tr>
<tr>
<td align="center">4</td>
<td>Heading</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units radians</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -3.141592653589793<br>
Real Upper Limit: 3.141592653589793<br>
</td>
</tr>
<tr>
<td align="center">5</td>
<td>Roll</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units radians</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -3.141592653589793<br>
Real Upper Limit: 3.141592653589793<br>
</td>
</tr>
<tr>
<td align="center">6</td>
<td>Pitch</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units radians</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -3.141592653589793<br>
Real Upper Limit: 3.141592653589793<br>
</td>
</tr>
</tbody></table>

