---
title: UGV_V1_0
---

# UGV_V1_0 Service Set

## Services

| Service | URN |
| --- | --- |
| [AckermannDriver](/services/ackermann-driver) | urn:jaus:jss:ugv:AckermannDriver v1.0 |
| [Annunciator](/services/annunciator) | urn:jaus:jss:ugv:AnnunciatorService v1.0 |
| [DriveTrainDriver](/services/drive-train-driver) | urn:jaus:jss:ugv:DriveTrainDriver v1.0 |
| [Illumination](/services/illumination) | urn:jaus:jss:ugv:IlluminationService v1.0 |
| [Odometry](/services/odometry) | urn:jaus:jss:ugv:OdometryService v1.0 |
| [ParkingBrakeDriver](/services/parking-brake-driver) | urn:jaus:jss:ugv:ParkingBrakeDriver v1.0 |
| [PlatformSpecifications](/services/platform-specifications) | urn:jaus:jss:ugv:PlatformSpecifications v1.0 |
| [PowerPlantManager](/services/power-plant-manager) | urn:jaus:jss:ugv:PowerPlantManager v1.0 |
| [SkidSteerDriver](/services/skid-steer-driver) | urn:jaus:jss:ugv:SkidSteerDriver v1.0 |
| [StabilizerDriver](/services/stabilizer-driver) | urn:jaus:jss:ugv:StabilizerDriver v1.0 |

### Service Descriptions

#### [AckermannDriver](/services/ackermann-driver)

The AckermannDriver provides the means to control Ackermann steered vehicles

#### [Annunciator](/services/annunciator)

The Annunciator Service provides the means to control audible devices such as horns and back-up indicators.

#### [DriveTrainDriver](/services/drive-train-driver)

The DrivetrainDriver provides the means to control transmissions

#### [Illumination](/services/illumination)

The Illumination Service provides the means to control UGV lights.

#### [Odometry](/services/odometry)

The Odometry Service provides platform odometry (distance travelled) information

#### [ParkingBrakeDriver](/services/parking-brake-driver)

The ParkingBrakeDriver provides the means to control Parking Brakes

#### [PlatformSpecifications](/services/platform-specifications)

The Platform Specification Service provides information on the mobility and geometric characteristics of the platform.

#### [PowerPlantManager](/services/power-plant-manager)

The powerplant driver provides the means to control vehicle power plants

#### [SkidSteerDriver](/services/skid-steer-driver)

The SkidSteer Driver provides the means to control skid steer vehicles

#### [StabilizerDriver](/services/stabilizer-driver)

The StabilizerDriver provides the means to control platform stabilizers, such as flippers

## Messages

| Message | ID |
| --- | --- |
| [QueryAckermannConfiguration](/messages/query-ackermann-configuration-2500) | 2500h |
| [QueryAnnunciatorConfiguration](/messages/query-annunciator-configuration-2517) | 2517h |
| [QueryAnnunciatorState](/messages/query-annunciator-state-2516) | 2516h |
| [QueryIlluminationConfiguration](/messages/query-illumination-configuration-2514) | 2514h |
| [QueryIlluminationState](/messages/query-illumination-state-2513) | 2513h |
| [QueryOdometry](/messages/query-odometry-2515) | 2515h |
| [QueryParkingBrake](/messages/query-parking-brake-2512) | 2512h |
| [QueryPlatformSpecifications](/messages/query-platform-specifications-2502) | 2502h |
| [QueryPowerPlantCapabilities](/messages/query-power-plant-capabilities-2507) | 2507h |
| [QueryPowerPlantConfiguration](/messages/query-power-plant-configuration-2506) | 2506h |
| [QueryPowerPlantStatus](/messages/query-power-plant-status-2508) | 2508h |
| [QuerySkidSteerEffort](/messages/query-skid-steer-effort-2501) | 2501h |
| [QueryStabilizerCapabilities](/messages/query-stabilizer-capabilities-2505) | 2505h |
| [QueryStabilizerEffort](/messages/query-stabilizer-effort-2503) | 2503h |
| [QueryStabilizerPosition](/messages/query-stabilizer-position-2504) | 2504h |
| [QueryTransferCaseState](/messages/query-transfer-case-state-2510) | 2510h |
| [QueryTransmissionCapabilities](/messages/query-transmission-capabilities-2511) | 2511h |
| [QueryTransmissionState](/messages/query-transmission-state-2509) | 2509h |
| [ReportAckermannConfiguration](/messages/report-ackermann-configuration-4500) | 4500h |
| [ReportAnnunciatorConfiguration](/messages/report-annunciator-configuration-4517) | 4517h |
| [ReportAnnunciatorState](/messages/report-annunciator-state-4516) | 4516h |
| [ReportIlluminationConfiguration](/messages/report-illumination-configuration-4514) | 4514h |
| [ReportIlluminationState](/messages/report-illumination-state-4513) | 4513h |
| [ReportOdometry](/messages/report-odometry-4515) | 4515h |
| [ReportParkingBrake](/messages/report-parking-brake-4512) | 4512h |
| [ReportPlatformSpecifications](/messages/report-platform-specifications-4502) | 4502h |
| [ReportPowerPlantCapabilities](/messages/report-power-plant-capabilities-4507) | 4507h |
| [ReportPowerPlantConfiguration](/messages/report-power-plant-configuration-4506) | 4506h |
| [ReportPowerPlantStatus](/messages/report-power-plant-status-4508) | 4508h |
| [ReportSkidSteerEffort](/messages/report-skid-steer-effort-4501) | 4501h |
| [ReportStabilizerCapabilities](/messages/report-stabilizer-capabilities-4505) | 4505h |
| [ReportStabilizerEffort](/messages/report-stabilizer-effort-4503) | 4503h |
| [ReportStabilizerPosition](/messages/report-stabilizer-position-4504) | 4504h |
| [ReportTransferCaseState](/messages/report-transfer-case-state-4510) | 4510h |
| [ReportTransmissionCapabilities](/messages/report-transmission-capabilities-4511) | 4511h |
| [ReportTransmissionState](/messages/report-transmission-state-4509) | 4509h |
| [ResetOdometry](/messages/reset-odometry-0515) | 0515h |
| [SetAckermannConfiguration](/messages/set-ackermann-configuration-0500) | 0500h |
| [SetAnnunciatorState](/messages/set-annunciator-state-0516) | 0516h |
| [SetIlluminationState](/messages/set-illumination-state-0513) | 0513h |
| [SetParkingBrake](/messages/set-parking-brake-0512) | 0512h |
| [SetPowerPlantConfiguration](/messages/set-power-plant-configuration-0506) | 0506h |
| [SetSkidSteerEffort](/messages/set-skid-steer-effort-0501) | 0501h |
| [SetStabilizerEffort](/messages/set-stabilizer-effort-0503) | 0503h |
| [SetStabilizerPosition](/messages/set-stabilizer-position-0504) | 0504h |
| [SetTransferCaseState](/messages/set-transfer-case-state-0510) | 0510h |
| [SetTransmissionState](/messages/set-transmission-state-0509) | 0509h |

