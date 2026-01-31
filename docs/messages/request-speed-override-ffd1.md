---
title: RequestSpeedOverride
---

# Message: RequestSpeedOverride

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `FFD1h` |

## Description

This message allows a follower to request an override to the lead subsystem's speed.  The override may be given as a percentage, such that Acutal Speed = Override * Original Speed, or as an absolute value.

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
<td><a href="#overridetype">OverrideType</a></td>
<td>Variant</td>
<td><i>varies</i></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
</tbody></table>

