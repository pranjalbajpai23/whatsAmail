/* eslint-disable no-undef */
const accountSid = "AC5ac4371637e963a068f93490f0fa7c64";
const authToken = "238b8120f875b7a9bc52a69917c8a58f";
const client = require("twilio")(accountSid, authToken);
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/getWpMail", (req, res) => {
  try {
    console.log(req.body);
    const { from, subject, body } = req.body;
    const message = `From: ${from}\nSubject: ${subject}\nBody: ${body}`;

    client.messages
      .create({
        body: message,
        from: "whatsapp:+14155238886",
        to: `whatsapp:+916386674090`,
      })
      .then((message) => {
        console.log("success", message.sid);
        res.status(200).send("Message sent successfully");
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Internal Server Error");
      });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});