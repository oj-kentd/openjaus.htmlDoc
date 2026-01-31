---
title: ReportPassthroughMessageProperties
---

# Message: ReportPassthroughMessageProperties

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `D703h` |

## Description

This message reports properties related to the PassthroughMessage service, including the type of message filtering being done and the list of component for which this service filters.

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
<td><a href="#filtertyperec">FilterTypeRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
<tr>
<td align="center">2</td>
<td><a href="#mappedcomponentlist">MappedComponentList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

