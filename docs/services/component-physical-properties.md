---
title: ComponentPhysicalProperties
---

# ComponentPhysicalProperties

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:exp:aeodrs:ComponentPhysicalProperties` |

## Description

The Component Physical Properties service provides information relating to the mass and shape of its host component to a requesting client.

## Message Set

| ID | Message |
| --- | --- |
| `EC40h` | [QueryMassProperties](/messages/query-mass-properties-ec40) |
| `EC42h` | [QueryShape](/messages/query-shape-ec42) |
| `FC40h` | [ReportMassProperties](/messages/report-mass-properties-fc40) |
| `FC42h` | [ReportShape](/messages/report-shape-fc42) |

## State Machine Diagram

![ComponentPhysicalProperties State Machine Diagram](/smDiagrams/ComponentPhysicalProperties.png)

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
<td rowspan="2">ComponentPhysicalPropertiesDefaultLoop</td>
<td><a href="/messages/query-shape-ec42
">QueryShape</a></td>
<td><code></code></td>
<td><a href="/messages/report-shape-fc42
">sendReportShape</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-mass-properties-ec40
">QueryMassProperties</a></td>
<td><code></code></td>
<td><a href="/messages/report-mass-properties-fc40
">sendReportMassProperties</a>
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
<td>sendReportMassProperties</td>
<td>Send Action
</td>
<td>Send a ReportMassProperties message
<br>
<i>Output Message:</i> <a href="/messages/report-mass-properties-fc40
">ReportMassProperties
</a></td>
</tr><tr>
<td>sendReportShape</td>
<td>Send Action
</td>
<td>Send a ReportShape message
<br>
<i>Output Message:</i> <a href="/messages/report-shape-fc42
">ReportShape
</a></td>
</tr></tbody></table>

