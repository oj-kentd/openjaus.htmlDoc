---
title: ConfirmControl
---

# Message: ConfirmControl

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `000Fh` |

## Description

The Confirm Control message is used to notify a component that it accepts control from that component (or not).  When control has been granted, response code of 0, the component under control will only execute messages from the controlling component until control is released or interrupted.  When the requesting component has lower authority than the current controlling entity, the response will be 2.  For components not supporting interruptible control, or if the component is engaged in other operations that would prevent this service from performing its actions to grant control, the response code value of 1 can be used.

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
<td>ConfirmResponseCode</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>CONTROL_ACCEPTED</i><br>1: <i>NOT_AVAILABLE</i><br>2: <i>INSUFFICIENT_AUTHORITY</i><br></td>
</tr>
</tbody></table>

