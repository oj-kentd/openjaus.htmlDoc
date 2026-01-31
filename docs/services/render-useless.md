---
title: RenderUseless
---

# RenderUseless

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:RenderUseless` |

## Description

The Render Useless Service provides a mechanism to destroy, disable, or in some way make a component, node, or subsystem less valuable if it were to be captured by an adversary. The specific mechanism is left to the implementation, but may include electronic overload, explosives, or erasing computer storage devices. Also depending on implementation, the component may or may not be usable following a render useless command.

## Message Set

| ID | Message |
| --- | --- |
| `FFD8h` | [ConfirmRenderUselessRequest](/messages/confirm-render-useless-request-ffd8) |
| `FFD9h` | [QueryRenderUseless](/messages/query-render-useless-ffd9) |
| `FFD7h` | [RenderUseless](/messages/render-useless-ffd7) |
| `FFDAh` | [ReportRenderUseless](/messages/report-render-useless-ffda) |

## State Machine Diagram

![RenderUseless State Machine Diagram](/smDiagrams/RenderUseless.png)

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
<td align="center" rowspan="1">B</td>
<td rowspan="1">RenderUselessControlledLoop</td>
<td><a href="/messages/render-useless-ffd7
">RenderUseless</a></td>
<td><code>isControllingClient</code></td>
<td>renderUseless
, <a href="/messages/confirm-render-useless-request-ffd8
">sendConfirmRenderUselessRequest</a>
</td>
</tr><tr>
<td align="center" rowspan="1">A</td>
<td rowspan="1">RenderUselessDefaultLoop</td>
<td><a href="/messages/query-render-useless-ffd9
">QueryRenderUseless</a></td>
<td><code></code></td>
<td><a href="/messages/report-render-useless-ffda
">sendReportRenderUseless</a>
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
<td>renderUseless</td>
<td></td>
<td>Implementation specific action to render the component, node, or subsystem inoperable or unvaluable to an enemy.
</td>
</tr><tr>
<td>sendConfirmRenderUselessRequest</td>
<td>Send Action
</td>
<td>Send a ConfirmRenderUselessRequest message
<br>
<i>Output Message:</i> <a href="/messages/confirm-render-useless-request-ffd8
">ConfirmRenderUselessRequest
</a></td>
</tr><tr>
<td>sendReportRenderUseless</td>
<td>Send Action
</td>
<td>Send a ReportRenderUseless message
<br>
<i>Output Message:</i> <a href="/messages/report-render-useless-ffda
">ReportRenderUseless
</a></td>
</tr></tbody></table>

