---
title: UpdateHealthReporter
---

# Message: UpdateHealthReporter

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `DD01h` |

## Description

This message is used to request Health Reporter initiation of commanded built-in-test (CBIT) for each Component the Health Reporter is responsible for.  Receipt of the UpdateHealthReporter causes the receiving HealthReporter to perform CBIT, the results of the test are returned via a subsequent ReportHealthDetails message, which provides the per-service heatlh status details.  A summarized health status report is available via ReportHealthSummary.  It is expected that if an UpdateHealthReporter request is pending, additional requests will neither queue an additional update nor interrupt an update in progress.

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
<tr><td colspan="6"><i>No Data Fields</i></td>
</tr></tbody></table>

