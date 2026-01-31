import { defineConfig } from 'vitepress'

// VitePress configuration for OpenJAUS Documentation
// Auto-generated sidebar from HTML conversion
export default defineConfig({
  // Site metadata
  title: 'OpenJAUS Documentation',
  description: 'JAUS Service Set Reference Documentation',
  
  // Base URL for GitHub Pages deployment
  base: '/openjaus.htmlDoc/',
  
  // Theme configuration
  themeConfig: {
    // Site logo
    logo: '/images/ojLogo_small.png',
    
    // Navigation bar
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Service Sets', link: '/service-sets/' },
      { text: 'Services', link: '/services/' },
      { text: 'Messages', link: '/messages/' }
    ],
    
    // Sidebar navigation
    sidebar: {
      '/service-sets/': [
        {
          text: 'Service Sets',
          items: [
                    {
                              "text": "CORE_V1_1",
                              "link": "/service-sets/core-v1-1"
                    },
                    {
                              "text": "ENVIRONMENT_V1_0",
                              "link": "/service-sets/environment-v1-0"
                    },
                    {
                              "text": "IOP_V3",
                              "link": "/service-sets/iop-v3"
                    },
                    {
                              "text": "MANIPULATOR_V2_0",
                              "link": "/service-sets/manipulator-v2-0"
                    },
                    {
                              "text": "MOBILITY_V1_0",
                              "link": "/service-sets/mobility-v1-0"
                    },
                    {
                              "text": "UGV_V1_0",
                              "link": "/service-sets/ugv-v1-0"
                    }
          ]
        }
      ],
      '/services/': [
        {
          text: 'All Services',
          collapsed: false,
          items: [
                    {
                              "text": "AccelerationStateSensor",
                              "link": "/services/acceleration-state-sensor"
                    },
                    {
                              "text": "AccessControl",
                              "link": "/services/access-control"
                    },
                    {
                              "text": "AckermannDriver",
                              "link": "/services/ackermann-driver"
                    },
                    {
                              "text": "AcousticSensor",
                              "link": "/services/acoustic-sensor"
                    },
                    {
                              "text": "AEODRSDigitalAudioAnnunciator",
                              "link": "/services/aeodrsdigital-audio-annunciator"
                    },
                    {
                              "text": "AEODRSDigitalAudioSensor",
                              "link": "/services/aeodrsdigital-audio-sensor"
                    },
                    {
                              "text": "AEODRSDigitalVideo",
                              "link": "/services/aeodrsdigital-video"
                    },
                    {
                              "text": "AEODRSVideoIlluminator",
                              "link": "/services/aeodrsvideo-illuminator"
                    },
                    {
                              "text": "AnalogVideo",
                              "link": "/services/analog-video"
                    },
                    {
                              "text": "Annunciator",
                              "link": "/services/annunciator"
                    },
                    {
                              "text": "CommsLostPolicyManager",
                              "link": "/services/comms-lost-policy-manager"
                    },
                    {
                              "text": "Communicator",
                              "link": "/services/communicator"
                    },
                    {
                              "text": "ComponentPhysicalProperties",
                              "link": "/services/component-physical-properties"
                    },
                    {
                              "text": "Configuration",
                              "link": "/services/configuration"
                    },
                    {
                              "text": "Convoy",
                              "link": "/services/convoy"
                    },
                    {
                              "text": "CostMap2D",
                              "link": "/services/cost-map2d"
                    },
                    {
                              "text": "DataLogging",
                              "link": "/services/data-logging"
                    },
                    {
                              "text": "DebrisBlower",
                              "link": "/services/debris-blower"
                    },
                    {
                              "text": "DigitalAudio",
                              "link": "/services/digital-audio"
                    },
                    {
                              "text": "DigitalAudioAnnunciator",
                              "link": "/services/digital-audio-annunciator"
                    },
                    {
                              "text": "DigitalResourceDiscovery",
                              "link": "/services/digital-resource-discovery"
                    },
                    {
                              "text": "DigitalVideo",
                              "link": "/services/digital-video"
                    },
                    {
                              "text": "Discovery",
                              "link": "/services/discovery"
                    },
                    {
                              "text": "DiscoveryClient",
                              "link": "/services/discovery-client"
                    },
                    {
                              "text": "DriveTrainDriver",
                              "link": "/services/drive-train-driver"
                    },
                    {
                              "text": "EnhancedAccessControl",
                              "link": "/services/enhanced-access-control"
                    },
                    {
                              "text": "EnhancedGlobalWaypointListDriver",
                              "link": "/services/enhanced-global-waypoint-list-driver"
                    },
                    {
                              "text": "EnhancedLocalWaypointListDriver",
                              "link": "/services/enhanced-local-waypoint-list-driver"
                    },
                    {
                              "text": "Events",
                              "link": "/services/events"
                    },
                    {
                              "text": "ExtendedPrimitiveManipulator",
                              "link": "/services/extended-primitive-manipulator"
                    },
                    {
                              "text": "ExtendedPrimitivePanTilt",
                              "link": "/services/extended-primitive-pan-tilt"
                    },
                    {
                              "text": "FilterMapper",
                              "link": "/services/filter-mapper"
                    },
                    {
                              "text": "ForceTorqueSensor",
                              "link": "/services/force-torque-sensor"
                    },
                    {
                              "text": "GeneralSensor",
                              "link": "/services/general-sensor"
                    },
                    {
                              "text": "GlobalPathSegmentDriver",
                              "link": "/services/global-path-segment-driver"
                    },
                    {
                              "text": "GlobalPoseSensor",
                              "link": "/services/global-pose-sensor"
                    },
                    {
                              "text": "GlobalVectorDriver",
                              "link": "/services/global-vector-driver"
                    },
                    {
                              "text": "GlobalWaypointDriver",
                              "link": "/services/global-waypoint-driver"
                    },
                    {
                              "text": "GlobalWaypointListDriver",
                              "link": "/services/global-waypoint-list-driver"
                    },
                    {
                              "text": "GuardedTeleopPolicyManager",
                              "link": "/services/guarded-teleop-policy-manager"
                    },
                    {
                              "text": "H264VideoEncoding",
                              "link": "/services/h264video-encoding"
                    },
                    {
                              "text": "HandoffController",
                              "link": "/services/handoff-controller"
                    },
                    {
                              "text": "HealthMonitor",
                              "link": "/services/health-monitor"
                    },
                    {
                              "text": "HealthReporter",
                              "link": "/services/health-reporter"
                    },
                    {
                              "text": "Illumination",
                              "link": "/services/illumination"
                    },
                    {
                              "text": "IntelligentVehiclePolicyManager",
                              "link": "/services/intelligent-vehicle-policy-manager"
                    },
                    {
                              "text": "LeaderFollowerDriver",
                              "link": "/services/leader-follower-driver"
                    },
                    {
                              "text": "LeaderManagement",
                              "link": "/services/leader-management"
                    },
                    {
                              "text": "ListManager",
                              "link": "/services/list-manager"
                    },
                    {
                              "text": "Liveness",
                              "link": "/services/liveness"
                    },
                    {
                              "text": "LoadingSpecifications",
                              "link": "/services/loading-specifications"
                    },
                    {
                              "text": "LocalPathSegmentDriver",
                              "link": "/services/local-path-segment-driver"
                    },
                    {
                              "text": "LocalPoseSensor",
                              "link": "/services/local-pose-sensor"
                    },
                    {
                              "text": "LocalVectorDriver",
                              "link": "/services/local-vector-driver"
                    },
                    {
                              "text": "LocalWaypointDriver",
                              "link": "/services/local-waypoint-driver"
                    },
                    {
                              "text": "LocalWaypointListDriver",
                              "link": "/services/local-waypoint-list-driver"
                    },
                    {
                              "text": "MagneticSensor",
                              "link": "/services/magnetic-sensor"
                    },
                    {
                              "text": "Management",
                              "link": "/services/management"
                    },
                    {
                              "text": "ManipulatorActuatorForceTorqueDriver",
                              "link": "/services/manipulator-actuator-force-torque-driver"
                    },
                    {
                              "text": "ManipulatorEndEffectorForceTorqueSensor",
                              "link": "/services/manipulator-end-effector-force-torque-sensor"
                    },
                    {
                              "text": "ManipulatorEndEffectorPoseDriver",
                              "link": "/services/manipulator-end-effector-pose-driver"
                    },
                    {
                              "text": "ManipulatorEndEffectorPoseListDriver",
                              "link": "/services/manipulator-end-effector-pose-list-driver"
                    },
                    {
                              "text": "ManipulatorEndEffectorPoseSensor",
                              "link": "/services/manipulator-end-effector-pose-sensor"
                    },
                    {
                              "text": "ManipulatorEndEffectorVelocityStateDriver",
                              "link": "/services/manipulator-end-effector-velocity-state-driver"
                    },
                    {
                              "text": "ManipulatorEndEffectorVelocityStateSensor",
                              "link": "/services/manipulator-end-effector-velocity-state-sensor"
                    },
                    {
                              "text": "ManipulatorJointForceTorqueSensor",
                              "link": "/services/manipulator-joint-force-torque-sensor"
                    },
                    {
                              "text": "ManipulatorJointMotionProfile",
                              "link": "/services/manipulator-joint-motion-profile"
                    },
                    {
                              "text": "ManipulatorJointPositionDriver",
                              "link": "/services/manipulator-joint-position-driver"
                    },
                    {
                              "text": "ManipulatorJointPositionListDriver",
                              "link": "/services/manipulator-joint-position-list-driver"
                    },
                    {
                              "text": "ManipulatorJointPositionSensor",
                              "link": "/services/manipulator-joint-position-sensor"
                    },
                    {
                              "text": "ManipulatorJointVelocityDriver",
                              "link": "/services/manipulator-joint-velocity-driver"
                    },
                    {
                              "text": "ManipulatorJointVelocitySensor",
                              "link": "/services/manipulator-joint-velocity-sensor"
                    },
                    {
                              "text": "ManipulatorListDriver",
                              "link": "/services/manipulator-list-driver"
                    },
                    {
                              "text": "ManipulatorSpecification",
                              "link": "/services/manipulator-specification"
                    },
                    {
                              "text": "ManipulatorToolOffset",
                              "link": "/services/manipulator-tool-offset"
                    },
                    {
                              "text": "MilitaryIllumination",
                              "link": "/services/military-illumination"
                    },
                    {
                              "text": "MountSiteProperties",
                              "link": "/services/mount-site-properties"
                    },
                    {
                              "text": "NodeIDAllocator",
                              "link": "/services/node-idallocator"
                    },
                    {
                              "text": "Odometry",
                              "link": "/services/odometry"
                    },
                    {
                              "text": "PanTiltJointPositionDriver",
                              "link": "/services/pan-tilt-joint-position-driver"
                    },
                    {
                              "text": "PanTiltJointPositionSensor",
                              "link": "/services/pan-tilt-joint-position-sensor"
                    },
                    {
                              "text": "PanTiltJointVelocityDriver",
                              "link": "/services/pan-tilt-joint-velocity-driver"
                    },
                    {
                              "text": "PanTiltJointVelocitySensor",
                              "link": "/services/pan-tilt-joint-velocity-sensor"
                    },
                    {
                              "text": "PanTiltMotionProfile",
                              "link": "/services/pan-tilt-motion-profile"
                    },
                    {
                              "text": "PanTiltSpecification",
                              "link": "/services/pan-tilt-specification"
                    },
                    {
                              "text": "ParkingBrakeDriver",
                              "link": "/services/parking-brake-driver"
                    },
                    {
                              "text": "PassthroughMessage",
                              "link": "/services/passthrough-message"
                    },
                    {
                              "text": "PathReporter",
                              "link": "/services/path-reporter"
                    },
                    {
                              "text": "PhysicalSpecification",
                              "link": "/services/physical-specification"
                    },
                    {
                              "text": "PlatformDoor",
                              "link": "/services/platform-door"
                    },
                    {
                              "text": "PlatformMode",
                              "link": "/services/platform-mode"
                    },
                    {
                              "text": "PlatformSpecifications",
                              "link": "/services/platform-specifications"
                    },
                    {
                              "text": "PlatformState",
                              "link": "/services/platform-state"
                    },
                    {
                              "text": "PowerPlantManager",
                              "link": "/services/power-plant-manager"
                    },
                    {
                              "text": "PresetPose",
                              "link": "/services/preset-pose"
                    },
                    {
                              "text": "PrimitiveEndEffector",
                              "link": "/services/primitive-end-effector"
                    },
                    {
                              "text": "PrimitiveManipulator",
                              "link": "/services/primitive-manipulator"
                    },
                    {
                              "text": "PrimitivePanTilt",
                              "link": "/services/primitive-pan-tilt"
                    },
                    {
                              "text": "RangeSensor",
                              "link": "/services/range-sensor"
                    },
                    {
                              "text": "RenderUseless",
                              "link": "/services/render-useless"
                    },
                    {
                              "text": "Retrotraverse",
                              "link": "/services/retrotraverse"
                    },
                    {
                              "text": "SeismicSensor",
                              "link": "/services/seismic-sensor"
                    },
                    {
                              "text": "SelfCollisionAvoidancePolicyManager",
                              "link": "/services/self-collision-avoidance-policy-manager"
                    },
                    {
                              "text": "SkidSteerDriver",
                              "link": "/services/skid-steer-driver"
                    },
                    {
                              "text": "SoftwareVersionReporting",
                              "link": "/services/software-version-reporting"
                    },
                    {
                              "text": "StabilityControl",
                              "link": "/services/stability-control"
                    },
                    {
                              "text": "StabilizerDriver",
                              "link": "/services/stabilizer-driver"
                    },
                    {
                              "text": "StillImage",
                              "link": "/services/still-image"
                    },
                    {
                              "text": "SubsystemIDAllocator",
                              "link": "/services/subsystem-idallocator"
                    },
                    {
                              "text": "TamperDetection",
                              "link": "/services/tamper-detection"
                    },
                    {
                              "text": "Time",
                              "link": "/services/time"
                    },
                    {
                              "text": "TirePressure",
                              "link": "/services/tire-pressure"
                    },
                    {
                              "text": "Transport",
                              "link": "/services/transport"
                    },
                    {
                              "text": "UnsolicitedBroadcastControlAvailable",
                              "link": "/services/unsolicited-broadcast-control-available"
                    },
                    {
                              "text": "UnsolicitedHeartbeat",
                              "link": "/services/unsolicited-heartbeat"
                    },
                    {
                              "text": "VelocityStateSensor",
                              "link": "/services/velocity-state-sensor"
                    },
                    {
                              "text": "VisualSensor",
                              "link": "/services/visual-sensor"
                    },
                    {
                              "text": "Wiper",
                              "link": "/services/wiper"
                    }
          ]
        }
      ],
      '/messages/': [
        {
          text: 'All Messages',
          collapsed: false,
          items: [
                    {
                              "text": "AccessControlTimeout [8D01h]",
                              "link": "/messages/access-control-timeout-8d01"
                    },
                    {
                              "text": "AddNoGoZone [D740h]",
                              "link": "/messages/add-no-go-zone-d740"
                    },
                    {
                              "text": "AddNoGoZoneResponse [D744h]",
                              "link": "/messages/add-no-go-zone-response-d744"
                    },
                    {
                              "text": "CancelEvent [01F2h]",
                              "link": "/messages/cancel-event-01f2"
                    },
                    {
                              "text": "CancelRetrotraverse [DC51h]",
                              "link": "/messages/cancel-retrotraverse-dc51"
                    },
                    {
                              "text": "ClearEmergency [0007h]",
                              "link": "/messages/clear-emergency-0007"
                    },
                    {
                              "text": "CommandEvent [41F6h]",
                              "link": "/messages/command-event-41f6"
                    },
                    {
                              "text": "CommsEstablished [8D13h]",
                              "link": "/messages/comms-established-8d13"
                    },
                    {
                              "text": "CommsLost [8D10h]",
                              "link": "/messages/comms-lost-8d10"
                    },
                    {
                              "text": "CommsRestored [8D11h]",
                              "link": "/messages/comms-restored-8d11"
                    },
                    {
                              "text": "ConfirmAnnunciatorStream [FF05h]",
                              "link": "/messages/confirm-annunciator-stream-ff05"
                    },
                    {
                              "text": "ConfirmControl [000Fh]",
                              "link": "/messages/confirm-control-000f"
                    },
                    {
                              "text": "ConfirmDigitalResourceEndpoint [F703h]",
                              "link": "/messages/confirm-digital-resource-endpoint-f703"
                    },
                    {
                              "text": "ConfirmElementRequest [041Ch]",
                              "link": "/messages/confirm-element-request-041c"
                    },
                    {
                              "text": "ConfirmEventRequest [01F3h]",
                              "link": "/messages/confirm-event-request-01f3"
                    },
                    {
                              "text": "ConfirmHandoffRequest [FF35h]",
                              "link": "/messages/confirm-handoff-request-ff35"
                    },
                    {
                              "text": "ConfirmPlatformStateRequest [FF27h]",
                              "link": "/messages/confirm-platform-state-request-ff27"
                    },
                    {
                              "text": "ConfirmReleaseControl [FF39h]",
                              "link": "/messages/confirm-release-control-ff39"
                    },
                    {
                              "text": "ConfirmRenderUselessRequest [FFD8h]",
                              "link": "/messages/confirm-render-useless-request-ffd8"
                    },
                    {
                              "text": "ConfirmSensorConfiguration [0801h]",
                              "link": "/messages/confirm-sensor-configuration-0801"
                    },
                    {
                              "text": "ControlAnnunciatorStream [DF05h]",
                              "link": "/messages/control-annunciator-stream-df05"
                    },
                    {
                              "text": "ControlDigitalAudioSensorStream [DE04h]",
                              "link": "/messages/control-digital-audio-sensor-stream-de04"
                    },
                    {
                              "text": "ControlDigitalVideoSensorStream [0805h]",
                              "link": "/messages/control-digital-video-sensor-stream-0805"
                    },
                    {
                              "text": "CreateCommandEvent [01F6h]",
                              "link": "/messages/create-command-event-01f6"
                    },
                    {
                              "text": "CreateEvent [01F0h]",
                              "link": "/messages/create-event-01f0"
                    },
                    {
                              "text": "DeleteElement [041Bh]",
                              "link": "/messages/delete-element-041b"
                    },
                    {
                              "text": "EmergencyEvent [8D18h]",
                              "link": "/messages/emergency-event-8d18"
                    },
                    {
                              "text": "EnhancedTimeout [8D15h]",
                              "link": "/messages/enhanced-timeout-8d15"
                    },
                    {
                              "text": "Event [41F1h]",
                              "link": "/messages/event-41f1"
                    },
                    {
                              "text": "ExecuteList [041Eh]",
                              "link": "/messages/execute-list-041e"
                    },
                    {
                              "text": "ExecuteList [061Eh]",
                              "link": "/messages/execute-list-061e"
                    },
                    {
                              "text": "Failure [8D03h]",
                              "link": "/messages/failure-8d03"
                    },
                    {
                              "text": "GrantNodeID [FB03h]",
                              "link": "/messages/grant-node-id-fb03"
                    },
                    {
                              "text": "GrantSubsystemID [FB01h]",
                              "link": "/messages/grant-subsystem-id-fb01"
                    },
                    {
                              "text": "HandoffDecisionMade [8D16h]",
                              "link": "/messages/handoff-decision-made-8d16"
                    },
                    {
                              "text": "HandoffTimeout [8D14h]",
                              "link": "/messages/handoff-timeout-8d14"
                    },
                    {
                              "text": "InitializationCompleteEvent [8D19h]",
                              "link": "/messages/initialization-complete-event-8d19"
                    },
                    {
                              "text": "Initialized [8D02h]",
                              "link": "/messages/initialized-8d02"
                    },
                    {
                              "text": "InternalFailureEvent [8D1Ah]",
                              "link": "/messages/internal-failure-event-8d1a"
                    },
                    {
                              "text": "PeriodicTimerTrigger [8D21h]",
                              "link": "/messages/periodic-timer-trigger-8d21"
                    },
                    {
                              "text": "PeriodicTimerTrigger [8D22h]",
                              "link": "/messages/periodic-timer-trigger-8d22"
                    },
                    {
                              "text": "ProcessEventRequest [8D00h]",
                              "link": "/messages/process-event-request-8d00"
                    },
                    {
                              "text": "QueryAccelerationState [2417h]",
                              "link": "/messages/query-acceleration-state-2417"
                    },
                    {
                              "text": "QueryAckermannConfiguration [2500h]",
                              "link": "/messages/query-ackermann-configuration-2500"
                    },
                    {
                              "text": "QueryAcousticSensorStatus [DAB5h]",
                              "link": "/messages/query-acoustic-sensor-status-dab5"
                    },
                    {
                              "text": "QueryActiveElement [241Eh]",
                              "link": "/messages/query-active-element-241e"
                    },
                    {
                              "text": "QueryActiveElement [261Eh]",
                              "link": "/messages/query-active-element-261e"
                    },
                    {
                              "text": "QueryAimpointParameters [E805h]",
                              "link": "/messages/query-aimpoint-parameters-e805"
                    },
                    {
                              "text": "QueryAnalogVideoSensorCapabilities [2810h]",
                              "link": "/messages/query-analog-video-sensor-capabilities-2810"
                    },
                    {
                              "text": "QueryAnalogVideoSensorConfiguration [2811h]",
                              "link": "/messages/query-analog-video-sensor-configuration-2811"
                    },
                    {
                              "text": "QueryAnnunciatorCapabilities [EF01h]",
                              "link": "/messages/query-annunciator-capabilities-ef01"
                    },
                    {
                              "text": "QueryAnnunciatorConfiguration [2517h]",
                              "link": "/messages/query-annunciator-configuration-2517"
                    },
                    {
                              "text": "QueryAnnunciatorConfiguration [EF02h]",
                              "link": "/messages/query-annunciator-configuration-ef02"
                    },
                    {
                              "text": "QueryAnnunciatorEndpoint [EF03h]",
                              "link": "/messages/query-annunciator-endpoint-ef03"
                    },
                    {
                              "text": "QueryAnnunciatorState [2516h]",
                              "link": "/messages/query-annunciator-state-2516"
                    },
                    {
                              "text": "QueryAuthority [2001h]",
                              "link": "/messages/query-authority-2001"
                    },
                    {
                              "text": "QueryCommandedActuatorForceTorque [2613h]",
                              "link": "/messages/query-commanded-actuator-force-torque-2613"
                    },
                    {
                              "text": "QueryCommandedEndEffectorPose [2610h]",
                              "link": "/messages/query-commanded-end-effector-pose-2610"
                    },
                    {
                              "text": "QueryCommandedEndEffectorVelocityState [2612h]",
                              "link": "/messages/query-commanded-end-effector-velocity-state-2612"
                    },
                    {
                              "text": "QueryCommandedJointPosition [2608h]",
                              "link": "/messages/query-commanded-joint-position-2608"
                    },
                    {
                              "text": "QueryCommandedJointVelocity [2611h]",
                              "link": "/messages/query-commanded-joint-velocity-2611"
                    },
                    {
                              "text": "QueryCommandedPanTiltJointPosition [2628h]",
                              "link": "/messages/query-commanded-pan-tilt-joint-position-2628"
                    },
                    {
                              "text": "QueryCommandedPanTiltJointVelocity [2631h]",
                              "link": "/messages/query-commanded-pan-tilt-joint-velocity-2631"
                    },
                    {
                              "text": "QueryCommsLostCapabilities [C402h]",
                              "link": "/messages/query-comms-lost-capabilities-c402"
                    },
                    {
                              "text": "QueryCommsLostConfiguration [C403h]",
                              "link": "/messages/query-comms-lost-configuration-c403"
                    },
                    {
                              "text": "QueryCommsLostStatus [C404h]",
                              "link": "/messages/query-comms-lost-status-c404"
                    },
                    {
                              "text": "QueryCommunicatorCapability [2900h]",
                              "link": "/messages/query-communicator-capability-2900"
                    },
                    {
                              "text": "QueryCommunicatorConfiguration [2901h]",
                              "link": "/messages/query-communicator-configuration-2901"
                    },
                    {
                              "text": "QueryCommunicatorHealth [2902h]",
                              "link": "/messages/query-communicator-health-2902"
                    },
                    {
                              "text": "QueryComponentMappings [C530h]",
                              "link": "/messages/query-component-mappings-c530"
                    },
                    {
                              "text": "QueryConfiguration [2B01h]",
                              "link": "/messages/query-configuration-2b01"
                    },
                    {
                              "text": "QueryControl [200Dh]",
                              "link": "/messages/query-control-200d"
                    },
                    {
                              "text": "QueryConvoyDetails [F100h]",
                              "link": "/messages/query-convoy-details-f100"
                    },
                    {
                              "text": "QueryCostMap2D [D738h]",
                              "link": "/messages/query-cost-map2d-d738"
                    },
                    {
                              "text": "QueryCurrentPose [F002h]",
                              "link": "/messages/query-current-pose-f002"
                    },
                    {
                              "text": "QueryDebrisBlowerCapabilities [D7B8h]",
                              "link": "/messages/query-debris-blower-capabilities-d7b8"
                    },
                    {
                              "text": "QueryDebrisBlowerConfiguration [D7B9h]",
                              "link": "/messages/query-debris-blower-configuration-d7b9"
                    },
                    {
                              "text": "QueryDigitalAudioCapabilities [DABEh]",
                              "link": "/messages/query-digital-audio-capabilities-dabe"
                    },
                    {
                              "text": "QueryDigitalAudioConfiguration [DACEh]",
                              "link": "/messages/query-digital-audio-configuration-dace"
                    },
                    {
                              "text": "QueryDigitalAudioSensorCapabilities [EE01h]",
                              "link": "/messages/query-digital-audio-sensor-capabilities-ee01"
                    },
                    {
                              "text": "QueryDigitalAudioSensorConfiguration [EE02h]",
                              "link": "/messages/query-digital-audio-sensor-configuration-ee02"
                    },
                    {
                              "text": "QueryDigitalAudioSensorStreamEndpoint [EE03h]",
                              "link": "/messages/query-digital-audio-sensor-stream-endpoint-ee03"
                    },
                    {
                              "text": "QueryDigitalAudioStreamSource [DA8Eh]",
                              "link": "/messages/query-digital-audio-stream-source-da8e"
                    },
                    {
                              "text": "QueryDigitalResourceEndpoint [E702h]",
                              "link": "/messages/query-digital-resource-endpoint-e702"
                    },
                    {
                              "text": "QueryDigitalVideoEndpoint [E802h]",
                              "link": "/messages/query-digital-video-endpoint-e802"
                    },
                    {
                              "text": "QueryDigitalVideoIlluminator [E801h]",
                              "link": "/messages/query-digital-video-illuminator-e801"
                    },
                    {
                              "text": "QueryDigitalVideoIlluminatorCapabilities [E803h]",
                              "link": "/messages/query-digital-video-illuminator-capabilities-e803"
                    },
                    {
                              "text": "QueryDigitalVideoIlluminatorConfiguration [E804h]",
                              "link": "/messages/query-digital-video-illuminator-configuration-e804"
                    },
                    {
                              "text": "QueryDigitalVideoSensorCapabilities [2808h]",
                              "link": "/messages/query-digital-video-sensor-capabilities-2808"
                    },
                    {
                              "text": "QueryDigitalVideoSensorConfiguration [2809h]",
                              "link": "/messages/query-digital-video-sensor-configuration-2809"
                    },
                    {
                              "text": "QueryDoorStatus [D721h]",
                              "link": "/messages/query-door-status-d721"
                    },
                    {
                              "text": "QueryElectricalProperties [D731h]",
                              "link": "/messages/query-electrical-properties-d731"
                    },
                    {
                              "text": "QueryElement [241Ah]",
                              "link": "/messages/query-element-241a"
                    },
                    {
                              "text": "QueryElementCount [241Ch]",
                              "link": "/messages/query-element-count-241c"
                    },
                    {
                              "text": "QueryElementList [241Bh]",
                              "link": "/messages/query-element-list-241b"
                    },
                    {
                              "text": "QueryEndEffectorEffort [2633h]",
                              "link": "/messages/query-end-effector-effort-2633"
                    },
                    {
                              "text": "QueryEndEffectorPose [2615h]",
                              "link": "/messages/query-end-effector-pose-2615"
                    },
                    {
                              "text": "QueryEndEffectorSpecification [2632h]",
                              "link": "/messages/query-end-effector-specification-2632"
                    },
                    {
                              "text": "QueryEndEffectorVelocityState [2616h]",
                              "link": "/messages/query-end-effector-velocity-state-2616"
                    },
                    {
                              "text": "QueryEnhancedGlobalWaypointInformation [F22Ah]",
                              "link": "/messages/query-enhanced-global-waypoint-information-f22a"
                    },
                    {
                              "text": "QueryEnhancedLocalWaypointInformation [F222h]",
                              "link": "/messages/query-enhanced-local-waypoint-information-f222"
                    },
                    {
                              "text": "QueryEnhancedTimeout [FF33h]",
                              "link": "/messages/query-enhanced-timeout-ff33"
                    },
                    {
                              "text": "QueryEvents [21F0h]",
                              "link": "/messages/query-events-21f0"
                    },
                    {
                              "text": "QueryEventTimeout [21F2h]",
                              "link": "/messages/query-event-timeout-21f2"
                    },
                    {
                              "text": "QueryFilterType [C529h]",
                              "link": "/messages/query-filter-type-c529"
                    },
                    {
                              "text": "QueryFollowerConfiguration [FFF3h]",
                              "link": "/messages/query-follower-configuration-fff3"
                    },
                    {
                              "text": "QueryFollowers [FFD3h]",
                              "link": "/messages/query-followers-ffd3"
                    },
                    {
                              "text": "QueryForceTorque [D991h]",
                              "link": "/messages/query-force-torque-d991"
                    },
                    {
                              "text": "QueryForceTorqueCapabilities [D990h]",
                              "link": "/messages/query-force-torque-capabilities-d990"
                    },
                    {
                              "text": "QueryGeneralSensorCapabilities [DAB0h]",
                              "link": "/messages/query-general-sensor-capabilities-dab0"
                    },
                    {
                              "text": "QueryGeneralSensorConfiguration [DAB1h]",
                              "link": "/messages/query-general-sensor-configuration-dab1"
                    },
                    {
                              "text": "QueryGeomagneticProperty [2412h]",
                              "link": "/messages/query-geomagnetic-property-2412"
                    },
                    {
                              "text": "QueryGlobalPathSegment [240Fh]",
                              "link": "/messages/query-global-path-segment-240f"
                    },
                    {
                              "text": "QueryGlobalPose [2402h]",
                              "link": "/messages/query-global-pose-2402"
                    },
                    {
                              "text": "QueryGlobalVector [2407h]",
                              "link": "/messages/query-global-vector-2407"
                    },
                    {
                              "text": "QueryGlobalWaypoint [240Ch]",
                              "link": "/messages/query-global-waypoint-240c"
                    },
                    {
                              "text": "QueryGlobalWaypointStatus [F229h]",
                              "link": "/messages/query-global-waypoint-status-f229"
                    },
                    {
                              "text": "QueryGuardedTeleopCapabilities [C502h]",
                              "link": "/messages/query-guarded-teleop-capabilities-c502"
                    },
                    {
                              "text": "QueryGuardedTeleopConfiguration [C503h]",
                              "link": "/messages/query-guarded-teleop-configuration-c503"
                    },
                    {
                              "text": "QueryGuardedTeleopStatus [C504h]",
                              "link": "/messages/query-guarded-teleop-status-c504"
                    },
                    {
                              "text": "QueryH264VideoEncodingCapabilities [EB91h]",
                              "link": "/messages/query-h264video-encoding-capabilities-eb91"
                    },
                    {
                              "text": "QueryH264VideoEncodingConfiguration [EB92h]",
                              "link": "/messages/query-h264video-encoding-configuration-eb92"
                    },
                    {
                              "text": "QueryHandoffTimeout [FF32h]",
                              "link": "/messages/query-handoff-timeout-ff32"
                    },
                    {
                              "text": "QueryHealthDetails [ED01h]",
                              "link": "/messages/query-health-details-ed01"
                    },
                    {
                              "text": "QueryHealthSummary [ED02h]",
                              "link": "/messages/query-health-summary-ed02"
                    },
                    {
                              "text": "QueryHeartbeatPulse [2202h]",
                              "link": "/messages/query-heartbeat-pulse-2202"
                    },
                    {
                              "text": "QueryHostManipulator [F292h]",
                              "link": "/messages/query-host-manipulator-f292"
                    },
                    {
                              "text": "QueryHourMeter [ED03h]",
                              "link": "/messages/query-hour-meter-ed03"
                    },
                    {
                              "text": "QueryIdentification [2B00h]",
                              "link": "/messages/query-identification-2b00"
                    },
                    {
                              "text": "QueryIlluminationConfiguration [2514h]",
                              "link": "/messages/query-illumination-configuration-2514"
                    },
                    {
                              "text": "QueryIlluminationState [2513h]",
                              "link": "/messages/query-illumination-state-2513"
                    },
                    {
                              "text": "QueryIntelligentVehicleCapabilities [DDD1h]",
                              "link": "/messages/query-intelligent-vehicle-capabilities-ddd1"
                    },
                    {
                              "text": "QueryIntelligentVehicleConfiguration [DDD2h]",
                              "link": "/messages/query-intelligent-vehicle-configuration-ddd2"
                    },
                    {
                              "text": "QueryIntelligentVehicleStatus [DDD3h]",
                              "link": "/messages/query-intelligent-vehicle-status-ddd3"
                    },
                    {
                              "text": "QueryJausAddress [5555h]",
                              "link": "/messages/query-jaus-address-5555"
                    },
                    {
                              "text": "QueryJointEffort [2601h]",
                              "link": "/messages/query-joint-effort-2601"
                    },
                    {
                              "text": "QueryJointForceTorque [2605h]",
                              "link": "/messages/query-joint-force-torque-2605"
                    },
                    {
                              "text": "QueryJointMotionProfile [2607h]",
                              "link": "/messages/query-joint-motion-profile-2607"
                    },
                    {
                              "text": "QueryJointOperationalParameters [F290h]",
                              "link": "/messages/query-joint-operational-parameters-f290"
                    },
                    {
                              "text": "QueryJointPosition [2602h]",
                              "link": "/messages/query-joint-position-2602"
                    },
                    {
                              "text": "QueryJointVelocity [2603h]",
                              "link": "/messages/query-joint-velocity-2603"
                    },
                    {
                              "text": "QueryLoadingSpecifications [CB20h]",
                              "link": "/messages/query-loading-specifications-cb20"
                    },
                    {
                              "text": "QueryLocalPathSegment [2410h]",
                              "link": "/messages/query-local-path-segment-2410"
                    },
                    {
                              "text": "QueryLocalPose [2403h]",
                              "link": "/messages/query-local-pose-2403"
                    },
                    {
                              "text": "QueryLocalVector [2408h]",
                              "link": "/messages/query-local-vector-2408"
                    },
                    {
                              "text": "QueryLocalWaypoint [240Dh]",
                              "link": "/messages/query-local-waypoint-240d"
                    },
                    {
                              "text": "QueryLocalWaypointStatus [F221h]",
                              "link": "/messages/query-local-waypoint-status-f221"
                    },
                    {
                              "text": "QueryLoggerCapability [9113h]",
                              "link": "/messages/query-logger-capability-9113"
                    },
                    {
                              "text": "QueryLoggerConfiguration [9112h]",
                              "link": "/messages/query-logger-configuration-9112"
                    },
                    {
                              "text": "QueryLoggerStatus [9111h]",
                              "link": "/messages/query-logger-status-9111"
                    },
                    {
                              "text": "QueryMagneticSensorStatus [DAB9h]",
                              "link": "/messages/query-magnetic-sensor-status-dab9"
                    },
                    {
                              "text": "QueryManipulatorEndEffectorForceTorque [D998h]",
                              "link": "/messages/query-manipulator-end-effector-force-torque-d998"
                    },
                    {
                              "text": "QueryManipulatorSpecifications [2600h]",
                              "link": "/messages/query-manipulator-specifications-2600"
                    },
                    {
                              "text": "QueryMassProperties [EC40h]",
                              "link": "/messages/query-mass-properties-ec40"
                    },
                    {
                              "text": "QueryMilitaryIlluminationMode [B513h]",
                              "link": "/messages/query-military-illumination-mode-b513"
                    },
                    {
                              "text": "QueryMountSite [E701h]",
                              "link": "/messages/query-mount-site-e701"
                    },
                    {
                              "text": "QueryNoGoZones [D739h]",
                              "link": "/messages/query-no-go-zones-d739"
                    },
                    {
                              "text": "QueryOdometry [2515h]",
                              "link": "/messages/query-odometry-2515"
                    },
                    {
                              "text": "QueryPanTiltHostManipulator [F29Ah]",
                              "link": "/messages/query-pan-tilt-host-manipulator-f29a"
                    },
                    {
                              "text": "QueryPanTiltJointEffort [2621h]",
                              "link": "/messages/query-pan-tilt-joint-effort-2621"
                    },
                    {
                              "text": "QueryPanTiltJointPosition [2622h]",
                              "link": "/messages/query-pan-tilt-joint-position-2622"
                    },
                    {
                              "text": "QueryPanTiltJointVelocity [2623h]",
                              "link": "/messages/query-pan-tilt-joint-velocity-2623"
                    },
                    {
                              "text": "QueryPanTiltMotionProfile [2627h]",
                              "link": "/messages/query-pan-tilt-motion-profile-2627"
                    },
                    {
                              "text": "QueryPanTiltOperationalParameters [F298h]",
                              "link": "/messages/query-pan-tilt-operational-parameters-f298"
                    },
                    {
                              "text": "QueryPanTiltSpecifications [2620h]",
                              "link": "/messages/query-pan-tilt-specifications-2620"
                    },
                    {
                              "text": "QueryParkingBrake [2512h]",
                              "link": "/messages/query-parking-brake-2512"
                    },
                    {
                              "text": "QueryPassthroughMessageProperties [D702h]",
                              "link": "/messages/query-passthrough-message-properties-d702"
                    },
                    {
                              "text": "QueryPath [DEF1h]",
                              "link": "/messages/query-path-def1"
                    },
                    {
                              "text": "QueryPathReporterCapabilities [DEF0h]",
                              "link": "/messages/query-path-reporter-capabilities-def0"
                    },
                    {
                              "text": "QueryPhysicalProperties [D730h]",
                              "link": "/messages/query-physical-properties-d730"
                    },
                    {
                              "text": "QueryPlatformMode [FF21h]",
                              "link": "/messages/query-platform-mode-ff21"
                    },
                    {
                              "text": "QueryPlatformSpecifications [2502h]",
                              "link": "/messages/query-platform-specifications-2502"
                    },
                    {
                              "text": "QueryPlatformState [FF26h]",
                              "link": "/messages/query-platform-state-ff26"
                    },
                    {
                              "text": "QueryPowerPlantCapabilities [2507h]",
                              "link": "/messages/query-power-plant-capabilities-2507"
                    },
                    {
                              "text": "QueryPowerPlantConfiguration [2506h]",
                              "link": "/messages/query-power-plant-configuration-2506"
                    },
                    {
                              "text": "QueryPowerPlantStatus [2508h]",
                              "link": "/messages/query-power-plant-status-2508"
                    },
                    {
                              "text": "QueryPresetPoseCapabilities [F001h]",
                              "link": "/messages/query-preset-pose-capabilities-f001"
                    },
                    {
                              "text": "QueryPresetPoseSpecifications [F005h]",
                              "link": "/messages/query-preset-pose-specifications-f005"
                    },
                    {
                              "text": "QueryRangeSensorCapabilities [2801h]",
                              "link": "/messages/query-range-sensor-capabilities-2801"
                    },
                    {
                              "text": "QueryRangeSensorCompressedData [2804h]",
                              "link": "/messages/query-range-sensor-compressed-data-2804"
                    },
                    {
                              "text": "QueryRangeSensorConfiguration [2802h]",
                              "link": "/messages/query-range-sensor-configuration-2802"
                    },
                    {
                              "text": "QueryRangeSensorData [2803h]",
                              "link": "/messages/query-range-sensor-data-2803"
                    },
                    {
                              "text": "QueryReminder [ED05h]",
                              "link": "/messages/query-reminder-ed05"
                    },
                    {
                              "text": "QueryReminderSummary [ED04h]",
                              "link": "/messages/query-reminder-summary-ed04"
                    },
                    {
                              "text": "QueryRenderUseless [FFD9h]",
                              "link": "/messages/query-render-useless-ffd9"
                    },
                    {
                              "text": "QueryRetrotraverseStatus [EC50h]",
                              "link": "/messages/query-retrotraverse-status-ec50"
                    },
                    {
                              "text": "QuerySeismicSensorStatus [DAB7h]",
                              "link": "/messages/query-seismic-sensor-status-dab7"
                    },
                    {
                              "text": "QuerySelfCollisionAvoidanceCapabilities [C522h]",
                              "link": "/messages/query-self-collision-avoidance-capabilities-c522"
                    },
                    {
                              "text": "QuerySelfCollisionAvoidanceConfiguration [C523h]",
                              "link": "/messages/query-self-collision-avoidance-configuration-c523"
                    },
                    {
                              "text": "QuerySelfCollisionAvoidanceStatus [C524h]",
                              "link": "/messages/query-self-collision-avoidance-status-c524"
                    },
                    {
                              "text": "QuerySensorGeometricProperties [2805h]",
                              "link": "/messages/query-sensor-geometric-properties-2805"
                    },
                    {
                              "text": "QueryServiceList [2B04h]",
                              "link": "/messages/query-service-list-2b04"
                    },
                    {
                              "text": "QueryServices [2B03h]",
                              "link": "/messages/query-services-2b03"
                    },
                    {
                              "text": "QueryShape [EC42h]",
                              "link": "/messages/query-shape-ec42"
                    },
                    {
                              "text": "QuerySkidSteerEffort [2501h]",
                              "link": "/messages/query-skid-steer-effort-2501"
                    },
                    {
                              "text": "QuerySoftwareVersion [E999h]",
                              "link": "/messages/query-software-version-e999"
                    },
                    {
                              "text": "QueryStabilityControlCapabilities [D7C8h]",
                              "link": "/messages/query-stability-control-capabilities-d7c8"
                    },
                    {
                              "text": "QueryStabilityControlStatus [D7C9h]",
                              "link": "/messages/query-stability-control-status-d7c9"
                    },
                    {
                              "text": "QueryStabilizerCapabilities [2505h]",
                              "link": "/messages/query-stabilizer-capabilities-2505"
                    },
                    {
                              "text": "QueryStabilizerEffort [2503h]",
                              "link": "/messages/query-stabilizer-effort-2503"
                    },
                    {
                              "text": "QueryStabilizerPosition [2504h]",
                              "link": "/messages/query-stabilizer-position-2504"
                    },
                    {
                              "text": "QueryStatus [2002h]",
                              "link": "/messages/query-status-2002"
                    },
                    {
                              "text": "QueryStillImageData [2814h]",
                              "link": "/messages/query-still-image-data-2814"
                    },
                    {
                              "text": "QueryStillImageSensorCapabilities [2812h]",
                              "link": "/messages/query-still-image-sensor-capabilities-2812"
                    },
                    {
                              "text": "QueryStillImageSensorConfiguration [2813h]",
                              "link": "/messages/query-still-image-sensor-configuration-2813"
                    },
                    {
                              "text": "QuerySubsystemIDs [EB02h]",
                              "link": "/messages/query-subsystem-ids-eb02"
                    },
                    {
                              "text": "QuerySubsystemList [2B02h]",
                              "link": "/messages/query-subsystem-list-2b02"
                    },
                    {
                              "text": "QuerySupportedPlatformModes [FF22h]",
                              "link": "/messages/query-supported-platform-modes-ff22"
                    },
                    {
                              "text": "QueryTamperDetectionStatus [DE67h]",
                              "link": "/messages/query-tamper-detection-status-de67"
                    },
                    {
                              "text": "QueryTime [2011h]",
                              "link": "/messages/query-time-2011"
                    },
                    {
                              "text": "QueryTimeout [2003h]",
                              "link": "/messages/query-timeout-2003"
                    },
                    {
                              "text": "QueryTirePressureCapabilities [D7B0h]",
                              "link": "/messages/query-tire-pressure-capabilities-d7b0"
                    },
                    {
                              "text": "QueryTirePressureStatus [D7B1h]",
                              "link": "/messages/query-tire-pressure-status-d7b1"
                    },
                    {
                              "text": "QueryToolOffset [2604h]",
                              "link": "/messages/query-tool-offset-2604"
                    },
                    {
                              "text": "QueryTransferCaseState [2510h]",
                              "link": "/messages/query-transfer-case-state-2510"
                    },
                    {
                              "text": "QueryTransmissionCapabilities [2511h]",
                              "link": "/messages/query-transmission-capabilities-2511"
                    },
                    {
                              "text": "QueryTransmissionState [2509h]",
                              "link": "/messages/query-transmission-state-2509"
                    },
                    {
                              "text": "QueryTransportPolicy [6501h]",
                              "link": "/messages/query-transport-policy-6501"
                    },
                    {
                              "text": "QueryTravelSpeed [240Ah]",
                              "link": "/messages/query-travel-speed-240a"
                    },
                    {
                              "text": "QueryUGVSummary [ED10h]",
                              "link": "/messages/query-ugvsummary-ed10"
                    },
                    {
                              "text": "QueryVelocityState [2404h]",
                              "link": "/messages/query-velocity-state-2404"
                    },
                    {
                              "text": "QueryVisualSensorCapabilities [2806h]",
                              "link": "/messages/query-visual-sensor-capabilities-2806"
                    },
                    {
                              "text": "QueryVisualSensorConfiguration [2807h]",
                              "link": "/messages/query-visual-sensor-configuration-2807"
                    },
                    {
                              "text": "QueryVisualSensorGeometricProperties [2805h]",
                              "link": "/messages/query-visual-sensor-geometric-properties-2805"
                    },
                    {
                              "text": "QueryWiperCapabilities [D7C0h]",
                              "link": "/messages/query-wiper-capabilities-d7c0"
                    },
                    {
                              "text": "QueryWiperStatus [D7C1h]",
                              "link": "/messages/query-wiper-status-d7c1"
                    },
                    {
                              "text": "RecoverEmergencyEvent [8D1Bh]",
                              "link": "/messages/recover-emergency-event-8d1b"
                    },
                    {
                              "text": "RegisterDigitalResourceEndpoint [E703h]",
                              "link": "/messages/register-digital-resource-endpoint-e703"
                    },
                    {
                              "text": "RegisterFollower [FFD2h]",
                              "link": "/messages/register-follower-ffd2"
                    },
                    {
                              "text": "RegisterFollowerResponse [FFD5h]",
                              "link": "/messages/register-follower-response-ffd5"
                    },
                    {
                              "text": "RegisterServices [0B00h]",
                              "link": "/messages/register-services-0b00"
                    },
                    {
                              "text": "RegistrationTimeout [8D17h]",
                              "link": "/messages/registration-timeout-8d17"
                    },
                    {
                              "text": "RejectControl [0010h]",
                              "link": "/messages/reject-control-0010"
                    },
                    {
                              "text": "RejectElementRequest [041Dh]",
                              "link": "/messages/reject-element-request-041d"
                    },
                    {
                              "text": "RejectEventRequest [01F4h]",
                              "link": "/messages/reject-event-request-01f4"
                    },
                    {
                              "text": "ReleaseControl [000Eh]",
                              "link": "/messages/release-control-000e"
                    },
                    {
                              "text": "RemoveDigitalResourceEndpoint [E704h]",
                              "link": "/messages/remove-digital-resource-endpoint-e704"
                    },
                    {
                              "text": "RemoveHandoffRequest [FF34h]",
                              "link": "/messages/remove-handoff-request-ff34"
                    },
                    {
                              "text": "RemoveNoGoZone [D741h]",
                              "link": "/messages/remove-no-go-zone-d741"
                    },
                    {
                              "text": "RenderUseless [FFD7h]",
                              "link": "/messages/render-useless-ffd7"
                    },
                    {
                              "text": "RenderUselessEvent [8D1Ch]",
                              "link": "/messages/render-useless-event-8d1c"
                    },
                    {
                              "text": "ReportAccelerationState [4417h]",
                              "link": "/messages/report-acceleration-state-4417"
                    },
                    {
                              "text": "ReportAckermannConfiguration [4500h]",
                              "link": "/messages/report-ackermann-configuration-4500"
                    },
                    {
                              "text": "ReportAcousticSensorStatus [DAB6h]",
                              "link": "/messages/report-acoustic-sensor-status-dab6"
                    },
                    {
                              "text": "ReportActiveElement [441Eh]",
                              "link": "/messages/report-active-element-441e"
                    },
                    {
                              "text": "ReportActiveElement [461Eh]",
                              "link": "/messages/report-active-element-461e"
                    },
                    {
                              "text": "ReportAimpointParameters [F805h]",
                              "link": "/messages/report-aimpoint-parameters-f805"
                    },
                    {
                              "text": "ReportAnalogVideoSensorCapabilities [4810h]",
                              "link": "/messages/report-analog-video-sensor-capabilities-4810"
                    },
                    {
                              "text": "ReportAnalogVideoSensorConfiguration [4811h]",
                              "link": "/messages/report-analog-video-sensor-configuration-4811"
                    },
                    {
                              "text": "ReportAnnunciatorCapabilities [FF01h]",
                              "link": "/messages/report-annunciator-capabilities-ff01"
                    },
                    {
                              "text": "ReportAnnunciatorConfiguration [4517h]",
                              "link": "/messages/report-annunciator-configuration-4517"
                    },
                    {
                              "text": "ReportAnnunciatorConfiguration [FF02h]",
                              "link": "/messages/report-annunciator-configuration-ff02"
                    },
                    {
                              "text": "ReportAnnunciatorEndpoint [FF03h]",
                              "link": "/messages/report-annunciator-endpoint-ff03"
                    },
                    {
                              "text": "ReportAnnunciatorState [4516h]",
                              "link": "/messages/report-annunciator-state-4516"
                    },
                    {
                              "text": "ReportAuthority [4001h]",
                              "link": "/messages/report-authority-4001"
                    },
                    {
                              "text": "ReportCommandedActuatorForceTorque [4613h]",
                              "link": "/messages/report-commanded-actuator-force-torque-4613"
                    },
                    {
                              "text": "ReportCommandedEndEffectorPose [4610h]",
                              "link": "/messages/report-commanded-end-effector-pose-4610"
                    },
                    {
                              "text": "ReportCommandedEndEffectorVelocityState [4612h]",
                              "link": "/messages/report-commanded-end-effector-velocity-state-4612"
                    },
                    {
                              "text": "ReportCommandedJointPosition [4608h]",
                              "link": "/messages/report-commanded-joint-position-4608"
                    },
                    {
                              "text": "ReportCommandedJointVelocity [4611h]",
                              "link": "/messages/report-commanded-joint-velocity-4611"
                    },
                    {
                              "text": "ReportCommandedPanTiltJointPosition [4628h]",
                              "link": "/messages/report-commanded-pan-tilt-joint-position-4628"
                    },
                    {
                              "text": "ReportCommandedPanTiltJointVelocity [4631h]",
                              "link": "/messages/report-commanded-pan-tilt-joint-velocity-4631"
                    },
                    {
                              "text": "ReportCommsLostCapabilities [C412h]",
                              "link": "/messages/report-comms-lost-capabilities-c412"
                    },
                    {
                              "text": "ReportCommsLostConfiguration [C413h]",
                              "link": "/messages/report-comms-lost-configuration-c413"
                    },
                    {
                              "text": "ReportCommsLostStatus [C414h]",
                              "link": "/messages/report-comms-lost-status-c414"
                    },
                    {
                              "text": "ReportCommunicatorCapability [4900h]",
                              "link": "/messages/report-communicator-capability-4900"
                    },
                    {
                              "text": "ReportCommunicatorConfiguration [4901h]",
                              "link": "/messages/report-communicator-configuration-4901"
                    },
                    {
                              "text": "ReportCommunicatorHealth [4902h]",
                              "link": "/messages/report-communicator-health-4902"
                    },
                    {
                              "text": "ReportComponentMappings [C532h]",
                              "link": "/messages/report-component-mappings-c532"
                    },
                    {
                              "text": "ReportConfiguration [4B01h]",
                              "link": "/messages/report-configuration-4b01"
                    },
                    {
                              "text": "ReportControl [400Dh]",
                              "link": "/messages/report-control-400d"
                    },
                    {
                              "text": "ReportConvoyDetails [F102h]",
                              "link": "/messages/report-convoy-details-f102"
                    },
                    {
                              "text": "ReportCostMap2D [D742h]",
                              "link": "/messages/report-cost-map2d-d742"
                    },
                    {
                              "text": "ReportCurrentPose [F0F2h]",
                              "link": "/messages/report-current-pose-f0f2"
                    },
                    {
                              "text": "ReportDebrisBlowerCapabilities [D7BBh]",
                              "link": "/messages/report-debris-blower-capabilities-d7bb"
                    },
                    {
                              "text": "ReportDebrisBlowerConfiguration [D7BCh]",
                              "link": "/messages/report-debris-blower-configuration-d7bc"
                    },
                    {
                              "text": "ReportDigitalAudioCapabilities [DAEEh]",
                              "link": "/messages/report-digital-audio-capabilities-daee"
                    },
                    {
                              "text": "ReportDigitalAudioConfiguration [DAFEh]",
                              "link": "/messages/report-digital-audio-configuration-dafe"
                    },
                    {
                              "text": "ReportDigitalAudioSensorCapabilities [FE01h]",
                              "link": "/messages/report-digital-audio-sensor-capabilities-fe01"
                    },
                    {
                              "text": "ReportDigitalAudioSensorConfiguration [FE02h]",
                              "link": "/messages/report-digital-audio-sensor-configuration-fe02"
                    },
                    {
                              "text": "ReportDigitalAudioSensorStreamEndpoint [FE03h]",
                              "link": "/messages/report-digital-audio-sensor-stream-endpoint-fe03"
                    },
                    {
                              "text": "ReportDigitalAudioStreamSource [DA9Eh]",
                              "link": "/messages/report-digital-audio-stream-source-da9e"
                    },
                    {
                              "text": "ReportDigitalResourceEndpoint [F702h]",
                              "link": "/messages/report-digital-resource-endpoint-f702"
                    },
                    {
                              "text": "ReportDigitalVideoEndpoint [F802h]",
                              "link": "/messages/report-digital-video-endpoint-f802"
                    },
                    {
                              "text": "ReportDigitalVideoIlluminator [F801h]",
                              "link": "/messages/report-digital-video-illuminator-f801"
                    },
                    {
                              "text": "ReportDigitalVideoIlluminatorCapabilities [F803h]",
                              "link": "/messages/report-digital-video-illuminator-capabilities-f803"
                    },
                    {
                              "text": "ReportDigitalVideoIlluminatorConfiguration [F804h]",
                              "link": "/messages/report-digital-video-illuminator-configuration-f804"
                    },
                    {
                              "text": "ReportDigitalVideoSensorCapabilities [4808h]",
                              "link": "/messages/report-digital-video-sensor-capabilities-4808"
                    },
                    {
                              "text": "ReportDigitalVideoSensorConfiguration [4809h]",
                              "link": "/messages/report-digital-video-sensor-configuration-4809"
                    },
                    {
                              "text": "ReportDoorStatus [D722h]",
                              "link": "/messages/report-door-status-d722"
                    },
                    {
                              "text": "ReportElectricalProperties [D733h]",
                              "link": "/messages/report-electrical-properties-d733"
                    },
                    {
                              "text": "ReportElement [441Ah]",
                              "link": "/messages/report-element-441a"
                    },
                    {
                              "text": "ReportElementCount [441Ch]",
                              "link": "/messages/report-element-count-441c"
                    },
                    {
                              "text": "ReportElementList [441Bh]",
                              "link": "/messages/report-element-list-441b"
                    },
                    {
                              "text": "ReportEndEffectorEffort [4633h]",
                              "link": "/messages/report-end-effector-effort-4633"
                    },
                    {
                              "text": "ReportEndEffectorPose [4615h]",
                              "link": "/messages/report-end-effector-pose-4615"
                    },
                    {
                              "text": "ReportEndEffectorSpecification [4632h]",
                              "link": "/messages/report-end-effector-specification-4632"
                    },
                    {
                              "text": "ReportEndEffectorVelocityState [4616h]",
                              "link": "/messages/report-end-effector-velocity-state-4616"
                    },
                    {
                              "text": "ReportEnhancedGlobalWaypointInformation [F22Ch]",
                              "link": "/messages/report-enhanced-global-waypoint-information-f22c"
                    },
                    {
                              "text": "ReportEnhancedLocalWaypointInformation [F224h]",
                              "link": "/messages/report-enhanced-local-waypoint-information-f224"
                    },
                    {
                              "text": "ReportEnhancedTimeout [FF37h]",
                              "link": "/messages/report-enhanced-timeout-ff37"
                    },
                    {
                              "text": "ReportEvents [41F0h]",
                              "link": "/messages/report-events-41f0"
                    },
                    {
                              "text": "ReportEventTimeout [41F2h]",
                              "link": "/messages/report-event-timeout-41f2"
                    },
                    {
                              "text": "ReportFilterType [C531h]",
                              "link": "/messages/report-filter-type-c531"
                    },
                    {
                              "text": "ReportFollowerConfiguration [FFF4h]",
                              "link": "/messages/report-follower-configuration-fff4"
                    },
                    {
                              "text": "ReportFollowers [FFD4h]",
                              "link": "/messages/report-followers-ffd4"
                    },
                    {
                              "text": "ReportForceTorque [D993h]",
                              "link": "/messages/report-force-torque-d993"
                    },
                    {
                              "text": "ReportForceTorqueCapabilities [D992h]",
                              "link": "/messages/report-force-torque-capabilities-d992"
                    },
                    {
                              "text": "ReportGeneralSensorCapabilities [DAB3h]",
                              "link": "/messages/report-general-sensor-capabilities-dab3"
                    },
                    {
                              "text": "ReportGeneralSensorConfiguration [DAB4h]",
                              "link": "/messages/report-general-sensor-configuration-dab4"
                    },
                    {
                              "text": "ReportGeomagneticProperty [4412h]",
                              "link": "/messages/report-geomagnetic-property-4412"
                    },
                    {
                              "text": "ReportGlobalPathSegment [440Fh]",
                              "link": "/messages/report-global-path-segment-440f"
                    },
                    {
                              "text": "ReportGlobalPose [4402h]",
                              "link": "/messages/report-global-pose-4402"
                    },
                    {
                              "text": "ReportGlobalVector [4407h]",
                              "link": "/messages/report-global-vector-4407"
                    },
                    {
                              "text": "ReportGlobalWaypoint [440Ch]",
                              "link": "/messages/report-global-waypoint-440c"
                    },
                    {
                              "text": "ReportGlobalWaypointStatus [F22Bh]",
                              "link": "/messages/report-global-waypoint-status-f22b"
                    },
                    {
                              "text": "ReportGuardedTeleopCapabilities [C512h]",
                              "link": "/messages/report-guarded-teleop-capabilities-c512"
                    },
                    {
                              "text": "ReportGuardedTeleopConfiguration [C513h]",
                              "link": "/messages/report-guarded-teleop-configuration-c513"
                    },
                    {
                              "text": "ReportGuardedTeleopStatus [C514h]",
                              "link": "/messages/report-guarded-teleop-status-c514"
                    },
                    {
                              "text": "ReportH264VideoEncodingCapabilities [EB93h]",
                              "link": "/messages/report-h264video-encoding-capabilities-eb93"
                    },
                    {
                              "text": "ReportH264VideoEncodingConfiguration [EB94h]",
                              "link": "/messages/report-h264video-encoding-configuration-eb94"
                    },
                    {
                              "text": "ReportHandoffTimeout [FF36h]",
                              "link": "/messages/report-handoff-timeout-ff36"
                    },
                    {
                              "text": "ReportHealthDetails [FD01h]",
                              "link": "/messages/report-health-details-fd01"
                    },
                    {
                              "text": "ReportHealthSummary [FD02h]",
                              "link": "/messages/report-health-summary-fd02"
                    },
                    {
                              "text": "ReportHeartbeatPulse [4202h]",
                              "link": "/messages/report-heartbeat-pulse-4202"
                    },
                    {
                              "text": "ReportHourMeter [FD03h]",
                              "link": "/messages/report-hour-meter-fd03"
                    },
                    {
                              "text": "ReportIdentification [4B00h]",
                              "link": "/messages/report-identification-4b00"
                    },
                    {
                              "text": "ReportIlluminationConfiguration [4514h]",
                              "link": "/messages/report-illumination-configuration-4514"
                    },
                    {
                              "text": "ReportIlluminationState [4513h]",
                              "link": "/messages/report-illumination-state-4513"
                    },
                    {
                              "text": "ReportIntelligentVehicleCapabilities [DDD5h]",
                              "link": "/messages/report-intelligent-vehicle-capabilities-ddd5"
                    },
                    {
                              "text": "ReportIntelligentVehicleConfiguration [DDD6h]",
                              "link": "/messages/report-intelligent-vehicle-configuration-ddd6"
                    },
                    {
                              "text": "ReportIntelligentVehicleStatus [DDD7h]",
                              "link": "/messages/report-intelligent-vehicle-status-ddd7"
                    },
                    {
                              "text": "ReportJausAddress [5556h]",
                              "link": "/messages/report-jaus-address-5556"
                    },
                    {
                              "text": "ReportJointEffort [4601h]",
                              "link": "/messages/report-joint-effort-4601"
                    },
                    {
                              "text": "ReportJointForceTorque [4605h]",
                              "link": "/messages/report-joint-force-torque-4605"
                    },
                    {
                              "text": "ReportJointMotionProfile [4607h]",
                              "link": "/messages/report-joint-motion-profile-4607"
                    },
                    {
                              "text": "ReportJointPosition [4602h]",
                              "link": "/messages/report-joint-position-4602"
                    },
                    {
                              "text": "ReportJointVelocity [4603h]",
                              "link": "/messages/report-joint-velocity-4603"
                    },
                    {
                              "text": "ReportLoadingSpecifications [CB19h]",
                              "link": "/messages/report-loading-specifications-cb19"
                    },
                    {
                              "text": "ReportLocalPathSegment [4410h]",
                              "link": "/messages/report-local-path-segment-4410"
                    },
                    {
                              "text": "ReportLocalPose [4403h]",
                              "link": "/messages/report-local-pose-4403"
                    },
                    {
                              "text": "ReportLocalVector [4408h]",
                              "link": "/messages/report-local-vector-4408"
                    },
                    {
                              "text": "ReportLocalWaypoint [440Dh]",
                              "link": "/messages/report-local-waypoint-440d"
                    },
                    {
                              "text": "ReportLocalWaypointStatus [F223h]",
                              "link": "/messages/report-local-waypoint-status-f223"
                    },
                    {
                              "text": "ReportLoggerCapability [9213h]",
                              "link": "/messages/report-logger-capability-9213"
                    },
                    {
                              "text": "ReportLoggerConfiguration [9212h]",
                              "link": "/messages/report-logger-configuration-9212"
                    },
                    {
                              "text": "ReportLoggerStatus [9211h]",
                              "link": "/messages/report-logger-status-9211"
                    },
                    {
                              "text": "ReportMagneticSensorStatus [DABAh]",
                              "link": "/messages/report-magnetic-sensor-status-daba"
                    },
                    {
                              "text": "ReportManipulatorEndEffectorForceTorque [D999h]",
                              "link": "/messages/report-manipulator-end-effector-force-torque-d999"
                    },
                    {
                              "text": "ReportManipulatorHost [F293h]",
                              "link": "/messages/report-manipulator-host-f293"
                    },
                    {
                              "text": "ReportManipulatorSpecifications [4600h]",
                              "link": "/messages/report-manipulator-specifications-4600"
                    },
                    {
                              "text": "ReportMassProperties [FC40h]",
                              "link": "/messages/report-mass-properties-fc40"
                    },
                    {
                              "text": "ReportMilitaryIlluminationMode [B514h]",
                              "link": "/messages/report-military-illumination-mode-b514"
                    },
                    {
                              "text": "ReportMountSite [F701h]",
                              "link": "/messages/report-mount-site-f701"
                    },
                    {
                              "text": "ReportNoGoZones [D743h]",
                              "link": "/messages/report-no-go-zones-d743"
                    },
                    {
                              "text": "ReportOdometry [4515h]",
                              "link": "/messages/report-odometry-4515"
                    },
                    {
                              "text": "ReportOperationalParameters [F291h]",
                              "link": "/messages/report-operational-parameters-f291"
                    },
                    {
                              "text": "ReportPanTiltJointEffort [4621h]",
                              "link": "/messages/report-pan-tilt-joint-effort-4621"
                    },
                    {
                              "text": "ReportPanTiltJointPosition [4622h]",
                              "link": "/messages/report-pan-tilt-joint-position-4622"
                    },
                    {
                              "text": "ReportPanTiltJointVelocity [4623h]",
                              "link": "/messages/report-pan-tilt-joint-velocity-4623"
                    },
                    {
                              "text": "ReportPanTiltManipulatorHost [F29Bh]",
                              "link": "/messages/report-pan-tilt-manipulator-host-f29b"
                    },
                    {
                              "text": "ReportPanTiltMotionProfile [4627h]",
                              "link": "/messages/report-pan-tilt-motion-profile-4627"
                    },
                    {
                              "text": "ReportPanTiltOperationalParameters [F299h]",
                              "link": "/messages/report-pan-tilt-operational-parameters-f299"
                    },
                    {
                              "text": "ReportPanTiltSpecifications [4620h]",
                              "link": "/messages/report-pan-tilt-specifications-4620"
                    },
                    {
                              "text": "ReportParkingBrake [4512h]",
                              "link": "/messages/report-parking-brake-4512"
                    },
                    {
                              "text": "ReportPassthroughMessageProperties [D703h]",
                              "link": "/messages/report-passthrough-message-properties-d703"
                    },
                    {
                              "text": "ReportPath [DEF3h]",
                              "link": "/messages/report-path-def3"
                    },
                    {
                              "text": "ReportPathReporterCapabilities [DEF2h]",
                              "link": "/messages/report-path-reporter-capabilities-def2"
                    },
                    {
                              "text": "ReportPhysicalProperties [D732h]",
                              "link": "/messages/report-physical-properties-d732"
                    },
                    {
                              "text": "ReportPlatformMode [FF23h]",
                              "link": "/messages/report-platform-mode-ff23"
                    },
                    {
                              "text": "ReportPlatformSpecifications [4502h]",
                              "link": "/messages/report-platform-specifications-4502"
                    },
                    {
                              "text": "ReportPlatformState [FF28h]",
                              "link": "/messages/report-platform-state-ff28"
                    },
                    {
                              "text": "ReportPowerPlantCapabilities [4507h]",
                              "link": "/messages/report-power-plant-capabilities-4507"
                    },
                    {
                              "text": "ReportPowerPlantConfiguration [4506h]",
                              "link": "/messages/report-power-plant-configuration-4506"
                    },
                    {
                              "text": "ReportPowerPlantStatus [4508h]",
                              "link": "/messages/report-power-plant-status-4508"
                    },
                    {
                              "text": "ReportPresetPoseCapabilities [F0F1h]",
                              "link": "/messages/report-preset-pose-capabilities-f0f1"
                    },
                    {
                              "text": "ReportPresetPoseSpecifications [F0F5h]",
                              "link": "/messages/report-preset-pose-specifications-f0f5"
                    },
                    {
                              "text": "ReportRangeSensorCapabilities [4801h]",
                              "link": "/messages/report-range-sensor-capabilities-4801"
                    },
                    {
                              "text": "ReportRangeSensorCompressedData [4804h]",
                              "link": "/messages/report-range-sensor-compressed-data-4804"
                    },
                    {
                              "text": "ReportRangeSensorConfiguration [4802h]",
                              "link": "/messages/report-range-sensor-configuration-4802"
                    },
                    {
                              "text": "ReportRangeSensorData [4803h]",
                              "link": "/messages/report-range-sensor-data-4803"
                    },
                    {
                              "text": "ReportRangeSensorGeometricProperties [4805h]",
                              "link": "/messages/report-range-sensor-geometric-properties-4805"
                    },
                    {
                              "text": "ReportReminder [FD05h]",
                              "link": "/messages/report-reminder-fd05"
                    },
                    {
                              "text": "ReportReminderSummary [FD04h]",
                              "link": "/messages/report-reminder-summary-fd04"
                    },
                    {
                              "text": "ReportRenderUseless [FFDAh]",
                              "link": "/messages/report-render-useless-ffda"
                    },
                    {
                              "text": "ReportRetrotraverseStatus [FC50h]",
                              "link": "/messages/report-retrotraverse-status-fc50"
                    },
                    {
                              "text": "ReportSeismicSensorStatus [DAB8h]",
                              "link": "/messages/report-seismic-sensor-status-dab8"
                    },
                    {
                              "text": "ReportSelfCollisionAvoidanceCapabilities [C526h]",
                              "link": "/messages/report-self-collision-avoidance-capabilities-c526"
                    },
                    {
                              "text": "ReportSelfCollisionAvoidanceConfiguration [C527h]",
                              "link": "/messages/report-self-collision-avoidance-configuration-c527"
                    },
                    {
                              "text": "ReportSelfCollisionAvoidanceStatus [C528h]",
                              "link": "/messages/report-self-collision-avoidance-status-c528"
                    },
                    {
                              "text": "ReportServiceList [4B04h]",
                              "link": "/messages/report-service-list-4b04"
                    },
                    {
                              "text": "ReportServices [4B03h]",
                              "link": "/messages/report-services-4b03"
                    },
                    {
                              "text": "ReportShape [FC42h]",
                              "link": "/messages/report-shape-fc42"
                    },
                    {
                              "text": "ReportSkidSteerEffort [4501h]",
                              "link": "/messages/report-skid-steer-effort-4501"
                    },
                    {
                              "text": "ReportSoftwareVersion [F999h]",
                              "link": "/messages/report-software-version-f999"
                    },
                    {
                              "text": "ReportStabilityControlCapabilities [D7CBh]",
                              "link": "/messages/report-stability-control-capabilities-d7cb"
                    },
                    {
                              "text": "ReportStabilityControlStatus [D7CCh]",
                              "link": "/messages/report-stability-control-status-d7cc"
                    },
                    {
                              "text": "ReportStabilizerCapabilities [4505h]",
                              "link": "/messages/report-stabilizer-capabilities-4505"
                    },
                    {
                              "text": "ReportStabilizerEffort [4503h]",
                              "link": "/messages/report-stabilizer-effort-4503"
                    },
                    {
                              "text": "ReportStabilizerPosition [4504h]",
                              "link": "/messages/report-stabilizer-position-4504"
                    },
                    {
                              "text": "ReportStatus [4002h]",
                              "link": "/messages/report-status-4002"
                    },
                    {
                              "text": "ReportStillImageData [4814h]",
                              "link": "/messages/report-still-image-data-4814"
                    },
                    {
                              "text": "ReportStillImageSensorCapabilities [4812h]",
                              "link": "/messages/report-still-image-sensor-capabilities-4812"
                    },
                    {
                              "text": "ReportStillImageSensorConfiguration [4813h]",
                              "link": "/messages/report-still-image-sensor-configuration-4813"
                    },
                    {
                              "text": "ReportStopped [5557h]",
                              "link": "/messages/report-stopped-5557"
                    },
                    {
                              "text": "ReportSubsystemIDs [FB02h]",
                              "link": "/messages/report-subsystem-ids-fb02"
                    },
                    {
                              "text": "ReportSubsystemList [4B02h]",
                              "link": "/messages/report-subsystem-list-4b02"
                    },
                    {
                              "text": "ReportSupportedPlatformModes [FF24h]",
                              "link": "/messages/report-supported-platform-modes-ff24"
                    },
                    {
                              "text": "ReportTamperDetectionStatus [DE68h]",
                              "link": "/messages/report-tamper-detection-status-de68"
                    },
                    {
                              "text": "ReportTime [4011h]",
                              "link": "/messages/report-time-4011"
                    },
                    {
                              "text": "ReportTimeout [4003h]",
                              "link": "/messages/report-timeout-4003"
                    },
                    {
                              "text": "ReportTirePressureCapabilities [D7B3h]",
                              "link": "/messages/report-tire-pressure-capabilities-d7b3"
                    },
                    {
                              "text": "ReportTirePressureStatus [D7B4h]",
                              "link": "/messages/report-tire-pressure-status-d7b4"
                    },
                    {
                              "text": "ReportToolOffset [4604h]",
                              "link": "/messages/report-tool-offset-4604"
                    },
                    {
                              "text": "ReportTransferCaseState [4510h]",
                              "link": "/messages/report-transfer-case-state-4510"
                    },
                    {
                              "text": "ReportTransitionCompleted [F0F4h]",
                              "link": "/messages/report-transition-completed-f0f4"
                    },
                    {
                              "text": "ReportTransmissionCapabilities [4511h]",
                              "link": "/messages/report-transmission-capabilities-4511"
                    },
                    {
                              "text": "ReportTransmissionState [4509h]",
                              "link": "/messages/report-transmission-state-4509"
                    },
                    {
                              "text": "ReportTransportPolicy [6502h]",
                              "link": "/messages/report-transport-policy-6502"
                    },
                    {
                              "text": "ReportTravelSpeed [440Ah]",
                              "link": "/messages/report-travel-speed-440a"
                    },
                    {
                              "text": "ReportUGVSummary [FD10h]",
                              "link": "/messages/report-ugvsummary-fd10"
                    },
                    {
                              "text": "ReportVelocityState [4404h]",
                              "link": "/messages/report-velocity-state-4404"
                    },
                    {
                              "text": "ReportVisualSensorCapabilities [4806h]",
                              "link": "/messages/report-visual-sensor-capabilities-4806"
                    },
                    {
                              "text": "ReportVisualSensorConfiguration [4807h]",
                              "link": "/messages/report-visual-sensor-configuration-4807"
                    },
                    {
                              "text": "ReportVisualSensorGeometricProperties [4805h]",
                              "link": "/messages/report-visual-sensor-geometric-properties-4805"
                    },
                    {
                              "text": "ReportWiperCapabilities [D7C3h]",
                              "link": "/messages/report-wiper-capabilities-d7c3"
                    },
                    {
                              "text": "ReportWiperStatus [D7C4h]",
                              "link": "/messages/report-wiper-status-d7c4"
                    },
                    {
                              "text": "RequestControl [000Dh]",
                              "link": "/messages/request-control-000d"
                    },
                    {
                              "text": "RequestHandoff [FF31h]",
                              "link": "/messages/request-handoff-ff31"
                    },
                    {
                              "text": "RequestNodeID [DB03h]",
                              "link": "/messages/request-node-id-db03"
                    },
                    {
                              "text": "RequestReleaseControl [FF38h]",
                              "link": "/messages/request-release-control-ff38"
                    },
                    {
                              "text": "RequestReleaseControl [h]",
                              "link": "/messages/request-release-control-"
                    },
                    {
                              "text": "RequestSpeedOverride [FFD1h]",
                              "link": "/messages/request-speed-override-ffd1"
                    },
                    {
                              "text": "RequestSubsystemID [DB01h]",
                              "link": "/messages/request-subsystem-id-db01"
                    },
                    {
                              "text": "Reset [0005h]",
                              "link": "/messages/reset-0005"
                    },
                    {
                              "text": "ResetEvent [8D1Dh]",
                              "link": "/messages/reset-event-8d1d"
                    },
                    {
                              "text": "ResetOdometry [0515h]",
                              "link": "/messages/reset-odometry-0515"
                    },
                    {
                              "text": "ResetReminder [DD05h]",
                              "link": "/messages/reset-reminder-dd05"
                    },
                    {
                              "text": "Resume [0004h]",
                              "link": "/messages/resume-0004"
                    },
                    {
                              "text": "SetAckermannConfiguration [0500h]",
                              "link": "/messages/set-ackermann-configuration-0500"
                    },
                    {
                              "text": "SetActuatorForceTorque [0613h]",
                              "link": "/messages/set-actuator-force-torque-0613"
                    },
                    {
                              "text": "SetAnalogVideoSensorConfiguration [0806h]",
                              "link": "/messages/set-analog-video-sensor-configuration-0806"
                    },
                    {
                              "text": "SetAnnunciatorConfiguration [DF02h]",
                              "link": "/messages/set-annunciator-configuration-df02"
                    },
                    {
                              "text": "SetAnnunciatorState [0516h]",
                              "link": "/messages/set-annunciator-state-0516"
                    },
                    {
                              "text": "SetAuthority [0001h]",
                              "link": "/messages/set-authority-0001"
                    },
                    {
                              "text": "SetCommsLostPolicy [C401h]",
                              "link": "/messages/set-comms-lost-policy-c401"
                    },
                    {
                              "text": "SetCommsLostPolicyResponse [C411h]",
                              "link": "/messages/set-comms-lost-policy-response-c411"
                    },
                    {
                              "text": "SetCommunicatorConfiguration [0901h]",
                              "link": "/messages/set-communicator-configuration-0901"
                    },
                    {
                              "text": "SetCommunicatorConfigurationResponse [0902h]",
                              "link": "/messages/set-communicator-configuration-response-0902"
                    },
                    {
                              "text": "SetCurrentPose [F003h]",
                              "link": "/messages/set-current-pose-f003"
                    },
                    {
                              "text": "SetDebrisBlowerConfiguration [D7BAh]",
                              "link": "/messages/set-debris-blower-configuration-d7ba"
                    },
                    {
                              "text": "SetDigitalAudioConfiguration [DAAEh]",
                              "link": "/messages/set-digital-audio-configuration-daae"
                    },
                    {
                              "text": "SetDigitalAudioConfigurationResponse [DADEh]",
                              "link": "/messages/set-digital-audio-configuration-response-dade"
                    },
                    {
                              "text": "SetDigitalAudioSensorConfiguration [DE02h]",
                              "link": "/messages/set-digital-audio-sensor-configuration-de02"
                    },
                    {
                              "text": "SetDigitalAudioSensorStreamEndpoint [DE03h]",
                              "link": "/messages/set-digital-audio-sensor-stream-endpoint-de03"
                    },
                    {
                              "text": "SetDigitalAudioStreamSource [DA7Eh]",
                              "link": "/messages/set-digital-audio-stream-source-da7e"
                    },
                    {
                              "text": "SetDigitalVideoEndpoint [D802h]",
                              "link": "/messages/set-digital-video-endpoint-d802"
                    },
                    {
                              "text": "SetDigitalVideoIlluminator [D801h]",
                              "link": "/messages/set-digital-video-illuminator-d801"
                    },
                    {
                              "text": "SetDigitalVideoIlluminatorConfiguration [D804h]",
                              "link": "/messages/set-digital-video-illuminator-configuration-d804"
                    },
                    {
                              "text": "SetDigitalVideoSensorConfiguration [0804h]",
                              "link": "/messages/set-digital-video-sensor-configuration-0804"
                    },
                    {
                              "text": "SetDoorLock [D720h]",
                              "link": "/messages/set-door-lock-d720"
                    },
                    {
                              "text": "SetElement [041Ah]",
                              "link": "/messages/set-element-041a"
                    },
                    {
                              "text": "SetEmergency [0006h]",
                              "link": "/messages/set-emergency-0006"
                    },
                    {
                              "text": "SetEndEffectorEffort [0633h]",
                              "link": "/messages/set-end-effector-effort-0633"
                    },
                    {
                              "text": "SetEndEffectorPose [0610h]",
                              "link": "/messages/set-end-effector-pose-0610"
                    },
                    {
                              "text": "SetEndEffectorVelocityState [0612h]",
                              "link": "/messages/set-end-effector-velocity-state-0612"
                    },
                    {
                              "text": "SetEnhancedGlobalWaypointInformation [F228h]",
                              "link": "/messages/set-enhanced-global-waypoint-information-f228"
                    },
                    {
                              "text": "SetEnhancedLocalWaypointInformation [F220h]",
                              "link": "/messages/set-enhanced-local-waypoint-information-f220"
                    },
                    {
                              "text": "SetFollowerConfiguration [FFF2h]",
                              "link": "/messages/set-follower-configuration-fff2"
                    },
                    {
                              "text": "SetFollowerState [FFF1h]",
                              "link": "/messages/set-follower-state-fff1"
                    },
                    {
                              "text": "SetGeneralSensorConfiguration [DAB2h]",
                              "link": "/messages/set-general-sensor-configuration-dab2"
                    },
                    {
                              "text": "SetGeomagneticProperty [0412h]",
                              "link": "/messages/set-geomagnetic-property-0412"
                    },
                    {
                              "text": "SetGlobalPathSegment [040Fh]",
                              "link": "/messages/set-global-path-segment-040f"
                    },
                    {
                              "text": "SetGlobalPose [0402h]",
                              "link": "/messages/set-global-pose-0402"
                    },
                    {
                              "text": "SetGlobalVector [0407h]",
                              "link": "/messages/set-global-vector-0407"
                    },
                    {
                              "text": "SetGlobalWaypoint [040Ch]",
                              "link": "/messages/set-global-waypoint-040c"
                    },
                    {
                              "text": "SetGuardedTeleopPolicy [C501h]",
                              "link": "/messages/set-guarded-teleop-policy-c501"
                    },
                    {
                              "text": "SetGuardedTeleopPolicyResponse [C511h]",
                              "link": "/messages/set-guarded-teleop-policy-response-c511"
                    },
                    {
                              "text": "SetH264VideoEncodingConfiguration [EB90h]",
                              "link": "/messages/set-h264video-encoding-configuration-eb90"
                    },
                    {
                              "text": "SetIlluminationState [0513h]",
                              "link": "/messages/set-illumination-state-0513"
                    },
                    {
                              "text": "SetIntelligentVehicleConfiguration [DDD4h]",
                              "link": "/messages/set-intelligent-vehicle-configuration-ddd4"
                    },
                    {
                              "text": "SetJointEffort [0601h]",
                              "link": "/messages/set-joint-effort-0601"
                    },
                    {
                              "text": "SetJointMotionProfile [0607h]",
                              "link": "/messages/set-joint-motion-profile-0607"
                    },
                    {
                              "text": "SetJointPosition [0602h]",
                              "link": "/messages/set-joint-position-0602"
                    },
                    {
                              "text": "SetJointVelocity [0603h]",
                              "link": "/messages/set-joint-velocity-0603"
                    },
                    {
                              "text": "SetLoadingSpecifications [CB18h]",
                              "link": "/messages/set-loading-specifications-cb18"
                    },
                    {
                              "text": "SetLocalPathSegment [0410h]",
                              "link": "/messages/set-local-path-segment-0410"
                    },
                    {
                              "text": "SetLocalPose [0403h]",
                              "link": "/messages/set-local-pose-0403"
                    },
                    {
                              "text": "SetLocalVector [0408h]",
                              "link": "/messages/set-local-vector-0408"
                    },
                    {
                              "text": "SetLocalWaypoint [040Dh]",
                              "link": "/messages/set-local-waypoint-040d"
                    },
                    {
                              "text": "SetLoggerConfiguration [9110h]",
                              "link": "/messages/set-logger-configuration-9110"
                    },
                    {
                              "text": "SetLoggerConfigurationResponse [9210h]",
                              "link": "/messages/set-logger-configuration-response-9210"
                    },
                    {
                              "text": "SetLoggerState [9109h]",
                              "link": "/messages/set-logger-state-9109"
                    },
                    {
                              "text": "SetMilitaryIlluminationMode [B514h]",
                              "link": "/messages/set-military-illumination-mode-b514"
                    },
                    {
                              "text": "SetPanTiltJointEffort [0621h]",
                              "link": "/messages/set-pan-tilt-joint-effort-0621"
                    },
                    {
                              "text": "SetPanTiltJointPosition [0622h]",
                              "link": "/messages/set-pan-tilt-joint-position-0622"
                    },
                    {
                              "text": "SetPanTiltJointVelocity [0623h]",
                              "link": "/messages/set-pan-tilt-joint-velocity-0623"
                    },
                    {
                              "text": "SetPanTiltMotionProfile [0627h]",
                              "link": "/messages/set-pan-tilt-motion-profile-0627"
                    },
                    {
                              "text": "SetParkingBrake [0512h]",
                              "link": "/messages/set-parking-brake-0512"
                    },
                    {
                              "text": "SetPassthroughMessage [D701h]",
                              "link": "/messages/set-passthrough-message-d701"
                    },
                    {
                              "text": "SetPlatformMode [FF20h]",
                              "link": "/messages/set-platform-mode-ff20"
                    },
                    {
                              "text": "SetPlatformState [FF25h]",
                              "link": "/messages/set-platform-state-ff25"
                    },
                    {
                              "text": "SetPowerPlantConfiguration [0506h]",
                              "link": "/messages/set-power-plant-configuration-0506"
                    },
                    {
                              "text": "SetRangeSensorConfiguration [0802h]",
                              "link": "/messages/set-range-sensor-configuration-0802"
                    },
                    {
                              "text": "SetSelfCollisionAvoidancePolicy [C521h]",
                              "link": "/messages/set-self-collision-avoidance-policy-c521"
                    },
                    {
                              "text": "SetSelfCollisionAvoidancePolicyResponse [C525h]",
                              "link": "/messages/set-self-collision-avoidance-policy-response-c525"
                    },
                    {
                              "text": "SetSkidSteerEffort [0501h]",
                              "link": "/messages/set-skid-steer-effort-0501"
                    },
                    {
                              "text": "SetStabilityControlStatus [D7CAh]",
                              "link": "/messages/set-stability-control-status-d7ca"
                    },
                    {
                              "text": "SetStabilizerEffort [0503h]",
                              "link": "/messages/set-stabilizer-effort-0503"
                    },
                    {
                              "text": "SetStabilizerPosition [0504h]",
                              "link": "/messages/set-stabilizer-position-0504"
                    },
                    {
                              "text": "SetStillImageSensorConfiguration [0807h]",
                              "link": "/messages/set-still-image-sensor-configuration-0807"
                    },
                    {
                              "text": "SetTamperDetectionState [DE66h]",
                              "link": "/messages/set-tamper-detection-state-de66"
                    },
                    {
                              "text": "SetTime [0011h]",
                              "link": "/messages/set-time-0011"
                    },
                    {
                              "text": "SetTirePressureStatus [D7B2h]",
                              "link": "/messages/set-tire-pressure-status-d7b2"
                    },
                    {
                              "text": "SetToolOffset [0604h]",
                              "link": "/messages/set-tool-offset-0604"
                    },
                    {
                              "text": "SetTransferCaseState [0510h]",
                              "link": "/messages/set-transfer-case-state-0510"
                    },
                    {
                              "text": "SetTransmissionState [0509h]",
                              "link": "/messages/set-transmission-state-0509"
                    },
                    {
                              "text": "SetTravelSpeed [040Ah]",
                              "link": "/messages/set-travel-speed-040a"
                    },
                    {
                              "text": "SetVisualSensorConfiguration [0803h]",
                              "link": "/messages/set-visual-sensor-configuration-0803"
                    },
                    {
                              "text": "SetWiperStatus [D7C2h]",
                              "link": "/messages/set-wiper-status-d7c2"
                    },
                    {
                              "text": "Shutdown [0002h]",
                              "link": "/messages/shutdown-0002"
                    },
                    {
                              "text": "ShutdownEvent [8D1Eh]",
                              "link": "/messages/shutdown-event-8d1e"
                    },
                    {
                              "text": "Standby [0003h]",
                              "link": "/messages/standby-0003"
                    },
                    {
                              "text": "StartRetrotraverse [DC50h]",
                              "link": "/messages/start-retrotraverse-dc50"
                    },
                    {
                              "text": "TransitionCompleted [8D1Fh]",
                              "link": "/messages/transition-completed-8d1f"
                    },
                    {
                              "text": "TransitionFailed [8D20h]",
                              "link": "/messages/transition-failed-8d20"
                    },
                    {
                              "text": "UpdateConvoyDetails [F101h]",
                              "link": "/messages/update-convoy-details-f101"
                    },
                    {
                              "text": "UpdateEvent [01F1h]",
                              "link": "/messages/update-event-01f1"
                    },
                    {
                              "text": "UpdateHealthReporter [DD01h]",
                              "link": "/messages/update-health-reporter-dd01"
                    },
                    {
                              "text": "UpdateUGVSummary [DD10h]",
                              "link": "/messages/update-ugvsummary-dd10"
                    },
                    {
                              "text": "ValidationTimeout [8D12h]",
                              "link": "/messages/validation-timeout-8d12"
                    }
          ]
        }
      ]
    },
    
    // Enable local search
    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },
    
    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/openjaus' }
    ],
    
    // Footer
    footer: {
      message: 'OpenJAUS Service Set Documentation',
      copyright: 'Copyright © OpenJAUS. JAUS content © SAE International.'
    },
    
    // Enable outline (table of contents) on the right
    outline: {
      level: [2, 3]
    }
  },
  
  // Markdown configuration
  markdown: {
    lineNumbers: false,
    anchor: {
      permalink: true
    }
  },
  
  // Build options
  vite: {
    build: {
      chunkSizeWarningLimit: 1000
    }
  }
})
