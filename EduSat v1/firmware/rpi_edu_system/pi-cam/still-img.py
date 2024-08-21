'''
This program captures still images when run
Author: Edwin Mwiti 13th July 2024
'''

from picamera2 import Picamera2
import os

path = os.getcwd()
img_path = path + "/still-captures/img.jpg"

print(img_path)

picam2 = Picamera2()

# start and capture an image
picam2.start_and_capture_file(img_path)

picam2.close()