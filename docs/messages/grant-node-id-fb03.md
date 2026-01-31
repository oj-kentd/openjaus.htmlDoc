---
title: GrantNodeID
---

# Message: GrantNodeID

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `FB03h` |

## Description

Provides the Node ID requested via the RequestNodeID mesasge.  The Node ID Allocator will send this response to the requestor.  Since the requestor does not yet have a valid Node ID, this must be sent as a JAUS broadcast.  It carries the unique Requester ID provided by the requestor in the ReqeustNodeID message, to allow the requestor to verify that it is the intended receiver before installing the Node ID.  In the event of error, this message will return a zero value Node ID.

## Message Format

<table border="1" class="jaus-table">
<tbody><tr>
<th align="left" colspan="6"><font size="+2">
<b>Message Format</b></font></th>
</tr>
<tr>
<td align="center"><b>Field #</b></td>
<td><b>Field</b></td>
<td><b>Type</b></td>
<td><b>Units</b></td>
<td align="center"><b>Optional</b></td>
<td><b>Interpretation</b></td>
</tr>
<tr>
<td align="center">1</td>
<td>NodeID</td>
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>The 8 bit JAUS Node ID assigned by the NodeIDAllocator.<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>RequesterID</td>
<td>Array<br>
UnsignedByte[7]<br>
</td>
<td>units_one</td>
<td align="center"><i>false</i></td>
<td>An array of 7 bytes used to represent a unique ID associated with the node requesting a Node ID. This field must be formed to be unique amongst all nodes that can request a Node ID within a Subsystem. The following methods are suggested for assigning a unique node ID: 1. The first 6 bytes of the array are a MAC Address or unique IPv6 Address of the location where the Requestor resides, and the final byte is a unique integer value used to differentiate multiple JAUS nodes at that location. 2. The first 4 bytes of the array are a unique IPv4 address of the location where the Requester resides, and the 5th byte is a unique integrer value used to differentiate multiple JAUS nodes at that location. The final two bytes are unused and set to 0.
</td>
</tr>
</tbody></table>

