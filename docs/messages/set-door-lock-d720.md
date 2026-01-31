---
title: SetDoorLock
---

# Message: SetDoorLock

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `D720h` |

## Description

This message is used to lock or unlock the doors.

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
<td>LockState</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>Unlock</i><br>1: <i>Lock</i><br></td>
</tr>
</tbody></table>

