---
title: ReportElementList
---

# Message: ReportElementList

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `441Bh` |

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
<td><a href="#elementidlist">ElementIdList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

