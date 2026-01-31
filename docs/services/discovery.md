---
title: Discovery
---

# Discovery

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:core:Discovery` |

## Description

The process of discovery is conducted at both the node level and the subsystem level.This service supports the discovery of both legacy components defined in the JAUS Reference Architecture versions 3.2+, and new components. The Component IDs of legacy components were fixed at specification time (Primitive Driver = 33 for example) and could contain only one service beyond the core service support. New components may use any component ID that is outside the range of IDs that have been allocated to legacy component definitions. New components can also contain two or more services beyond the core service support.

## Message Set

| ID | Message |
| --- | --- |
| `2B01h` | [QueryConfiguration](/messages/query-configuration-2b01) |
| `2B00h` | [QueryIdentification](/messages/query-identification-2b00) |
| `2B04h` | [QueryServiceList](/messages/query-service-list-2b04) |
| `2B03h` | [QueryServices](/messages/query-services-2b03) |
| `2B02h` | [QuerySubsystemList](/messages/query-subsystem-list-2b02) |
| `0B00h` | [RegisterServices](/messages/register-services-0b00) |
| `4B01h` | [ReportConfiguration](/messages/report-configuration-4b01) |
| `4B00h` | [ReportIdentification](/messages/report-identification-4b00) |
| `4B04h` | [ReportServiceList](/messages/report-service-list-4b04) |
| `4B03h` | [ReportServices](/messages/report-services-4b03) |
| `4B02h` | [ReportSubsystemList](/messages/report-subsystem-list-4b02) |

## State Machine Diagram

![Discovery State Machine Diagram](/smDiagrams/Discovery.png)

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
<td align="center" rowspan="6">A</td>
<td rowspan="6">DiscoveryLoopback</td>
<td><a href="/messages/register-services-0b00
">RegisterServices</a></td>
<td><code></code></td>
<td>publishServices
</td>
</tr>
<tr>
<td><a href="/messages/query-identification-2b00
">QueryIdentification</a></td>
<td><code></code></td>
<td><a href="/messages/report-identification-4b00
">sendReportIdentification</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-configuration-2b01
">QueryConfiguration</a></td>
<td><code></code></td>
<td><a href="/messages/report-configuration-4b01
">sendReportConfiguration</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-subsystem-list-2b02
">QuerySubsystemList</a></td>
<td><code></code></td>
<td><a href="/messages/report-subsystem-list-4b02
">sendReportSubsystemsList</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-services-2b03
">QueryServices</a></td>
<td><code></code></td>
<td><a href="/messages/report-services-4b03
">sendReportServices</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-service-list-2b04
">QueryServiceList</a></td>
<td><code></code></td>
<td><a href="/messages/report-service-list-4b04
">sendReportServiceList</a>
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
<td>publishServices</td>
<td></td>
<td>
</td>
</tr><tr>
<td>sendReportConfiguration</td>
<td>Send Action
</td>
<td>Send a Report Configuration message to the component that sent the query.
<br>
<i>Output Message:</i> <a href="/messages/report-configuration-4b01
">ReportConfiguration
</a></td>
</tr><tr>
<td>sendReportIdentification</td>
<td>Send Action
</td>
<td>Send a Report Identification message to the component that sent the query.
<br>
<i>Output Message:</i> <a href="/messages/report-identification-4b00
">ReportIdentification
</a></td>
</tr><tr>
<td>sendReportServiceList</td>
<td>Send Action
</td>
<td>Send a Report Service List message to the component that sent the query
<br>
<i>Output Message:</i> <a href="/messages/report-service-list-4b04
">ReportServiceList
</a></td>
</tr><tr>
<td>sendReportServices</td>
<td>Send Action
</td>
<td>Send a Report Services message to the component that sent the query.
<br>
<i>Output Message:</i> <a href="/messages/report-services-4b03
">ReportServices
</a></td>
</tr><tr>
<td>sendReportSubsystemsList</td>
<td>Send Action
</td>
<td>Send a Report Subsystems List message to the component that sent the query.
<br>
<i>Output Message:</i> <a href="/messages/report-subsystem-list-4b02
">ReportSubsystemList
</a></td>
</tr></tbody></table>

