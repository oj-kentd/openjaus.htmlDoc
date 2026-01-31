---
title: Convoy
---

# Convoy

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:Convoy` |

## Description

Describe one or more convoys including all leader/follower relationships.

## Message Set

| ID | Message |
| --- | --- |
| `F100h` | [QueryConvoyDetails](/messages/query-convoy-details-f100) |
| `F102h` | [ReportConvoyDetails](/messages/report-convoy-details-f102) |
| `F101h` | [UpdateConvoyDetails](/messages/update-convoy-details-f101) |

## State Machine Diagram

![Convoy State Machine Diagram](/smDiagrams/Convoy.png)

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
<td rowspan="2">ConvoyDefaultLoop</td>
<td><a href="/messages/query-convoy-details-f100
">QueryConvoyDetails</a></td>
<td><code></code></td>
<td><a href="/messages/report-convoy-details-f102
">sendReportConvoyDetails</a>
</td>
</tr>
<tr>
<td><a href="/messages/update-convoy-details-f101
">UpdateConvoyDetails</a></td>
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
<td>sendReportConvoyDetails</td>
<td>Send Action
</td>
<td>Send a ReportConvoyDetails message
<br>
<i>Output Message:</i> <a href="/messages/report-convoy-details-f102
">ReportConvoyDetails
</a></td>
</tr><tr>
<td>updateConvoyDetails</td>
<td></td>
<td>Update the internal representation of the convoy
</td>
</tr></tbody></table>

