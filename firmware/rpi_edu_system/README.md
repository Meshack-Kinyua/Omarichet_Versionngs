# EDUSAT Training Kit
# RPI EDUSAT development code
This is the code to a test of the Edusat development with the aim of attempting to test whether the code will work well with a Raspberry Pi.

## Installation
### Raspberry Pi OS

### Configuration and setup
`sudo raspi-config`

Select Interface Options > SSH > select yes to enable > press okay to exit

Select Interface Options > VNC > select yes to enable > press okay to exit

Select Interface Options > SPI > select yes to enable > press okay to exit

Select Interface Options > I2C > select yes to enable > press okay to exit


### Update
`sudo apt update`
`sudo apt upgrade`

### Install Environment
`sudo apt install g++ git cmake Ninja build-essentials libi2c-dev i2c-tools`

#### Install WiringPi
```
# fetch the source
sudo apt install git
git clone https://github.com/WiringPi/WiringPi.git
cd WiringPi

# build the package
./build debian
mv debian-template/wiringpi-3.0-1.deb .

# install it
sudo apt install ./wiringpi-3.0-1.deb

```
For Debug

```
WIRINGPI_DEBUG=1 ./my_wiringpi_program

WIRINGPI_DEBUG=1 gpio readall

```
#### Install lgpio
```
git clone https://github.com/joan2937/lg.git

cd lg

make 

sudo make install
```

#### Install i2c-tools
```
sudo apt-get install i2c-tools libi2c-dev
```
#### Install LVGL
```
git clone https://github.com/lvgl/lvgl.git // 

cd lvgl

git fetch origin v8.3.6

git checkout tags/v8.3.6

```
OR 

```
git clone --branch v8.3.6 --depth 1 https://github.com/lvgl/lvgl.git lvgl

git submodule add https://github.com/lvgl/lvgl.git lvgl

git submodule update --init --recursive


```

#### Install GPS driver ->libgps
```
git clone https://github.com/joyalraju/libgps.git

make

sudo make install
```

### BUILD
```
mkdir build


cd build

cmake ..


make
```

## Getting started with the EDUSAT


### Install software
### Setup Application

### Using the Pi Camera
#### Introduction 
The  Pi camera allows us to capture images and record videos. To use it on the Pi, particularly the Pi-4, ensure you have the following:
1. Raspberry Pi 4
2. Pi camera with compatible ribbon cable
3. Power supply for the Raspberry Pi

#### Setting up the camera module 
By default, the camera hardware comes enabled on the Raspberry Pi. From the latest 'Bullseye' release of Raspberry Pi OS, you no longer need to enable your camera within the Raspberry Pi configuration. 

##### Taking still pictures 
To take still pictures, run the following command on the pi terminal:  
``` rpicam-still -o Desktop/image.jpg```

Some Pis might show that the ```rpicam-still``` is not a valid command. In case of that error, use the following command:  
```libcamera-still -o Desktop/image.jpg```

I am going to use ```libcamera```, but you can change from ```rpicam-``` to ```libcamera-``` depending on your system. 

##### Taking videos  
Use the following command:  
``` libcamera-vid -o Desktop/video.mp4```

##### Scripts to capture still images 
The following python code is used for capturing still pictures:





