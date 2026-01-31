---
title: ReportElementCount
---

# Message: ReportElementCount

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `441Ch` |

## Description

This message is used to report a single element from a list. The element is uniquely identified by the UID, while it's position within the list is denoted by the previous (parent) and next (child) elements. The message data is identical to the Element Record in ID 041Ah: SetElement.

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
<td>ElementCount</td>
<td>Unsigned Short</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>Number of elements currently in the list.<br>
</td>
</tr>
</tbody></table>

