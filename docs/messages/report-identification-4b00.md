---
title: ReportIdentification
---

# Message: ReportIdentification

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4B00h` |

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
<td>QueryType</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
1: <i>SYSTEM</i><br>2: <i>SUBSYSTEM</i><br>3: <i>NODE</i><br>4: <i>COMPONENT</i><br></td>
</tr>
<tr>
<td align="center">2</td>
<td>Type</td>
<td>Unsigned Short</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>Identification</td>
<td>VariableLengthString<br>
Count Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

