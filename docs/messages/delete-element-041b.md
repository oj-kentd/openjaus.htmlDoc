---
title: DeleteElement
---

# Message: DeleteElement

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `041Bh` |

## Description

This message is used to delete one or more elements from a list. Each element is uniquely identified by the UID.

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
<td>RequestID</td>
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>ID of the request. This ID will be returned in the response message.<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td><a href="#deleteelementlist">DeleteElementList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

