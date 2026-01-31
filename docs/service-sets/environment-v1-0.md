---
title: ENVIRONMENT_V1_0
---

# ENVIRONMENT_V1_0 Service Set

## Services

| Service | URN |
| --- | --- |
| [AnalogVideo](/services/analog-video) | urn:jaus:jss:environmentSensing:AnalogVideo v1.0 |
| [DigitalVideo](/services/digital-video) | urn:jaus:jss:environmentSensing:DigitalVideo v1.0 |
| [RangeSensor](/services/range-sensor) | urn:jaus:jss:environmentSensing:RangeSensor v1.0 |
| [StillImage](/services/still-image) | urn:jaus:jss:environmentSensing:StillImage v1.0 |
| [VisualSensor](/services/visual-sensor) | urn:jaus:jss:environmentSensing:VisualSensor v1.0 |

### Service Descriptions

#### [AnalogVideo](/services/analog-video)

This service provides access to the capabilities and configuration of the analog visual sensor, allowing the controlling component to set the visual sensor to a particular operational profile. The actual transmission of the video stream is outside the scope of this service.

#### [DigitalVideo](/services/digital-video)

This service provides access to the capabilities and configuration of the digital visual sensor, allowing the controlling component to set the visual sensor to a particular operational profile. The actual transmission of the video stream is outside the scope of this service. The ability to start, stop and pause the video stream is provided in the message protocol. There may also be mechanisms in the chosen video transmission protocol to control the video stream. In such situations, the messages defined herein are redundant and either mechanism may be used by sensor's client.

#### [RangeSensor](/services/range-sensor)

The function of the Range Sensor Service is to provide information from proximity sensors. This service will output the location of various Data Points with a certain measure of accuracy. A given Range Sensor service may be comprised of one to many actual physical sensors or technologies. Each sub-sensor can be assigned (by the developer) a unique Sensor ID. When appropriate, the reserved Sensor ID of 0 may be used to refer to all sensors attached to a given Range Sensor Service. The Data Points are measured in the sensor�s native coordinate system and are expressed in terms of range, bearing and inclination. Range is the distance, in meters, along the line from the origin of the sensor�s native coordinate system (sensor�s origin) to the specified point. Bearing is the angle, in radians, that the line from the sensor�s origin to the specified point makes about the sensor�s z-axis in the right handed sense (Figure 2). Inclination is the the angle, in radians, that the line from the sensor origin to the specified point makes about the sensor�s y-axis in the right handed sense (Figure 2).  Each data point has an optional ID parameter. This parameter is provided for those sensor technologies which may assign and/or track entities based on unique ID values; however, such tracking capabilities are not required for a compliant Range Sensor Service. The behavior of the data point ID is not specified, i.e. IDs may repeat in a given report and IDs may persist from one report to another. No semantic value should be placed on the ID values in a generalized way. Data Point ID behavior should be derived from the underlying sensor or algorithm technology and is mearly provided to be used in those situations where mutiple parties can agree upon the behavior and semantics of the ID values. Data from the range sensor can be reported in both a compressed and uncompressed format, different query and report messages are provided for each exchange and the kind of data compression supported by the service is reported in the Report Range Sensor Capabilities message. Requests for unsupported data compression algorithms will result in the generation of a Report Sensor Error message indicating an unsupported compression request. The range sensor can express the bearing, inclination and range terms with respect to either its native coordinate system or the vehicle coordinate system if coordinate transforms are supported. The Query Sensor Geometric Properties message can be used to determine the geometric relationship between the sensor and the vehicle coordinate system. Three possible coordinate responses are possible: (a) the service does not know the sensor�s position, (b) the sensor coordinate system is fixed with respect to the vehicle and (c) the sensor is attached to some manipulator. These cases are supported by the Report Sensor Geometric Properties message and are described therein.

#### [StillImage](/services/still-image)

This service provides access to the capabilities and configuration of a camera, allowing the controlling component to set the camera to a particular operational profile and to obtain images from the camera.  While this service reports each image individually, the Events service can be used to automatically report images at a specified rate thereby simulating video (such as is typically done to create an MJPEG video stream).

#### [VisualSensor](/services/visual-sensor)

