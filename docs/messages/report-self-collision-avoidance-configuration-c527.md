---
title: ReportSelfCollisionAvoidanceConfiguration
---

# Message: ReportSelfCollisionAvoidanceConfiguration

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `C527h` |

## Description

This message is used to report the currently configured behavior for self-collision avoidance.

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
<td>SelfCollisionAvoidanceState</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>DoNothing</i><br>1: <i>StopOnPath</i><br>2: <i>DeviateFromPathToAvoidCollisions</i><br></td>
</tr>
<tr>
<td align="center">2</td>
<td>Priority</td>
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>The relative priority used to establish precedence when multiple moving objects support self-collision avoidance.  Lower values should yield to objects with higher values.  Fixed objects, or moving objects that do not support self-collision avoidance, are considered to have maximum priority (255).  If two objects have the same priority, the behavior is non-deterministic.<br>
</td>
</tr>
</tbody></table>

