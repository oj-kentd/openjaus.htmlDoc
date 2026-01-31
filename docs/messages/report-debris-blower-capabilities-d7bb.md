---
title: ReportDebrisBlowerCapabilities
---

# Message: ReportDebrisBlowerCapabilities

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `D7BBh` |

## Description

This message is used to report the capabilities for a debris blower.  It is expected that systems will support either a single (fixed) speed, or multiple settings that can be categorized as low, medium, or high.  For systems in which the angle of discharge is not modifiable, or must be modified mechanically, implementations should report the same value for minimum and maximum azimuth/elevation.

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
<td>SpeedCapabilities</td>
<td>BitField<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>Bit field representing the underlying hardware capabilities.  A value of one (1) means the speed is supported.<br><br>
0: <i>ON_SingleSpeed</i><br>
1: <i>ON_Low</i><br>
2: <i>ON_Medium</i><br>
3: <i>ON_High</i><br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>MinimumAzimuth</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units radians</td>
<td align="center"><i>false</i></td>
<td>Minimum allowed azimuth angle of discharge, where a value of zero (0) represents the forward-direction of travel for the vehicle.<br><br>
Real Lower Limit: -3.141592653589793<br>
Real Upper Limit: 3.141592653589793<br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>MaximumAzimuth</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units radians</td>
<td align="center"><i>false</i></td>
<td>Maximum allowed azimuth angle of discharge, where a value of zero (0) represents the forward-direction of travel for the vehicle.<br><br>
Real Lower Limit: -3.141592653589793<br>
Real Upper Limit: 3.141592653589793<br>
</td>
</tr>
<tr>
<td align="center">4</td>
<td>MinimumElevation</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units radians</td>
<td align="center"><i>false</i></td>
<td>Minimum allowed elevation angle of discharge, where a value of zero (0) represents the direction parallel to the ground.<br><br>
Real Lower Limit: -1.5707963267948966<br>
Real Upper Limit: 1.5707963267948966<br>
</td>
</tr>
<tr>
<td align="center">5</td>
<td>MaximumElevation</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units radians</td>
<td align="center"><i>false</i></td>
<td>Maximum allowed elevation angle of discharge, where a value of zero (0) represents the direction parallel to the ground.<br><br>
Real Lower Limit: -1.5707963267948966<br>
Real Upper Limit: 1.5707963267948966<br>
</td>
</tr>
</tbody></table>

