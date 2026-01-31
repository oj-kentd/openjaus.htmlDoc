---
title: ReportTransportPolicy
---

# Message: ReportTransportPolicy

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `6502h` |

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
<td>SupportOJWrappers</td>
<td>Boolean</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration [unsigned byte]:<br>
0: FALSE<br>
1: TRUE<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>SupportTCP</td>
<td>Boolean</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration [unsigned byte]:<br>
0: FALSE<br>
1: TRUE<br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>PreferenceTCP</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>APPLICATION_REQUIRED_ONLY</i><br>1: <i>ALL_MESSAGES</i><br>2: <i>LARGE_MESSAGES_ONLY</i><br></td>
</tr>
</tbody></table>

