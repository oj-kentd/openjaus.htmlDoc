---
title: PassthroughMessage
---

# PassthroughMessage

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:exp:aeodrs:PassthroughMessage` |

## Description

The Passthrough Message service provides the desired intermediary JAUS component the capability to examine and modify JAUS messages without interfering with the message flow between the source and intended recipient.  For example, in an established communication link between an OCU and manipulator payload, only the source may issue commands to control the manipulator, but there is no guarantee to avoid collision.  This particular service allows an intermediary JAUS component such as a self-collision avoidance component to modify the manipulator payload intended JAUS messages in order to provide the collision avoidance capability that resides in the self-collision avoidance component. Note that when this service forwards a message to the final destination specified by the targetJausID, the source of the message shall be the Passthrough component.  That is, when the driver or other final recipient receives the message, it will appear to have originated from the Passthrough service.  As a result, the Passthrough implementation must maintain access control and the correct management state before forwarding any motion commands.

## Message Set

| ID | Message |
| --- | --- |
| `D702h` | [QueryPassthroughMessageProperties](/messages/query-passthrough-message-properties-d702) |
| `D703h` | [ReportPassthroughMessageProperties](/messages/report-passthrough-message-properties-d703) |
| `D701h` | [SetPassthroughMessage](/messages/set-passthrough-message-d701) |

## State Machine Diagram

![PassthroughMessage State Machine Diagram](/smDiagrams/PassthroughMessage.png)

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
<td align="center" rowspan="2">A</td>
<td rowspan="2">PassthroughMessageDefaultLoop</td>
<td><a href="/messages/set-passthrough-message-d701
">SetPassthroughMessage</a></td>
<td><code></code></td>
<td></td>
</tr>
<tr>
<td><a href="/messages/query-passthrough-message-properties-d702
">QueryPassthroughMessageProperties</a></td>
<td><code></code></td>
<td><a href="/messages/report-passthrough-message-properties-d703
">sendReportPassthroughMessageProperties</a>
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
<td>filterAndPassthrough</td>
<td></td>
<td>Perform any filerting actions and passthrough to the destination component.
</td>
</tr><tr>
<td>sendReportPassthroughMessageProperties</td>
<td>Send Action
</td>
<td>Send a ReportPassthroughMessageProperties message
<br>
<i>Output Message:</i> <a href="/messages/report-passthrough-message-properties-d703
">ReportPassthroughMessageProperties
</a></td>
</tr></tbody></table>

