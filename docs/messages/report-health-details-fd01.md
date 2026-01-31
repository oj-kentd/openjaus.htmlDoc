---
title: ReportHealthDetails
---

# Message: ReportHealthDetails

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `FD01h` |

## Description

ReportHealthDetails provides a report of the most recent health status for all Services provide by each Component the HealthReporter is responsible for.  The report is constituted as a nested list.  A list of Components contains, for each Component, a list of status records for each Service provided.  Errors not local to a specific service (e.g., general hardware faults of the node) are to be reported in the HealthReporter component's list, as Health Reporter errors.

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
<td><a href="#detailedstatuslist">DetailedStatusList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

