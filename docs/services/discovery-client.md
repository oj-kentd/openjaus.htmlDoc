---
title: DiscoveryClient
---

# DiscoveryClient

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:openjaus:core:DiscoveryClient` |

## Description

This is a service which only implements the "client" side protocol of the Discovery process.

## State Machine Diagram

![DiscoveryClient State Machine Diagram](/smDiagrams/DiscoveryClient.png)

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
<td align="center" rowspan="5">A</td>
<td rowspan="5">DiscoveryClientLoopback</td>
<td><a href="/messages/report-identification-4b00
">ReportIdentification</a></td>
<td><code></code></td>
<td>processReportIdentification
</td>
</tr>
<tr>
<td><a href="/messages/report-configuration-4b01
">ReportConfiguration</a></td>
<td><code></code></td>
<td>processReportConfiguration
</td>
</tr>
<tr>
<td><a href="/messages/report-subsystem-list-4b02
">ReportSubsystemList</a></td>
<td><code></code></td>
<td>processReportSubsystemList
</td>
</tr>
<tr>
<td><a href="/messages/report-services-4b03
">ReportServices</a></td>
<td><code></code></td>
<td>processReportServices
</td>
</tr>
<tr>
<td><a href="/messages/report-service-list-4b04
">ReportServiceList</a></td>
<td><code></code></td>
<td>processReportServiceList
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
<td>processReportConfiguration</td>
<td></td>
<td>Executed when a ReportConfiguration message is received.
</td>
</tr><tr>
<td>processReportIdentification</td>
<td></td>
<td>Executed when a ReportIdentification message is received.
</td>
</tr><tr>
<td>processReportServiceList</td>
<td></td>
<td>Executed when a ReportServicesList message is received.
</td>
</tr><tr>
<td>processReportServices</td>
<td></td>
<td>Executed when a ReportServices message is received.
</td>
</tr><tr>
<td>processReportSubsystemList</td>
<td></td>
<td>Executed when a ReportSubsystemList message is received.
</td>
</tr></tbody></table>

