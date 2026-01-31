---
title: PlatformMode
---

# PlatformMode

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:PlatformMode` |

## Description

The PlatformMode service manages and reports a platform's mode of operation.

## Message Set

| ID | Message |
| --- | --- |
| `FF21h` | [QueryPlatformMode](/messages/query-platform-mode-ff21) |
| `FF22h` | [QuerySupportedPlatformModes](/messages/query-supported-platform-modes-ff22) |
| `FF23h` | [ReportPlatformMode](/messages/report-platform-mode-ff23) |
| `FF24h` | [ReportSupportedPlatformModes](/messages/report-supported-platform-modes-ff24) |
| `FF20h` | [SetPlatformMode](/messages/set-platform-mode-ff20) |

## State Machine Diagram

![PlatformMode State Machine Diagram](/smDiagrams/PlatformMode.png)

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
<td rowspan="1">PlatformModeControlledLoop</td>
<td><a href="/messages/set-platform-mode-ff20
">SetPlatformMode</a></td>
<td><code>isControllingClient</code></td>
<td>setPlatformMode
</td>
</tr><tr>
<td align="center" rowspan="2">A</td>
<td rowspan="2">PlatformModeDefaultLoop</td>
<td><a href="/messages/query-platform-mode-ff21
">QueryPlatformMode</a></td>
<td><code></code></td>
<td><a href="/messages/report-platform-mode-ff23
">sendReportPlatformMode</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-supported-platform-modes-ff22
">QuerySupportedPlatformModes</a></td>
<td><code></code></td>
<td><a href="/messages/report-supported-platform-modes-ff24
">sendReportSupportedPlatformMode</a>
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
<td>sendReportPlatformMode</td>
<td>Send Action
</td>
<td>Send a Report Platform Mode message to querying client
<br>
<i>Output Message:</i> <a href="/messages/report-platform-mode-ff23
">ReportPlatformMode
</a></td>
</tr><tr>
<td>sendReportSupportedPlatformMode</td>
<td>Send Action
</td>
<td>Send a Report Supported Platform Modes message to querying client
<br>
<i>Output Message:</i> <a href="/messages/report-supported-platform-modes-ff24
">ReportSupportedPlatformModes
</a></td>
</tr><tr>
<td>setPlatformMode</td>
<td></td>
<td>Sets the platform mode, sending messages as needed to kick off the platform mode transition.
</td>
</tr></tbody></table>

