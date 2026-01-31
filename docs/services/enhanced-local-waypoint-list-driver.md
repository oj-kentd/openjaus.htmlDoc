---
title: EnhancedLocalWaypointListDriver
---

# EnhancedLocalWaypointListDriver

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:iop:EnhancedLocalWaypointListDriver` |

## Description

The Enhanced Waypoint Navigation (Local) Service provides a mechanism for augmenting the information provided to a local waypoint navigation system with the ability to specify whether to achieve a waypoint driving forward or reverse and the ability to specify indefinite or fixed time waiting before progressing with a plan.  Additionally, the Enhanced Waypoint Navigation (Local) Service provides status reporting on the overall execution status of a local waypoint list including current wait status.  The service is used in cooperation with the Local Waypoint List Driver.

## Message Set

| ID | Message |
| --- | --- |
| `F222h` | [QueryEnhancedLocalWaypointInformation](/messages/query-enhanced-local-waypoint-information-f222) |
| `F221h` | [QueryLocalWaypointStatus](/messages/query-local-waypoint-status-f221) |
| `F224h` | [ReportEnhancedLocalWaypointInformation](/messages/report-enhanced-local-waypoint-information-f224) |
| `F223h` | [ReportLocalWaypointStatus](/messages/report-local-waypoint-status-f223) |
| `F220h` | [SetEnhancedLocalWaypointInformation](/messages/set-enhanced-local-waypoint-information-f220) |

## State Machine Diagram

![EnhancedLocalWaypointListDriver State Machine Diagram](/smDiagrams/EnhancedLocalWaypointListDriver.png)

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
<td rowspan="1">EnhancedLwldControlledLoop</td>
<td><a href="/messages/set-enhanced-local-waypoint-information-f220
">SetEnhancedLocalWaypointInformation</a></td>
<td><code>isControllingClient</code></td>
<td>setEnhancedLocalWaypointInformation
</td>
</tr><tr>
<td align="center" rowspan="2">A</td>
<td rowspan="2">EnhancedLwldDefaultLoop</td>
<td><a href="/messages/query-local-waypoint-status-f221
">QueryLocalWaypointStatus</a></td>
<td><code></code></td>
<td><a href="/messages/report-local-waypoint-status-f223
">sendReportLocalWaypointStatus</a>
</td>
</tr>
<tr>
<td><a href="/messages/report-enhanced-local-waypoint-information-f224
">ReportEnhancedLocalWaypointInformation</a></td>
<td><code></code></td>
<td><a href="/messages/report-enhanced-local-waypoint-information-f224
">sendReportEnhancedLocalWaypointInformation</a>
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
<td>sendReportEnhancedLocalWaypointInformation</td>
<td>Send Action
</td>
<td>Send a Report Enhanced Local Waypoint message
<br>
<i>Output Message:</i> <a href="/messages/report-enhanced-local-waypoint-information-f224
">ReportEnhancedLocalWaypointInformation
</a></td>
</tr><tr>
<td>sendReportLocalWaypointStatus</td>
<td>Send Action
</td>
<td>Send a Report Local Waypoint Status message
<br>
<i>Output Message:</i> <a href="/messages/report-local-waypoint-status-f223
">ReportLocalWaypointStatus
</a></td>
</tr><tr>
<td>setEnhancedLocalWaypointInformation</td>
<td></td>
<td>Set the augment waypoint information
</td>
</tr></tbody></table>

