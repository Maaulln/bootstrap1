const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5500;

app.use(bodyParser.json());
app.use(cors());

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'oyisa156@gmail.com',
    pass: 'pppppppp'
  }
});


app.post('/send-email', (req, res) => {
  const { toEmail, subject, message } = req.body;

  let mailOptions = {
    from: 'maulwaan2@gmail.com',
    to: toEmail,
    subject: subject,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email: ' + error);
      res.json({ success: false, message: 'Failed to send email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ success: true, message: 'Email sent successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});