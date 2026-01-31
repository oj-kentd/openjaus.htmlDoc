---
title: LoadingSpecifications
---

# LoadingSpecifications

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:LoadingSpecificationsService` |

## Description

The Loading Specifications Service provides the means to specify and report the characteristics of a load being hauled or pulled.  This information may be further used by intelligent capabilities such as path planning or stability control.

## Message Set

| ID | Message |
| --- | --- |
| `CB20h` | [QueryLoadingSpecifications](/messages/query-loading-specifications-cb20) |
| `CB19h` | [ReportLoadingSpecifications](/messages/report-loading-specifications-cb19) |
| `CB18h` | [SetLoadingSpecifications](/messages/set-loading-specifications-cb18) |

## State Machine Diagram

![LoadingSpecifications State Machine Diagram](/smDiagrams/LoadingSpecifications.png)

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
<td rowspan="2">LoadingSpecificationsDefaultLoop</td>
<td><a href="/messages/set-loading-specifications-cb18
">SetLoadingSpecifications</a></td>
<td><code></code></td>
<td></td>
</tr>
<tr>
<td><a href="/messages/query-loading-specifications-cb20
">QueryLoadingSpecifications</a></td>
<td><code></code></td>
<td><a href="/messages/report-loading-specifications-cb19
">sendReportLoadingSpecifications</a>
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
<td>sendReportLoadingSpecifications</td>
<td>Send Action
</td>
<td>Send a Report Loading Specifications message
<br>
<i>Output Message:</i> <a href="/messages/report-loading-specifications-cb19
">ReportLoadingSpecifications
</a></td>
</tr><tr>
<td>setLoadingSpecifications</td>
<td></td>
<td>Update the loading specifications to the given values
</td>
</tr></tbody></table>

