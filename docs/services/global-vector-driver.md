---
title: GlobalVectorDriver
---

# GlobalVectorDriver

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:mobility:GlobalVectorDriver` |

## Description

The function of the Global Vector Driver is to perform closed loop control of the desired global heading, altitude and speed of a mobile platform. The Global Vector Driver takes the desired heading of the platform as measured with respect to the global coordinate system and the desired speed of the platform. The desired heading angle is defined in a right hand sense about the Z axis of the global coordinate system (the Z axis points downward) where North is defined as zero degrees. The desired Altitude, measured in accordance with the WGS 84 standard, provides a means through which systems capable of flight can be controlled. For ground-based systems, the Altitude field is ignored. The Global Vector Driver also receives data from the Global Pose Sensor and the Velocity State Sensor. This information allows the Global Vector Driver to perform closed loop control on the platform's global heading, altitude and speed.

## Message Set

| ID | Message |
| --- | --- |
| `2407h` | [QueryGlobalVector](/messages/query-global-vector-2407) |
| `4407h` | [ReportGlobalVector](/messages/report-global-vector-4407) |
| `0407h` | [SetGlobalVector](/messages/set-global-vector-0407) |

## State Machine Diagram

![GlobalVectorDriver State Machine Diagram](/smDiagrams/GlobalVectorDriver.png)

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
<td rowspan="1">GlobalVectorDefaultLoop</td>
<td><a href="/messages/query-global-vector-2407
">QueryGlobalVector</a></td>
<td><code></code></td>
<td><a href="/messages/report-global-vector-4407
">sendReportGlobalVector</a>
</td>
</tr><tr>
<td align="center" rowspan="1">B</td>
<td rowspan="1">GlobalVectorReadyLoop</td>
<td><a href="/messages/set-global-vector-0407
">SetGlobalVector</a></td>
<td><code>isControllingClient</code></td>
<td>setGlobalVector
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
<td>sendReportGlobalVector</td>
<td>Send Action
</td>
<td>Send a Report Global Vector message.
<br>
<i>Output Message:</i> <a href="/messages/report-global-vector-4407
">ReportGlobalVector
</a></td>
</tr><tr>
<td>setGlobalVector</td>
<td></td>
<td>
</td>
</tr></tbody></table>

