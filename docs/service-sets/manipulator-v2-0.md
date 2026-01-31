---
title: MANIPULATOR_V2_0
---

# MANIPULATOR_V2_0 Service Set

## Services

| Service | URN |
| --- | --- |
| [ManipulatorActuatorForceTorqueDriver](/services/manipulator-actuator-force-torque-driver) | urn:jaus:jss:manipulator:ManipulatorActuatorForceTorqueDriver v2.0 |
| [ManipulatorEndEffectorPoseDriver](/services/manipulator-end-effector-pose-driver) | urn:jaus:jss:manipulator:ManipulatorEndEffectorPoseDriver v2.0 |
| [ManipulatorEndEffectorPoseListDriver](/services/manipulator-end-effector-pose-list-driver) | urn:jaus:jss:manipulator:ManipulatorEndEffectorPoseListDriver v2.0 |
| [ManipulatorEndEffectorPoseSensor](/services/manipulator-end-effector-pose-sensor) | urn:jaus:jss:manipulator:ManipulatorEndEffectorPoseSensor v2.0 |
| [ManipulatorEndEffectorVelocityStateDriver](/services/manipulator-end-effector-velocity-state-driver) | urn:jaus:jss:manipulator:ManipulatorEndEffectorVelocityStateDriver v2.0 |
| [ManipulatorEndEffectorVelocityStateSensor](/services/manipulator-end-effector-velocity-state-sensor) | urn:jaus:jss:manipulator:ManipulatorEndEffectorVelocityStateSensor v2.0 |
| [ManipulatorJointForceTorqueSensor](/services/manipulator-joint-force-torque-sensor) | urn:jaus:jss:manipulator:ManipulatorJointForceTorqueSensor v2.0 |
| [ManipulatorJointMotionProfile](/services/manipulator-joint-motion-profile) | urn:jaus:jss:manipulator:ManipulatorJointMotionProfile v2.0 |
| [ManipulatorJointPositionDriver](/services/manipulator-joint-position-driver) | urn:jaus:jss:manipulator:ManipulatorJointPositionDriver v2.0 |
| [ManipulatorJointPositionListDriver](/services/manipulator-joint-position-list-driver) | urn:jaus:jss:manipulator:ManipulatorJointPositionListDriver v2.0 |
| [ManipulatorJointPositionSensor](/services/manipulator-joint-position-sensor) | urn:jaus:jss:manipulator:ManipulatorJointPositionSensor v2.0 |
| [ManipulatorJointVelocityDriver](/services/manipulator-joint-velocity-driver) | urn:jaus:jss:manipulator:ManipulatorJointVelocityDriver v2.0 |
| [ManipulatorJointVelocitySensor](/services/manipulator-joint-velocity-sensor) | urn:jaus:jss:manipulator:ManipulatorJointVelocitySensor v2.0 |
| [ManipulatorListDriver](/services/manipulator-list-driver) | urn:jaus:jss:manipulator:ManipulatorListDriver v2.0 |
| [ManipulatorSpecification](/services/manipulator-specification) | urn:jaus:jss:manipulator:ManipulatorSpecificationService v2.0 |
| [ManipulatorToolOffset](/services/manipulator-tool-offset) | urn:jaus:jss:manipulator:ManipulatorToolOffsetService v2.0 |
| [PanTiltJointPositionDriver](/services/pan-tilt-joint-position-driver) | urn:jaus:jss:manipulator:PanTiltJointPositionDriver v2.0 |
| [PanTiltJointPositionSensor](/services/pan-tilt-joint-position-sensor) | urn:jaus:jss:manipulator:PanTiltJointPositionSensor v2.0 |
| [PanTiltJointVelocityDriver](/services/pan-tilt-joint-velocity-driver) | urn:jaus:jss:manipulator:PanTiltJointVelocityDriver v2.0 |
| [PanTiltJointVelocitySensor](/services/pan-tilt-joint-velocity-sensor) | urn:jaus:jss:manipulator:PanTiltJointVelocitySensor v2.0 |
| [PanTiltMotionProfile](/services/pan-tilt-motion-profile) | urn:jaus:jss:manipulator:PanTiltMotionProfileService v2.0 |
| [PanTiltSpecification](/services/pan-tilt-specification) | urn:jaus:jss:manipulator:PanTiltSpecificationService v2.0 |
| [PrimitiveEndEffector](/services/primitive-end-effector) | urn:jaus:jss:manipulator:PrimitiveEndEffector v2.0 |
| [PrimitiveManipulator](/services/primitive-manipulator) | urn:jaus:jss:manipulator:PrimitiveManipulator v2.0 |
| [PrimitivePanTilt](/services/primitive-pan-tilt) | urn:jaus:jss:manipulator:PrimitivePanTilt v2.0 |

### Service Descriptions

#### [ManipulatorActuatorForceTorqueDriver](/services/manipulator-actuator-force-torque-driver)

The function of the Actuator Force/Torque Driver is to perform closed-loop force control (for a prismatic actuator) and closed-loop torque control (for a revolute actuator). To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service.

#### [ManipulatorEndEffectorPoseDriver](/services/manipulator-end-effector-pose-driver)

The function of the End Effector Pose Driver is to perform closed-loop position and orientation control of the tool tip.  The input is the desired position and orientation of the end effector pose specified in the manipulator base coordinate system. It is assumed that the manipulator begins motion immediately after receiving the Set End Effector Pose message. To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service, a Manipulator Tool Offset Service, and a Manipulator Joint Motion Profile Service.

#### [ManipulatorEndEffectorPoseListDriver](/services/manipulator-end-effector-pose-list-driver)

The function of the End Effector Pose List Driver is to perform closed-loop control of a sequence of positions and orientations of the tool tip specified in the manipulator base coordinate system. The sequence of targets is specified by one or more SetElement messages, as defined by the List Manager Service [AS6009]. To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service, a Manipulator Tool Offset Service, and a Manipulator Joint Motion Profile Service.

#### [ManipulatorEndEffectorPoseSensor](/services/manipulator-end-effector-pose-sensor)

The function of the End Effector Pose Sensor Service is to report the position and orientation of the tool tip with respect to the manipulator base coordinate system. To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service and a Manipulator Tool Offset Service.

#### [ManipulatorEndEffectorVelocityStateDriver](/services/manipulator-end-effector-velocity-state-driver)

The function of the End Effector Velocity State Driver is to perform closed-loop velocity control of the tool tip.  The velocity state of the tool tip is defined by two length-three vectors, i.e., �?‰e and vtool,e.  These vectors respectively represent the angular velocity of the end effector coordinate system and the linear velocity of the tool tip as measured with respect to the manipulator base coordinate system.  It is assumed that the manipulator begins motion immediately after receiving the Set End Effector Velocity State message. To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service, a Manipulator Tool Offset Service, and a Manipulator Joint Motion Profile Service.

#### [ManipulatorEndEffectorVelocityStateSensor](/services/manipulator-end-effector-velocity-state-sensor)

The function of the End Effector Velocity State Sensor is to report the velocity state of the tool tip as defined by two length-three vectors, i.e., ? and vtool. These vectors respectively represent the angular velocity of the end effector coordinate system and the linear velocity of the tool tip as measured with respect to the manipulator base coordinate system.  To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service and a Manipulator Tool Offset Service.

#### [ManipulatorJointForceTorqueSensor](/services/manipulator-joint-force-torque-sensor)

The function of the Joint Force/Torque Sensor is to report the values of instantaneous torques (for revolute joints) and forces (for prismatic joints) that are applied at the individual joints of the manipulator kinematic model when queried.  To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service.

#### [ManipulatorJointMotionProfile](/services/manipulator-joint-motion-profile)

The function of the Joint Motion Profile Service is to allow for configuration of the motion profile for all services co-located on this component.  The Set Motion Profile message is used to set maximum velocity and acceleration rates for each of the joint parameters.  All motions utilize the motion profile data that was most recently sent.

