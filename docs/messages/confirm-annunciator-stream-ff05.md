---
title: ConfirmAnnunciatorStream
---

# Message: ConfirmAnnunciatorStream

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `FF05h` |

## Description

This message is sent by the DigitalAudioAnnunciator to its client in response to receipt of a ContorlAnnunciatorStream message. This message indicates the status of the annunciator after acting on the received message.

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
<td><a href="#annunciatoridrec">AnnunciatorIdRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
<tr>
<td align="center">2</td>
<td><a href="#annunciatorstreamstatus">AnnunciatorStreamStatus</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
</tbody></table>

