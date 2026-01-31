---
title: SetTamperDetectionState
---

# Message: SetTamperDetectionState

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `DE66h` |

## Description

This message is used to enable or disable tamper detection.  In addition, previously reported anti-tamper activities can be cleared, e.g. removed from future reports until a new activity has occurred.

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
<td>State</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>Target state of tamper detection<br><br>
Enumeration Values:<br>
0: <i>Disable</i><br>1: <i>Enable</i><br>2: <i>Clear</i><br></td>
</tr>
</tbody></table>

