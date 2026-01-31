---
title: HealthMonitor
---

# HealthMonitor

| Property | Value |
| --- | --- |
| **Version** | 1.4 |
| **URN** | `urn:jaus:jss:exp:aeodrs:HealthMonitor` |

## Description

The Health Monitor Service gathers status and fault and provides a UGV status report to any requestor. The UGV status report provides information sufficient to allow the requestor to form queries to the relevant Health Reporters to obtain detailed status information as desired.

## Message Set

| ID | Message |
| --- | --- |
| `ED10h` | [QueryUGVSummary](/messages/query-ugvsummary-ed10) |
| `FD10h` | [ReportUGVSummary](/messages/report-ugvsummary-fd10) |
| `DD10h` | [UpdateUGVSummary](/messages/update-ugvsummary-dd10) |

## State Machine Diagram

![HealthMonitor State Machine Diagram](/smDiagrams/HealthMonitor.png)

## State Transitions

<table border="1" class="jaus-table">
<tbody><tr>
<th align="left" colspan="100"><font size="+2">
<b>State Transitions</b></font></th></tr>
<tr>
<td><b>Label</b></td>
<td><b>Transition</b></td>
<td><b>Trigger</b></td>
<td><b>Conditional</b></td>
<td><b>Actions</b></td>
</tr>
<tr>
<td align="center" rowspan="1">B</td>
<td rowspan="1">HealthMonitorControlledLoop</td>
<td><a href="/messages/update-ugvsummary-dd10
">UpdateUGVSummary</a></td>
<td><code>isControllingClient</code></td>
<td>updateUGVSummaryAction
</td>
</tr><tr>
<td align="center" rowspan="1">A</td>
<td rowspan="1">HealthMonitorDefaultLoop</td>
<td><a href="/messages/query-ugvsummary-ed10
">QueryUGVSummary</a></td>
<td><code></code></td>
<td><a href="/messages/report-ugvsummary-fd10
">sendReportUGVSummary</a>
</td>
</tr></tbody></table>

## Actions

<table border="1" class="jaus-table">
<tbody><tr>
<th align="left" colspan="4"><font size="+2">
<b>Actions</b></font></th></tr>
<tr>
<td><b>Action Name</b></td>
<td><b>Type</b></td>
<td><b>Description</b></td>
</tr>
<tr>
<td>sendReportUGVSummary</td>
<td>Send Action
</td>
<td>Construct and send ReportUGVSummary message to requestor.
<br>
<i>Output Message:</i> <a href="/messages/report-ugvsummary-fd10
">ReportUGVSummary
</a></td>
</tr><tr>
<td>updateUGVSummaryAction</td>
<td></td>
<td>Update UGV Summary data by requesting CM Health Summary information from each CM on the UGV. This summary data will be returned in subsequent ReportUGVSummary messages.
</td>
</tr></tbody></table>

