---
title: SetJointEffort
---

# Message: SetJointEffort

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `0601h` |

## Description

This message is used to control joint actuators in an open loop fashion. The command states the percentage level of effort that each actuator should exercise in order to move its corresponding joint. The message must contain effort commands for each joint in the manipulator.

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
<td><a href="#jointeffortlist">JointEffortList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

