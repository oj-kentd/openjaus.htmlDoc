---
title: PrimitiveEndEffector
---

# PrimitiveEndEffector

| Property | Value |
| --- | --- |
| **Version** | 2.0 |
| **URN** | `urn:jaus:jss:manipulator:PrimitiveEndEffector` |

## Description

This service is the low level interface to an end effector.  The End Effector is a one degree of freedom manipulator, usually mounted on the end of an n-degree of freedom manipulator.

## Message Set

| ID | Message |
| --- | --- |
| `2633h` | [QueryEndEffectorEffort](/messages/query-end-effector-effort-2633) |
| `2632h` | [QueryEndEffectorSpecification](/messages/query-end-effector-specification-2632) |
| `4633h` | [ReportEndEffectorEffort](/messages/report-end-effector-effort-4633) |
| `4632h` | [ReportEndEffectorSpecification](/messages/report-end-effector-specification-4632) |
| `0633h` | [SetEndEffectorEffort](/messages/set-end-effector-effort-0633) |

## State Machine Diagram

![PrimitiveEndEffector State Machine Diagram](/smDiagrams/PrimitiveEndEffector.png)

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
<td rowspan="2">PrimitiveEndEffectorDefaultLoop</td>
<td><a href="/messages/query-end-effector-specification-2632
">QueryEndEffectorSpecification</a></td>
<td><code></code></td>
<td><a href="/messages/report-end-effector-specification-4632
">sendReportEndEffectorSpecification</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-end-effector-effort-2633
">QueryEndEffectorEffort</a></td>
<td><code></code></td>
<td><a href="/messages/report-end-effector-effort-4633
">sendReportEndEffectorEffort</a>
</td>
</tr><tr>
<td align="center" rowspan="1">B</td>
<td rowspan="1">PrimitiveEndEffectorReadyLoop</td>
<td><a href="/messages/set-end-effector-effort-0633
">SetEndEffectorEffort</a></td>
<td><code>isControllingClient</code></td>
<td>setEndEffectorEffort
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
<td>sendReportEndEffectorEffort</td>
<td>Send Action
</td>
<td>Send a report End Effector effort message
<br>
<i>Output Message:</i> <a href="/messages/report-end-effector-effort-4633
">ReportEndEffectorEffort
</a></td>
</tr><tr>
<td>sendReportEndEffectorSpecification</td>
<td>Send Action
</td>
<td>Send a report End Effector spec message
<br>
<i>Output Message:</i> <a href="/messages/report-end-effector-specification-4632
">ReportEndEffectorSpecification
</a></td>
</tr><tr>
<td>setEndEffectorEffort</td>
<td></td>
<td>Set the effort for the end effector
</td>
</tr></tbody></table>

