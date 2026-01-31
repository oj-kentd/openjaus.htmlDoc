---
title: EnhancedAccessControl
---

# EnhancedAccessControl

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:EnhancedAccessControl` |

## Description

The EnhancedAccessControl service extends Access Control to allow for handoff of control from one client to another.    *** INSERT DIAGRAMS ****

## Internal Events

| ID | Event |
| --- | --- |
| `8D15h` | [EnhancedTimeout](/messages/enhanced-timeout-8d15) |
| `8D14h` | [HandoffTimeout](/messages/handoff-timeout-8d14) |

## Message Set

| ID | Message |
| --- | --- |
| `FF35h` | [ConfirmHandoffRequest](/messages/confirm-handoff-request-ff35) |
| `FF33h` | [QueryEnhancedTimeout](/messages/query-enhanced-timeout-ff33) |
| `FF32h` | [QueryHandoffTimeout](/messages/query-handoff-timeout-ff32) |
| `FF34h` | [RemoveHandoffRequest](/messages/remove-handoff-request-ff34) |
| `FF37h` | [ReportEnhancedTimeout](/messages/report-enhanced-timeout-ff37) |
| `FF36h` | [ReportHandoffTimeout](/messages/report-handoff-timeout-ff36) |
| `FF31h` | [RequestHandoff](/messages/request-handoff-ff31) |
| `h` | [RequestReleaseControl](/messages/request-release-control-) |

## State Machine Diagram

![EnhancedAccessControl State Machine Diagram](/smDiagrams/EnhancedAccessControl.png)

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
<td align="center" rowspan="2">B</td>
<td rowspan="2">EnhancedAccessControlControlledLoop</td>
<td><a href="/messages/request-handoff-ff31
">RequestHandoff</a></td>
<td><code></code></td>
<td></td>
</tr>
<tr>
<td><a href="/messages/remove-handoff-request-ff34
">RemoveHandoffRequest</a></td>
<td><code></code></td>
<td></td>
</tr><tr>
<td align="center" rowspan="2">A</td>
<td rowspan="2">EnhancedAccessControlDefaultLoop</td>
<td><a href="/messages/query-handoff-timeout-ff32
">QueryHandoffTimeout</a></td>
<td><code></code></td>
<td><a href="/messages/report-handoff-timeout-ff36
">sendReportHandoffTimeout</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-enhanced-timeout-ff33
">QueryEnhancedTimeout</a></td>
<td><code></code></td>
<td><a href="/messages/report-enhanced-timeout-ff37
">sendReportEnhancedTimeout</a>
</td>
</tr><tr>
<td align="center" rowspan="2">C</td>
<td rowspan="2">EnhancedAccessControlNotControlledLoop</td>
<td><a href="/messages/request-handoff-ff31
">RequestHandoff</a></td>
<td><code></code></td>
<td></td>
</tr>
<tr>
<td><a href="/messages/remove-handoff-request-ff34
">RemoveHandoffRequest</a></td>
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
<td>processHandoffResponse</td>
<td></td>
<td>Iterate through the list of responses to handoff requests, sending denials and dequeuing denied requests, sending waits to those with deferred decisions, and transferring control if any are accepted.
</td>
</tr><tr>
<td>queueHandoffRequest</td>
<td></td>
<td>Adds the request for handoff identified by ID to the queue of clients requesting handoff.
</td>
</tr><tr>
<td>resetHandoffTimer</td>
<td></td>
<td>Resets the handoff timer.
</td>
</tr><tr>
<td>sendReportEnhancedTimeout</td>
<td>Send Action
</td>
<td>Send a ReportEnhancedTimeout message to querying client
<br>
<i>Output Message:</i> <a href="/messages/report-enhanced-timeout-ff37
">ReportEnhancedTimeout
</a></td>
</tr><tr>
<td>sendReportHandoffTimeout</td>
<td>Send Action
</td>
<td>Send a ReportHandoffTimeout message to querying client
<br>
<i>Output Message:</i> <a href="/messages/report-handoff-timeout-ff36
">ReportHandoffTimeout
</a></td>
</tr></tbody></table>

