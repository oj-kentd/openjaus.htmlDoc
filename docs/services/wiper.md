---
title: Wiper
---

# Wiper

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:WiperService` |

## Description

The Wiper Service provides a mechanism for controlling surface cleaning mechanisms, such as windshield wipers or camera cleaners.  The Report Capabilities message can be used to determine the functionality supported by the underlying hardware.  Note that while wipers are assumed as the basic cleaning modality, the service can also be applied to cellophane tear-away and other cleaning systems.

## Message Set

| ID | Message |
| --- | --- |
| `D7C0h` | [QueryWiperCapabilities](/messages/query-wiper-capabilities-d7c0) |
| `D7C1h` | [QueryWiperStatus](/messages/query-wiper-status-d7c1) |
| `D7C3h` | [ReportWiperCapabilities](/messages/report-wiper-capabilities-d7c3) |
| `D7C4h` | [ReportWiperStatus](/messages/report-wiper-status-d7c4) |
| `D7C2h` | [SetWiperStatus](/messages/set-wiper-status-d7c2) |

## State Machine Diagram

![Wiper State Machine Diagram](/smDiagrams/Wiper.png)

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
<td rowspan="3">WiperDefaultLoop</td>
<td><a href="/messages/query-wiper-capabilities-d7c0
">QueryWiperCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-wiper-capabilities-d7c3
">sendReportWiperCapabilities</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-wiper-status-d7c1
">QueryWiperStatus</a></td>
<td><code></code></td>
<td><a href="/messages/report-wiper-status-d7c4
">sendReportWiperStatus</a>
</td>
</tr>
<tr>
<td><a href="/messages/set-wiper-status-d7c2
">SetWiperStatus</a></td>
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
<td>activateWipers</td>
<td></td>
<td>Set the specified wiper level state.
</td>
</tr><tr>
<td>sendReportWiperCapabilities</td>
<td>Send Action
</td>
<td>Send a Report Wiper Capabilities message
<br>
<i>Output Message:</i> <a href="/messages/report-wiper-capabilities-d7c3
">ReportWiperCapabilities
</a></td>
</tr><tr>
<td>sendReportWiperStatus</td>
<td>Send Action
</td>
<td>Send a Report Wiper Status message
<br>
<i>Output Message:</i> <a href="/messages/report-wiper-status-d7c4
">ReportWiperStatus
</a></td>
</tr></tbody></table>

