---
title: MilitaryIllumination
---

# MilitaryIllumination

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:iop:MilitaryIlluminationService` |

## Description

The Military Illumination Service provides the means to control military style UGV lights (i.e. black out lamps, markers, etc.).

## Message Set

| ID | Message |
| --- | --- |
| `B513h` | [QueryMilitaryIlluminationMode](/messages/query-military-illumination-mode-b513) |
| `B514h` | [ReportMilitaryIlluminationMode](/messages/report-military-illumination-mode-b514) |
| `B514h` | [SetMilitaryIlluminationMode](/messages/set-military-illumination-mode-b514) |

## State Machine Diagram

![MilitaryIllumination State Machine Diagram](/smDiagrams/MilitaryIllumination.png)

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
<td rowspan="1">MilitaryIlluminationControlledLoop</td>
<td><a href="/messages/set-military-illumination-mode-b514
">SetMilitaryIlluminationMode</a></td>
<td><code>isControllingClient</code></td>
<td>setMilitaryIlluminationMode
</td>
</tr><tr>
<td align="center" rowspan="1">A</td>
<td rowspan="1">MilitaryIlluminationDefaultLoop</td>
<td><a href="/messages/query-military-illumination-mode-b513
">QueryMilitaryIlluminationMode</a></td>
<td><code></code></td>
<td><a href="/messages/report-military-illumination-mode-b514
">sendReportMilitaryIlluminationMode</a>
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
<td>sendReportMilitaryIlluminationMode</td>
<td>Send Action
</td>
<td>Send a Report Military Illumination Mode message
<br>
<i>Output Message:</i> <a href="/messages/report-military-illumination-mode-b514
">ReportMilitaryIlluminationMode
</a></td>
</tr><tr>
<td>setMilitaryIlluminationMode</td>
<td></td>
<td>Set the military illumination mode for the illuminators
</td>
</tr></tbody></table>

