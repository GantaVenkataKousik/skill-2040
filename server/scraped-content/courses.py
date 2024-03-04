import requests
from bs4 import BeautifulSoup
import pandas as pd
import time
from IPython.display import Image

# URL of the website to scrape
url = "https://leetcode.com/venkatakousikcse01/"

# Send an HTTP GET request to the website
response = requests.get(url)

# Parse the HTML code using BeautifulSoup
soup = BeautifulSoup(response.content, 'html.parser')

noSolved = user.find(class_='text-[24px] font-medium text-label-1 dark:text-dark-label-1')

solved=user.findAll(class_='mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1')
for s in solved:
  print(s.text)


total_pro=user.findAll(class_='text-xs font-medium text-label-4 dark:text-dark-label-4')
for s in total_pro:
  print(s.text[1:])


  beats=user.findAll(class_='font-medium text-label-2 dark:text-dark-label-2')
for s in beats:
  print(s.text)

  # //server rejecting to retrieve the image.



user_image_url = user_image['src']
print(user_image_url)
if user_image_url:
    print("Image URL:", user_image_url)
    display(Image(url=user_image_url))
else:
    print("Image URL not found or invalid.")


social_profiles = user.findAll(class_='flex items-start space-x-[9px]')
for profile in social_profiles:
    profile_svg = profile.find(class_='mt-0.5 text-base')
    profile_name = profile.find(class_='overflow-hidden').find(class_='truncate').text.strip()

    # Print the data
print(profile_svg)
print()
print(profile_name)
print()