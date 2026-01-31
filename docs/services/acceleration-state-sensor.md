---
title: AccelerationStateSensor
---

# AccelerationStateSensor

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:mobility:AccelerationStateSensor` |

## Description

This service reports the acceleration  state of the unmanned platform.  The Acceleration State Sensor reports the acceleration state that is the first derivative (the rate of change) of the velocity state reported by the Velocity State Sensor. Refer to the description on Velocity State Sensor for coordinate details.

## Message Set

| ID | Message |
| --- | --- |
| `2417h` | [QueryAccelerationState](/messages/query-acceleration-state-2417) |
| `4417h` | [ReportAccelerationState](/messages/report-acceleration-state-4417) |

## State Machine Diagram

![AccelerationStateSensor State Machine Diagram](/smDiagrams/AccelerationStateSensor.png)

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
<td rowspan="1">AccelerationStateDefaultLoop</td>
<td><a href="/messages/query-acceleration-state-2417
">QueryAccelerationState</a></td>
<td><code></code></td>
<td><a href="/messages/report-acceleration-state-4417
">sendReportAccelerationState</a>
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
<td>sendReportAccelerationState</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/report-acceleration-state-4417
">ReportAccelerationState
</a></td>
</tr></tbody></table>