#### [ManipulatorJointPositionDriver](/services/manipulator-joint-position-driver)

The function of the Joint Position Driver is to perform closed-loop joint position control.  A single target is provided via the Set Joint Position message.  The target remains unchanged until a new Set Joint Position message is received.  To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service and a Manipulator Joint Motion Profile Service.

#### [ManipulatorJointPositionListDriver](/services/manipulator-joint-position-list-driver)

The function of the Joint Position List Driver is to perform closed-loop joint position control through a sequence of targets. The sequence of targets is specified by one or more SetElement messages, as defined by the List Manager Service.  To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service and a Manipulator Joint Motion Profile Service.

#### [ManipulatorJointPositionSensor](/services/manipulator-joint-position-sensor)

The function of the Joint Position Sensor Service is to report the values of manipulator joint positions when queried.  To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service.

#### [ManipulatorJointVelocityDriver](/services/manipulator-joint-velocity-driver)

The function of the Joint Velocity Driver is to perform closed-loop joint velocity control.  The input is the desired instantaneous joint velocities.  It is assumed that the manipulator begins motion immediately after receiving the "SET JOINT VELOCITY" message. To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service and a Manipulator Joint Motion Profile Service.

#### [ManipulatorJointVelocitySensor](/services/manipulator-joint-velocity-sensor)

The function of the Joint Velocity Sensor Service is to report the values of manipulator joint velocities when queried.  To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service.

#### [ManipulatorListDriver](/services/manipulator-list-driver)

The function of the Manipulator List Driver is to add support for executing a list of waypoints. It is expected that child services will inherit this service to provide functionality by overriding the isListValid() guard in the protocol.

#### [ManipulatorSpecification](/services/manipulator-specification)

This service is used to describe a manipulator arm.  When queried, the service will reply with a description of the manipulator's specification parameters, axes range of motion, and axes velocity limits.  The notations used to describe these data are documented in many popular text books on robotics and were previously presented in Section 3. The mechanism specification parameters as reported by the Report Manipulator Specifications Message consist of the number of joints, the type of each joint (either revolute or prismatic), the link description parameters for each link (link length and twist angle as shown in Figure 2), the constant joint parameter value (offset for a revolute joint (see Figure 3), and joint angle for a prismatic joint (see Figure 4)).  The minimum and maximum allowable value for each joint and the maximum velocity for each joint follow this information.

#### [ManipulatorToolOffset](/services/manipulator-tool-offset)

The function of the Manipulator Tool Offset Service is to configure the position offset of any tool attached to the manipulator flange.

#### [PanTiltJointPositionDriver](/services/pan-tilt-joint-position-driver)

The function of the Pan Tilt Joint Position Driver is to perform closed-loop joint position control.  A single target is provided via the Set Pan Tilt Joint Position message.  The target remains unchanged until a new Set Pan Tilt Joint Position message is received.  To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Pan Tilt Specification Service and a Pan Tilt Motion Profile Service.

#### [PanTiltJointPositionSensor](/services/pan-tilt-joint-position-sensor)

The function of the Pan Tilt Joint Position Sensor Service is to report the values of the two joint angles of the pan tilt mechanism when queried. To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Pan Tilt Specification Service.

#### [PanTiltJointVelocityDriver](/services/pan-tilt-joint-velocity-driver)

The function of The Pan Tilt Joint Velocity Driver is to perform closed-loop joint velocity control.  The input is the desired instantaneous desired joint velocities for the pan tilt mechanism.  It is assumed that the pan tilt mechanism begins motion immediately after receiving the Set Pan Tilt Joint Velocity message. To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Pan Tilt Specification Service and a Pan Tilt Motion Profile Service.

#### [PanTiltJointVelocitySensor](/services/pan-tilt-joint-velocity-sensor)

The function of the Pan Tilt Joint Velocity Sensor Service is to report the values of the two joint velocities of the pan tilt mechanism when queried. To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Pan Tilt Specification Service.

#### [PanTiltMotionProfile](/services/pan-tilt-motion-profile)

