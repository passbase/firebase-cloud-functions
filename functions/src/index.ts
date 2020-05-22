import * as functions from "firebase-functions";
const crypto = require("crypto");
const express = require("express");
const cors = require("cors");
const app = express();
const admin = require("firebase-admin");

admin.initializeApp();

app.use(cors({ origin: true }));

// Receive post request with Express Endpoint
app.post("/webhooks", (req: any, res: any) => {
  const incomingWebhook = req.body;
  console.log(incomingWebhook);

  // Decrypt webhook if you set up encryption
  decryptWebhookTest(incomingWebhook)
    .then((webhook) => {
      // Do what you want to do with the webhook
      console.log(webhook);
    })
    .catch((err: any) => console.log(err));

  res.sendStatus(200);
});

const decryptWebhookTest = async (webhookResponse: string) => {
  const webhookSecret: string = "YOUR_WEBHOOK_SECRET";

  const encrypted_result = Buffer.from(webhookResponse, "base64");
  const iv = encrypted_result.slice(0, 16);
  const cipher = crypto.createDecipheriv("aes-256-cbc", webhookSecret, iv);
  const decrypted_result_bytes = Buffer.concat([
    cipher.update(encrypted_result.slice(16)),
    cipher.final(),
  ]);
  const decrypted_result = decrypted_result_bytes.toString();
  return JSON.parse(decrypted_result);
};

// Expose Express API as a single Cloud Function:
exports.widgets = functions.https.onRequest(app);
