---
title: AddNoGoZoneResponse
---

# Message: AddNoGoZoneResponse

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `D744h` |

## Description

This message is used to report the success or failure for a corresponding AddNoGoZone message.

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
<td>RequestID</td>
<td>Unsigned Short</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>This value will be returned in the AddNoGoZoneResponse message to enable a client to match set and response pairs.  The value is established by the client.<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>ResponseCode</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>Success</i><br>1: <i>GlobalVerticesNotSupported</i><br>2: <i>LocalVerticesNotSupported</i><br></td>
</tr>
<tr>
<td align="center">3</td>
<td>ZoneID</td>
<td>Unsigned Short</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>This field shall be zero (invalid) unless the ResponseCode is zero (Success).  Otherwise, Global ID of the newly defined no go zone.<br>
</td>
</tr>
</tbody></table>