The function of the Pan Tilt Motion Profile Service is to allow for configuration of the motion profile for all services co-located on this component. The Set Pan Tilt Motion Profile message is used to set maximum velocity and acceleration rates for each of the two variable joint parameters. All motions utilize the motion profile data that was most recently sent.

#### [PanTiltSpecification](/services/pan-tilt-specification)

The function of the Pan Tilt Specification Service is to report the physical characteristics of a pan-tilt unit.  The Report Pan Tilt Specification Message returns the minimum and maximum allowable value and the maximum velocity for each of the two joints as well as the position and orientation of the pan tilt base coordinate system relative to the vehicle coordinate system.

#### [PrimitiveEndEffector](/services/primitive-end-effector)

This service is the low level interface to an end effector.  The End Effector is a one degree of freedom manipulator, usually mounted on the end of an n-degree of freedom manipulator.

#### [PrimitiveManipulator](/services/primitive-manipulator)

This service is the low level interface to a manipulator arm.  Motion of the arm is accomplished via the Set Joint Effort message.  In this message, each actuator is commanded to move with a percentage of maximum effort. To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service.

#### [PrimitivePanTilt](/services/primitive-pan-tilt)

The Primitive Pan Tilt Service is the low level interface to a pan tilt mechanism.  Motion of the pan tilt mechanism is accomplished via the Set Pan Tilt Joint Effort  message.  In this message, each actuator is commanded to move with a percentage of  maximum effort.  To ensure backward compatibility with 1.0 implementations of this  service, it is recommended that this service be co-located on the same component  as a Pan Tilt Specification Service.

## Messages

