# School-Edusat

The project aims to create an open-source High School Level Satellite Space Education Project for STEAM education - based on HEPTA-Sat Training.

The project will be divided into 8 x 2-hour workshop trainings running on a low-cost processor.

2 possible configurations and scenarios will be considered:

1) Student has a laptop - will use Arduino MCU.
2) Student has no laptop - will use and run entire project on Raspberry Pi.

For compatibility and uniformity of curriculum, and to concentrate on building in C language, run Arduino sketches on Pi https://www.deviceplus.com/raspberry-pi/how-to-run-arduino-sketches-on-raspberry-pi/

## _A. Mission Design_
#### 1. Lesson Objectives
- Determine the mission theme from user needs.
- Determine mission requirements through mission goal statements.
- Define mission success criteria and verification methods.
- Conduct schedule, cost, and risk planning.
- Select On-Board Computer (OBC) processor based on the mission and criteria such as cost, clock speed, etc. 
- Establish how to interface the OBC with a computer for feeding commands and testing.

#### 2. Materials Required
- OBC Management Software (e.g. mbed, Raspbian NOOBS, etc.)

## _B. Power System_
#### 1. Lesson Objectives
- Understand the components and functions of an Electric Power System (EPS) e.g. power generation, charge control, etc.
- Understand EPS architecture to suit above functions (how connections are made, pin assignment, etc.)
- Determine power consumption levels of on-board equipment, among other factors, to enable selection of suitable EPS components.
- Establish verification methods and measures.

#### 2. Materials Required
- Solar Array.
- Battery.
- Charge controller.
- Step-up (or Step-Down) converter.
- Flight pin(s)/Release Detection Switch(es).
- EPS board.

## _C. Command Subsystem_
#### 1. Lesson Objectives
- Describe the components and functions of the Command and Data Handling (C&DH) subsystem.
- Establish criteria for selecting components based on mission requirements.
- Understand command and telemetry data structure. 

#### 2. Materials Required
- C&DH Board

## _D. Sensors Subsystem_
#### 1. Lesson Objectives
- Describe subsystem requirements according to mission theme.
- Describe subsystem components and functions (architecture).
- Define housekeeping (HK) data.
- Establish criteria for selecting sensors and other components.
- Introduce and explain the concept of Attitude Determination and Control.
- Establish verification measures such as receiving HK data from sensors.
- Establish selection criteria for the camera based on factors such as size, resolution, etc.
- Determine verification measures and methods such as taking a photo. 
- Synchronizing the camera to the OBC.

#### 2. Materials Required
- 9-axis sensor.
- Actuators such as reaction wheels, cold gas jets, magnetic torquers, etc. depending on mission requirements among other criteria such as availability, cost, etc. 
- GPS Receiver.
- Camera module.
- Sensors and communication board..

## _E. Ground System and Communication_
#### 1. Lesson Objectives
- Understand the components and functions of the communication and ground station subsystems.
- Define the interdependent relationship between the ground station subsystem and the on-board communication subsystem.
- Understand the function of communication and ground station subsystems in changing a satellite's status e.g. ON/OFF, operational mode, etc. 
- Establish wireless communication between the subsystems by understanding their architecture. 
- Establish criteria for component selection.
- Describe how to set up the XBee modules using XCTU software.
- Determine verification measures and methods. 

#### 2. Materials Required
- Receiving and transmitting antennae.
- XBee transmitter and receiver modules.
- XBee USB dongle.
- Downlink and uplink software. 

## _F. Mechanical Design_
#### 1. Lesson Objectives
- Download and install OpenSCAD software from the official site. (Both Windows and Raspberry Pi).
- Introduce OpenSCAD by learning how it works (basic functions and commands).  

      A. Creating new files.
      B. Defining basic shapes (cubes, cylinders, etc.) and their position on the XYZ-plane. 
- Test understanding by using OpenSCAD to design the solar cell jig or battery jig.  

      A. Introduce commands such as union, intersection, and difference. 
      B. Use functions such as translate  and rotate to orient shapes on the plane.
- Describe how to export the 3-D designs (.stl files) to the 3-D printer using Creality Slicer (or other slicer software).
- Display the provided CubeSat designs on Creality Slicer for printing.

#### 2. Materials Required
- 3-D Printer.
- OpenSCAD software.
- Creality Slicer software.

## _G. Final Assembly and Test_
#### 1. Lesson Objectives
- Connect all EPS components to the EPS board and install spacers.
- Connect all C&DH components to the C&DH board and install spacers.
- Connect all required sensors and communication devices to the sensor and communication board and install spacers.

#### 2. Materials Required
- All parts and materials from previous sections.
- CubeSat analysis software (e.g. Flip360 or Fusion360).

## _H. Party Balloon Launch_
