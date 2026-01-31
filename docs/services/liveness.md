---
title: Liveness
---

# Liveness

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:core:Liveness` |

## Description

This service provides a means to maintain connection liveness between communicating components.

## Message Set

| ID | Message |
| --- | --- |
| `2202h` | [QueryHeartbeatPulse](/messages/query-heartbeat-pulse-2202) |
| `4202h` | [ReportHeartbeatPulse](/messages/report-heartbeat-pulse-4202) |
| `5557h` | [ReportStopped](/messages/report-stopped-5557) |

## State Machine Diagram

![Liveness State Machine Diagram](/smDiagrams/Liveness.png)

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
<td align="center" rowspan="3">A</td>
<td rowspan="3">HeartbeatLoop</td>
<td><a href="/messages/query-heartbeat-pulse-2202
">QueryHeartbeatPulse</a></td>
<td><code></code></td>
<td><a href="/messages/report-heartbeat-pulse-4202
">sendReportHeartbeatPulse</a>
</td>
</tr>
<tr>
<td><a href="/messages/report-heartbeat-pulse-4202
">ReportHeartbeatPulse</a></td>
<td><code></code></td>
<td>processHeartbeat
</td>
</tr>
<tr>
<td><a href="/messages/report-stopped-5557
">ReportStopped</a></td>
<td><code></code></td>
<td>processStopped
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
<td>processHeartbeat</td>
<td></td>
<td>Processes ReportHeatbeat Messages to see if a new JAUS entity exists
</td>
</tr><tr>
<td>processStopped</td>
<td></td>
<td>Processes ReportStopped Messages
</td>
</tr><tr>
<td>sendReportHeartbeatPulse</td>
<td>Send Action
</td>
<td>Send a Report Heartbeat Pulse message to the component that sent the query
<br>
<i>Output Message:</i> <a href="/messages/report-heartbeat-pulse-4202
">ReportHeartbeatPulse
</a></td>
</tr></tbody></table>

