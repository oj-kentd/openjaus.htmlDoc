---
title: ReportElement
---

# Message: ReportElement

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `441Ah` |

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
<td>ElementUID</td>
<td>Unsigned Short</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>1 to 65534, values of 0 and 65535 are reserved.<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>PreviousUID</td>
<td>Unsigned Short</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>UID of the previous (parent) element in this list. The value is 0 if this is the first (head) element.<br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>NextUID</td>
<td>Unsigned Short</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>UID of the next (child) element in this list. The value is 0 if this is the last (tail) element.<br>
</td>
</tr>
<tr>
<td align="center">4</td>
<td>ElementData</td>
<td>Blob<br>
Count Field: Unsigned Short</td>
<td><i>varies</i></td>
<td align="center"><i>false</i></td>
<td>
Format Enumeration:<br>
0: <i>JAUS_MESSAGE</i><br>
1: <i>INVALID_FORMAT</i><br>
</td>
</tr>
</tbody></table>

