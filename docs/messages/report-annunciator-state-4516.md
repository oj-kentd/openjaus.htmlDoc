---
title: ReportAnnunciatorState
---

# Message: ReportAnnunciatorState

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4516h` |

## Description

Reports current annunciator state

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
<td>Annunciator</td>
<td>BitField<br>
Integer Size: Unsigned Integer</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>Each supported annunciator is specified by a bitfield.  A value of zero is off.  A value of 15 is maximum volume.<br><br>
[0, 3] : <i>Horn</i> (range: 0 ... 15)<br>[4, 7] : <i>Siren</i> (range: 0 ... 15)<br>[8, 11] : <i>Backup</i> (range: 0 ... 15)<br>[12, 15] : <i>Variable1</i> (range: 0 ... 15)<br>[16, 19] : <i>Variable2</i> (range: 0 ... 15)<br>[20, 31] : <i>Reserved</i> (range: 0 ... 2047)<br></td>
</tr>
</tbody></table>

