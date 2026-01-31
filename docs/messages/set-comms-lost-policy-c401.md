---
title: SetCommsLostPolicy
---

# Message: SetCommsLostPolicy

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `C401h` |

## Description

This message is used to set the active behavior for a comms-lost event for the platform.  A comms-lost event is defined as the loss of communications with the controlling client for more than CommsLostTimeout seconds.  Behaviors supported are: stop, continue on mission, move to a given position at a specified speed, or perform retrotraverse.  Note that in the case of retrotraverse, behavior is assumed to be iterative; that is, the platform will repeatedly execute a retrotraverse of the specified distance until communications are re-established.  In the case of move to a given position, the overall maximum distance to move in an effort to restore communications can be further restricted.

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
<td><a href="#policyrec">PolicyRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
<tr>
<td align="center">2</td>
<td><a href="#commslostseq">CommsLostSeq</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
<tr>
<td align="center">3</td>
<td><a href="#commsregainedseq">CommsRegainedSeq</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
</tbody></table>

