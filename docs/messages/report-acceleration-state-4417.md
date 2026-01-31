---
title: ReportAccelerationState
---

# Message: ReportAccelerationState

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4417h` |

## Description

This message is used to provide the receiver the rate of change in linear velocity and rotational rate of the platform.

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
Bit 0: AccelerationX<br>
Bit 1: AccelerationY<br>
Bit 2: AccelerationZ<br>
Bit 3: AccelerationRms<br>
Bit 4: RollAcceleration<br>
Bit 5: PitchAcceleration<br>
Bit 6: YawAcceleration<br>
Bit 7: RotationalAccelerationRms<br>
Bit 8: TimeStamp<br>
</td>
</tr><tr>
<td align="center">2</td>
<td>AccelerationX</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meters per second squared</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -1310.68<br>
Real Upper Limit: 1310.68<br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>AccelerationY</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meters per second squared</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -1310.68<br>
Real Upper Limit: 1310.68<br>
</td>
</tr>
<tr>
<td align="center">4</td>
<td>AccelerationZ</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meters per second squared</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -1310.68<br>
Real Upper Limit: 1310.68<br>
</td>
</tr>
<tr>
<td align="center">5</td>
<td>AccelerationRms</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meters per second squared</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 100.0<br>
</td>
</tr>
<tr>
<td align="center">6</td>
<td>RollAcceleration</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units radians per second squared</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -13106.8<br>
Real Upper Limit: 13106.8<br>
</td>
</tr>
<tr>
<td align="center">7</td>
<td>PitchAcceleration</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units radians per second squared</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -13106.8<br>
Real Upper Limit: 13106.8<br>
</td>
</tr>
<tr>
<td align="center">8</td>
<td>YawAcceleration</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units radians per second squared</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -13106.8<br>
Real Upper Limit: 13106.8<br>
</td>
</tr>
<tr>
<td align="center">9</td>
<td>RotationalAccelerationRms</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units radians per second squared</td>
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

