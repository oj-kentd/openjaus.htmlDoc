---
title: ReportEvents
---

# Message: ReportEvents

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `41F0h` |

## Description

This message is used to report the active event requests that match the requirements provided in the QueryEvents message.

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
<td><a href="#eventlist">EventList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>List of Reported Events
</td>
</tr>
</tbody></table>

