---
title: Configuration
---

# Configuration

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:openjaus:core:Configuration` |

## Description

The Configuration Service provides runtime configuration of JAUS addresses using a discovery process which uses non-JAUS messages sent over JUDP.

## Message Set

| ID | Message |
| --- | --- |
| `5555h` | [QueryJausAddress](/messages/query-jaus-address-5555) |
| `5556h` | [ReportJausAddress](/messages/report-jaus-address-5556) |

## State Machine Diagram

![Configuration State Machine Diagram](/smDiagrams/Configuration.png)

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
<td rowspan="2">DefaultConfigurationLoop</td>
<td><a href="/messages/report-jaus-address-5556
">ReportJausAddress</a></td>
<td><code></code></td>
<td>setThisJausAddress
</td>
</tr>
<tr>
<td><a href="/messages/query-jaus-address-5555
">QueryJausAddress</a></td>
<td><code></code></td>
<td>sendJausAddress
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
<td>sendJausAddress</td>
<td></td>
<td>
</td>
</tr><tr>
<td>setThisJausAddress</td>
<td></td>
<td>
</td>
</tr></tbody></table>

