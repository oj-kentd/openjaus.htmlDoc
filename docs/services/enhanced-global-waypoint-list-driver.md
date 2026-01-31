---
title: EnhancedGlobalWaypointListDriver
---

# EnhancedGlobalWaypointListDriver

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:iop:EnhancedGlobalWaypointListDriver` |

## Description

The Enhanced Waypoint Navigation (Global) Service provides a mechanism for augmenting the information provided to a global waypoint navigation system with the ability to specify whether to achieve a waypoint driving forward or reverse and the ability to specify indefinite or fixed time waiting before progressing with a plan.  Additionally, the Enhanced Waypoint Navigation (Global) Service provides status reporting on the overall execution status of a global waypoint list including current wait status.  The service is used in cooperation with the Global Waypoint List Driver.

## Message Set

| ID | Message |
| --- | --- |
| `F22Ah` | [QueryEnhancedGlobalWaypointInformation](/messages/query-enhanced-global-waypoint-information-f22a) |
| `F229h` | [QueryGlobalWaypointStatus](/messages/query-global-waypoint-status-f229) |
| `F22Ch` | [ReportEnhancedGlobalWaypointInformation](/messages/report-enhanced-global-waypoint-information-f22c) |
| `F22Bh` | [ReportGlobalWaypointStatus](/messages/report-global-waypoint-status-f22b) |
| `F228h` | [SetEnhancedGlobalWaypointInformation](/messages/set-enhanced-global-waypoint-information-f228) |

## State Machine Diagram

![EnhancedGlobalWaypointListDriver State Machine Diagram](/smDiagrams/EnhancedGlobalWaypointListDriver.png)

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
<td align="center" rowspan="1">B</td>
<td rowspan="1">EnhancedGwldControlledLoop</td>
<td><a href="/messages/set-enhanced-global-waypoint-information-f228
">SetEnhancedGlobalWaypointInformation</a></td>
<td><code>isControllingClient</code></td>
<td>setEnhancedGlobalWaypointInformation
</td>
</tr><tr>
<td align="center" rowspan="2">A</td>
<td rowspan="2">EnhancedGwldDefaultLoop</td>
<td><a href="/messages/query-global-waypoint-status-f229
">QueryGlobalWaypointStatus</a></td>
<td><code></code></td>
<td><a href="/messages/report-global-waypoint-status-f22b
">sendReportGlobalWaypointStatus</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-enhanced-global-waypoint-information-f22a
">QueryEnhancedGlobalWaypointInformation</a></td>
<td><code></code></td>
<td><a href="/messages/report-enhanced-global-waypoint-information-f22c
">sendReportEnhancedGlobalWaypointInformation</a>
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
<td>sendReportEnhancedGlobalWaypointInformation</td>
<td>Send Action
</td>
<td>Send a Report Enhanced Global Waypoint message
<br>
<i>Output Message:</i> <a href="/messages/report-enhanced-global-waypoint-information-f22c
">ReportEnhancedGlobalWaypointInformation
</a></td>
</tr><tr>
<td>sendReportGlobalWaypointStatus</td>
<td>Send Action
</td>
<td>Send a Report Global Waypoint Status message
<br>
<i>Output Message:</i> <a href="/messages/report-global-waypoint-status-f22b
">ReportGlobalWaypointStatus
</a></td>
</tr><tr>
<td>setEnhancedGlobalWaypointInformation</td>
<td></td>
<td>Set the augment waypoint information
</td>
</tr></tbody></table>

