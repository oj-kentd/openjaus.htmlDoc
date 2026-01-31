---
title: ReportGuardedTeleopConfiguration
---

# Message: ReportGuardedTeleopConfiguration

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `C513h` |

## Description

This message is used to report the currently configured behavior for guarded teleoperation.

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
Bit 0: PathTolerance<br>
</td>
</tr><tr>
<td align="center">2</td>
<td>State</td>
<td>BitField<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
[0, 1] : ObstacleAvoidanceBehavior<br>
<table border="0" cellpadding="0" cellspacing="0">
<tbody><tr><td></td><td>0: <i>DO_NOTHING</i></td></tr><tr><td></td><td>1: <i>STOP_ON_PATH</i></td></tr><tr><td></td><td>2: <i>DEVIATE_FROM_PATH_TO_AVOID_OBSTACLE</i></td></tr></tbody></table>
2: <i>StopOnPitchoverLimit</i><br>
3: <i>StopOnRolloverLimit</i><br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>PathTolerance</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meter</td>
<td align="center"><i>true</i></td>
<td>Maximum allowed deviation for obstacle avoidance.  A value of 0 is used for infinite tolerance.<br><br>
Real Lower Limit: 0.0<br>
Real Upper Limit: 100000.0<br>
</td>
</tr>
</tbody></table>

