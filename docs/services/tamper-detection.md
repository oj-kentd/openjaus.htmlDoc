---
title: TamperDetection
---

# TamperDetection

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:TamperDetection` |

## Description

The Tamper Detection Service provides a mechanism to report when tampering has occurred.

## Message Set

| ID | Message |
| --- | --- |
| `DE67h` | [QueryTamperDetectionStatus](/messages/query-tamper-detection-status-de67) |
| `DE68h` | [ReportTamperDetectionStatus](/messages/report-tamper-detection-status-de68) |
| `DE66h` | [SetTamperDetectionState](/messages/set-tamper-detection-state-de66) |

## State Machine Diagram

![TamperDetection State Machine Diagram](/smDiagrams/TamperDetection.png)

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
<td rowspan="1">TamperDetectionControlledLoop</td>
<td><a href="/messages/set-tamper-detection-state-de66
">SetTamperDetectionState</a></td>
<td><code>isControllingClient &amp;&amp; ( !isDisableCommand || !alwaysOn )</code></td>
<td>setTamperDetectionState
</td>
</tr><tr>
<td align="center" rowspan="1">A</td>
<td rowspan="1">TamperDetectionDefaultLoop</td>
<td><a href="/messages/query-tamper-detection-status-de67
">QueryTamperDetectionStatus</a></td>
<td><code></code></td>
<td><a href="/messages/report-tamper-detection-status-de68
">sendReportTamperDetectionStatus</a>
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
<td>sendReportTamperDetectionStatus</td>
<td>Send Action
</td>
<td>Send a ReportTamperDetectionStatus message
<br>
<i>Output Message:</i> <a href="/messages/report-tamper-detection-status-de68
">ReportTamperDetectionStatus
</a></td>
</tr><tr>
<td>setTamperDetectionState</td>
<td></td>
<td>Enable, disable, or clear the tamper state based on the message field.
</td>
</tr></tbody></table>

