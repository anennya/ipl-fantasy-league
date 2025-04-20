const express = require('express');
const twilio = require('twilio');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse URL-encoded bodies (as sent by Twilio)
app.use(express.urlencoded({ extended: false }));

// Twilio WhatsApp Webhook Endpoint
app.post('/whatsapp/webhook', (req, res) => {
  console.log('Incoming WhatsApp Message:');
  console.log(req.body); // Log the entire request body from Twilio

  const twiml = new twilio.twiml.MessagingResponse();

  // Get the message body and sender number
  const incomingMsg = req.body.Body || '';
  const sender = req.body.From;

  // Basic response logic (can be expanded later)
  twiml.message(`Hi ${sender}! You said: "${incomingMsg}"`);

  // Send the response
  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

// Basic root route for checking if the server is running
app.get('/', (req, res) => {
  res.send('IPL Fantasy WhatsApp Server is running!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}); 