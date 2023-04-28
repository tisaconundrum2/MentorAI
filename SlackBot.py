import os
from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError
from dotenv import load_dotenv
load_dotenv()

class SlackBot:
    def __init__(self):
        self.client = WebClient(token=os.environ["SLACK_API_TOKEN"])

    def send_message(self, channel, message):
        try:
            response = self.client.chat_postMessage(channel=channel, text="Hello, World!")
            print(f"Sent message: {message}")
        except SlackApiError as e:
            print(f"Error sending message: {e}")
