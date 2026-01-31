---
title: ReportPanTiltJointEffort
---

# Message: ReportPanTiltJointEffort

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4621h` |

## Description

This message is used to provide the receiver the percent effort that is currently being applied to the two joints of the pan tilt mechanism.

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
<td>Joint1Effort</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>Percent of maximum effort for this joint. Each joint must have a corresponding entry in the list.<br><br>
Real Lower Limit: -100.0<br>
Real Upper Limit: 100.0<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>Joint2Effort</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>Percent of maximum effort for this joint. Each joint must have a corresponding entry in the list.<br><br>
Real Lower Limit: -100.0<br>
Real Upper Limit: 100.0<br>
</td>
</tr>
</tbody></table>

