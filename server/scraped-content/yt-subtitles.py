from youtube_transcript_api import YouTubeTranscriptApi 
import os
srt = YouTubeTranscriptApi.get_transcript("Ka77djMkSwg") 
text = ""
with open("file.txt", "w") as file:
    for i in srt:
        text += i["text"] + "," 
    file.write(text)
os.startfile("file.txt")