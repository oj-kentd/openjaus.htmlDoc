---
title: PlatformSpecifications
---

# PlatformSpecifications

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:ugv:PlatformSpecifications` |

## Description

The Platform Specification Service provides information on the mobility and geometric characteristics of the platform.

## Message Set

| ID | Message |
| --- | --- |
| `2502h` | [QueryPlatformSpecifications](/messages/query-platform-specifications-2502) |
| `4502h` | [ReportPlatformSpecifications](/messages/report-platform-specifications-4502) |

## State Machine Diagram

![PlatformSpecifications State Machine Diagram](/smDiagrams/PlatformSpecifications.png)

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
<td rowspan="1">PlatformSpecificationsDefaultLoop</td>
<td><a href="/messages/query-platform-specifications-2502
">QueryPlatformSpecifications</a></td>
<td><code></code></td>
<td><a href="/messages/report-platform-specifications-4502
">sendReportPlatformSpecifications</a>
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
<td>sendReportPlatformSpecifications</td>
<td>Send Action
</td>
<td>Send a Report Platform Specifications message to querying client
<br>
<i>Output Message:</i> <a href="/messages/report-platform-specifications-4502
">ReportPlatformSpecifications
</a></td>
</tr></tbody></table>

