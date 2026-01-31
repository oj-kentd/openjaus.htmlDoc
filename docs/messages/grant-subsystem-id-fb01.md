---
title: GrantSubsystemID
---

# Message: GrantSubsystemID

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `FB01h` |

## Description

Provides the Subsystem ID requested via RequestSubsystemID. The Subsystem ID Allocator will send this response to the requestor. Since the requestor does not yet have a valid Subsystem ID, this must be sent as a JAUS broadcast. It carries the MAC address provided by the requestor in the RequestSubsytemID, to allow the requestor to verify that it is the intended receiver before installing the Subsystem ID. In the event of error, this message will return a zero value Subsystem ID.

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
<td>SubsystemID</td>
<td>Unsigned Short</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>The 16 bit JAUS Subsystem ID assigned by the SubsystemIDAllocator.<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>SubsystemType</td>
<td>Enumeration<br>
Integer Size: Unsigned Short</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>Follows the definition of the Type field of ReportIdentification:<br><br>
Enumeration Values:<br>
10001: <i>VEHICLE</i><br>20001: <i>OCU</i><br>30001: <i>OTHER_SUBSYSTEM</i><br></td>
</tr>
<tr>
<td align="center">3</td>
<td>MACaddr</td>
<td>Array<br>
UnsignedByte[6]<br>
</td>
<td>units_one</td>
<td align="center"><i>false</i></td>
<td>Array of six unsigned bytes containing the MAC address of the requestor.
</td>
</tr>
</tbody></table>

