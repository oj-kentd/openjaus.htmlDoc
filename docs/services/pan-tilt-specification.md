---
title: PanTiltSpecification
---

# PanTiltSpecification

| Property | Value |
| --- | --- |
| **Version** | 2.0 |
| **URN** | `urn:jaus:jss:manipulator:PanTiltSpecificationService` |

## Description

The function of the Pan Tilt Specification Service is to report the physical characteristics of a pan-tilt unit.  The Report Pan Tilt Specification Message returns the minimum and maximum allowable value and the maximum velocity for each of the two joints as well as the position and orientation of the pan tilt base coordinate system relative to the vehicle coordinate system.

## Message Set

| ID | Message |
| --- | --- |
| `2620h` | [QueryPanTiltSpecifications](/messages/query-pan-tilt-specifications-2620) |
| `4620h` | [ReportPanTiltSpecifications](/messages/report-pan-tilt-specifications-4620) |

## State Machine Diagram

![PanTiltSpecification State Machine Diagram](/smDiagrams/PanTiltSpecification.png)

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
<td rowspan="1">PanTiltSpecificationDefaultLoop</td>
<td><a href="/messages/query-pan-tilt-specifications-2620
">QueryPanTiltSpecifications</a></td>
<td><code></code></td>
<td><a href="/messages/report-pan-tilt-specifications-4620
">sendReportPanTiltSpecifications</a>
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
<td>sendReportPanTiltSpecifications</td>
<td>Send Action
</td>
<td>Send a Report Pan Tilt Specifications message
<br>
<i>Output Message:</i> <a href="/messages/report-pan-tilt-specifications-4620
">ReportPanTiltSpecifications
</a></td>
</tr></tbody></table>

