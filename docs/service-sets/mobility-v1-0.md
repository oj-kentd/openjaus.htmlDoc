---
title: MOBILITY_V1_0
---

# MOBILITY_V1_0 Service Set

## Services

| Service | URN |
| --- | --- |
| [AccelerationStateSensor](/services/acceleration-state-sensor) | urn:jaus:jss:mobility:AccelerationStateSensor v1.0 |
| [GlobalPathSegmentDriver](/services/global-path-segment-driver) | urn:jaus:jss:mobility:GlobalPathSegmentDriver v1.0 |
| [GlobalPoseSensor](/services/global-pose-sensor) | urn:jaus:jss:mobility:GlobalPoseSensor v1.0 |
| [GlobalVectorDriver](/services/global-vector-driver) | urn:jaus:jss:mobility:GlobalVectorDriver v1.0 |
| [GlobalWaypointDriver](/services/global-waypoint-driver) | urn:jaus:jss:mobility:GlobalWaypointDriver v1.0 |
| [GlobalWaypointListDriver](/services/global-waypoint-list-driver) | urn:jaus:jss:mobility:GlobalWaypointListDriver v1.0 |
| [ListManager](/services/list-manager) | urn:jaus:jss:mobility:ListManager v1.0 |
| [LocalPathSegmentDriver](/services/local-path-segment-driver) | urn:jaus:jss:mobility:LocalPathSegmentDriver v1.0 |
| [LocalPoseSensor](/services/local-pose-sensor) | urn:jaus:jss:mobility:LocalPoseSensor v1.0 |
| [LocalVectorDriver](/services/local-vector-driver) | urn:jaus:jss:mobility:LocalVectorDriver v1.0 |
| [LocalWaypointDriver](/services/local-waypoint-driver) | urn:jaus:jss:mobility:LocalWaypointDriver v1.0 |
| [LocalWaypointListDriver](/services/local-waypoint-list-driver) | urn:jaus:jss:mobility:LocalWaypointListDriver v1.0 |
| [VelocityStateSensor](/services/velocity-state-sensor) | urn:jaus:jss:mobility:VelocityStateSensor v1.0 |

### Service Descriptions

#### [AccelerationStateSensor](/services/acceleration-state-sensor)

This service reports the acceleration  state of the unmanned platform.  The Acceleration State Sensor reports the acceleration state that is the first derivative (the rate of change) of the velocity state reported by the Velocity State Sensor. Refer to the description on Velocity State Sensor for coordinate details.

#### [GlobalPathSegmentDriver](/services/global-path-segment-driver)

The function of the Global Path Segment Driver is to perform closed loop control of position and velocity along a path where the path is defined in a generic manner. The Global Path Segment Driver differs from the Waypoint Drivers in that the exact path between waypoints is strictly defined. A path segment will be defined by specifying the three-dimensional coordinates of three points, P0, P1, and P2 together with one scalar weighting value w1 as documented in the JAUS Mobility Service Set Specification.

#### [GlobalPoseSensor](/services/global-pose-sensor)

The function of the Global Pose Sensor is to determine the global position and orientation of the platform. The Report Global Pose message provides the position and orientation of the platform. The position of the platform is given in latitude, longitude, and elevation, in accordance with the WGS 84 standard.  Platform orientation is as defined in Section 4 of the JAUS Mobility Service Set Specification.

#### [GlobalVectorDriver](/services/global-vector-driver)

The function of the Global Vector Driver is to perform closed loop control of the desired global heading, altitude and speed of a mobile platform. The Global Vector Driver takes the desired heading of the platform as measured with respect to the global coordinate system and the desired speed of the platform. The desired heading angle is defined in a right hand sense about the Z axis of the global coordinate system (the Z axis points downward) where North is defined as zero degrees. The desired Altitude, measured in accordance with the WGS 84 standard, provides a means through which systems capable of flight can be controlled. For ground-based systems, the Altitude field is ignored. The Global Vector Driver also receives data from the Global Pose Sensor and the Velocity State Sensor. This information allows the Global Vector Driver to perform closed loop control on the platform's global heading, altitude and speed.

#### [GlobalWaypointDriver](/services/global-waypoint-driver)

The function of the Global Waypoint Driver is to move the platform given a single target waypoint, desired travel speed, current platform pose and current velocity state. A single waypoint is provided via the Set Global Waypoint message. The waypoint remains unchanged until a new Set Global Waypoint message is received. A waypoint consists of the desired position and orientation of the platform. The second input consists of the desired travel speed. The desired travel speed remains unchanged unless a new Set Travel Speed Message is received. The travel speed may then be changed at any time during waypoint navigation. The travel speed is reset to zero for all transitions from the Ready State.

#### [GlobalWaypointListDriver](/services/global-waypoint-list-driver)

