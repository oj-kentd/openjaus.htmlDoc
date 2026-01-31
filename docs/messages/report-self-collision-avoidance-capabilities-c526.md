---
title: ReportSelfCollisionAvoidanceCapabilities
---

# Message: ReportSelfCollisionAvoidanceCapabilities

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `C526h` |

## Description

This message is used to report which behaviors are supported for self-collision avoidance.

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
<td>SupportedBehaviors</td>
<td>BitField<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>A high value (1) indicates the component supports the defined behavior.<br><br>
0: <i>StopOnObstacle</i><br>
1: <i>AvoidObstacle</i><br>
</td>
</tr>
</tbody></table>

