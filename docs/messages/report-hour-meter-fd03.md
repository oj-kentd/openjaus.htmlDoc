---
title: ReportHourMeter
---

# Message: ReportHourMeter

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `FD03h` |

## Description

ReportHourMeter provides cumulative operation (powered-on) minutes for the node or component hosting the HealthReporter.

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
<td>ElapsedMinutes</td>
<td>Unsigned Integer</td>
<td>units minute</td>
<td align="center"><i>false</i></td>
<td>Operational (powered-on) minutes for CM<br>
</td>
</tr>
</tbody></table>

