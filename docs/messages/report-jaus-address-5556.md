---
title: ReportJausAddress
---

# Message: ReportJausAddress

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `5556h` |

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
<td>Address</td>
<td>BitField<br>
Integer Size: Unsigned Integer</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
[0, 7] : <i>Component</i> (range: 0 ... 255)<br>[8, 15] : <i>Node</i> (range: 0 ... 255)<br>[16, 31] : <i>Subsystem</i> (range: 0 ... 65535)<br></td>
</tr>
</tbody></table>

