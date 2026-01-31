---
title: Retrotraverse
---

# Retrotraverse

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:Retrotraverse` |

## Description

The Retrotraverse service provides the capability of return to a designated point along the path taken or to a specified waypoint normal (perdendicular) to the original path. Through the use of the Travel Method flag, different behaviors can be configured. The following diagrams show several possible combinations. ********* INSERT DIAGRAMS HERE ********

## Message Set

| ID | Message |
| --- | --- |
| `DC51h` | [CancelRetrotraverse](/messages/cancel-retrotraverse-dc51) |
| `EC50h` | [QueryRetrotraverseStatus](/messages/query-retrotraverse-status-ec50) |
| `FC50h` | [ReportRetrotraverseStatus](/messages/report-retrotraverse-status-fc50) |
| `DC50h` | [StartRetrotraverse](/messages/start-retrotraverse-dc50) |

## State Machine Diagram

![Retrotraverse State Machine Diagram](/smDiagrams/Retrotraverse.png)

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
<td rowspan="1">RetrotraverseDefaultLoop</td>
<td><a href="/messages/query-retrotraverse-status-ec50
">QueryRetrotraverseStatus</a></td>
<td><code></code></td>
<td><a href="/messages/report-retrotraverse-status-fc50
">sendReportRetrotraverseStatus</a>
</td>
</tr><tr>
<td align="center" rowspan="2">B</td>
<td rowspan="2">RetrotraverseReadyLoop</td>
<td><a href="/messages/start-retrotraverse-dc50
">StartRetrotraverse</a></td>
<td><code></code></td>
<td>startRetrotraverse
</td>
</tr>
<tr>
<td><a href="/messages/cancel-retrotraverse-dc51
">CancelRetrotraverse</a></td>
<td><code></code></td>
<td>cancelRetrotraverse
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
<td>cancelRetrotraverse</td>
<td></td>
<td>Cancel any current retrotraverse requests. If no requests are active or pending, this action is ignored.
</td>
</tr><tr>
<td>sendReportRetrotraverseStatus</td>
<td>Send Action
</td>
<td>Send a ReportRetrotraverseStatus response message
<br>
<i>Output Message:</i> <a href="/messages/report-retrotraverse-status-fc50
">ReportRetrotraverseStatus
</a></td>
</tr><tr>
<td>startRetrotraverse</td>
<td></td>
<td>Begin a retrotraverse operation using the specified distance, speed, and parameters
</td>
</tr></tbody></table>

