---
title: CORE_V1_1
---

# CORE_V1_1 Service Set

## Services

| Service | URN |
| --- | --- |
| [AccessControl](/services/access-control) | urn:jaus:jss:core:AccessControl v1.1 |
| [Configuration](/services/configuration) | urn:openjaus:core:Configuration v1.0 |
| [Discovery](/services/discovery) | urn:jaus:jss:core:Discovery v1.0 |
| [DiscoveryClient](/services/discovery-client) | urn:openjaus:core:DiscoveryClient v1.0 |
| [Events](/services/events) | urn:jaus:jss:core:Events v1.1 |
| [Liveness](/services/liveness) | urn:jaus:jss:core:Liveness v1.0 |
| [Management](/services/management) | urn:jaus:jss:core:Management v1.1 |
| [Time](/services/time) | urn:jaus:jss:core:Time v1.1 |
| [Transport](/services/transport) | urn:jaus:jss:core:Transport v1.0 |

### Service Descriptions

#### [AccessControl](/services/access-control)

The Access Control service offers a basic interface for acquiring preemptable exclusive control to one or more related services that utilize this function. Once the exclusive control is established, the related services shall only execute commands originating from the controlling component. The authority code parameter of this service is used for preemption and is to be set equal to that of its controlling client. This service always grants control to the highest authority client that is requesting exclusive control. Commands from all other clients are ignored unless from a client with higher authority. This service maintains two values, a default value and a current value of a field called authority code. The default value is the value that the service is pre-configured with. Access is provided to clients based on the value of their authority code in comparison to the current value of this service. State transitions between the Available and NotAvailable nested states are behaviors that are deferred to service definitions that derive from this service.

#### [Configuration](/services/configuration)

The Configuration Service provides runtime configuration of JAUS addresses using a discovery process which uses non-JAUS messages sent over JUDP.

#### [Discovery](/services/discovery)

The process of discovery is conducted at both the node level and the subsystem level. This service supports the discovery of both legacy components defined in the JAUS Reference Architecture versions 3.2+, and new components. The Component IDs of legacy components were fixed at specification time (Primitive Driver = 33 for example) and could contain only one service beyond the core service support. New components may use any component ID that is outside the range of IDs that have been allocated to legacy component definitions. New components can also contain two or more services beyond the core service support.

#### [DiscoveryClient](/services/discovery-client)

This is a service which only implements the "client" side protocol of the Discovery process.

#### [Events](/services/events)

This service is used to set up event notifications. Since this service does not contain any messages and data on which events can be setup, it is useful only when derived by other services that contain messages and data on which events can be defined.

#### [Liveness](/services/liveness)

This service provides a means to maintain connection liveness between communicating components.

#### [Management](/services/management)

The Management Service provides a state machine for component life-cycle management to help clients understand how the component will react to commands and queries.

#### [Time](/services/time)

The Time Service allows clients to query and set the system time for the component. Note that exclusive control is required to set the time, but is not required to query it.

#### [Transport](/services/transport)

The transport service acts as an interface to the JAUS transport layer. It models an abstract bi-directional communication channel (input queue and output queue) whose primary function is to provide the capability of sending messages to a single destination endpoint or broadcasting messages to all endpoints in the system, and to receive a message from any source endpoint. It also provides the capability to prioritize the delivery of sent messages. This service establishes a communication endpoint whose address is defined by a triple {SubsystemID, NodeID, ComponentID} as specified by the Send and Receive internal events. Other services that need to utilize the communication channel provided by the transport service must inherit from the transport service.

## Internal Events

| Event | ID |
| --- | --- |
| [AccessControlTimeout](/messages/access-control-timeout-8d01) | 8D01h |
| [Failure](/messages/failure-8d03) | 8D03h |
| [Initialized](/messages/initialized-8d02) | 8D02h |
| [ProcessEventRequest](/messages/process-event-request-8d00) | 8D00h |

## Messages

