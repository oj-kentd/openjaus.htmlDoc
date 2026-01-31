---
title: Illumination
---

# Illumination

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:ugv:IlluminationService` |

## Description

The Illumination Service provides the means to control UGV lights.

## Message Set

| ID | Message |
| --- | --- |
| `2514h` | [QueryIlluminationConfiguration](/messages/query-illumination-configuration-2514) |
| `2513h` | [QueryIlluminationState](/messages/query-illumination-state-2513) |
| `4514h` | [ReportIlluminationConfiguration](/messages/report-illumination-configuration-4514) |
| `4513h` | [ReportIlluminationState](/messages/report-illumination-state-4513) |
| `0513h` | [SetIlluminationState](/messages/set-illumination-state-0513) |

## State Machine Diagram

![Illumination State Machine Diagram](/smDiagrams/Illumination.png)

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
<td rowspan="1">IlluminationControlledLoop</td>
<td><a href="/messages/set-illumination-state-0513
">SetIlluminationState</a></td>
<td><code>isControllingClient &amp;&amp; isSupported</code></td>
<td>setIlluminationState
</td>
</tr><tr>
<td align="center" rowspan="2">A</td>
<td rowspan="2">IlluminationDefaultLoop</td>
<td><a href="/messages/query-illumination-state-2513
">QueryIlluminationState</a></td>
<td><code></code></td>
<td><a href="/messages/report-illumination-state-4513
">sendReportIlluminationState</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-illumination-configuration-2514
">QueryIlluminationConfiguration</a></td>
<td><code></code></td>
<td><a href="/messages/report-illumination-configuration-4514
">sendReportIlluminationConfiguration</a>
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
<td>sendReportIlluminationConfiguration</td>
<td>Send Action
</td>
<td>Send a Report Illumination Configuration message
<br>
<i>Output Message:</i> <a href="/messages/report-illumination-configuration-4514
">ReportIlluminationConfiguration
</a></td>
</tr><tr>
<td>sendReportIlluminationState</td>
<td>Send Action
</td>
<td>Send a Report Illumination State message
<br>
<i>Output Message:</i> <a href="/messages/report-illumination-state-4513
">ReportIlluminationState
</a></td>
</tr><tr>
<td>setIlluminationState</td>
<td></td>
<td>Set the illumination state for the specified sources.
</td>
</tr></tbody></table>

