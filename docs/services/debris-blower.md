---
title: DebrisBlower
---

# DebrisBlower

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:DebrisBlowerService` |

## Description

The Debris Blower Service provides a mechanism for controlling a debris/leaf blower.  The service itself is designed to support a wide variety of underlying hardware, so the Query/Report Capabilities pair allows a client to discover the abilities of a particular implementation, including variable speeds and control of discharge direction.  If the discharge direction cannot be changed remotely, or must be mechanically adjusted, the implementation should report identical values for minimum and maximum azimuth/elevation to indicate that it is not adjustable by the client.

## Message Set

| ID | Message |
| --- | --- |
| `D7B8h` | [QueryDebrisBlowerCapabilities](/messages/query-debris-blower-capabilities-d7b8) |
| `D7B9h` | [QueryDebrisBlowerConfiguration](/messages/query-debris-blower-configuration-d7b9) |
| `D7BBh` | [ReportDebrisBlowerCapabilities](/messages/report-debris-blower-capabilities-d7bb) |
| `D7BCh` | [ReportDebrisBlowerConfiguration](/messages/report-debris-blower-configuration-d7bc) |
| `D7BAh` | [SetDebrisBlowerConfiguration](/messages/set-debris-blower-configuration-d7ba) |

## State Machine Diagram

![DebrisBlower State Machine Diagram](/smDiagrams/DebrisBlower.png)

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
<td rowspan="3">DebrisBlowerDefaultLoop</td>
<td><a href="/messages/query-debris-blower-capabilities-d7b8
">QueryDebrisBlowerCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-debris-blower-capabilities-d7bb
">sendReportDebrisBlowerCapabilities</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-debris-blower-configuration-d7b9
">QueryDebrisBlowerConfiguration</a></td>
<td><code></code></td>
<td><a href="/messages/report-debris-blower-configuration-d7bc
">sendReportDebrisBlowerConfiguration</a>
</td>
</tr>
<tr>
<td><a href="/messages/set-debris-blower-configuration-d7ba
">SetDebrisBlowerConfiguration</a></td>
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
<td>sendReportDebrisBlowerCapabilities</td>
<td>Send Action
</td>
<td>Send a Report DebrisBlower Capabilities message
<br>
<i>Output Message:</i> <a href="/messages/report-debris-blower-capabilities-d7bb
">ReportDebrisBlowerCapabilities
</a></td>
</tr><tr>
<td>sendReportDebrisBlowerConfiguration</td>
<td>Send Action
</td>
<td>Send a Report DebrisBlower Configuration message
<br>
<i>Output Message:</i> <a href="/messages/report-debris-blower-configuration-d7bc
">ReportDebrisBlowerConfiguration
</a></td>
</tr><tr>
<td>setDebrisBlowerConfiguration</td>
<td></td>
<td>Set the debris blower to the specified Configuration
</td>
</tr></tbody></table>

