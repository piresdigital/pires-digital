export default function (req, res){
  require('dotenv').config();

  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const companyName = req.body.companyName;
  const message = req.body.message;
  let date = new Date();

  const nodemailer = require('nodemailer');
  const PASSWORD = process.env.PASSWORD;
  
  let transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'dhavidy@piresdigital.com',
      pass: PASSWORD
    },
    secure: true,
  });

  // Email to business.
  let businessText = 'New Website Enquiry.';
  businessText += `\r\n \r\n`;
  businessText += `Name: ${name}\r\n`;
  businessText += `Email: ${email}\r\n`;
  businessText += `Phone: ${phone}\r\n`;
  businessText += `Company: ${companyName}\r\n`;
  businessText += `Message: ${message}\r\n \r\n`;
  businessText += `Sent on: ${ date.toDateString() }`;

  let businessHTML = `<h2>New Website Enquiry.</h2>`;
  businessHTML += `<br /><br />`;
  businessHTML += `<b>Name</b>: ${name}<br />`;
  businessHTML += `<b>Email</b>: <a href="mailto:${email}">${email}</a><br />`;
  businessHTML += `<b>Phone</b>: ${phone}<br />`;
  businessHTML += `<b>Company</b>: ${companyName}<br />`;
  businessHTML += `<b>Message</b>: ${message}<br />`;
  businessHTML += `<br /><br />`;
  businessHTML += `<i>Sent on: ${ date.toDateString() }</i>`;

  const businessMailData = {
    from: 'Pires Digital <dhavidy@piresdigital.com>',
    to:'hello@piresdigital.com',
    subject: 'New Website Enquiry',
    text: businessText,
    html: businessHTML
  }

  transporter.sendMail(businessMailData, function(err, info){
    err ? res.status(500).send() : null;
    info ? console.log('Your message was received successfully.') : null;
  });

  res.status(200).send();
}