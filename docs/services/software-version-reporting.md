---
title: SoftwareVersionReporting
---

# SoftwareVersionReporting

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:SoftwareVersionReporting` |

## Description

The Software Version Reporting provides a mechanism for SAE JAUS-based components to report versions of software implementations, scripts, shared libraries, etc. installed on the component.

## Message Set

| ID | Message |
| --- | --- |
| `E999h` | [QuerySoftwareVersion](/messages/query-software-version-e999) |
| `F999h` | [ReportSoftwareVersion](/messages/report-software-version-f999) |

## State Machine Diagram

![SoftwareVersionReporting State Machine Diagram](/smDiagrams/SoftwareVersionReporting.png)

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
<td rowspan="1">SoftwareVersionReportingDefaultLoop</td>
<td><a href="/messages/query-software-version-e999
">QuerySoftwareVersion</a></td>
<td><code></code></td>
<td><a href="/messages/report-software-version-f999
">sendReportSoftwareVersion</a>
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
<td>sendReportSoftwareVersion</td>
<td>Send Action
</td>
<td>Send a Report SoftwareVersion Capabilities message
<br>
<i>Output Message:</i> <a href="/messages/report-software-version-f999
">ReportSoftwareVersion
</a></td>
</tr></tbody></table>