| Message | ID |
| --- | --- |
| [ExecuteList](/messages/execute-list-061e) | 061Eh |
| [QueryActiveElement](/messages/query-active-element-261e) | 261Eh |
| [QueryCommandedActuatorForceTorque](/messages/query-commanded-actuator-force-torque-2613) | 2613h |
| [QueryCommandedEndEffectorPose](/messages/query-commanded-end-effector-pose-2610) | 2610h |
| [QueryCommandedEndEffectorVelocityState](/messages/query-commanded-end-effector-velocity-state-2612) | 2612h |
| [QueryCommandedJointPosition](/messages/query-commanded-joint-position-2608) | 2608h |
| [QueryCommandedJointVelocity](/messages/query-commanded-joint-velocity-2611) | 2611h |
| [QueryCommandedPanTiltJointPosition](/messages/query-commanded-pan-tilt-joint-position-2628) | 2628h |
| [QueryCommandedPanTiltJointVelocity](/messages/query-commanded-pan-tilt-joint-velocity-2631) | 2631h |
| [QueryEndEffectorEffort](/messages/query-end-effector-effort-2633) | 2633h |
| [QueryEndEffectorPose](/messages/query-end-effector-pose-2615) | 2615h |
| [QueryEndEffectorSpecification](/messages/query-end-effector-specification-2632) | 2632h |
| [QueryEndEffectorVelocityState](/messages/query-end-effector-velocity-state-2616) | 2616h |
| [QueryJointEffort](/messages/query-joint-effort-2601) | 2601h |
| [QueryJointForceTorque](/messages/query-joint-force-torque-2605) | 2605h |
| [QueryJointMotionProfile](/messages/query-joint-motion-profile-2607) | 2607h |
| [QueryJointPosition](/messages/query-joint-position-2602) | 2602h |
| [QueryJointVelocity](/messages/query-joint-velocity-2603) | 2603h |
| [QueryManipulatorSpecifications](/messages/query-manipulator-specifications-2600) | 2600h |
| [QueryPanTiltJointEffort](/messages/query-pan-tilt-joint-effort-2621) | 2621h |
| [QueryPanTiltJointPosition](/messages/query-pan-tilt-joint-position-2622) | 2622h |
| [QueryPanTiltJointVelocity](/messages/query-pan-tilt-joint-velocity-2623) | 2623h |
| [QueryPanTiltMotionProfile](/messages/query-pan-tilt-motion-profile-2627) | 2627h |
| [QueryPanTiltSpecifications](/messages/query-pan-tilt-specifications-2620) | 2620h |
| [QueryToolOffset](/messages/query-tool-offset-2604) | 2604h |
| [ReportActiveElement](/messages/report-active-element-461e) | 461Eh |
| [ReportCommandedActuatorForceTorque](/messages/report-commanded-actuator-force-torque-4613) | 4613h |
| [ReportCommandedEndEffectorPose](/messages/report-commanded-end-effector-pose-4610) | 4610h |
| [ReportCommandedEndEffectorVelocityState](/messages/report-commanded-end-effector-velocity-state-4612) | 4612h |
| [ReportCommandedJointPosition](/messages/report-commanded-joint-position-4608) | 4608h |
| [ReportCommandedJointVelocity](/messages/report-commanded-joint-velocity-4611) | 4611h |
| [ReportCommandedPanTiltJointPosition](/messages/report-commanded-pan-tilt-joint-position-4628) | 4628h |
| [ReportCommandedPanTiltJointVelocity](/messages/report-commanded-pan-tilt-joint-velocity-4631) | 4631h |
| [ReportEndEffectorEffort](/messages/report-end-effector-effort-4633) | 4633h |
| [ReportEndEffectorPose](/messages/report-end-effector-pose-4615) | 4615h |
| [ReportEndEffectorSpecification](/messages/report-end-effector-specification-4632) | 4632h |
| [ReportEndEffectorVelocityState](/messages/report-end-effector-velocity-state-4616) | 4616h |
| [ReportJointEffort](/messages/report-joint-effort-4601) | 4601h |
| [ReportJointForceTorque](/messages/report-joint-force-torque-4605) | 4605h |
| [ReportJointMotionProfile](/messages/report-joint-motion-profile-4607) | 4607h |
| [ReportJointPosition](/messages/report-joint-position-4602) | 4602h |
| [ReportJointVelocity](/messages/report-joint-velocity-4603) | 4603h |
| [ReportManipulatorSpecifications](/messages/report-manipulator-specifications-4600) | 4600h |
| [ReportPanTiltJointEffort](/messages/report-pan-tilt-joint-effort-4621) | 4621h |
| [ReportPanTiltJointPosition](/messages/report-pan-tilt-joint-position-4622) | 4622h |
| [ReportPanTiltJointVelocity](/messages/report-pan-tilt-joint-velocity-4623) | 4623h |
| [ReportPanTiltMotionProfile](/messages/report-pan-tilt-motion-profile-4627) | 4627h |
| [ReportPanTiltSpecifications](/messages/report-pan-tilt-specifications-4620) | 4620h |
| [ReportToolOffset](/messages/report-tool-offset-4604) | 4604h |
| [SetActuatorForceTorque](/messages/set-actuator-force-torque-0613) | 0613h |
| [SetEndEffectorEffort](/messages/set-end-effector-effort-0633) | 0633h |
| [SetEndEffectorPose](/messages/set-end-effector-pose-0610) | 0610h |
| [SetEndEffectorVelocityState](/messages/set-end-effector-velocity-state-0612) | 0612h |
| [SetJointEffort](/messages/set-joint-effort-0601) | 0601h |
| [SetJointMotionProfile](/messages/set-joint-motion-profile-0607) | 0607h |
| [SetJointPosition](/messages/set-joint-position-0602) | 0602h |
| [SetJointVelocity](/messages/set-joint-velocity-0603) | 0603h |
| [SetPanTiltJointEffort](/messages/set-pan-tilt-joint-effort-0621) | 0621h |
| [SetPanTiltJointPosition](/messages/set-pan-tilt-joint-position-0622) | 0622h |
| [SetPanTiltJointVelocity](/messages/set-pan-tilt-joint-velocity-0623) | 0623h |
| [SetPanTiltMotionProfile](/messages/set-pan-tilt-motion-profile-0627) | 0627h |
| [SetToolOffset](/messages/set-tool-offset-0604) | 0604h |

