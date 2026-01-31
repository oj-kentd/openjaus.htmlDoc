---
title: ReportCommandedEndEffectorVelocityState
---

# Message: ReportCommandedEndEffectorVelocityState

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4612h` |

## Description

This message provides the receiver with the commanded end effector velocity state for the manipulator.

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
<td>AngularVelocityComponentX</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units radians per second</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -62.83185307179586<br>
Real Upper Limit: 62.83185307179586<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>AngularVelocityComponentY</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units radians per second</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -62.83185307179586<br>
Real Upper Limit: 62.83185307179586<br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>AngularVelocityComponentZ</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units radians per second</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -62.83185307179586<br>
Real Upper Limit: 62.83185307179586<br>
</td>
</tr>
<tr>
<td align="center">4</td>
<td>LinearVelocityComponentX</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meters per second</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -10.0<br>
Real Upper Limit: 10.0<br>
</td>
</tr>
<tr>
<td align="center">5</td>
<td>LinearVelocityComponentY</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meters per second</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -10.0<br>
Real Upper Limit: 10.0<br>
</td>
</tr>
<tr>
<td align="center">6</td>
<td>LinearVelocityComponentZ</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meters per second</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -10.0<br>
Real Upper Limit: 10.0<br>
</td>
</tr>
</tbody></table>

