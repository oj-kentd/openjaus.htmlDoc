---
title: ReportPanTiltMotionProfile
---

# Message: ReportPanTiltMotionProfile

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4627h` |

## Description

This message provides the receiver with the current motion profile for the pan tilt mechanism.

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
<td align="center">2</td>
<td>Joint1MaxAccelerationRate</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units radians per second squared</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 31.41592653589793<br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>Joint1MaxDecelerationRate</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units radians per second squared</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 31.41592653589793<br>
</td>
</tr>
<tr>
<td align="center">4</td>
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
<tr>
<td align="center">5</td>
<td>Joint2MaxAccelerationRate</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units radians per second squared</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 31.41592653589793<br>
</td>
</tr>
<tr>
<td align="center">6</td>
<td>Joint2MaxDecelerationRate</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units radians per second squared</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 31.41592653589793<br>
</td>
</tr>
</tbody></table>

