---
title: PhysicalSpecification
---

# PhysicalSpecification

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:PhysicalSpecificationService` |

## Description

The Physical Specification Service provides a mechanism for describing the physical and power characteristics of a node.

## Message Set

| ID | Message |
| --- | --- |
| `D731h` | [QueryElectricalProperties](/messages/query-electrical-properties-d731) |
| `D730h` | [QueryPhysicalProperties](/messages/query-physical-properties-d730) |
| `D733h` | [ReportElectricalProperties](/messages/report-electrical-properties-d733) |
| `D732h` | [ReportPhysicalProperties](/messages/report-physical-properties-d732) |

## State Machine Diagram

![PhysicalSpecification State Machine Diagram](/smDiagrams/PhysicalSpecification.png)

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
<td rowspan="2">PhysicalSpecificationDefaultLoop</td>
<td><a href="/messages/query-physical-properties-d730
">QueryPhysicalProperties</a></td>
<td><code></code></td>
<td><a href="/messages/report-physical-properties-d732
">sendReportPhysicalProperties</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-electrical-properties-d731
">QueryElectricalProperties</a></td>
<td><code></code></td>
<td><a href="/messages/report-electrical-properties-d733
">sendReportElectricalProperties</a>
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
<td>sendReportElectricalProperties</td>
<td>Send Action
</td>
<td>Send a ReportElectricalProperties message
<br>
<i>Output Message:</i> <a href="/messages/report-electrical-properties-d733
">ReportElectricalProperties
</a></td>
</tr><tr>
<td>sendReportPhysicalProperties</td>
<td>Send Action
</td>
<td>Send a ReportPhysicalProperties message
<br>
<i>Output Message:</i> <a href="/messages/report-physical-properties-d732
">ReportPhysicalProperties
</a></td>
</tr></tbody></table>

