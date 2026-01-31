---
title: RequestSubsystemID
---

# Message: RequestSubsystemID

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `DB01h` |

## Description

This message is used to request assignment of a unique Subsystem ID to the requestor. Typically, a subsystem like a UGV sends this message to the known location of the Subsystem ID Allocator service or broadcasts it.

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
<td>MACaddr</td>
<td>Array<br>
UnsignedByte[6]<br>
</td>
<td>units_one</td>
<td align="center"><i>false</i></td>
<td>Array of six unsigned bytes containing the MAC address of the requestor.
</td>
</tr>
<tr>
<td align="center">2</td>
<td>SubsystemType</td>
<td>Enumeration<br>
Integer Size: Unsigned Short</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>Follows the definition of the Type field of ReportIdentification<br><br>
Enumeration Values:<br>
10001: <i>VEHICLE</i><br>20001: <i>OCU</i><br>30001: <i>OTHER_SUBSYSTEM</i><br></td>
</tr>
</tbody></table>

