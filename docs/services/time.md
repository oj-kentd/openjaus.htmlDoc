---
title: Time
---

# Time

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:core:Time` |

## Description

The Time Service allows clients to query and set the system time for the component. Note that exclusive control is required to set the time, but is not required to query it.

## Message Set

| ID | Message |
| --- | --- |
| `2011h` | [QueryTime](/messages/query-time-2011) |
| `4011h` | [ReportTime](/messages/report-time-4011) |
| `0011h` | [SetTime](/messages/set-time-0011) |

## State Machine Diagram

![Time State Machine Diagram](/smDiagrams/Time.png)

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
<td rowspan="1">TimeControlledLoop</td>
<td><a href="/messages/set-time-0011
">SetTime</a></td>
<td><code>isControllingClient</code></td>
<td>setTime
</td>
</tr><tr>
<td align="center" rowspan="1">A</td>
<td rowspan="1">TimeDefaultLoop</td>
<td><a href="/messages/query-time-2011
">QueryTime</a></td>
<td><code></code></td>
<td><a href="/messages/report-time-4011
">sendReportTime</a>
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
<td>sendReportTime</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/report-time-4011
">ReportTime
</a></td>
</tr><tr>
<td>setTime</td>
<td></td>
<td>
</td>
</tr></tbody></table>