The function of the Global Waypoint List Driver is to move the platform given a series of target waypoints, desired travel speed, current platform pose and current velocity state. The sequence of waypoints is specified by one or more SetElement messages. A waypoint consists of the desired position and orientation of the platform. The second input consists of the desired travel speed and an optional starting element. The desired travel speed remains unchanged unless a new ExecuteList command is received. The travel speed may then be changed at any time during waypoint navigation. The travel speed is reset to zero for all transitions from the Ready State.

#### [ListManager](/services/list-manager)

The List Manager Service permits operations on a single ordered sequence of connected elements. It supports operations to add, replace or delete elements from the list, as well as querying the entire list or individual elements. Elements within the list are uniquely identified by the Element UID. The Element UID is used as an identifier only, and the value of the UID does not imply a sequence or order. When a new element is added to the list, the previous (parent) and next (child) elements are specified to denote sequencing, similar to a doubly linked list. Circular lists can be created when the last element in the list specifies the first element as a child. A list is considered valid when the following conditions are met: 1) A list must contain exactly one head element which is defined as having a previous (parent) identifier of zero (0). 2) For non-circular lists, the list must contain exactly one tail element which is defined as having a next (child) identifier of zero (0). 3) Each element must reference existing previous (parent) and next (child) elements, or zero. 4) Elements cannot be orphaned. An orphan is defined as an element that is not connected in any way to the other elements in the list. 5) The previous (parent) and next(child) reference for each element cannot point to itself. The list manager service is designed to be inherited, and is trivial on its own. Derived services should redefine isElementSupported condition as shown by example in the Global Waypoint List Driver.

#### [LocalPathSegmentDriver](/services/local-path-segment-driver)

The function of the Local Path Segment Driver is to perform closed loop control of position and velocity along a path where the path is defined in a generic manner. The Local Path Segment Driver differs from the Waypoint Drivers in that the exact path between is strictly defined. A path segment will be defined by specifying the three-dimensional coordinates of three points, P0, P1, and P2 together with one scalar weighting value w1 as documented in the JAUS Mobility Service Set Specification.

#### [LocalPoseSensor](/services/local-pose-sensor)

The function of the Local Pose Sensor is to report the local position and orientation of the platform.  The Report Local Pose message provides the position and orientation of the platform relative to a local reference frame.  The origin of the local reference frame may be altered using the Set Local Pose message, which sets the current position and orientation of the platform to the specified values.  Platform orientation is defined in Section 3 of this document.

#### [LocalVectorDriver](/services/local-vector-driver)

The Local Vector Driver performs closed loop control of the desired local heading, pitch, roll and speed of a mobile platform. The Local Vector Driver is very similar in function to the Global Vector Driver, the difference being that the desired heading is defined in terms of a local coordinate system as opposed to the global coordinate system. The Local Vector Driver takes as input four pieces of information, i.e. the desired heading, pitch and roll of the platform as measured with respect to a local coordinate system and the desired speed of the platform. The desired heading angle is defined in a right hand sense about the Z axis of the local coordinate system where zero degrees defines a heading that is parallel to the X axis of the local coordinate system. The pitch is the angle about the Y-axis and the roll is the desired angle about the X-axis. The Local Vector Driver also receives data from the Local Pose Sensor and the Velocity State Sensor component. This information allows the Local Vector Driver to perform closed loop control on both the platform's local orientation and speed.

#### [LocalWaypointDriver](/services/local-waypoint-driver)

The function of the Local Waypoint Driver is to move the platform given a single target waypoint, desired travel speed, current platform pose and current velocity state. A single waypoint is provided via the Set Local Waypoint message. The waypoint remains unchanged until a new Set Local Waypoint message is received. A waypoint consists of the desired position and orientation of the platform. The second input consists of the desired travel speed. The desired travel speed remains unchanged unless a new Set Travel Speed Message is received. The travel speed may then be changed at any time during waypoint navigation. The travel speed is reset to zero for all transitions from the Ready State.

#### [LocalWaypointListDriver](/services/local-waypoint-list-driver)

The function of the Local Waypoint List Driver is to move the platform given a series of target waypoints, desired travel speed, current platform pose and current velocity state. The sequence of waypoints is specified by one or more SetElement messages. A waypoint consists of the desired position and orientation of the platform. The second input consists of the desired travel speed and an optional starting element. The desired travel speed remains unchanged unless a new ExecuteList command is received. The travel speed may then be changed at any time during waypoint navigation. The travel speed is reset to zero for all transitions from the Ready State.

#### [VelocityStateSensor](/services/velocity-state-sensor)

