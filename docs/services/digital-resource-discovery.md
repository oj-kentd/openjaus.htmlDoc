---
title: DigitalResourceDiscovery
---

# DigitalResourceDiscovery

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:DigitalResourceDiscovery` |

## Description

The Digital Resource Discovery service provides a mechanism for SAE JAUS-based components to discover network entities that transmit digital data streams (usually video and/or audio) and files in a standards-compliant format.  Because of the wide-spread support for numerous file transfer and streaming standards, this service does not propose a JAUS-specific format for data; it only provides a discovery mechanism based on a Uniform Resource Locator (URL).

## Message Set

| ID | Message |
| --- | --- |
| `F703h` | [ConfirmDigitalResourceEndpoint](/messages/confirm-digital-resource-endpoint-f703) |
| `E702h` | [QueryDigitalResourceEndpoint](/messages/query-digital-resource-endpoint-e702) |
| `E703h` | [RegisterDigitalResourceEndpoint](/messages/register-digital-resource-endpoint-e703) |
| `E704h` | [RemoveDigitalResourceEndpoint](/messages/remove-digital-resource-endpoint-e704) |
| `F702h` | [ReportDigitalResourceEndpoint](/messages/report-digital-resource-endpoint-f702) |

## State Machine Diagram

![DigitalResourceDiscovery State Machine Diagram](/smDiagrams/DigitalResourceDiscovery.png)

## State Transitions

<table border="1" class="jaus-table">
<tbody><tr>
<th align="left" colspan="100"><font size="+2">
<b>State Transitions</b></font></th></tr>
<tr>
<td><b>Label</b></td>
<td><b>Transition</b></td>
<td><b>Trigger</b></td>
<td><b>Conditional</b></td>
<td><b>Actions</b></td>
</tr>
<tr>
<td align="center" rowspan="3">A</td>
<td rowspan="3">DigitalResourceDiscoveryDefaultLoop</td>
<td><a href="/messages/query-digital-resource-endpoint-e702
">QueryDigitalResourceEndpoint</a></td>
<td><code></code></td>
<td><a href="/messages/report-digital-resource-endpoint-f702
">sendReportDigitalResourceEndpoint</a>
</td>
</tr>
<tr>
<td><a href="/messages/register-digital-resource-endpoint-e703
">RegisterDigitalResourceEndpoint</a></td>
<td><code></code></td>
<td>AddDigitalResourceEndpoint
, <a href="/messages/confirm-digital-resource-endpoint-f703
">sendConfirmDigitalResourceEndpoint</a>
</td>
</tr>
<tr>
<td><a href="/messages/remove-digital-resource-endpoint-e704
">RemoveDigitalResourceEndpoint</a></td>
<td><code></code></td>
<td>RemoveDigitalResourceEndpoint
, <a href="/messages/confirm-digital-resource-endpoint-f703
">sendConfirmDigitalResourceEndpoint</a>
</td>
</tr></tbody></table>

## Actions

<table border="1" class="jaus-table">
<tbody><tr>
<th align="left" colspan="4"><font size="+2">
<b>Actions</b></font></th></tr>
<tr>
<td><b>Action Name</b></td>
<td><b>Type</b></td>
<td><b>Description</b></td>
</tr>
<tr>
<td>AddDigitalResourceEndpoint</td>
<td></td>
<td>Adds the specified endpoint to the list of known endpoints
</td>
</tr><tr>
<td>RemoveDigitalResourceEndpoint</td>
<td></td>
<td>Removes the specified endpoint from the list of known endpoints
</td>
</tr><tr>
<td>sendConfirmDigitalResourceEndpoint</td>
<td>Send Action
</td>
<td>Send a ConfirmDigitalResourceEndpoint message to querying client
<br>
<i>Output Message:</i> <a href="/messages/confirm-digital-resource-endpoint-f703
">ConfirmDigitalResourceEndpoint
</a></td>
</tr><tr>
<td>sendReportDigitalResourceEndpoint</td>
<td>Send Action
</td>
<td>Send a ReportDigitalResourceEndpoint message to querying client
<br>
<i>Output Message:</i> <a href="/messages/report-digital-resource-endpoint-f702
">ReportDigitalResourceEndpoint
</a></td>
</tr></tbody></table>

