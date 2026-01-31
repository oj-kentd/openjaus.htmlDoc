---
title: CostMap2D
---

# CostMap2D

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:CostMap2D` |

## Description

The Cost Map 2D Service provides a mechanism to report obstacles, hazardous terrain, and no-go zones using an overhead 2D cost map.  The cost map is represented by a list of cells, broken into a specified number of rows and columns, which in turn corresponds to the width and height (respectively) of the map in meters. Each cell within the map specifies a cost value, and in some cases, a confidence value.  The cost is a relative measure of occupancy or effort to traverse the cell, such that a value of zero (0) means no occupancy or no effort, while a maximum cost value means a cell is non-traversable.  The center point of the cost map may be specified in global or local coordinates, depending on the particular implementation, as defined by [AS6009]. The map may also be rotated around the coordinate frame�s Z-axis by the specified yaw value. Cells within the list must be sequenced such that the most northwest point, relative to the non-rotated coordinate frame, is the first element.  Subsequent elements represent cells in an easterly direction, until the end of the row is reached.  At that point, the next row starts again on the west side of the map. **** DIAGRAM HERE ****

## Message Set

| ID | Message |
| --- | --- |
| `D740h` | [AddNoGoZone](/messages/add-no-go-zone-d740) |
| `D744h` | [AddNoGoZoneResponse](/messages/add-no-go-zone-response-d744) |
| `D738h` | [QueryCostMap2D](/messages/query-cost-map2d-d738) |
| `D739h` | [QueryNoGoZones](/messages/query-no-go-zones-d739) |
| `D741h` | [RemoveNoGoZone](/messages/remove-no-go-zone-d741) |
| `D742h` | [ReportCostMap2D](/messages/report-cost-map2d-d742) |
| `D743h` | [ReportNoGoZones](/messages/report-no-go-zones-d743) |

## State Machine Diagram

![CostMap2D State Machine Diagram](/smDiagrams/CostMap2D.png)

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
<td align="center" rowspan="3">B</td>
<td rowspan="3">CostMap2DControlledLoop</td>
<td><a href="/messages/add-no-go-zone-d740
">AddNoGoZone</a></td>
<td><code></code></td>
<td></td>
</tr>
<tr>
<td><a href="/messages/add-no-go-zone-d740
">AddNoGoZone</a></td>
<td><code></code></td>
<td></td>
</tr>
<tr>
<td><a href="/messages/remove-no-go-zone-d741
">RemoveNoGoZone</a></td>
<td><code></code></td>
<td></td>
</tr><tr>
<td align="center" rowspan="2">A</td>
<td rowspan="2">CostMap2DDefaultLoop</td>
<td><a href="/messages/query-cost-map2d-d738
">QueryCostMap2D</a></td>
<td><code></code></td>
<td><a href="/messages/report-cost-map2d-d742
">sendReportCostMap2D</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-no-go-zones-d739
">QueryNoGoZones</a></td>
<td><code></code></td>
<td><a href="/messages/report-no-go-zones-d743
">sendReportNoGoZones</a>
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
<td>sendReportCostMap2D</td>
<td>Send Action
</td>
<td>Send a Report Cost Map 2D message
<br>
<i>Output Message:</i> <a href="/messages/report-cost-map2d-d742
">ReportCostMap2D
</a></td>
</tr><tr>
<td>sendReportNoGoZones</td>
<td>Send Action
</td>
<td>Send a Report No Go Zones message
<br>
<i>Output Message:</i> <a href="/messages/report-no-go-zones-d743
">ReportNoGoZones
</a></td>
</tr></tbody></table>

