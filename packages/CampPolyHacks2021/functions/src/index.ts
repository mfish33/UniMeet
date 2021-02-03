import * as functions from "firebase-functions";

export const test = functions.https.onRequest(async (req, res) => {
  res.sendStatus(200).send("Hello World");
});