The Velocity State Sensor has the responsibility of reporting the instantaneous velocity of the platform.  The velocity state of a rigid body is defined as the set of parameters that are necessary to calculate the velocity of any point in that rigid body.  Six parameters are required to specify a velocity state of a rigid body in terms of some fixed reference coordinate system.  The first three parameters represent the velocity components of a point in the rigid body that is coincident with the origin of the fixed reference.  The second three components represent the  instantaneous angular velocity components.  It is possible to represent the six velocity state parameters as a screw, about which the rigid body is rotating and translating along at that instant. The reference frame for the velocity state sensor component is selected as a fixed coordinate system that at this instant is co-located with and aligned with the vehicle or system coordinate system.  Thus the message data 'velocity x', 'velocity y', and 'velocity z' represents the current velocity of the subsystem's control point at this instant.  For example if 'velocity x' has a value of 3 m/sec and 'velocity y' and 'velocity z' are zero, then the vehicle is moving in the forward direction at a velocity of 3 m/sec.  The message data 'omega x', 'omega  y', and 'omega z' represent the actual rate of change of orientation or angular velocity of the vehicle about its coordinate axes.

## Messages

| Message | ID |
| --- | --- |
| [ConfirmElementRequest](/messages/confirm-element-request-041c) | 041Ch |
| [DeleteElement](/messages/delete-element-041b) | 041Bh |
| [ExecuteList](/messages/execute-list-041e) | 041Eh |
| [QueryAccelerationState](/messages/query-acceleration-state-2417) | 2417h |
| [QueryActiveElement](/messages/query-active-element-241e) | 241Eh |
| [QueryElement](/messages/query-element-241a) | 241Ah |
| [QueryElementCount](/messages/query-element-count-241c) | 241Ch |
| [QueryElementList](/messages/query-element-list-241b) | 241Bh |
| [QueryGeomagneticProperty](/messages/query-geomagnetic-property-2412) | 2412h |
| [QueryGlobalPathSegment](/messages/query-global-path-segment-240f) | 240Fh |
| [QueryGlobalPose](/messages/query-global-pose-2402) | 2402h |
| [QueryGlobalVector](/messages/query-global-vector-2407) | 2407h |
| [QueryGlobalWaypoint](/messages/query-global-waypoint-240c) | 240Ch |
| [QueryLocalPathSegment](/messages/query-local-path-segment-2410) | 2410h |
| [QueryLocalPose](/messages/query-local-pose-2403) | 2403h |
| [QueryLocalVector](/messages/query-local-vector-2408) | 2408h |
| [QueryLocalWaypoint](/messages/query-local-waypoint-240d) | 240Dh |
| [QueryTravelSpeed](/messages/query-travel-speed-240a) | 240Ah |
| [QueryVelocityState](/messages/query-velocity-state-2404) | 2404h |
| [RejectElementRequest](/messages/reject-element-request-041d) | 041Dh |
| [ReportAccelerationState](/messages/report-acceleration-state-4417) | 4417h |
| [ReportActiveElement](/messages/report-active-element-441e) | 441Eh |
| [ReportElement](/messages/report-element-441a) | 441Ah |
| [ReportElementCount](/messages/report-element-count-441c) | 441Ch |
| [ReportElementList](/messages/report-element-list-441b) | 441Bh |
| [ReportGeomagneticProperty](/messages/report-geomagnetic-property-4412) | 4412h |
| [ReportGlobalPathSegment](/messages/report-global-path-segment-440f) | 440Fh |
| [ReportGlobalPose](/messages/report-global-pose-4402) | 4402h |
| [ReportGlobalVector](/messages/report-global-vector-4407) | 4407h |
| [ReportGlobalWaypoint](/messages/report-global-waypoint-440c) | 440Ch |
| [ReportLocalPathSegment](/messages/report-local-path-segment-4410) | 4410h |
| [ReportLocalPose](/messages/report-local-pose-4403) | 4403h |
| [ReportLocalVector](/messages/report-local-vector-4408) | 4408h |
| [ReportLocalWaypoint](/messages/report-local-waypoint-440d) | 440Dh |
| [ReportTravelSpeed](/messages/report-travel-speed-440a) | 440Ah |
| [ReportVelocityState](/messages/report-velocity-state-4404) | 4404h |
| [SetElement](/messages/set-element-041a) | 041Ah |
| [SetGeomagneticProperty](/messages/set-geomagnetic-property-0412) | 0412h |
| [SetGlobalPathSegment](/messages/set-global-path-segment-040f) | 040Fh |
| [SetGlobalPose](/messages/set-global-pose-0402) | 0402h |
| [SetGlobalVector](/messages/set-global-vector-0407) | 0407h |
| [SetGlobalWaypoint](/messages/set-global-waypoint-040c) | 040Ch |
| [SetLocalPathSegment](/messages/set-local-path-segment-0410) | 0410h |
| [SetLocalPose](/messages/set-local-pose-0403) | 0403h |
| [SetLocalVector](/messages/set-local-vector-0408) | 0408h |
| [SetLocalWaypoint](/messages/set-local-waypoint-040d) | 040Dh |
| [SetTravelSpeed](/messages/set-travel-speed-040a) | 040Ah |

