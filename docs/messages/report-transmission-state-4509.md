---
title: ReportTransmissionState
---

# Message: ReportTransmissionState

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4509h` |

## Description

Returns current transmission state

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
<td>RequestedTransmissionState</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>DEFAULT</i><br>1: <i>PARK</i><br>2: <i>NEUTRAL</i><br>3: <i>REVERSE</i><br>4: <i>DRIVE</i><br>5: <i>OVERDRIVE</i><br>6: <i>L1</i><br>7: <i>L2</i><br>8: <i>L3</i><br>9: <i>L4</i><br>10: <i>L5</i><br>11: <i>L6</i><br>12: <i>L7</i><br>13: <i>L8</i><br>14: <i>L9</i><br>15: <i>L10</i><br></td>
</tr>
<tr>
<td align="center">2</td>
<td>ActualTransmissionState</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>DEFAULT</i><br>1: <i>PARK</i><br>2: <i>NEUTRAL</i><br>3: <i>REVERSE</i><br>4: <i>DRIVE</i><br>5: <i>OVERDRIVE</i><br>6: <i>L1</i><br>7: <i>L2</i><br>8: <i>L3</i><br>9: <i>L4</i><br>10: <i>L5</i><br>11: <i>L6</i><br>12: <i>L7</i><br>13: <i>L8</i><br>14: <i>L9</i><br>15: <i>L10</i><br></td>
</tr>
</tbody></table>

