---
title: ReportGuardedTeleopStatus
---

# Message: ReportGuardedTeleopStatus

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `C514h` |

## Description

This message reports the current status of the guarded teleoperation manager.

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
<td>GuardedTeleopStatus</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>Disabled</i><br>1: <i>Enabled</i><br>2: <i>Active_StopOnObstacle</i><br>3: <i>Active_AvoidObstacle</i><br>4: <i>PitchoverLimit</i><br>5: <i>RolloverLimit</i><br></td>
</tr>
</tbody></table>

