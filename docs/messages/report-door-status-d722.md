---
title: ReportDoorStatus
---

# Message: ReportDoorStatus

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `D722h` |

## Description

This message is used to report the current state of the doors.

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
<td>LockStatus</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>Unlocked</i><br>1: <i>Locked</i><br></td>
</tr>
<tr>
<td align="center">2</td>
<td>DoorAjar</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>DoorAjar_False</i><br>1: <i>DoorAjar_True</i><br></td>
</tr>
</tbody></table>

