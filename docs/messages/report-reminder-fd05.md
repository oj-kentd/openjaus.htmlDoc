---
title: ReportReminder
---

# Message: ReportReminder

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `FD05h` |

## Description

ReportReminder conveys a reprot of status and configuration for the maintenance reminder specified by ReminderID.  Configuration information includes the ReminderID, a human-readable string identifying the reminder and its purpose, and the reminders service interval.  Status includes a Boolean indicating whether the reminder has been asserted (service interval reached) and the current elapsed (power-on) time since the reminder was last reset (serviced).

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
<td>ReminderID</td>
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>ReminderStatus</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>NOT_EXPIRED</i><br>1: <i>EXPIRED</i><br></td>
</tr>
<tr>
<td align="center">3</td>
<td>Descriptor</td>
<td>VariableLengthString<br>
Count Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>Human-readable string describing the maintenance reminder associated with ReminderID.<br>
</td>
</tr>
<tr>
<td align="center">4</td>
<td>ServiceInterval</td>
<td>Unsigned Integer</td>
<td>units minute</td>
<td align="center"><i>false</i></td>
<td>Service reminder (duration) in minutes.<br>
</td>
</tr>
<tr>
<td align="center">5</td>
<td>ElapsedTime</td>
<td>Unsigned Integer</td>
<td>units minute</td>
<td align="center"><i>false</i></td>
<td>Current elapsed CM powered-on time since last service interval reset.<br>
</td>
</tr>
</tbody></table>

