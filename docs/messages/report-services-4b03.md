---
title: ReportServices
---

# Message: ReportServices

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4B03h` |

## Description

This message allows a component to publish its capabilities, according to the Service Dictionary presented below.  If a component ID is specified in the RA, it may report only one service beyond the core message support, and this service must be equal to the component ID.  If a component ID is not listed in the RA, it may report any number of services.  For example, a component with ID 33 must provide only service 33.   The exception to this rule is component ID 1 (the Node Manager) which may provide any number of services in addition to core message support.

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
<td><a href="#rsnodelist">RSNodeList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

