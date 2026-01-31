---
title: ReportRenderUseless
---

# Message: ReportRenderUseless

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `FFDAh` |

## Description

This message is used to report if a target has been rendered inoperable.  Note that depending on the implementation of the render-useless action, this message may not be sent successfully.

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
<td>State</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>Normal</i><br>1: <i>RenderedUseless</i><br>2: <i>RenderUselessFailed</i><br></td>
</tr>
<tr>
<td align="center">2</td>
<td>ErrorString</td>
<td>VariableLengthString<br>
Count Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>Human readable error string associated with a failed render useless request.  String length shall be zero in Normal or RenderedUseless state.<br>
</td>
</tr>
</tbody></table>

