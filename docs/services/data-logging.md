---
title: DataLogging
---

# DataLogging

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:iop:DataLogging` |

## Description

The Data Logging Service provides the means to activate, deactivate, and configure data logging, primarily intended for debug and diagnostic purposes.  Access to the log itself is not specified by this service, and may include implementation dependent options such as SSH, FTP, diagnostic web pages, or physical media.

## Message Set

| ID | Message |
| --- | --- |
| `9113h` | [QueryLoggerCapability](/messages/query-logger-capability-9113) |
| `9112h` | [QueryLoggerConfiguration](/messages/query-logger-configuration-9112) |
| `9111h` | [QueryLoggerStatus](/messages/query-logger-status-9111) |
| `9213h` | [ReportLoggerCapability](/messages/report-logger-capability-9213) |
| `9212h` | [ReportLoggerConfiguration](/messages/report-logger-configuration-9212) |
| `9211h` | [ReportLoggerStatus](/messages/report-logger-status-9211) |
| `9110h` | [SetLoggerConfiguration](/messages/set-logger-configuration-9110) |
| `9210h` | [SetLoggerConfigurationResponse](/messages/set-logger-configuration-response-9210) |
| `9109h` | [SetLoggerState](/messages/set-logger-state-9109) |

## State Machine Diagram

![DataLogging State Machine Diagram](/smDiagrams/DataLogging.png)

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
<td align="center" rowspan="5">A</td>
<td rowspan="5">DataLoggingDefaultLoop</td>
<td><a href="/messages/set-logger-state-9109
">SetLoggerState</a></td>
<td><code></code></td>
<td></td>
</tr>
<tr>
<td><a href="/messages/set-logger-configuration-9110
">SetLoggerConfiguration</a></td>
<td><code></code></td>
<td></td>
</tr>
<tr>
<td><a href="/messages/query-logger-configuration-9112
">QueryLoggerConfiguration</a></td>
<td><code></code></td>
<td><a href="/messages/report-logger-configuration-9212
">sendReportLoggerConfiguration</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-logger-status-9111
">QueryLoggerStatus</a></td>
<td><code></code></td>
<td><a href="/messages/report-logger-status-9211
">sendReportLoggerStatus</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-logger-capability-9113
">QueryLoggerCapability</a></td>
<td><code></code></td>
<td><a href="/messages/report-logger-capability-9213
">sendReportLoggerCapability</a>
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
<td>sendReportLoggerCapability</td>
<td>Send Action
</td>
<td>Send a Report Logger Capability message
<br>
<i>Output Message:</i> <a href="/messages/report-logger-capability-9213
">ReportLoggerCapability
</a></td>
</tr><tr>
<td>sendReportLoggerConfiguration</td>
<td>Send Action
</td>
<td>Send a Report Logger Configuration message
<br>
<i>Output Message:</i> <a href="/messages/report-logger-configuration-9212
">ReportLoggerConfiguration
</a></td>
</tr><tr>
<td>sendReportLoggerStatus</td>
<td>Send Action
</td>
<td>Send a Report Logger Status message
<br>
<i>Output Message:</i> <a href="/messages/report-logger-status-9211
">ReportLoggerStatus
</a></td>
</tr><tr>
<td>setLoggerConfiguration</td>
<td></td>
<td>Update the configuration to the requested value
</td>
</tr><tr>
<td>setLoggerState</td>
<td></td>
<td>Update the state to the requested value
</td>
</tr></tbody></table>

