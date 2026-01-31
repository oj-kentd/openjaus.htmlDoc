---
title: ReportUGVSummary
---

# Message: ReportUGVSummary

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `FD10h` |

## Description

ReportUGVSummary provides a simple summary of the health status of the UGV to any requestor. The summary contains a list of (NodeID, severityCode) pairs, one per CM, in which the highest active severityCode is reported for each CM. This list is preceded in the message by a single severityCode for the UGV, which is the highest severity code reported by any CM in the UGV. This allows a HealthMonitor client to identify the CMs responsible for any UGV faults, and to subsequently query the HealthReporter of the responsible CM or (CMs) for full details.

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
<td><a href="#ugvseverityrec">UGVSeverityRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
<tr>
<td align="center">2</td>
<td><a href="#severitylist">SeverityList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>List of Node Severity Levels
</td>
</tr>
</tbody></table>

