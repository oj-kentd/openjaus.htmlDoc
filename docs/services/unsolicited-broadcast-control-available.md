---
title: UnsolicitedBroadcastControlAvailable
---

# UnsolicitedBroadcastControlAvailable

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:UnsolicitedBroadcastControlAvailable` |

## Description

This service extends the Access Control Service to automatically generate periodic Report  messages.

## Internal Events

| ID | Event |
| --- | --- |
| `8D21h` | [PeriodicTimerTrigger](/messages/periodic-timer-trigger-8d21) |

## State Machine Diagram

![UnsolicitedBroadcastControlAvailable State Machine Diagram](/smDiagrams/UnsolicitedBroadcastControlAvailable.png)

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
</tbody></table>

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
<td>broadcastReportControl</td>
<td></td>
<td>Broadcast a Report Control.
</td>
</tr></tbody></table>