This service provides access to the basic capabilities and configuration of a visual sensor, allowing the controlling component to set the visual sensor to a particular operational profile. The Query Sensor Geometric Properties message can be used to determine the geometric relationship between the sensor and the vehicle coordinate system. Three possible coordinate responses are possible; (a) the service does not know the sensor�s position, (b) the sensor coordinate system is fixed with respect to the vehicle and (c) the sensor is attached to some manipulator. These cases are supported by the Report Sensor Geometric Properties message and are described therein.

## Messages

| Message | ID |
| --- | --- |
| [ConfirmSensorConfiguration](/messages/confirm-sensor-configuration-0801) | 0801h |
| [ControlDigitalVideoSensorStream](/messages/control-digital-video-sensor-stream-0805) | 0805h |
| [QueryAnalogVideoSensorCapabilities](/messages/query-analog-video-sensor-capabilities-2810) | 2810h |
| [QueryAnalogVideoSensorConfiguration](/messages/query-analog-video-sensor-configuration-2811) | 2811h |
| [QueryDigitalVideoSensorCapabilities](/messages/query-digital-video-sensor-capabilities-2808) | 2808h |
| [QueryDigitalVideoSensorConfiguration](/messages/query-digital-video-sensor-configuration-2809) | 2809h |
| [QueryRangeSensorCapabilities](/messages/query-range-sensor-capabilities-2801) | 2801h |
| [QueryRangeSensorCompressedData](/messages/query-range-sensor-compressed-data-2804) | 2804h |
| [QueryRangeSensorConfiguration](/messages/query-range-sensor-configuration-2802) | 2802h |
| [QueryRangeSensorData](/messages/query-range-sensor-data-2803) | 2803h |
| [QuerySensorGeometricProperties](/messages/query-sensor-geometric-properties-2805) | 2805h |
| [QueryStillImageData](/messages/query-still-image-data-2814) | 2814h |
| [QueryStillImageSensorCapabilities](/messages/query-still-image-sensor-capabilities-2812) | 2812h |
| [QueryStillImageSensorConfiguration](/messages/query-still-image-sensor-configuration-2813) | 2813h |
| [QueryVisualSensorCapabilities](/messages/query-visual-sensor-capabilities-2806) | 2806h |
| [QueryVisualSensorConfiguration](/messages/query-visual-sensor-configuration-2807) | 2807h |
| [ReportAnalogVideoSensorCapabilities](/messages/report-analog-video-sensor-capabilities-4810) | 4810h |
| [ReportAnalogVideoSensorConfiguration](/messages/report-analog-video-sensor-configuration-4811) | 4811h |
| [ReportDigitalVideoSensorCapabilities](/messages/report-digital-video-sensor-capabilities-4808) | 4808h |
| [ReportDigitalVideoSensorConfiguration](/messages/report-digital-video-sensor-configuration-4809) | 4809h |
| [ReportRangeSensorCapabilities](/messages/report-range-sensor-capabilities-4801) | 4801h |
| [ReportRangeSensorCompressedData](/messages/report-range-sensor-compressed-data-4804) | 4804h |
| [ReportRangeSensorConfiguration](/messages/report-range-sensor-configuration-4802) | 4802h |
| [ReportRangeSensorData](/messages/report-range-sensor-data-4803) | 4803h |
| [ReportRangeSensorGeometricProperties](/messages/report-range-sensor-geometric-properties-4805) | 4805h |
| [ReportStillImageData](/messages/report-still-image-data-4814) | 4814h |
| [ReportStillImageSensorCapabilities](/messages/report-still-image-sensor-capabilities-4812) | 4812h |
| [ReportStillImageSensorConfiguration](/messages/report-still-image-sensor-configuration-4813) | 4813h |
| [ReportVisualSensorCapabilities](/messages/report-visual-sensor-capabilities-4806) | 4806h |
| [ReportVisualSensorConfiguration](/messages/report-visual-sensor-configuration-4807) | 4807h |
| [SetAnalogVideoSensorConfiguration](/messages/set-analog-video-sensor-configuration-0806) | 0806h |
| [SetDigitalVideoSensorConfiguration](/messages/set-digital-video-sensor-configuration-0804) | 0804h |
| [SetRangeSensorConfiguration](/messages/set-range-sensor-configuration-0802) | 0802h |
| [SetStillImageSensorConfiguration](/messages/set-still-image-sensor-configuration-0807) | 0807h |
| [SetVisualSensorConfiguration](/messages/set-visual-sensor-configuration-0803) | 0803h |

