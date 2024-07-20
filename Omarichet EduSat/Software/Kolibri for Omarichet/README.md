```

██╗░░██╗░█████╗░██╗░░░░░██╗██████╗░██████╗░██╗  ███████╗░█████╗░██████╗░
██║░██╔╝██╔══██╗██║░░░░░██║██╔══██╗██╔══██╗██║  ██╔════╝██╔══██╗██╔══██╗
█████═╝░██║░░██║██║░░░░░██║██████╦╝██████╔╝██║  █████╗░░██║░░██║██████╔╝
██╔═██╗░██║░░██║██║░░░░░██║██╔══██╗██╔══██╗██║  ██╔══╝░░██║░░██║██╔══██╗
██║░╚██╗╚█████╔╝███████╗██║██████╦╝██║░░██║██║  ██║░░░░░╚█████╔╝██║░░██║
╚═╝░░╚═╝░╚════╝░╚══════╝╚═╝╚═════╝░╚═╝░░╚═╝╚═╝  ╚═╝░░░░░░╚════╝░╚═╝░░╚═╝

░█████╗░███╗░░░███╗░█████╗░██████╗░██╗░█████╗░██╗░░██╗███████╗████████╗
██╔══██╗████╗░████║██╔══██╗██╔══██╗██║██╔══██╗██║░░██║██╔════╝╚══██╔══╝
██║░░██║██╔████╔██║███████║██████╔╝██║██║░░╚═╝███████║█████╗░░░░░██║░░░
██║░░██║██║╚██╔╝██║██╔══██║██╔══██╗██║██║░░██╗██╔══██║██╔══╝░░░░░██║░░░
╚█████╔╝██║░╚═╝░██║██║░░██║██║░░██║██║╚█████╔╝██║░░██║███████╗░░░██║░░░
░╚════╝░╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░╚════╝░╚═╝░░╚═╝╚══════╝░░░╚═╝░░░

```

<div align="center">

