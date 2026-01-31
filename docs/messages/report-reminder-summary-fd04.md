---
title: ReportReminderSummary
---

# Message: ReportReminderSummary

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `FD04h` |

## Description

ReportReminderSummary provides a simple status report for each maintenance reminder.  Each reminder configured is represented by a record containing its reminder ID and a binary status (expired/non-expired).

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
<td><a href="#remindersummarylist">ReminderSummaryList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

