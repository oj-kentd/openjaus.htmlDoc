---
title: RegisterDigitalResourceEndpoint
---

# Message: RegisterDigitalResourceEndpoint

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `E703h` |

## Description

Registers a digital resource server with the service.  Each endpoint is represented by a URL; however, the URL shall not require a Domain Name Service (DNS) to resolve.  In addition, each stream may also specify a JAUS ID that hosts additional SAE JAUS services for the configuration and control of the digital resource, as well as a ResourceID that identifies the stream source.

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
<td><a href="#requestidrec">RequestIDRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
<tr>
<td align="center">2</td>
<td><a href="#digitalresourceendpointrec">DigitalResourceEndpointRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
</tbody></table>

