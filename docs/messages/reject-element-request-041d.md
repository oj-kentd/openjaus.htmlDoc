---
title: RejectElementRequest
---

# Message: RejectElementRequest

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `041Dh` |

## Description

This message is used to reject an operation on an element list.

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
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>ID of the request. This ID will be returned in the response message.<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>RejectElementResponseCode</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
1: <i>INVALID_UID</i><br>2: <i>INVALID_PREVIOUS</i><br>3: <i>INVALID_NEXT</i><br>4: <i>UNSUPPORTED_TYPE</i><br>5: <i>ELEMENT_NOT_FOUND</i><br>6: <i>OUT_OF_MEMORY</i><br>7: <i>UNSPECIFIED_ERROR</i><br></td>
</tr>
</tbody></table>