![Python 3.5](https://img.shields.io/badge/Python-3.6%2B-blue.svg)
![Virtual box](https://img.shields.io/badge/Platform-VirtualBox%2FRaspberry%20Pi-lightgrey)
![Raspian Pixel Debian x86 Jessie](https://img.shields.io/badge/Supported%20OS%20-Raspian%20OS%20Pixel%20Debian%202016%20x86-red)

</div>

---

<p align="center"> Omarichet School Edusat is an educational nanosatellite kit that runs on Kolibri on the Raspberry Pi platform to help students and learners familiarize themselves with basic skills in satellite engineering. 
<br>
Kolibri is an open-source educational platform specially designed to provide offline access to a wide range of quality, openly licensed educational resources.
    <br> 
</p>

## 📝 Table of Contents
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](#todo)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)


## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- A device with Virtual Box installed or:
- Raspberry Pi. 

#### When using Virtual Box
- Download and Install [Virtual Box](https://www.virtualbox.org/wiki/Downloads) on the device
- Download [Raspian Pixel Debian x86 Jessie Operating System 2016 iso](http://downloads.raspberrypi.org/pixel_x86/images/pixel_x86-2016-12-12/) for Raspberry Pi
- Create a Virtual machine on Virtual Box
1. Virtual Machine Name and type
First select a name which will be easy for you to remember. As you’ll install Raspberry Pi OS Debian, you may simply call it “Raspbian Desktop”?
Also, you need to choose what kind of machine you want it to be. In this case, Linux, and more specifically Debian (64-bit).
2. RAM allocation
Now you’ll have to choose how much RAM you want to allocate for your virtual machine. The recommended memory size here is maxium 1-4GB.
3. Virtual Hard Disk
After the RAM, VirtualBox will ask you if you want to create a virtual hard disk for your virtual machine. Follow the default instruction, which is “Create a virtual hard disk now”. Click on “Create” to go to the next screen.
4. Create Virtual Hard Disk 
If VirtualBox asks you to choose which kind of virtual hard disk you want, you can go with “VDI (VirtualBox Disk Image)”, which is the default option.
Then, it will ask you to choose between a dynamically allocated disk, or one with a fixed size. Choose “Fixed size”. 
VirtualBox will ask you how much space you want to allocate for your VM. It may set 8GB by default, which is quite low. It is recommended you put at least 15 to 64GB
5. Allocate CPUs for your VM
Select your “Raspberry Pi OS Desktop” (or whichever name you chose) and click on “Settings”. You can also right-click on the VM > “Settings”.
In the “System” tab, “Processor” panel, you can see how many CPUs are allocated for your VM. By default only 1 will be used. If you have 4 or 8 cores in your machine, It is recommended you use 2 to 4 cores. This will speed up things when running your VM.
6. Associate the Raspberry Pi OS Desktop ISO file to your Virtual Machine
Go into the “Storage” tab. Select the “Empty” disk icon below “Controller: IDE”. On the right, click on the disk icon and select “Choose a disk file”. Fetch your downloaded Raspberry Pi OS Desktop ISO.
Browse to the folder where you saved the image file of Raspberry Pi Desktop, select the file, and click Start and Enter to select Install.
- After running the Raspian operating system succesfully Open the Terminal and enter the following commands to point to Kolibri Launchpad PPA (Ensure you enter each command line by line and click 'Enter' after each command):
```
sudo apt-get install dirmngr
sudo su -c 'echo "deb http://ppa.launchpad.net/learningequality/kolibri/ubuntu bionic main" > /etc/apt/sources.list.d/learningequality-ubuntu-kolibri.list'
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys DC5BAA93F9E4AE4F0411F97C74F88ADB3194DD81
sudo apt-get update
sudo apt-get install kolibri
```
- Click 'Enter' on the 'Yes' option when asked if you wish to run Kolibri on start-up.
- Click 'Enter' on the 'Ok' option to accept the next prompt on Kolibri System service.
- Click 'Enter' on the 'Ok' option to accept the default account that should own the Kolibri server.
- Kolibri will now finish installling, once installation is complete, navigate to your default browser and enter the following address:
```
 http://127.0.0.1:8080
```
*Note: Often the deault browser may change 'http' to 'https' which may prevent server access, ensure that the address is set to 'http'.*
- Follow the steps on the setup wizard.
- Ensure you save the machine state on VirtualBox to avoid losing your work.

#### When using Raspberry Pi
- Download the [Raspberry Pi ZIP file](https://learningequality.org/download/) for Kolibri version 0.15, or have it copied to your local drive.
- Use any of the methods explained in the [official Raspberry Pi user guide](https://www.raspberrypi.com/documentation/computers/getting-started.html) to write the image to a SD card.
- Insert the SD card in the Raspberry Pi.
- Power on the Raspberry Pi and wait. The process takes less than 5 minutes in a model 4, but in other models can take longer. You may observe some    ```Failure``` messages during this process, which is normal.
- After installing the image, an ssh server is installed with the user ``` pi ``` and the password ```kolibrifly```. You should immediately change the password to ensure that your server is secure.
- After following the above steps the Raspberry Pi will provide a WiFi network named under the ssid ```kolibri``` without any password. 
- The Kolibri server will be accessible at the URL:
```
 http://10.10.10.10.
```
*Note: Often the deault browser may change 'http' to 'https' which may prevent server access, ensure that the address is set to 'http'.*
- By default the server does not have Internet access. To import resources to Kolibri, either connect a USB drive with exported channels, or connect the Pi to an internet-connected router using the ethernet cable.
- The installed system contains a full RPi image, with all the software included in the ```Lite``` version from [raspberry-pi-os](https://www.raspberrypi.org/software/operating-systems/#raspberry-pi-os-32-bit). After login use the following command to customize the environment, including localization, timezone, etc. if desired:
```
sudo raspi-config
```


## 🎈 Usage <a name="usage"></a>

### Setup: Advanced
- Facility

A facility in Kolibri connects a set of user accounts, classes, and associated data such as assignments and learner progress. The same facility can be shared across multiple devices, and there can also be multiple facilities on a single device. A facility could represent physical schools, temporary learning hubs, organizations distributing devices across multiple locations, parent or family programs, and other types of learning environments featuring continuity between learners’ activities.
- Device

The physical or virtual machine that has the Kolibri server installed on it. Kolibri server device will minimally include a processor, storage, and memory. It may also include a screen, a network connection, a battery, etc. Common examples of server devices are: a desktop or laptop computer; a rack-mounted server; a Raspberry Pi; a virtual machine running in the cloud.

- Full device

A device that is a fully-featured Kolibri server and can be used by admins, coaches and learners. A full device enables access to all learner, coach and admin features.

- Learn-only device

Unlike a ‘full device’, a ‘learn-only device’ will have available only the features for learners. Coaches and admins can sign in but will only see the Learn page. Learn-only devices also include automated data syncing functionality.

- Sync

Syncing is the process of synchronizing facility data (learners, groups, classes, learner progress, assignments) between devices that have the same facility. The facility is created once on a full device, and subsequently imported to other devices. Facility data can afterwards be synced between devices as long as they are on the same local network.

1. Select the default language for Kolibri.
2. Select the Advanced setup option, recommended for schools, educational programs, organizations, or other group learning settings that will share Kolibri.
3. Select the name of the device on which Kolibri server will be running from. Choose a meaningful and recognizable name because it will help you identify it during syncing and importing processes later on. If many devices are connected to your local network at the same time, the device where the Kolibri server is running must be easily recognizable for users on other devices who need to sync with it.
4. Select a facility setup for this device. If you want to set up a full device, you can create a new facility, or import it from another device in your local network. To import only one or more learner accounts, select the learn-only device.

### Full device
- Create a new facility

When you create a new facility you can choose between Non-formal (libraries, orphanages, correctional facilities, youth centers, computer labs and similar), or a Formal type of facility (schools and other formal learning contexts).

- Guest Access

Select if guests can access Kolibri content without the need to create an account.

- User Account Creation

Select if anyone can create a user account for themselves, or if user accounts must be created by Kolibri admins.

- Enable Passwords for learners

Simplified sign-in, without the password requirement, allows easier access for younger learners.

- Create a Super Admin account

This admin user will be a super admin, able to manage not only the content, but also all users and permissions in this facility.

*Make sure to save these super admin credentials in a safe place!
Device super admin credentials cannot be retrieved when lost, and you will have to manually create another super admin account to manage your device.*

- Responsibilities of the Super Administrator

When you are setting up a Kolibri facility you need to take into consideration the relevant privacy laws and regulations. As super admin, you or someone you delegate, will be responsible for protecting and managing the user accounts and personal information stored on the device.


### Import facility

- If you are part of a wider learning environment, where several learning facilities like schools or community centers are managed by one central organization, or you need to sync the learner progress data from your facility with another device where Kolibri is running, you can choose to import a facility that is already set up on that device.

1. Select the 'Import all data from an existing facility' option in the 'Select a facility setup for this device' step.

2. Any device that has Kolibri running in the local network should appear in the 'Select network address' window. Read more on how set up a local network in the [Kolibri Hardware Guide](https://drive.google.com/file/d/1ay1hLw1rNBGx3gloYHvyRxg5xf3QBS67/view).

3. Select the device and click the 'Continue' button.

- Firewalls may impede your ability to see other devices in your local network or add them as source. If you are unable to see other devices, make sure to:

1. disable the firewalls on all the devices that you need to sync.
2. restart Kolibri for broadcast to take effect.


## TODO <a name = "todo"></a>
* Customize Kolibri for Omarichet.

## ⛏️ Built Using <a name = "built_using"></a>
- [Python](https://www.python.org/) - Language

## ✍️ Authors <a name = "authors"></a>
- [@HourBee2](https://github.com/HourBee2) Vigil Suerin - Omarichet Space

## 🎉 Acknowledgements <a name = "acknowledgement"></a>
- Kolibri by Learning Equality
