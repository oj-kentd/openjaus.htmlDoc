---
title: QueryMountSite
---

# Message: QueryMountSite

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `E701h` |

## Description

This message enables an client to request mount site location and orientation data for the mount site associated with the node ID in the request.

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
<td>NodeID</td>
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>The JAUS Node ID byte representing the child node for which associated mount site and attachment data is requested. A value of zero is used to request the mount site and attachment data for all registered mount sites.<br>
</td>
</tr>
</tbody></table>

