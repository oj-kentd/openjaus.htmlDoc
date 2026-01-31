---
title: ReportDebrisBlowerConfiguration
---

# Message: ReportDebrisBlowerConfiguration

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `D7BCh` |

## Description

This message is used to report the current Configuration of the debris blower.

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
Bit 0: OnOffStatus<br>
Bit 1: Azimuth<br>
Bit 2: Elevation<br>
</td>
</tr><tr>
<td align="center">2</td>
<td>OnOffStatus</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>true</i></td>
<td>
Enumeration Values:<br>
0: <i>OFF</i><br>1: <i>ON_SingleSpeed</i><br>2: <i>ON_Low</i><br>3: <i>ON_Medium</i><br>4: <i>ON_High</i><br></td>
</tr>
<tr>
<td align="center">3</td>
<td>Azimuth</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units radians</td>
<td align="center"><i>true</i></td>
<td>Desired azimuth angle of discharge, where a value of zero (0) represents the forward-direction of travel for the vehicle.<br><br>
Real Lower Limit: -3.141592653589793<br>
Real Upper Limit: 3.141592653589793<br>
</td>
</tr>
<tr>
<td align="center">4</td>
<td>Elevation</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units radians</td>
<td align="center"><i>true</i></td>
<td>Desired elevation angle of discharge, where a value of zero (0) represents the direction parallel to the ground.<br><br>
Real Lower Limit: -1.5707963267948966<br>
Real Upper Limit: 1.5707963267948966<br>
</td>
</tr>
</tbody></table>

