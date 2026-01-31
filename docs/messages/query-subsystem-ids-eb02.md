---
title: QuerySubsystemIDs
---

# Message: QuerySubsystemIDs

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `EB02h` |

## Description

QuerySubsystemIDs requests a report (ReportSubsystemIDs) of subsystem IDs allocated by the SubsystemIDAllocator service. The Report contains a list of records; each record pairs the allocated subsystem ID with the MAC address of the entity that requested the subsystem ID. This Query has controlled scope; the client may query for all allocated subsystems, subsystems identifying as UGVs, subsystems identifying as OCUs, or may query to obtain the record associated with a given MAC address.

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
<td>SubsystemIDType</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>Enumeration, specifying types of subsystem to be reported<br><br>
Enumeration Values:<br>
0: <i>ALL</i><br>1: <i>OCU</i><br>2: <i>UGV</i><br>3: <i>MAC</i><br></td>
</tr>
<tr>
<td align="center">2</td>
<td>MACaddr</td>
<td>Array<br>
UnsignedByte[6]<br>
</td>
<td>units_one</td>
<td align="center"><i>false</i></td>
<td>Array of six unsigned bytes containing the MAC address; relevant only for queries with SubsystemIDType = 3.
</td>
</tr>
</tbody></table>

