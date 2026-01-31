---
title: TirePressure
---

# TirePressure

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:TirePressureService` |

## Description

The Tire Pressure Service provides a mechanism for reporting and potentially controlling the air pressure in one or more tires, depending on the capabilities of the underlying hardware.

## Message Set

| ID | Message |
| --- | --- |
| `D7B0h` | [QueryTirePressureCapabilities](/messages/query-tire-pressure-capabilities-d7b0) |
| `D7B1h` | [QueryTirePressureStatus](/messages/query-tire-pressure-status-d7b1) |
| `D7B3h` | [ReportTirePressureCapabilities](/messages/report-tire-pressure-capabilities-d7b3) |
| `D7B4h` | [ReportTirePressureStatus](/messages/report-tire-pressure-status-d7b4) |
| `D7B2h` | [SetTirePressureStatus](/messages/set-tire-pressure-status-d7b2) |

## State Machine Diagram

![TirePressure State Machine Diagram](/smDiagrams/TirePressure.png)

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
<td rowspan="3">TirePressureDefaultLoop</td>
<td><a href="/messages/query-tire-pressure-capabilities-d7b0
">QueryTirePressureCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-tire-pressure-capabilities-d7b3
">sendReportTirePressureCapabilities</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-tire-pressure-status-d7b1
">QueryTirePressureStatus</a></td>
<td><code></code></td>
<td><a href="/messages/report-tire-pressure-status-d7b4
">sendReportTirePressureStatus</a>
</td>
</tr>
<tr>
<td><a href="/messages/set-tire-pressure-status-d7b2
">SetTirePressureStatus</a></td>
<td><code></code></td>
<td></td>
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
<td>activatePressureController</td>
<td></td>
<td>Inflate or deflate tire to specified pressure
</td>
</tr><tr>
<td>sendReportTirePressureCapabilities</td>
<td>Send Action
</td>
<td>Send a Report Tire Pressure Capabilities message
<br>
<i>Output Message:</i> <a href="/messages/report-tire-pressure-capabilities-d7b3
">ReportTirePressureCapabilities
</a></td>
</tr><tr>
<td>sendReportTirePressureStatus</td>
<td>Send Action
</td>
<td>Send a Report Tire Pressure Status message
<br>
<i>Output Message:</i> <a href="/messages/report-tire-pressure-status-d7b4
">ReportTirePressureStatus
</a></td>
</tr></tbody></table>

