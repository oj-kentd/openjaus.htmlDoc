---
title: SetAuthority
---

# Message: SetAuthority

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `0001h` |

## Description

(Deprecated) This message shall set the command authority of the receiving component.  The authority bits range in value from 0 to 255 with 255 being the highest.

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
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

