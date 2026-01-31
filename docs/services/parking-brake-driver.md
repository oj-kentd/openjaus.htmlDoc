---
title: ParkingBrakeDriver
---

# ParkingBrakeDriver

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:ugv:ParkingBrakeDriver` |

## Description

The ParkingBrakeDriver provides the means to control Parking Brakes

## Message Set

| ID | Message |
| --- | --- |
| `2512h` | [QueryParkingBrake](/messages/query-parking-brake-2512) |
| `4512h` | [ReportParkingBrake](/messages/report-parking-brake-4512) |
| `0512h` | [SetParkingBrake](/messages/set-parking-brake-0512) |

## State Machine Diagram

![ParkingBrakeDriver State Machine Diagram](/smDiagrams/ParkingBrakeDriver.png)

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
<td align="center" rowspan="1">C</td>
<td rowspan="1">ParkingBrakeDriverControlledLoop</td>
<td><a href="/messages/set-parking-brake-0512
">SetParkingBrake</a></td>
<td><code>isControllingClient &amp;&amp; isEngage</code></td>
<td>setBrakeLevel
</td>
</tr><tr>
<td align="center" rowspan="1">A</td>
<td rowspan="1">ParkingBrakeDriverDefaultLoop</td>
<td><a href="/messages/query-parking-brake-2512
">QueryParkingBrake</a></td>
<td><code></code></td>
<td><a href="/messages/report-parking-brake-4512
">sendReportParkingBrake</a>
</td>
</tr><tr>
<td align="center" rowspan="1">B</td>
<td rowspan="1">ParkingBrakeDriverReadyLoop</td>
<td><a href="/messages/set-parking-brake-0512
">SetParkingBrake</a></td>
<td><code>isControllingClient</code></td>
<td>setBrakeLevel
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
<td>engageBrake</td>
<td>Exit Action
</td>
<td>Set the parking brake to the fully engaged level
</td>
</tr><tr>
<td>sendReportParkingBrake</td>
<td>Send Action
</td>
<td>Send a Report Parking Brake State message
<br>
<i>Output Message:</i> <a href="/messages/report-parking-brake-4512
">ReportParkingBrake
</a></td>
</tr><tr>
<td>setBrakeLevel</td>
<td></td>
<td>Set the parking brake to the specified level
</td>
</tr></tbody></table>

