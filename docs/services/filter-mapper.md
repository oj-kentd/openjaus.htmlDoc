---
title: FilterMapper
---

# FilterMapper

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:FilterMapper` |

## Description

The Filter Mapper Service provides a way to specify component mappings used in a filtering scenario.  One JAUS component may be mapped to one or more other JAUS Components (JAUS Components not reported are assumed to have no mappings).  This service is intended for use with capabilities such as centralized self-collision avoidance, where a central processing capability may examine commands to multiple moving parts and issue adjusted (filtered) commands.

## Message Set

| ID | Message |
| --- | --- |
| `C530h` | [QueryComponentMappings](/messages/query-component-mappings-c530) |
| `C529h` | [QueryFilterType](/messages/query-filter-type-c529) |
| `C532h` | [ReportComponentMappings](/messages/report-component-mappings-c532) |
| `C531h` | [ReportFilterType](/messages/report-filter-type-c531) |

## State Machine Diagram

![FilterMapper State Machine Diagram](/smDiagrams/FilterMapper.png)

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
<td rowspan="2">FilterMapperDefaultLoop</td>
<td><a href="/messages/query-filter-type-c529
">QueryFilterType</a></td>
<td><code></code></td>
<td><a href="/messages/report-filter-type-c531
">sendReportFilterType</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-component-mappings-c530
">QueryComponentMappings</a></td>
<td><code></code></td>
<td><a href="/messages/report-component-mappings-c532
">sendReportComponentMappings</a>
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
<td>sendReportComponentMappings</td>
<td>Send Action
</td>
<td>Send a Report Component Mappings message
<br>
<i>Output Message:</i> <a href="/messages/report-component-mappings-c532
">ReportComponentMappings
</a></td>
</tr><tr>
<td>sendReportFilterType</td>
<td>Send Action
</td>
<td>Send a Report Filter Type message
<br>
<i>Output Message:</i> <a href="/messages/report-filter-type-c531
">ReportFilterType
</a></td>
</tr></tbody></table>

