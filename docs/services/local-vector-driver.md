---
title: LocalVectorDriver
---

# LocalVectorDriver

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:mobility:LocalVectorDriver` |

## Description

The Local Vector Driver performs closed loop control of the desired local heading, pitch, roll and speed of a mobile platform. The Local Vector Driver is very similar in function to the Global Vector Driver, the difference being that the desired heading is defined in terms of a local coordinate system as opposed to the global coordinate system. The Local Vector Driver takes as input four pieces of information, i.e. the desired heading, pitch and roll of the platform as measured with respect to a local coordinate system and the desired speed of the platform. The desired heading angle is defined in a right hand sense about the Z axis of the local coordinate system where zero degrees defines a heading that is parallel to the X axis of the local coordinate system. The pitch is the angle about the Y-axis and the roll is the desired angle about the X-axis. The Local Vector Driver also receives data from the Local Pose Sensor and the Velocity State Sensor component. This information allows the Local Vector Driver to perform closed loop control on both the platform's local orientation and speed.

## Message Set

| ID | Message |
| --- | --- |
| `2408h` | [QueryLocalVector](/messages/query-local-vector-2408) |
| `4408h` | [ReportLocalVector](/messages/report-local-vector-4408) |
| `0408h` | [SetLocalVector](/messages/set-local-vector-0408) |

## State Machine Diagram

![LocalVectorDriver State Machine Diagram](/smDiagrams/LocalVectorDriver.png)

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
<td rowspan="1">LocalVectorDefaultLoop</td>
<td><a href="/messages/query-local-vector-2408
">QueryLocalVector</a></td>
<td><code></code></td>
<td><a href="/messages/report-local-vector-4408
">sendReportLocalVector</a>
</td>
</tr><tr>
<td align="center" rowspan="1">B</td>
<td rowspan="1">LocalVectorReadyLoop</td>
<td><a href="/messages/set-local-vector-0408
">SetLocalVector</a></td>
<td><code>isControllingClient</code></td>
<td>setLocalVector
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
<td>sendReportLocalVector</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/report-local-vector-4408
">ReportLocalVector
</a></td>
</tr><tr>
<td>setLocalVector</td>
<td></td>
<td>
</td>
</tr></tbody></table>

