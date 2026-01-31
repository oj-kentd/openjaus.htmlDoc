---
title: SetAckermannConfiguration
---

# Message: SetAckermannConfiguration

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `0500h` |

## Description

Sets Ackermann driver parameters

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
Bit 0: MaxSteeringRate<br>
Bit 1: MaxSteeringTorque<br>
</td>
</tr><tr>
<td align="center">2</td>
<td>SteeringAngle</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units radians</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -1.5707963267948966<br>
Real Upper Limit: 1.5707963267948966<br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>ThrottleEffort</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Byte</td>
<td>units percent</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 100.0<br>
</td>
</tr>
<tr>
<td align="center">4</td>
<td>BrakeEffort</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Byte</td>
<td>units percent</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 100.0<br>
</td>
</tr>
<tr>
<td align="center">5</td>
<td>MaxSteeringRate</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units radians per second</td>
<td align="center"><i>true</i></td>
<td>The absolute value of the maximum rate of change in the steering angle. Lower values result in more gradual steering changes.<br><br>
Real Lower Limit: 0.0<br>
Real Upper Limit: 32.767<br>
</td>
</tr>
<tr>
<td align="center">6</td>
<td>MaxSteeringTorque</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units newton meter</td>
<td align="center"><i>true</i></td>
<td>The absolute value of the maximum torque allowed to effect a change in steering angle, as experienced at the steering wheel. Lower values allow a human operator to override remote commands<br><br>
Real Lower Limit: 0.0<br>
Real Upper Limit: 500.0<br>
</td>
</tr>
</tbody></table>

