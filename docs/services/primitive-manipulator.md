---
title: PrimitiveManipulator
---

# PrimitiveManipulator

| Property | Value |
| --- | --- |
| **Version** | 2.0 |
| **URN** | `urn:jaus:jss:manipulator:PrimitiveManipulator` |

## Description

This service is the low level interface to a manipulator arm.  Motion of the arm is accomplished via the Set Joint Effort message.  In this message, each actuator is commanded to move with a percentage of maximum effort. To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service.

## Message Set

| ID | Message |
| --- | --- |
| `2601h` | [QueryJointEffort](/messages/query-joint-effort-2601) |
| `4601h` | [ReportJointEffort](/messages/report-joint-effort-4601) |
| `0601h` | [SetJointEffort](/messages/set-joint-effort-0601) |

## State Machine Diagram

![PrimitiveManipulator State Machine Diagram](/smDiagrams/PrimitiveManipulator.png)

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
<td rowspan="1">PrimitiveManipulatorDefaultLoop</td>
<td><a href="/messages/query-joint-effort-2601
">QueryJointEffort</a></td>
<td><code></code></td>
<td><a href="/messages/report-joint-effort-4601
">sendReportJointEffort</a>
</td>
</tr><tr>
<td align="center" rowspan="1">B</td>
<td rowspan="1">PrimitiveManipulatorReadyLoop</td>
<td><a href="/messages/set-joint-effort-0601
">SetJointEffort</a></td>
<td><code>isControllingClient</code></td>
<td>setJointEffort
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
<td>sendReportJointEffort</td>
<td>Send Action
</td>
<td>Send a report joint efforts message
<br>
<i>Output Message:</i> <a href="/messages/report-joint-effort-4601
">ReportJointEffort
</a></td>
</tr><tr>
<td>setJointEffort</td>
<td></td>
<td>Set the joint motion efforts for the manipulator.  The manipulator joints move accordingly
</td>
</tr></tbody></table>