| Message | ID |
| --- | --- |
| [CancelEvent](/messages/cancel-event-01f2) | 01F2h |
| [ClearEmergency](/messages/clear-emergency-0007) | 0007h |
| [CommandEvent](/messages/command-event-41f6) | 41F6h |
| [ConfirmControl](/messages/confirm-control-000f) | 000Fh |
| [ConfirmEventRequest](/messages/confirm-event-request-01f3) | 01F3h |
| [CreateCommandEvent](/messages/create-command-event-01f6) | 01F6h |
| [CreateEvent](/messages/create-event-01f0) | 01F0h |
| [Event](/messages/event-41f1) | 41F1h |
| [QueryAuthority](/messages/query-authority-2001) | 2001h |
| [QueryConfiguration](/messages/query-configuration-2b01) | 2B01h |
| [QueryControl](/messages/query-control-200d) | 200Dh |
| [QueryEventTimeout](/messages/query-event-timeout-21f2) | 21F2h |
| [QueryEvents](/messages/query-events-21f0) | 21F0h |
| [QueryHeartbeatPulse](/messages/query-heartbeat-pulse-2202) | 2202h |
| [QueryIdentification](/messages/query-identification-2b00) | 2B00h |
| [QueryJausAddress](/messages/query-jaus-address-5555) | 5555h |
| [QueryServiceList](/messages/query-service-list-2b04) | 2B04h |
| [QueryServices](/messages/query-services-2b03) | 2B03h |
| [QueryStatus](/messages/query-status-2002) | 2002h |
| [QuerySubsystemList](/messages/query-subsystem-list-2b02) | 2B02h |
| [QueryTime](/messages/query-time-2011) | 2011h |
| [QueryTimeout](/messages/query-timeout-2003) | 2003h |
| [QueryTransportPolicy](/messages/query-transport-policy-6501) | 6501h |
| [RegisterServices](/messages/register-services-0b00) | 0B00h |
| [RejectControl](/messages/reject-control-0010) | 0010h |
| [RejectEventRequest](/messages/reject-event-request-01f4) | 01F4h |
| [ReleaseControl](/messages/release-control-000e) | 000Eh |
| [ReportAuthority](/messages/report-authority-4001) | 4001h |
| [ReportConfiguration](/messages/report-configuration-4b01) | 4B01h |
| [ReportControl](/messages/report-control-400d) | 400Dh |
| [ReportEventTimeout](/messages/report-event-timeout-41f2) | 41F2h |
| [ReportEvents](/messages/report-events-41f0) | 41F0h |
| [ReportHeartbeatPulse](/messages/report-heartbeat-pulse-4202) | 4202h |
| [ReportIdentification](/messages/report-identification-4b00) | 4B00h |
| [ReportJausAddress](/messages/report-jaus-address-5556) | 5556h |
| [ReportServiceList](/messages/report-service-list-4b04) | 4B04h |
| [ReportServices](/messages/report-services-4b03) | 4B03h |
| [ReportStatus](/messages/report-status-4002) | 4002h |
| [ReportStopped](/messages/report-stopped-5557) | 5557h |
| [ReportSubsystemList](/messages/report-subsystem-list-4b02) | 4B02h |
| [ReportTime](/messages/report-time-4011) | 4011h |
| [ReportTimeout](/messages/report-timeout-4003) | 4003h |
| [ReportTransportPolicy](/messages/report-transport-policy-6502) | 6502h |
| [RequestControl](/messages/request-control-000d) | 000Dh |
| [Reset](/messages/reset-0005) | 0005h |
| [Resume](/messages/resume-0004) | 0004h |
| [SetAuthority](/messages/set-authority-0001) | 0001h |
| [SetEmergency](/messages/set-emergency-0006) | 0006h |
| [SetTime](/messages/set-time-0011) | 0011h |
| [Shutdown](/messages/shutdown-0002) | 0002h |
| [Standby](/messages/standby-0003) | 0003h |
| [UpdateEvent](/messages/update-event-01f1) | 01F1h |

