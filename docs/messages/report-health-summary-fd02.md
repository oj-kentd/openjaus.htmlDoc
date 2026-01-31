---
title: ReportHealthSummary
---

# Message: ReportHealthSummary

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `FD02h` |

## Description

ReportHealthSummary provides a list of (ComponentID, severityCode) for each Component.  A zero-valued severity code indicates normal operation of the Component; otherwise the severity code reported for a Component will be the highest severity code by any Service provided by that Component.

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
<td><a href="#summarystatuslist">SummaryStatusList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

