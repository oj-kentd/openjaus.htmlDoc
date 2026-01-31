---
title: ConfirmDigitalResourceEndpoint
---

# Message: ConfirmDigitalResourceEndpoint

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `F703h` |

## Description

Confirm a digital resource endpoint registration or removal.  Provides a unique ID for referencing the server in the future.

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
<td>ID</td>
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>Unique ID identifying this resource endpoint<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>RequestID</td>
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>Client provided ID to link the response to the request<br>
</td>
</tr>
</tbody></table>

