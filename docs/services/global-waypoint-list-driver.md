---
title: GlobalWaypointListDriver
---

# GlobalWaypointListDriver

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:mobility:GlobalWaypointListDriver` |

## Description

The function of the Global Waypoint List Driver is to move the platform given a series of target waypoints, desired travel speed, current platform pose and current velocity state. The sequence of waypoints is specified by one or more SetElement messages. A waypoint consists of the desired position and orientation of the platform. The second input consists of the desired travel speed and an optional starting element. The desired travel speed remains unchanged unless a new ExecuteList command is received. The travel speed may then be changed at any time during waypoint navigation. The travel speed is reset to zero for all transitions from the Ready State.

## Message Set

| ID | Message |
| --- | --- |
| `041Eh` | [ExecuteList](/messages/execute-list-041e) |
| `241Eh` | [QueryActiveElement](/messages/query-active-element-241e) |
| `441Eh` | [ReportActiveElement](/messages/report-active-element-441e) |

## State Machine Diagram

![GlobalWaypointListDriver State Machine Diagram](/smDiagrams/GlobalWaypointListDriver.png)

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
<td align="center" rowspan="3">A</td>
<td rowspan="3">GwldDefaultLoop</td>
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
</tr>
<tr>
<td><a href="/messages/query-active-element-241e
">QueryActiveElement</a></td>
<td><code></code></td>
<td><a href="/messages/report-active-element-441e
">sendReportActiveElement</a>
</td>
</tr><tr>
<td align="center" rowspan="2">B</td>
<td rowspan="2">GwldReadyLoop</td>
<td><a href="/messages/execute-list-041e
">ExecuteList</a></td>
<td><code>isControllingClient &amp;&amp; waypointExists</code></td>
<td>executeWaypointList
</td>
</tr>
<tr>
<td><a href="/messages/execute-list-041e
">ExecuteList</a></td>
<td><code>isControllingClient &amp;&amp; !elementSpecified</code></td>
<td>modifyTravelSpeed
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
<td>executeWaypointList</td>
<td></td>
<td>
</td>
</tr><tr>
<td>modifyTravelSpeed</td>
<td></td>
<td>
</td>
</tr><tr>
<td>resetTravelSpeed</td>
<td>Exit Action
</td>
<td>
</td>
</tr><tr>
<td>sendReportActiveElement</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/report-active-element-441e
">ReportActiveElement
</a></td>
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
</tr></tbody></table>

