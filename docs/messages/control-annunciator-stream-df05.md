---
title: ControlAnnunciatorStream
---

# Message: ControlAnnunciatorStream

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `DF05h` |

## Description

This message enables an annunciator client to coordinate stream start, stream stop, and stream terminate actions with the Annunciator.  The annunciator client sends this message, with a control request, to the Annunciator; the Annunciator responds with ConfirmAnnunciatorStream, providing an indication of the Annunciator's resulting status.

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
<td><a href="#streamcontrolrec">StreamControlRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
</tbody></table>

