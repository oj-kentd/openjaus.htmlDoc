---
title: ReportFilterType
---

# Message: ReportFilterType

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `C531h` |

## Description

This message is sent as a response to a QueryFilterType message.  It reports what this filter is being used for.  Multiple uses may be reported.

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
<td>FilterType</td>
<td>BitField<br>
Integer Size: Unsigned Short</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>A bit field where a high value (1) specifies this filter is used for that purpose<br><br>
0: <i>SELF_COLLISION_AVOIDANCE</i><br>
</td>
</tr>
</tbody></table>

