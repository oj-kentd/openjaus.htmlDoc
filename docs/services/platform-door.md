---
title: PlatformDoor
---

# PlatformDoor

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:PlatformDoorService` |

## Description

The Platform Door Service provides a mechanism for locking and unlocking doors on the vehicle, and determining if a door is ajar.

## Message Set

| ID | Message |
| --- | --- |
| `D721h` | [QueryDoorStatus](/messages/query-door-status-d721) |
| `D722h` | [ReportDoorStatus](/messages/report-door-status-d722) |
| `D720h` | [SetDoorLock](/messages/set-door-lock-d720) |

## State Machine Diagram

![PlatformDoor State Machine Diagram](/smDiagrams/PlatformDoor.png)

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
<td align="center" rowspan="2">A</td>
<td rowspan="2">PlatformDoorDefaultLoop</td>
<td><a href="/messages/query-door-status-d721
">QueryDoorStatus</a></td>
<td><code></code></td>
<td><a href="/messages/report-door-status-d722
">sendReportDoorStatus</a>
</td>
</tr>
<tr>
<td><a href="/messages/set-door-lock-d720
">SetDoorLock</a></td>
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
<td>sendReportDoorStatus</td>
<td>Send Action
</td>
<td>Send a Report Door Status message
<br>
<i>Output Message:</i> <a href="/messages/report-door-status-d722
">ReportDoorStatus
</a></td>
</tr><tr>
<td>setDoorLock</td>
<td></td>
<td>Implementation specific action to lock or unlock vehicle doors.
</td>
</tr></tbody></table>

