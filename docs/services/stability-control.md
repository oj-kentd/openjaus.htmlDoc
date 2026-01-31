---
title: StabilityControl
---

# StabilityControl

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:StabilityControlService` |

## Description

The Stability Control Service provides a way to discover and activate driver-assist capabilities of the vehicle.  These capabilities include Traction Control (to limit tire slip during acceleration), Anti-Lock Brake Systems (to limit tire slip during braking), Electronic Stability Control (brakes applied to counter over/under steer), and Active Pitchover/Rollover Control.  Note that the precise implementation of each of these capabilities is platform-specific and not limited by this service.

## Message Set

| ID | Message |
| --- | --- |
| `D7C8h` | [QueryStabilityControlCapabilities](/messages/query-stability-control-capabilities-d7c8) |
| `D7C9h` | [QueryStabilityControlStatus](/messages/query-stability-control-status-d7c9) |
| `D7CBh` | [ReportStabilityControlCapabilities](/messages/report-stability-control-capabilities-d7cb) |
| `D7CCh` | [ReportStabilityControlStatus](/messages/report-stability-control-status-d7cc) |
| `D7CAh` | [SetStabilityControlStatus](/messages/set-stability-control-status-d7ca) |

## State Machine Diagram

![StabilityControl State Machine Diagram](/smDiagrams/StabilityControl.png)

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
<td rowspan="3">StabilityControlDefaultLoop</td>
<td><a href="/messages/query-stability-control-capabilities-d7c8
">QueryStabilityControlCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-stability-control-capabilities-d7cb
">sendReportStabilityControlCapabilities</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-stability-control-status-d7c9
">QueryStabilityControlStatus</a></td>
<td><code></code></td>
<td><a href="/messages/report-stability-control-status-d7cc
">sendReportStabilityControlStatus</a>
</td>
</tr>
<tr>
<td><a href="/messages/set-stability-control-status-d7ca
">SetStabilityControlStatus</a></td>
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
<td>sendReportStabilityControlCapabilities</td>
<td>Send Action
</td>
<td>Send a Report Stability Control Capabilities message
<br>
<i>Output Message:</i> <a href="/messages/report-stability-control-capabilities-d7cb
">ReportStabilityControlCapabilities
</a></td>
</tr><tr>
<td>sendReportStabilityControlStatus</td>
<td>Send Action
</td>
<td>Send a Report Stability Control Status message
<br>
<i>Output Message:</i> <a href="/messages/report-stability-control-status-d7cc
">ReportStabilityControlStatus
</a></td>
</tr><tr>
<td>setStabilityControlStatus</td>
<td></td>
<td>Set the driver-assist functions to the specified status
</td>
</tr></tbody></table>

