---
title: HealthReporter
---

# HealthReporter

| Property | Value |
| --- | --- |
| **Version** | 1.4 |
| **URN** | `urn:jaus:jss:exp:aeodrs:HealthReporter` |

## Description

The Health Reporter service implementation initiates built-in test (BIT) operations at Power-On (PBIT), and subsets of built-in-test in the background during runtime (RBIT) and when requested via command message (CBIT). The Health Reporter implementation should maintain the most current BIT results, and provide reports of BIT results. The Health Reporter should provide maintenance reminder timers as well, with support for up to 16 maintenance timers per Health Reporter instance.

## Message Set

| ID | Message |
| --- | --- |
| `ED01h` | [QueryHealthDetails](/messages/query-health-details-ed01) |
| `ED02h` | [QueryHealthSummary](/messages/query-health-summary-ed02) |
| `ED03h` | [QueryHourMeter](/messages/query-hour-meter-ed03) |
| `ED05h` | [QueryReminder](/messages/query-reminder-ed05) |
| `ED04h` | [QueryReminderSummary](/messages/query-reminder-summary-ed04) |
| `FD01h` | [ReportHealthDetails](/messages/report-health-details-fd01) |
| `FD02h` | [ReportHealthSummary](/messages/report-health-summary-fd02) |
| `FD03h` | [ReportHourMeter](/messages/report-hour-meter-fd03) |
| `FD05h` | [ReportReminder](/messages/report-reminder-fd05) |
| `FD04h` | [ReportReminderSummary](/messages/report-reminder-summary-fd04) |
| `DD05h` | [ResetReminder](/messages/reset-reminder-dd05) |
| `DD01h` | [UpdateHealthReporter](/messages/update-health-reporter-dd01) |

## State Machine Diagram

![HealthReporter State Machine Diagram](/smDiagrams/HealthReporter.png)

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
<td align="center" rowspan="2">B</td>
<td rowspan="2">HealthReporterControlledLoop</td>
<td><a href="/messages/update-health-reporter-dd01
">UpdateHealthReporter</a></td>
<td><code>isControllingClient</code></td>
<td>updateHealthReporterAction
</td>
</tr>
<tr>
<td><a href="/messages/reset-reminder-dd05
">ResetReminder</a></td>
<td><code>isControllingClient</code></td>
<td>resetReminderAction
</td>
</tr><tr>
<td align="center" rowspan="5">A</td>
<td rowspan="5">HealthReporterDefaultLoop</td>
<td><a href="/messages/query-health-details-ed01
">QueryHealthDetails</a></td>
<td><code></code></td>
<td><a href="/messages/report-health-details-fd01
">sendReportHealthDetails</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-health-summary-ed02
">QueryHealthSummary</a></td>
<td><code></code></td>
<td><a href="/messages/report-health-summary-fd02
">sendReportHealthSummary</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-hour-meter-ed03
">QueryHourMeter</a></td>
<td><code></code></td>
<td><a href="/messages/report-hour-meter-fd03
">sendReportHourMeter</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-reminder-summary-ed04
">QueryReminderSummary</a></td>
<td><code></code></td>
<td><a href="/messages/report-reminder-summary-fd04
">sendReportReminderSummary</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-reminder-ed05
">QueryReminder</a></td>
<td><code></code></td>
<td><a href="/messages/report-reminder-fd05
">sendReportReminder</a>
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
<td>resetReminderAction</td>
<td></td>
<td>Reset the Reminder whose ID was specified in the ResetReminder message.
</td>
</tr><tr>
<td>sendReportHealthDetails</td>
<td>Send Action
</td>
<td>Send a ReportHealthDetails message
<br>
<i>Output Message:</i> <a href="/messages/report-health-details-fd01
">ReportHealthDetails
</a></td>
</tr><tr>
<td>sendReportHealthSummary</td>
<td>Send Action
</td>
<td>Send a ReportHealthSummary message
<br>
<i>Output Message:</i> <a href="/messages/report-health-summary-fd02
">ReportHealthSummary
</a></td>
</tr><tr>
<td>sendReportHourMeter</td>
<td>Send Action
</td>
<td>Send a ReportHourMeter message
<br>
<i>Output Message:</i> <a href="/messages/report-hour-meter-fd03
">ReportHourMeter
</a></td>
</tr><tr>
<td>sendReportReminder</td>
<td>Send Action
</td>
<td>Send a ReportReminder message
<br>
<i>Output Message:</i> <a href="/messages/report-reminder-fd05
">ReportReminder
</a></td>
</tr><tr>
<td>sendReportReminderSummary</td>
<td>Send Action
</td>
<td>Send a ReportReminderSummary message
<br>
<i>Output Message:</i> <a href="/messages/report-reminder-summary-fd04
">ReportReminderSummary
</a></td>
</tr><tr>
<td>updateHealthReporterAction</td>
<td></td>
<td>Initiate command built-in test (CBIT) non-destructive tests, and store results for subsequent reporting via ReportHealthSummary and ReportHealthDetails.
</td>
</tr></tbody></table>

