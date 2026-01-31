---
title: PowerPlantManager
---

# PowerPlantManager

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:ugv:PowerPlantManager` |

## Description

The powerplant driver provides the means to control vehicle power plants

## Message Set

| ID | Message |
| --- | --- |
| `2507h` | [QueryPowerPlantCapabilities](/messages/query-power-plant-capabilities-2507) |
| `2506h` | [QueryPowerPlantConfiguration](/messages/query-power-plant-configuration-2506) |
| `2508h` | [QueryPowerPlantStatus](/messages/query-power-plant-status-2508) |
| `4507h` | [ReportPowerPlantCapabilities](/messages/report-power-plant-capabilities-4507) |
| `4506h` | [ReportPowerPlantConfiguration](/messages/report-power-plant-configuration-4506) |
| `4508h` | [ReportPowerPlantStatus](/messages/report-power-plant-status-4508) |
| `0506h` | [SetPowerPlantConfiguration](/messages/set-power-plant-configuration-0506) |

## State Machine Diagram

![PowerPlantManager State Machine Diagram](/smDiagrams/PowerPlantManager.png)

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
<td rowspan="1">PowerPlantManagerControlledLoop</td>
<td><a href="/messages/set-power-plant-configuration-0506
">SetPowerPlantConfiguration</a></td>
<td><code>isControllingClient &amp;&amp; isSupported</code></td>
<td>setPowerPlantConfiguration
</td>
</tr><tr>
<td align="center" rowspan="3">A</td>
<td rowspan="3">PowerPlantManagerDefaultLoop</td>
<td><a href="/messages/query-power-plant-configuration-2506
">QueryPowerPlantConfiguration</a></td>
<td><code></code></td>
<td><a href="/messages/report-power-plant-configuration-4506
">sendReportPowerPlantConfiguration</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-power-plant-capabilities-2507
">QueryPowerPlantCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-power-plant-capabilities-4507
">sendReportPowerPlantCapabilities</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-power-plant-status-2508
">QueryPowerPlantStatus</a></td>
<td><code></code></td>
<td><a href="/messages/report-power-plant-status-4508
">sendReportPowerPlantStatus</a>
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
<td>sendReportPowerPlantCapabilities</td>
<td>Send Action
</td>
<td>Send a Report Power Plant Capabilities message
<br>
<i>Output Message:</i> <a href="/messages/report-power-plant-capabilities-4507
">ReportPowerPlantCapabilities
</a></td>
</tr><tr>
<td>sendReportPowerPlantConfiguration</td>
<td>Send Action
</td>
<td>Send a Report Power Plant Configuration message
<br>
<i>Output Message:</i> <a href="/messages/report-power-plant-configuration-4506
">ReportPowerPlantConfiguration
</a></td>
</tr><tr>
<td>sendReportPowerPlantStatus</td>
<td>Send Action
</td>
<td>Send a Report Power Plant Status message
<br>
<i>Output Message:</i> <a href="/messages/report-power-plant-status-4508
">ReportPowerPlantStatus
</a></td>
</tr><tr>
<td>setPowerPlantConfiguration</td>
<td></td>
<td>Update the settings for the specified powerplants.
</td>
</tr></tbody></table>

