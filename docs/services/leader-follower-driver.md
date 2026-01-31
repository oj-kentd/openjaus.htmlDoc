---
title: LeaderFollowerDriver
---

# LeaderFollowerDriver

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:LeaderFollowerDriver` |

## Description

The Leader Follower Driver Service provides a mechanism for following the path of a leader.  A leader can be identified by the ID of its Global Pose Sensor Service, or may be implicitly known by the implementation.  In addition, a leader may host the Leader Management Service, which allows a follower vehicle to adjust the speed of the lead vehicle to compensate for delays encountered, such as local obstacles, traffic conditions, etc.

## Message Set

| ID | Message |
| --- | --- |
| `FFF3h` | [QueryFollowerConfiguration](/messages/query-follower-configuration-fff3) |
| `FFF4h` | [ReportFollowerConfiguration](/messages/report-follower-configuration-fff4) |
| `FFF2h` | [SetFollowerConfiguration](/messages/set-follower-configuration-fff2) |
| `FFF1h` | [SetFollowerState](/messages/set-follower-state-fff1) |

## State Machine Diagram

![LeaderFollowerDriver State Machine Diagram](/smDiagrams/LeaderFollowerDriver.png)

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
<td rowspan="1">LeaderFollowerDriverControlledLoop</td>
<td><a href="/messages/set-follower-configuration-fff2
">SetFollowerConfiguration</a></td>
<td><code>isControllingClient</code></td>
<td>setFollowerValues
</td>
</tr><tr>
<td align="center" rowspan="1">A</td>
<td rowspan="1">LeaderFollowerDriverDefaultLoop</td>
<td><a href="/messages/query-follower-configuration-fff3
">QueryFollowerConfiguration</a></td>
<td><code></code></td>
<td><a href="/messages/report-follower-configuration-fff4
">sendReportFollowerConfiguration</a>
</td>
</tr><tr>
<td align="center" rowspan="1">C</td>
<td rowspan="1">LeaderFollowerDriverReadyLoop</td>
<td><a href="/messages/set-follower-state-fff1
">SetFollowerState</a></td>
<td><code>isControllingClient</code></td>
<td>setFollowerState
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
<td>sendReportFollowerConfiguration</td>
<td>Send Action
</td>
<td>Send a Report Follower Configuration message
<br>
<i>Output Message:</i> <a href="/messages/report-follower-configuration-fff4
">ReportFollowerConfiguration
</a></td>
</tr><tr>
<td>setFollowerState</td>
<td></td>
<td>Set the specified follower state
</td>
</tr><tr>
<td>setFollowerValues</td>
<td></td>
<td>Set the specified configuration values
</td>
</tr></tbody></table>

