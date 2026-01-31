---
title: PrimitivePanTilt
---

# PrimitivePanTilt

| Property | Value |
| --- | --- |
| **Version** | 2.0 |
| **URN** | `urn:jaus:jss:manipulator:PrimitivePanTilt` |

## Description

The Primitive Pan Tilt Service is the low level interface to a pan tilt mechanism.  Motion of the pan tilt mechanism is accomplished via the Set Pan Tilt Joint Effort  message.  In this message, each actuator is commanded to move with a percentage of  maximum effort.  To ensure backward compatibility with 1.0 implementations of this  service, it is recommended that this service be co-located on the same component  as a Pan Tilt Specification Service.

## Message Set

| ID | Message |
| --- | --- |
| `2621h` | [QueryPanTiltJointEffort](/messages/query-pan-tilt-joint-effort-2621) |
| `4621h` | [ReportPanTiltJointEffort](/messages/report-pan-tilt-joint-effort-4621) |
| `0621h` | [SetPanTiltJointEffort](/messages/set-pan-tilt-joint-effort-0621) |

## State Machine Diagram

![PrimitivePanTilt State Machine Diagram](/smDiagrams/PrimitivePanTilt.png)

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
<td rowspan="1">PrimitivePanTiltDefaultLoop</td>
<td><a href="/messages/query-pan-tilt-joint-effort-2621
">QueryPanTiltJointEffort</a></td>
<td><code></code></td>
<td><a href="/messages/report-pan-tilt-joint-effort-4621
">sendReportPanTiltJointEffort</a>
</td>
</tr><tr>
<td align="center" rowspan="1">B</td>
<td rowspan="1">PrimitivePanTiltReadyLoop</td>
<td><a href="/messages/set-pan-tilt-joint-effort-0621
">SetPanTiltJointEffort</a></td>
<td><code>isControllingClient</code></td>
<td>setPanTiltJointEffort
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
<td>sendReportPanTiltJointEffort</td>
<td>Send Action
</td>
<td>Send a report Pan Tilt joint efforts message
<br>
<i>Output Message:</i> <a href="/messages/report-pan-tilt-joint-effort-4621
">ReportPanTiltJointEffort
</a></td>
</tr><tr>
<td>setPanTiltJointEffort</td>
<td></td>
<td>Set the joint motion efforts for the two joints of the pan tilt mechanism
</td>
</tr></tbody></table>

