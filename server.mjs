import express from "express";
//import Email from './src/emails/Welcome';
import sgMail from '@sendgrid/mail';
const app = express();
const port = 3001;

export async function sendEmail() {
  sgMail.setApiKey('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');
  const msg = {
    to: 'geovanny.g.ortiz@gmail.com', // Change to your recipient
    from: 'inquizzitive.help@gmail.com', // Change to your verified sender
    subject: 'Password Reset Requested',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.get('/email', (req, res) => {
      res.send("Hello World");
      sendEmail();
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });