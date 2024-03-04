import requests
from bs4 import BeautifulSoup
import json

# URL of the website to scrape
url = "https://leetcode.com/venkatakousikcse01/"

# Send an HTTP GET request to the website
response = requests.get(url)

# Parse the HTML code using BeautifulSoup
soup = BeautifulSoup(response.content, 'html.parser')

name=soup.find(class_='text-label-1 dark:text-dark-label-1 break-all text-base font-semibold').text


# Extract overall rank
overall_rank_element = soup.find(class_='ttext-label-1 dark:text-dark-label-1 font-medium')
overall_rank = overall_rank_element.text if overall_rank_element else "Rank not found"

# Extract total number of problems solved
total_solved_element = soup.find(class_='text-[24px] font-medium text-label-1 dark:text-dark-label-1')
total_solved = total_solved_element.text if total_solved_element else "Total problems not found"

# Extracting the image URL

user_image_sample = soup.find('img',class_='h-20 w-20 rounded-lg object-cover')
user_image = user_image_sample['src'] if user_image_sample else "Rank not found"
# Extracting the data
solved_problems = [s.text for s in soup.find_all(class_='mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1')]
total_problems = [s.text[1:] for s in soup.find_all(class_='text-xs font-medium text-label-4 dark:text-dark-label-4')]
beats = [s.text for s in soup.find_all(class_='font-medium text-label-2 dark:text-dark-label-2')]

# Extracting social media profiles
social_profiles = soup.find_all(class_='flex items-start space-x-[9px]')
social_media_list = []

for profile in social_profiles:
    profile_link_element = profile.find('a')
    profile_link = profile_link_element['href'] if profile_link_element else None
    profile_name = profile.find(class_='overflow-hidden').find(class_='truncate').text.strip()

    # Append profile link and name to the list
    social_media_list.append({
        "profile_name": profile_name,
        "profile_link": profile_link
    })

# Store the data in a dictionary
data = {
    "name":name,
    "overall_rank": overall_rank,
    "total_solved": total_solved,
    "solved_problems": solved_problems,
    "total_problems": total_problems,
    "beats": beats,
    "user_image_url": user_image,
    "social_media_profiles": social_media_list
}

# Save data to JSON file
with open('leetcode_data.json', 'w') as json_file:
    json.dump(data, json_file, indent=4)
