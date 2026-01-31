---
title: RejectControl
---

# Message: RejectControl

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `0010h` |

## Description

The Reject Control message is used to notify a component that control has been released (response code = 0), or a request to release control could not be processed (response code = 1).

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
<td>RejectResponseCode</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>CONTROL_RELEASED</i><br>1: <i>NOT_AVAILABLE</i><br></td>
</tr>
</tbody></table>

