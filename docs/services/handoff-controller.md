---
title: HandoffController
---

# HandoffController

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:HandoffController` |

## Description

The Handoff Controller service runs on an entity such as an OCU that support handing off control.

## Internal Events

| ID | Event |
| --- | --- |
| `8D16h` | [HandoffDecisionMade](/messages/handoff-decision-made-8d16) |

## Message Set

| ID | Message |
| --- | --- |
| `FF39h` | [ConfirmReleaseControl](/messages/confirm-release-control-ff39) |
| `FF38h` | [RequestReleaseControl](/messages/request-release-control-ff38) |

## State Machine Diagram

![HandoffController State Machine Diagram](/smDiagrams/HandoffController.png)

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
<td rowspan="2">HandoffControllerDefaultLoop</td>
<td><a href="/messages/request-release-control-ff38
">RequestReleaseControl</a></td>
<td><code></code></td>
<td>processHandoffRequests
</td>
</tr>
<tr>
<td><a href="/messages/handoff-decision-made-8d16
">HandoffDecisionMade</a></td>
<td><code></code></td>
<td><a href="/messages/confirm-release-control-ff39
">sendConfirmReleaseControl</a>
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
<td>processHandoffRequests</td>
<td></td>
<td>Process the handoff requests, determining if they should be denied, accepted, or delayed.  This may involve displaying to the human operator all handoff requests so he can make his decision(s).  This could also mean 'convey for processing' in the case that a non-human operator is responding to the hand-off request.
</td>
</tr><tr>
<td>sendConfirmReleaseControl</td>
<td>Send Action
</td>
<td>Send a ConfirmReleaseControl message to requesting client
<br>
<i>Output Message:</i> <a href="/messages/confirm-release-control-ff39
">ConfirmReleaseControl
</a></td>
</tr></tbody></table>

