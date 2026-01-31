---
title: ReportTime
---

# Message: ReportTime

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4011h` |

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
<td>Presence Vector</td>
<td>Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Bit 0: Time<br>
Bit 1: Date<br>
</td>
</tr><tr>
<td align="center">2</td>
<td>Time</td>
<td>TimeStamp</td>
<td></td>
<td align="center"><i>true</i></td>
<td></td>
</tr>
<tr>
<td align="center">3</td>
<td>Date</td>
<td>DateStamp</td>
<td></td>
<td align="center"><i>true</i></td>
<td></td>
</tr>
</tbody></table>

