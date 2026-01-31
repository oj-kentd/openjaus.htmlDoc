---
title: SubsystemIDAllocator
---

# SubsystemIDAllocator

| Property | Value |
| --- | --- |
| **Version** | 1.4 |
| **URN** | `urn:jaus:jss:exp:aeodrs:SubsystemIDAllocator` |

## Description

This service is an experimental service taken from AEODRS that is designed to allocate JAUS Subsystem IDs from a central location. On receipt of a JAUS RequestSubsystemID message sent to the JAUS subsystem broadcast address, the SubsystemIDAllocator will provide the requestor with a unique subsystem ID via the GrantSubsystemID message. The SubsystemIDAllocator service also provides a query mechanism via the QuerySubsystemIDs and ReportSubsystemIDs messages by which a client can obtain a tailorable list of subsystem IDs allocated.

## Message Set

| ID | Message |
| --- | --- |
| `FB01h` | [GrantSubsystemID](/messages/grant-subsystem-id-fb01) |
| `EB02h` | [QuerySubsystemIDs](/messages/query-subsystem-ids-eb02) |
| `FB02h` | [ReportSubsystemIDs](/messages/report-subsystem-ids-fb02) |
| `DB01h` | [RequestSubsystemID](/messages/request-subsystem-id-db01) |

## State Machine Diagram

![SubsystemIDAllocator State Machine Diagram](/smDiagrams/SubsystemIDAllocator.png)

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
<td rowspan="2">SubsystemIDAllocatorDefaultLoop</td>
<td><a href="/messages/request-subsystem-id-db01
">RequestSubsystemID</a></td>
<td><code></code></td>
<td>broadcastGrantSubsystemIDtoSystem
</td>
</tr>
<tr>
<td><a href="/messages/query-subsystem-ids-eb02
">QuerySubsystemIDs</a></td>
<td><code></code></td>
<td><a href="/messages/report-subsystem-ids-fb02
">sendReportSubsystemIDs</a>
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
<td>broadcastGrantSubsystemIDtoSystem</td>
<td></td>
<td>
</td>
</tr><tr>
<td>sendReportSubsystemIDs</td>
<td>Send Action
</td>
<td>Construct and send the requeseted ReportSubsystemIDs message to the requestor.
<br>
<i>Output Message:</i> <a href="/messages/report-subsystem-ids-fb02
">ReportSubsystemIDs
</a></td>
</tr></tbody></table>

