---
title: SetGuardedTeleopPolicy
---

# Message: SetGuardedTeleopPolicy

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `C501h` |

## Description

This message is used to set the active behavior for guarded teleoperation; while the operator has primary control of the platform, guarded teleoperation prevents (or attempts to prevent) user actions which may result in damage to the plaform.

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
<td><a href="#guardedteleoprec">GuardedTeleopRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
</tbody></table>

