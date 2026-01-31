---
title: GlobalWaypointDriver
---

# GlobalWaypointDriver

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:mobility:GlobalWaypointDriver` |

## Description

The function of the Global Waypoint Driver is to move the platform given a single target waypoint, desired travel speed, current platform pose and current velocity state. A single waypoint is provided via the Set Global Waypoint message. The waypoint remains unchanged until a new Set Global Waypoint message is received. A waypoint consists of the desired position and orientation of the platform. The second input consists of the desired travel speed. The desired travel speed remains unchanged unless a new Set Travel Speed Message is received. The travel speed may then be changed at any time during waypoint navigation. The travel speed is reset to zero for all transitions from the Ready State.

## Message Set

| ID | Message |
| --- | --- |
| `240Ch` | [QueryGlobalWaypoint](/messages/query-global-waypoint-240c) |
| `240Ah` | [QueryTravelSpeed](/messages/query-travel-speed-240a) |
| `440Ch` | [ReportGlobalWaypoint](/messages/report-global-waypoint-440c) |
| `440Ah` | [ReportTravelSpeed](/messages/report-travel-speed-440a) |
| `040Ch` | [SetGlobalWaypoint](/messages/set-global-waypoint-040c) |
| `040Ah` | [SetTravelSpeed](/messages/set-travel-speed-040a) |

## State Machine Diagram

![GlobalWaypointDriver State Machine Diagram](/smDiagrams/GlobalWaypointDriver.png)

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
<td align="center" rowspan="1">C</td>
<td rowspan="1">GwdControlledLoop</td>
<td><a href="/messages/set-global-waypoint-040c
">SetGlobalWaypoint</a></td>
<td><code>isControllingClient</code></td>
<td>setGlobalWaypoint
</td>
</tr><tr>
<td align="center" rowspan="2">A</td>
<td rowspan="2">GwdDefaultLoop</td>
<td><a href="/messages/query-travel-speed-240a
">QueryTravelSpeed</a></td>
<td><code></code></td>
<td><a href="/messages/report-travel-speed-440a
">sendReportTravelSpeed</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-global-waypoint-240c
">QueryGlobalWaypoint</a></td>
<td><code>waypointExists</code></td>
<td><a href="/messages/report-global-waypoint-440c
">sendReportGlobalWaypoint</a>
</td>
</tr><tr>
<td align="center" rowspan="1">B</td>
<td rowspan="1">GwdReadyLoop</td>
<td><a href="/messages/set-travel-speed-040a
">SetTravelSpeed</a></td>
<td><code>isControllingClient &amp;&amp; waypointExists</code></td>
<td>setTravelSpeed
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
<td>resetTravelSpeed</td>
<td>Exit Action
</td>
<td>
</td>
</tr><tr>
<td>sendReportGlobalWaypoint</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/report-global-waypoint-440c
">ReportGlobalWaypoint
</a></td>
</tr><tr>
<td>sendReportTravelSpeed</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/report-travel-speed-440a
">ReportTravelSpeed
</a></td>
</tr><tr>
<td>setGlobalWaypoint</td>
<td></td>
<td>
</td>
</tr><tr>
<td>setTravelSpeed</td>
<td></td>
<td>
</td>
</tr></tbody></table>

