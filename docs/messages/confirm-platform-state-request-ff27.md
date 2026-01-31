---
title: ConfirmPlatformStateRequest
---

# Message: ConfirmPlatformStateRequest

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `FF27h` |

## Description

Confirms that a platform state request has been received and has been/is being acted upon.  The result can be one of two things: Transitioning, meaning the service will attempt to transition into the commanded state; or Invalid, meaning there is no valid transition from the current state to the commanded state.

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
<td>PlatformState</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>Initialize</i><br>1: <i>Operational</i><br>2: <i>Shutdown</i><br>3: <i>System_Abort</i><br>4: <i>Emergency</i><br>5: <i>Render_Useless</i><br></td>
</tr>
<tr>
<td align="center">2</td>
<td>PlatformStateResponseCode</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>Transitioning</i><br>1: <i>InvalidState</i><br></td>
</tr>
</tbody></table>

