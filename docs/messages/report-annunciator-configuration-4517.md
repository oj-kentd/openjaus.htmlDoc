---
title: ReportAnnunciatorConfiguration
---

# Message: ReportAnnunciatorConfiguration

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4517h` |

## Description

Reports supported annunciator types

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
<td>AnnunciatorTypes</td>
<td>BitField<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>For each annunciator supported by the service, the corresponding bit shall be set to the high (on, 1) value.<br><br>
0: <i>Horn</i><br>
1: <i>Siren</i><br>
2: <i>Backup</i><br>
3: <i>Variable1</i><br>
4: <i>Variable2</i><br>
[5, 7] : <i>Reserved</i> (range: 0 ... 7)<br></td>
</tr>
</tbody></table>

