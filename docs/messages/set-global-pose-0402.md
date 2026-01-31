---
title: SetGlobalPose
---

# Message: SetGlobalPose

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `0402h` |

## Description

This message is used to set the global pose values.

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
<td>Unsigned Short</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Bit 0: Latitude<br>
Bit 1: Longitude<br>
Bit 2: Altitude<br>
Bit 3: PositionRms<br>
Bit 4: Roll<br>
Bit 5: Pitch<br>
Bit 6: Yaw<br>
Bit 7: AttitudeRms<br>
Bit 8: TimeStamp<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>Latitude</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units degrees</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -90.0<br>
Real Upper Limit: 90.0<br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>Longitude</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units degrees</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -180.0<br>
Real Upper Limit: 180.0<br>
</td>
</tr>
<tr>
<td align="center">4</td>
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
<td align="center">5</td>
<td>PositionRms</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meter</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 100.0<br>
</td>
</tr>
<tr>
<td align="center">6</td>
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
<td align="center">7</td>
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
<tr>
<td align="center">8</td>
<td>Yaw</td>
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
<td align="center">9</td>
<td>AttitudeRms</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units radians</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 3.141592653589793<br>
</td>
</tr>
<tr>
<td align="center">10</td>
<td>TimeStamp</td>
<td>TimeStamp</td>
<td></td>
<td align="center"><i>true</i></td>
<td></td>
</tr>
</tbody></table>

