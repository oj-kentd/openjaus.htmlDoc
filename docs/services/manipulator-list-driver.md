---
title: ManipulatorListDriver
---

# ManipulatorListDriver

| Property | Value |
| --- | --- |
| **Version** | 2.0 |
| **URN** | `urn:jaus:jss:manipulator:ManipulatorListDriver` |

## Description

The function of the Manipulator List Driver is to add support for executing a list of waypoints. It is expected that child services will inherit this service to provide functionality by overriding the isListValid() guard in the protocol.

## Message Set

| ID | Message |
| --- | --- |
| `061Eh` | [ExecuteList](/messages/execute-list-061e) |
| `261Eh` | [QueryActiveElement](/messages/query-active-element-261e) |
| `461Eh` | [ReportActiveElement](/messages/report-active-element-461e) |

## State Machine Diagram

![ManipulatorListDriver State Machine Diagram](/smDiagrams/ManipulatorListDriver.png)

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
<td rowspan="1">ManipulatorListDriverDefaultLoop</td>
<td><a href="/messages/query-active-element-261e
">QueryActiveElement</a></td>
<td><code></code></td>
<td><a href="/messages/report-active-element-461e
">sendReportActiveElement</a>
</td>
</tr><tr>
<td align="center" rowspan="1">B</td>
<td rowspan="1">ManipulatorListDriverReadyLoop</td>
<td><a href="/messages/execute-list-061e
">ExecuteList</a></td>
<td><code>isControllingClient &amp;&amp; ( elementExists &amp;&amp; isListValid )</code></td>
<td>executeTargetList
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
<td>executeTargetList</td>
<td></td>
<td>
</td>
</tr><tr>
<td>sendReportActiveElement</td>
<td>Send Action
</td>
<td>Send a Report Active Element message
<br>
<i>Output Message:</i> <a href="/messages/report-active-element-461e
">ReportActiveElement
</a></td>
</tr><tr>
<td>stopMotion</td>
<td>Exit Action
</td>
<td>
</td>
</tr></tbody></table>

