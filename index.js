const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const smtpTransport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: process.env.user,
    pass: process.env.pass
  }
})

app.use(express.static('public'));

app.get('/send', (req, res) => {
  const mailOptions = {
    name: req.query.name,
    email: req.query.email,
    message: req.query.message,
    to: process.env.user,
    from: req.query.name,
    text: "It is time to send " + req.query.name + " an email! Their email address is: " + req.query.email + ". Here is their message to you: " + req.query.message
  }



  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
      res.end('error');
    } else {
      console.log('Email sent!');
      res.end('sent')
    }
  })

})

app.listen(process.env.PORT || 5000)
