---
title: Communicator
---

# Communicator

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:Communicator` |

## Description

The Communicator Service provides a mechanism for run-time configuration and monitoring of a communication link, usually a radio.

## Internal Events

| ID | Event |
| --- | --- |
| `8D13h` | [CommsEstablished](/messages/comms-established-8d13) |
| `8D12h` | [ValidationTimeout](/messages/validation-timeout-8d12) |

## Message Set

| ID | Message |
| --- | --- |
| `2900h` | [QueryCommunicatorCapability](/messages/query-communicator-capability-2900) |
| `2901h` | [QueryCommunicatorConfiguration](/messages/query-communicator-configuration-2901) |
| `2902h` | [QueryCommunicatorHealth](/messages/query-communicator-health-2902) |
| `4900h` | [ReportCommunicatorCapability](/messages/report-communicator-capability-4900) |
| `4901h` | [ReportCommunicatorConfiguration](/messages/report-communicator-configuration-4901) |
| `4902h` | [ReportCommunicatorHealth](/messages/report-communicator-health-4902) |
| `0901h` | [SetCommunicatorConfiguration](/messages/set-communicator-configuration-0901) |
| `0902h` | [SetCommunicatorConfigurationResponse](/messages/set-communicator-configuration-response-0902) |

## State Machine Diagram

![Communicator State Machine Diagram](/smDiagrams/Communicator.png)

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
<td align="center" rowspan="3">B</td>
<td rowspan="3">CommunicatorDefaultLoop</td>
<td><a href="/messages/query-communicator-capability-2900
">QueryCommunicatorCapability</a></td>
<td><code></code></td>
<td><a href="/messages/report-communicator-capability-4900
">sendReportCommunicatorCapability</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-communicator-configuration-2901
">QueryCommunicatorConfiguration</a></td>
<td><code></code></td>
<td><a href="/messages/report-communicator-configuration-4901
">sendReportCommunicatorConfiguration</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-communicator-health-2902
">QueryCommunicatorHealth</a></td>
<td><code></code></td>
<td><a href="/messages/report-communicator-health-4902
">sendReportCommunicatorHealth</a>
</td>
</tr><tr>
<td align="center" rowspan="1">A</td>
<td rowspan="1">ConfiguredLoopback</td>
<td><a href="/messages/set-communicator-configuration-0901
">SetCommunicatorConfiguration</a></td>
<td><code>isControllingClient &amp;&amp; !isValidCommand</code></td>
<td><a href="/messages/set-communicator-configuration-response-0902
">sendSetCommunicatorConfigurationResponse</a>
</td>
</tr><tr>
<td align="center" rowspan="2">D</td>
<td rowspan="2">ToConfigured</td>
<td><a href="/messages/validation-timeout-8d12
">ValidationTimeout</a></td>
<td><code></code></td>
<td>revertConfigurationValues
</td>
</tr>
<tr>
<td><a href="/messages/comms-established-8d13
">CommsEstablished</a></td>
<td><code></code></td>
<td></td>
</tr><tr>
<td align="center" rowspan="1">C</td>
<td rowspan="1">ToValidating</td>
<td><a href="/messages/set-communicator-configuration-0901
">SetCommunicatorConfiguration</a></td>
<td><code>isControllingClient &amp;&amp; isValidCommand</code></td>
<td><a href="/messages/set-communicator-configuration-response-0902
">sendSetCommunicatorConfigurationResponse</a>
, setConfigurationValues
, storeCurrentConfigurationValues
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
<td>resetTimer</td>
<td>Entry Action
</td>
<td>
</td>
</tr><tr>
<td>revertConfigurationValues</td>
<td></td>
<td>Revert to the previously stored configuration
</td>
</tr><tr>
<td>sendReportCommunicatorCapability</td>
<td>Send Action
</td>
<td>Send a ReportCommunicatorCapability message to querying client
<br>
<i>Output Message:</i> <a href="/messages/report-communicator-capability-4900
">ReportCommunicatorCapability
</a></td>
</tr><tr>
<td>sendReportCommunicatorConfiguration</td>
<td>Send Action
</td>
<td>Send a ReportCommunicatorConfiguration message to querying client
<br>
<i>Output Message:</i> <a href="/messages/report-communicator-configuration-4901
">ReportCommunicatorConfiguration
</a></td>
</tr><tr>
<td>sendReportCommunicatorHealth</td>
<td>Send Action
</td>
<td>Send a ReportCommunicatorHealth message to querying client
<br>
<i>Output Message:</i> <a href="/messages/report-communicator-health-4902
">ReportCommunicatorHealth
</a></td>
</tr><tr>
<td>sendSetCommunicatorConfigurationResponse</td>
<td>Send Action
</td>
<td>Send a SetCommunicatorConfigurationResponse message to querying client
<br>
<i>Output Message:</i> <a href="/messages/set-communicator-configuration-response-0902
">SetCommunicatorConfigurationResponse
</a></td>
</tr><tr>
<td>setConfigurationValues</td>
<td></td>
<td>Set the specified configuration values
</td>
</tr><tr>
<td>storeCurrentConfigurationValues</td>
<td></td>
<td>Store the current configuration values prior to setting the new values, in case the configuration needs to be reverted
</td>
</tr></tbody></table>

