---
title: DriveTrainDriver
---

# DriveTrainDriver

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:ugv:DriveTrainDriver` |

## Description

The DrivetrainDriver provides the means to control transmissions

## Message Set

| ID | Message |
| --- | --- |
| `2510h` | [QueryTransferCaseState](/messages/query-transfer-case-state-2510) |
| `2511h` | [QueryTransmissionCapabilities](/messages/query-transmission-capabilities-2511) |
| `2509h` | [QueryTransmissionState](/messages/query-transmission-state-2509) |
| `4510h` | [ReportTransferCaseState](/messages/report-transfer-case-state-4510) |
| `4511h` | [ReportTransmissionCapabilities](/messages/report-transmission-capabilities-4511) |
| `4509h` | [ReportTransmissionState](/messages/report-transmission-state-4509) |
| `0510h` | [SetTransferCaseState](/messages/set-transfer-case-state-0510) |
| `0509h` | [SetTransmissionState](/messages/set-transmission-state-0509) |

## State Machine Diagram

![DriveTrainDriver State Machine Diagram](/smDiagrams/DriveTrainDriver.png)

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
<td rowspan="2">DriveTrainDriverControlledLoop</td>
<td><a href="/messages/set-transfer-case-state-0510
">SetTransferCaseState</a></td>
<td><code>isControllingClient &amp;&amp; isSupported</code></td>
<td>setTransferCaseState
</td>
</tr>
<tr>
<td><a href="/messages/set-transmission-state-0509
">SetTransmissionState</a></td>
<td><code>isControllingClient &amp;&amp; isPark</code></td>
<td>setTransmissionState
</td>
</tr><tr>
<td align="center" rowspan="3">A</td>
<td rowspan="3">DriveTrainDriverDefaultLoop</td>
<td><a href="/messages/query-transmission-state-2509
">QueryTransmissionState</a></td>
<td><code></code></td>
<td><a href="/messages/report-transmission-state-4509
">sendReportTransmissionState</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-transfer-case-state-2510
">QueryTransferCaseState</a></td>
<td><code></code></td>
<td><a href="/messages/report-transfer-case-state-4510
">sendReportTransferCaseState</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-transmission-capabilities-2511
">QueryTransmissionCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-transmission-capabilities-4511
">sendReportTransmissionCapabilities</a>
</td>
</tr><tr>
<td align="center" rowspan="1">C</td>
<td rowspan="1">DriveTrainDriverReadyLoop</td>
<td><a href="/messages/set-transmission-state-0509
">SetTransmissionState</a></td>
<td><code>isControllingClient &amp;&amp; isSupported</code></td>
<td>setTransmissionState
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
<td>sendReportTransferCaseState</td>
<td>Send Action
</td>
<td>Send a Report Transfer Case State message
<br>
<i>Output Message:</i> <a href="/messages/report-transfer-case-state-4510
">ReportTransferCaseState
</a></td>
</tr><tr>
<td>sendReportTransmissionCapabilities</td>
<td>Send Action
</td>
<td>Send a Report Transmission Capabilities message
<br>
<i>Output Message:</i> <a href="/messages/report-transmission-capabilities-4511
">ReportTransmissionCapabilities
</a></td>
</tr><tr>
<td>sendReportTransmissionState</td>
<td>Send Action
</td>
<td>Send a Report Transmission State message
<br>
<i>Output Message:</i> <a href="/messages/report-transmission-state-4509
">ReportTransmissionState
</a></td>
</tr><tr>
<td>setTransferCaseState</td>
<td></td>
<td>Set the specified transfer case state.
</td>
</tr><tr>
<td>setTransmissionState</td>
<td></td>
<td>Set the specified transmission state.
</td>
</tr><tr>
<td>shiftToPark</td>
<td>Exit Action
</td>
<td>When leaving the Ready state, the transmission should switch to Park once the vehicle has safely stopped. If the vehicle does not support Park, it should transition into a state that prevents or inhibits vehicle motion.
</td>
</tr></tbody></table>

