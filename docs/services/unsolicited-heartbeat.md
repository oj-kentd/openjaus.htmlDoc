---
title: UnsolicitedHeartbeat
---

# UnsolicitedHeartbeat

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:UnsolicitedHeartbeat` |

## Description

This service extends the Liveness Service to automatically generate periodic Report Heartbeat Pulse messages.

## Internal Events

| ID | Event |
| --- | --- |
| `8D22h` | [PeriodicTimerTrigger](/messages/periodic-timer-trigger-8d22) |

## State Machine Diagram

![UnsolicitedHeartbeat State Machine Diagram](/smDiagrams/UnsolicitedHeartbeat.png)

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
<td align="center" rowspan="1">A</td>
<td rowspan="1">UnsolicitedHeartbeatDefaultLoop</td>
<td><a href="/messages/periodic-timer-trigger-8d22
">PeriodicTimerTrigger</a></td>
<td><code></code></td>
<td>broadcastReportHeartBeatPulse
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
<td>broadcastReportHeartBeatPulse</td>
<td></td>
<td>Broadcast a Report Heartbeat Pulse to the hosting platform
</td>
</tr></tbody></table>

