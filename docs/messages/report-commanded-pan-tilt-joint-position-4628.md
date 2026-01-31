---
title: ReportCommandedPanTiltJointPosition
---

# Message: ReportCommandedPanTiltJointPosition

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4628h` |

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
<td>Joint1Position</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units radians</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -25.132741228718345<br>
Real Upper Limit: 25.132741228718345<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>Joint2Position</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units radians</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -25.132741228718345<br>
Real Upper Limit: 25.132741228718345<br>
</td>
</tr>
</tbody></table>

