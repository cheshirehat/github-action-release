import { WebClient, WebAPICallResult } from "@slack/web-api";
require("dotenv").config();

const token = process.env.SLACK_TOKEN || "";
const channelId = process.env.SLACK_CHANNEL_ID || "";
const tagName = process.env.GITHUB_TAG_NAME || "";

const web = new WebClient(token);

interface SlackPostMessage extends WebAPICallResult {
  channel: string;
  message: {
    text: string;
  }
}

(async () => {
  await web.chat.postMessage({ text: `Ver: ${tagName}がリリースされました！`, channel: channelId }) as SlackPostMessage
}) ()