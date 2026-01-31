---
title: QueryManipulatorEndEffectorForceTorque
---

# Message: QueryManipulatorEndEffectorForceTorque

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `D998h` |

## Description

This message is used to query the end effector force/torque.  The presence vector may be used to scope the data being returned.

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
<td>PresenceVector</td>
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>May be used to scope the data being returned.  A value of 255 means all values.<br>
</td>
</tr>
</tbody></table>

