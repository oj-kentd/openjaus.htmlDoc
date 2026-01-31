---
title: RegisterFollower
---

# Message: RegisterFollower

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `FFD2h` |

## Description

This message allows a follower to register with the lead subsystem, or disconnect (cancel) a previous registration.  While such registration is not required for one subsystem to follow another, only subsystems that have registered with the leader can effect speed changes through the override mechanism.

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
<td>RequestType</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>CONNECT</i><br>1: <i>DISCONNECT</i><br></td>
</tr>
</tbody></table>

