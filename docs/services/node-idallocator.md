---
title: NodeIDAllocator
---

# NodeIDAllocator

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:NodeIDAllocator` |

## Description

The NodeIDAllocator serice is responsible for allocating and assigning Node IDs to JAUS Nodes on a JAUS Subsystem.  On receipt of a JAUS RequestNodeID message sent to the JAUS node broadcast address, the NodeIDAllocator will provide the requestor with a unique node ID via the GrantNodeID message.

## Message Set

| ID | Message |
| --- | --- |
| `FB03h` | [GrantNodeID](/messages/grant-node-id-fb03) |
| `DB03h` | [RequestNodeID](/messages/request-node-id-db03) |

## State Machine Diagram

![NodeIDAllocator State Machine Diagram](/smDiagrams/NodeIDAllocator.png)

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
<td rowspan="1">NodeIDAllocatorDefaultLoop</td>
<td><a href="/messages/request-node-id-db03
">RequestNodeID</a></td>
<td><code></code></td>
<td>broadcastGrantNodeIDtoSubsystem
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
<td>broadcastGrantNodeIDtoSubsystem</td>
<td></td>
<td>
</td>
</tr></tbody></table>

