import { WebClient, WebAPICallResult } from "@slack/web-api";
require("dotenv").config();

const token = process.env.SLACK_TOKEN || "";
const channelId = process.env.SLACK_CHANNEL_ID || "";
const text = process.env.TEXT || "";

const web = new WebClient(token);

interface SlackPostMessage extends WebAPICallResult {
  channel: string;
  message: {
    text: string;
  }
}

(async () => {
  await web.chat.postMessage({ text: text, channel: channelId }) as SlackPostMessage
}) ()