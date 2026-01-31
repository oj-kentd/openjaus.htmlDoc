---
title: ReportVelocityState
---

# Message: ReportVelocityState

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4404h` |

## Description

This message is used to provide the receiver the linear velocity and rotational rate of the platform

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
Bit 0: VelocityX<br>
Bit 1: VelocityY<br>
Bit 2: VelocityZ<br>
Bit 3: VelocityRms<br>
Bit 4: RollRate<br>
Bit 5: PitchRate<br>
Bit 6: YawRate<br>
Bit 7: RateRms<br>
Bit 8: TimeStamp<br>
</td>
</tr><tr>
<td align="center">2</td>
<td>VelocityX</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meters per second</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -327.68<br>
Real Upper Limit: 327.67<br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>VelocityY</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meters per second</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -327.68<br>
Real Upper Limit: 327.67<br>
</td>
</tr>
<tr>
<td align="center">4</td>
<td>VelocityZ</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meters per second</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -327.68<br>
Real Upper Limit: 327.67<br>
</td>
</tr>
<tr>
<td align="center">5</td>
<td>VelocityRms</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meters per second</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 100.0<br>
</td>
</tr>
<tr>
<td align="center">6</td>
<td>RollRate</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units radians per second</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -32.768<br>
Real Upper Limit: 32.767<br>
</td>
</tr>
<tr>
<td align="center">7</td>
<td>PitchRate</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units radians per second</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -32.768<br>
Real Upper Limit: 32.767<br>
</td>
</tr>
<tr>
<td align="center">8</td>
<td>YawRate</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units radians per second</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -32.768<br>
Real Upper Limit: 32.767<br>
</td>
</tr>
<tr>
<td align="center">9</td>
<td>RateRms</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units radians per second</td>
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

