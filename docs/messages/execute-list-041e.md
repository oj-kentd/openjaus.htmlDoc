---
title: ExecuteList
---

# Message: ExecuteList

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `041Eh` |

## Description

This message is used to begin execution of a sequential list of motion commands. Field #2 sets the desired speed of the platform. The starting element UID can also be specified, where a value of zero (0) indicates the first (head) element in the list.

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
Bit 0: ElementUID<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>Speed</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units meters per second</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 327.67<br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>ElementUID</td>
<td>Unsigned Short</td>
<td>units one</td>
<td align="center"><i>true</i></td>
<td>Element UID of the starting element. A value of zero (0) indicated the first (head) element of the list.<br>
</td>
</tr>
</tbody></table>

