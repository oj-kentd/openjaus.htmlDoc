---
title: Annunciator
---

# Annunciator

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:ugv:AnnunciatorService` |

## Description

The Annunciator Service provides the means to control audible devices such as horns and back-up indicators.

## Message Set

| ID | Message |
| --- | --- |
| `2517h` | [QueryAnnunciatorConfiguration](/messages/query-annunciator-configuration-2517) |
| `2516h` | [QueryAnnunciatorState](/messages/query-annunciator-state-2516) |
| `4517h` | [ReportAnnunciatorConfiguration](/messages/report-annunciator-configuration-4517) |
| `4516h` | [ReportAnnunciatorState](/messages/report-annunciator-state-4516) |
| `0516h` | [SetAnnunciatorState](/messages/set-annunciator-state-0516) |

## State Machine Diagram

![Annunciator State Machine Diagram](/smDiagrams/Annunciator.png)

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
<td rowspan="1">AnnunciatorControlledLoop</td>
<td><a href="/messages/set-annunciator-state-0516
">SetAnnunciatorState</a></td>
<td><code>isControllingClient &amp;&amp; isSupported</code></td>
<td>setAnnunciatorState
</td>
</tr><tr>
<td align="center" rowspan="2">A</td>
<td rowspan="2">AnnunciatorDefaultLoop</td>
<td><a href="/messages/query-annunciator-state-2516
">QueryAnnunciatorState</a></td>
<td><code></code></td>
<td><a href="/messages/report-annunciator-state-4516
">sendReportAnnunciatorState</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-annunciator-configuration-2517
">QueryAnnunciatorConfiguration</a></td>
<td><code></code></td>
<td><a href="/messages/report-annunciator-configuration-4517
">sendReportAnnunciatorConfiguration</a>
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
<td>sendReportAnnunciatorConfiguration</td>
<td>Send Action
</td>
<td>Send a Report Annunciator Configuration message
<br>
<i>Output Message:</i> <a href="/messages/report-annunciator-configuration-4517
">ReportAnnunciatorConfiguration
</a></td>
</tr><tr>
<td>sendReportAnnunciatorState</td>
<td>Send Action
</td>
<td>Send a Report Annunciator State message
<br>
<i>Output Message:</i> <a href="/messages/report-annunciator-state-4516
">ReportAnnunciatorState
</a></td>
</tr><tr>
<td>setAnnunciatorState</td>
<td></td>
<td>Set the annunciator state for the specified sources.
</td>
</tr></tbody></table>

