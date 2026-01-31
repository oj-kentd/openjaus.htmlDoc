---
title: ReportActiveElement
---

# Message: ReportActiveElement

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `441Eh` |

## Description

This message is used to report the identifier of the current list element being executed.

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
<td>ElementUID</td>
<td>Unsigned Short</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>UID of the active list element. A value of 0 implies that no lists are executing.<br>
</td>
</tr>
</tbody></table>

