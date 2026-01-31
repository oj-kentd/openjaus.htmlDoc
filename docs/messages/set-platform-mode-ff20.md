---
title: SetPlatformMode
---

# Message: SetPlatformMode

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `FF20h` |

## Description

Sets the platform mode.

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
<td>PlatformMode</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>Standard_Operating</i><br>1: <i>Training</i><br>2: <i>Maintenance</i><br>175: <i>RESERVED_175</i><br>176: <i>RESERVED_176</i><br>177...255: <i>Reserved</i><br></td>
</tr>
</tbody></table>

