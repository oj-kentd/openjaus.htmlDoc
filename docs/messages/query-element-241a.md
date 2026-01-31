---
title: QueryElement
---

# Message: QueryElement

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `241Ah` |

## Description

This message is used to query an element from a list. The element is uniquely identified by the UID.

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
</tbody></table>

