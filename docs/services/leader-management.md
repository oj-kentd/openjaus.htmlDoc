---
title: LeaderManagement
---

# LeaderManagement

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:LeaderManagement` |

## Description

The Leader Management Service is intended to be hosted by the lead subsystem in a leader/follower operation.  The Service allows followers to register with the leader and requires periodic requests from the followers to maintain registration.  Furthermore, follower may request that the lead vehicle slow down or speed up to improve the leader/follower performance by using the speed override message.

## Internal Events

| ID | Event |
| --- | --- |
| `8D17h` | [RegistrationTimeout](/messages/registration-timeout-8d17) |

## Message Set

| ID | Message |
| --- | --- |
| `FFD3h` | [QueryFollowers](/messages/query-followers-ffd3) |
| `FFD2h` | [RegisterFollower](/messages/register-follower-ffd2) |
| `FFD5h` | [RegisterFollowerResponse](/messages/register-follower-response-ffd5) |
| `FFD4h` | [ReportFollowers](/messages/report-followers-ffd4) |
| `FFD1h` | [RequestSpeedOverride](/messages/request-speed-override-ffd1) |

## State Machine Diagram

![LeaderManagement State Machine Diagram](/smDiagrams/LeaderManagement.png)

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
<td align="center" rowspan="4">A</td>
<td rowspan="4">LeaderManagementDefaultLoop</td>
<td><a href="/messages/query-followers-ffd3
">QueryFollowers</a></td>
<td><code></code></td>
<td><a href="/messages/report-followers-ffd4
">sendReportFollowers</a>
</td>
</tr>
<tr>
<td><a href="/messages/register-follower-ffd2
">RegisterFollower</a></td>
<td><code></code></td>
<td>AddFollowerToRegistrationList
, sendRegisterFollowerResponseConnected
</td>
</tr>
<tr>
<td><a href="/messages/request-speed-override-ffd1
">RequestSpeedOverride</a></td>
<td><code>isRegistered</code></td>
<td>setOverride
</td>
</tr>
<tr>
<td><a href="/messages/registration-timeout-8d17
">RegistrationTimeout</a></td>
<td><code></code></td>
<td>RemoveFollowerToRegistrationList
, sendRegisterFollowerResponseNotConnected
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
<td>AddFollowerToRegistrationList</td>
<td></td>
<td>Add the component that sent the request to the follower list
</td>
</tr><tr>
<td>RemoveFollowerToRegistrationList</td>
<td></td>
<td>Remove the component from the follower list
</td>
</tr><tr>
<td>sendRegisterFollowerResponseConnected</td>
<td></td>
<td>
</td>
</tr><tr>
<td>sendRegisterFollowerResponseNotConnected</td>
<td></td>
<td>
</td>
</tr><tr>
<td>sendReportFollowers</td>
<td>Send Action
</td>
<td>Send a Report Followers message to querying client
<br>
<i>Output Message:</i> <a href="/messages/report-followers-ffd4
">ReportFollowers
</a></td>
</tr><tr>
<td>setOverride</td>
<td></td>
<td>Update the leader's override value based on the new request.  The current override is the minimum requested value of all requested followers.
</td>
</tr></tbody></table>

