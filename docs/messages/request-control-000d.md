---
title: RequestControl
---

# Message: RequestControl

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `000Dh` |

## Description

This message is used to request interruptible control of the receiving component.  Once control is established, the receiving component shall only execute commands from the sending component.  The authority code parameter is to be set equal to that of the sending component.  The receiving component must always accept the control of the highest authority component that is requesting uninterruptible control.  Commands from all other components are ignored unless from a component with higher authority.

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
<td>AuthorityCode</td>
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

