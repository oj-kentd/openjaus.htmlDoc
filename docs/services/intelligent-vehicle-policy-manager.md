---
title: IntelligentVehiclePolicyManager
---

# IntelligentVehiclePolicyManager

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:IntelligentVehiclePolicyManager` |

## Description

The service is used to control automated driver assist behaviors on the platform.  It is not expected that all vehicles will support all behaviors; rather the Query/Report Capability pair should be used to determine which functions are available on a particular implementation.

## Message Set

| ID | Message |
| --- | --- |
| `DDD1h` | [QueryIntelligentVehicleCapabilities](/messages/query-intelligent-vehicle-capabilities-ddd1) |
| `DDD2h` | [QueryIntelligentVehicleConfiguration](/messages/query-intelligent-vehicle-configuration-ddd2) |
| `DDD3h` | [QueryIntelligentVehicleStatus](/messages/query-intelligent-vehicle-status-ddd3) |
| `DDD5h` | [ReportIntelligentVehicleCapabilities](/messages/report-intelligent-vehicle-capabilities-ddd5) |
| `DDD6h` | [ReportIntelligentVehicleConfiguration](/messages/report-intelligent-vehicle-configuration-ddd6) |
| `DDD7h` | [ReportIntelligentVehicleStatus](/messages/report-intelligent-vehicle-status-ddd7) |
| `DDD4h` | [SetIntelligentVehicleConfiguration](/messages/set-intelligent-vehicle-configuration-ddd4) |

## State Machine Diagram

![IntelligentVehiclePolicyManager State Machine Diagram](/smDiagrams/IntelligentVehiclePolicyManager.png)

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
<td align="center" rowspan="4">A</td>
<td rowspan="4">IntelligentVehiclePolicyManagerDefaultLoop</td>
<td><a href="/messages/query-intelligent-vehicle-capabilities-ddd1
">QueryIntelligentVehicleCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-intelligent-vehicle-capabilities-ddd5
">sendReportIntelligentVehicleCapabilities</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-intelligent-vehicle-configuration-ddd2
">QueryIntelligentVehicleConfiguration</a></td>
<td><code></code></td>
<td><a href="/messages/report-intelligent-vehicle-configuration-ddd6
">sendReportIntelligentVehicleConfiguration</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-intelligent-vehicle-status-ddd3
">QueryIntelligentVehicleStatus</a></td>
<td><code></code></td>
<td><a href="/messages/report-intelligent-vehicle-status-ddd7
">sendReportIntelligentVehicleStatus</a>
</td>
</tr>
<tr>
<td><a href="/messages/set-intelligent-vehicle-configuration-ddd4
">SetIntelligentVehicleConfiguration</a></td>
<td><code></code></td>
<td></td>
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
<td>sendReportIntelligentVehicleCapabilities</td>
<td>Send Action
</td>
<td>Send a Report Intelligent Vehicle Capabilities message
<br>
<i>Output Message:</i> <a href="/messages/report-intelligent-vehicle-capabilities-ddd5
">ReportIntelligentVehicleCapabilities
</a></td>
</tr><tr>
<td>sendReportIntelligentVehicleConfiguration</td>
<td>Send Action
</td>
<td>Send a Report Intelligent Vehicle Configuration message
<br>
<i>Output Message:</i> <a href="/messages/report-intelligent-vehicle-configuration-ddd6
">ReportIntelligentVehicleConfiguration
</a></td>
</tr><tr>
<td>sendReportIntelligentVehicleStatus</td>
<td>Send Action
</td>
<td>Send a Report Intelligent Vehicle Status message
<br>
<i>Output Message:</i> <a href="/messages/report-intelligent-vehicle-status-ddd7
">ReportIntelligentVehicleStatus
</a></td>
</tr><tr>
<td>setIntelligentVehicleConfiguration</td>
<td></td>
<td>Set the intelligent vehicle functions to the specified configuration
</td>
</tr></tbody></table>

