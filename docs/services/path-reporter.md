---
title: PathReporter
---

# PathReporter

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:PathReporter` |

## Description

The Path Reporter Service provides a mechanism for reporting the past and/or future expected path of the vehicle.     The service is used in cooperation with Global Waypoint Driver, Local Waypoint Driver, Global Waypoint List Driver,    Local Waypoint List Driver, Global Pose Sensor and/or Local Pose Sensor.  Clients may limit the amount of data    reported by the service by specifying a maximum number of data points, maximum time, maximum distance, and/or path    resolution, within the limits of the implementation�s reported capabilities.      Note that the historical path is assumed to be represented by a FIFO queue; as a result, the Report Path message    may be limited by the storage capabilities of the underlying implementation to reporting only the most recent data,    e.g. the points nearest the current position.  Older data may be discarded as needed by the implementation.  Such    limits should be specified in the ReportPathReporterCapabilities message.      Also note that the future path may be valid only at that instance in time.  It represents the current planned path,    at the given resolution.  However, some waypoint drivers may frequently update the planned path, based on new    information about the environment.  As a result, planned path information may quickly become stale.  Furthermore,    the planned path represents the actual path the vehicle expects to follow.  It does not replace the Waypoint    Driver�s Query Waypoint messages.  Rather, it provides additional information about how the vehicle plans to    achieve the desired waypoints.

## Message Set

| ID | Message |
| --- | --- |
| `DEF1h` | [QueryPath](/messages/query-path-def1) |
| `DEF0h` | [QueryPathReporterCapabilities](/messages/query-path-reporter-capabilities-def0) |
| `DEF3h` | [ReportPath](/messages/report-path-def3) |
| `DEF2h` | [ReportPathReporterCapabilities](/messages/report-path-reporter-capabilities-def2) |

## State Machine Diagram

![PathReporter State Machine Diagram](/smDiagrams/PathReporter.png)

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
<td align="center" rowspan="2">A</td>
<td rowspan="2">PathReporterDefaultLoop</td>
<td><a href="/messages/query-path-reporter-capabilities-def0
">QueryPathReporterCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-path-reporter-capabilities-def2
">sendReportPathReporterCapabilities</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-path-def1
">QueryPath</a></td>
<td><code></code></td>
<td><a href="/messages/report-path-def3
">sendReportPath</a>
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
<td>sendReportPath</td>
<td>Send Action
</td>
<td>Send a ReportPath message
<br>
<i>Output Message:</i> <a href="/messages/report-path-def3
">ReportPath
</a></td>
</tr><tr>
<td>sendReportPathReporterCapabilities</td>
<td>Send Action
</td>
<td>Send a PathReporterCapabilities message
<br>
<i>Output Message:</i> <a href="/messages/report-path-reporter-capabilities-def2
">ReportPathReporterCapabilities
</a></td>
</tr></tbody></table>

