---
title: Transport
---

# Transport

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:core:Transport` |

## Description

The transport service acts as an interface to the JAUS transport layer. It models an abstract bi-directional communication channel (input queue and output queue) whose primary function is to provide the capability of sending messages to a single destination endpoint or broadcasting messages to all endpoints in the system, and to receive a message from any source endpoint. It also provides the capability to prioritize the delivery of sent messages.This service establishes a communication endpoint whose address is defined by a triple {SubsystemID, NodeID, ComponentID} as specified by the Send and Receive internal events. Other services that need to utilize the communication channel provided by the transport service must inherit from the transport service.

## Message Set

| ID | Message |
| --- | --- |
| `6501h` | [QueryTransportPolicy](/messages/query-transport-policy-6501) |
| `6502h` | [ReportTransportPolicy](/messages/report-transport-policy-6502) |

## State Machine Diagram

![Transport State Machine Diagram](/smDiagrams/Transport.png)

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
<td align="center" rowspan="2">"A"</td>
<td rowspan="2">PolicyLoop</td>
<td><a href="/messages/query-transport-policy-6501
">QueryTransportPolicy</a></td>
<td><code></code></td>
<td><a href="/messages/report-transport-policy-6502
">sendTransportPolicy</a>
</td>
</tr>
<tr>
<td><a href="/messages/report-transport-policy-6502
">ReportTransportPolicy</a></td>
<td><code></code></td>
<td>storeTransportPolicy
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
<td>broadcastGlobalEnqueue</td>
<td></td>
<td>Package the message as specified by the transport layer specification and send it to all endpoints on all subsystems.
</td>
</tr><tr>
<td>broadcastLocalEnqueue</td>
<td></td>
<td>Package the message as specified by the transport layer specification and send it to all endpoints in the local subsystem.
</td>
</tr><tr>
<td>broadcastToNode</td>
<td></td>
<td>Broadcasts message to all components within the local node
</td>
</tr><tr>
<td>broadcastToSubsystem</td>
<td></td>
<td>Broadcasts a given message to all nodes in the local subsystem (equivalent to broadcast local enqueue)
</td>
</tr><tr>
<td>broadcastToSystem</td>
<td></td>
<td>Broadcasts the message to all subsystems on the JAUS network (equivalent to broadcast global enqueue)
</td>
</tr><tr>
<td>checkTransportPolicy</td>
<td></td>
<td>
</td>
</tr><tr>
<td>enqueue</td>
<td></td>
<td>Convert the destination address into an unsigned integer such that the ComponentID maps to the least significant byte, NodeID to the next least significant byte and SubsystemID maps onto the remaining two bytes of the integer. Package the message as specified by the transport layer specification and send it to its destination as per the specified priority.
</td>
</tr><tr>
<td>sendMessage</td>
<td></td>
<td>
</td>
</tr><tr>
<td>sendTransportPolicy</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/report-transport-policy-6502
">ReportTransportPolicy
</a></td>
</tr><tr>
<td>storeTransportPolicy</td>
<td></td>
<td>
</td>
</tr></tbody></table>

