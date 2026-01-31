---
title: LocalWaypointListDriver
---

# LocalWaypointListDriver

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:mobility:LocalWaypointListDriver` |

## Description

The function of the Local Waypoint List Driver is to move the platform given a series of target waypoints, desired travel speed, current platform pose and current velocity state. The sequence of waypoints is specified by one or more SetElement messages. A waypoint consists of the desired position and orientation of the platform. The second input consists of the desired travel speed and an optional starting element. The desired travel speed remains unchanged unless a new ExecuteList command is received. The travel speed may then be changed at any time during waypoint navigation. The travel speed is reset to zero for all transitions from the Ready State.

## State Machine Diagram

![LocalWaypointListDriver State Machine Diagram](/smDiagrams/LocalWaypointListDriver.png)

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
<td align="center" rowspan="3">B</td>
<td rowspan="3">LwldControlledLoop</td>
<td><a href="/messages/set-element-041a
">SetElement</a></td>
<td><code>isControllingClient &amp;&amp; ( isValidLwldElementRequest &amp;&amp; isLwldElementSupported )</code></td>
<td><a href="/messages/confirm-element-request-041c
">sendConfirmElementRequest</a>
, setLocalWaypointElement
</td>
</tr>
<tr>
<td><a href="/messages/set-element-041a
">SetElement</a></td>
<td><code>isControllingClient &amp;&amp; !isValidLwldElementRequest</code></td>
<td><a href="/messages/reject-element-request-041d
">sendRejectElementRequest</a>
</td>
</tr>
<tr>
<td><a href="/messages/set-element-041a
">SetElement</a></td>
<td><code>isControllingClient &amp;&amp; !isLwldElementSupported</code></td>
<td><a href="/messages/reject-element-request-041d
">sendRejectElementRequest</a>
</td>
</tr><tr>
<td align="center" rowspan="3">A</td>
<td rowspan="3">LwldDefaultLoop</td>
<td><a href="/messages/query-travel-speed-240a
">QueryTravelSpeed</a></td>
<td><code></code></td>
<td><a href="/messages/report-travel-speed-440a
">sendReportTravelSpeed</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-local-waypoint-240d
">QueryLocalWaypoint</a></td>
<td><code>lwldWaypointExists</code></td>
<td><a href="/messages/report-local-waypoint-440d
">sendReportLocalWaypoint</a>
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
<td align="center" rowspan="2">C</td>
<td rowspan="2">LwldReadyLoop</td>
<td><a href="/messages/execute-list-041e
">ExecuteList</a></td>
<td><code>isControllingClient &amp;&amp; lwldElementExists</code></td>
<td>executeLocalWaypointList
</td>
</tr>
<tr>
<td><a href="/messages/execute-list-041e
">ExecuteList</a></td>
<td><code>isControllingClient &amp;&amp; !lwldElementExists</code></td>
<td>modifyLwldTravelSpeed
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
<td>executeLocalWaypointList</td>
<td></td>
<td>
</td>
</tr><tr>
<td>modifyLwldTravelSpeed</td>
<td></td>
<td>
</td>
</tr><tr>
<td>resetLwldTravelSpeed</td>
<td>Exit Action
</td>
<td>
</td>
</tr><tr>
<td>sendConfirmElementRequest</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/confirm-element-request-041c
">ConfirmElementRequest
</a></td>
</tr><tr>
<td>sendRejectElementRequest</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/reject-element-request-041d
">RejectElementRequest
</a></td>
</tr><tr>
<td>sendReportActiveElement</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/report-active-element-441e
">ReportActiveElement
</a></td>
</tr><tr>
<td>sendReportLocalWaypoint</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/report-local-waypoint-440d
">ReportLocalWaypoint
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
<td>setLocalWaypointElement</td>
<td></td>
<td>
</td>
</tr></tbody></table>

