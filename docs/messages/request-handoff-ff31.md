---
title: RequestHandoff
---

# Message: RequestHandoff

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `FF31h` |

## Description

Creates or updates a request for control handoff from the current controlling client.

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
<td>AuthorityCode</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0...255: <i>Null_Authority</i><br></td>
</tr>
<tr>
<td align="center">2</td>
<td>Explanation</td>
<td>VariableLengthString<br>
Count Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

