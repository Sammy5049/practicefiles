const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const sendGridTransporter = require('nodemailer-sendgrid-transport');
const PORT = process.env.PORT || 8080;


require('dotenv').config();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const  transport = nodemailer.createTransport(
 sendGridTransporter({
  auth: {
   api_key: process.env.API_SENDGRID
  }
 })
)

app.post('/send', (req, res) => { 
 const {name, email, jobtype, message} = req.body

 if(!name){
  return res.status(400).json({error: 'Please add your Name'})
 };

 if(!email){
  return res.status(400).json({error: 'Please add your Email'})
 };

 if(!jobtype){
  return res.status(400).json({error: 'Please select  Job type'})
 };

 if(!message){
  return res.status(400).json({error: 'Please type a Message'})
 };

 transport.sendMail({
  to:'tooss@gmail.com',
  from: 'tooss@gmail.com',
  subject: 'Job Offers',
  html: `
  <h5> Details Information</h5>
  <ul>
  <li> <p>Name: ${name}</p></li>
  <li> <p>Email: ${email}</p></li>
  <li> <p>Job Type: ${jobtype}</p></li>
  <li> <p>Message: ${message}</p></li>
  </ul>


  `,





 })

   res.json({success: 'Your email has been sent'})
})


 app.listen(PORT,(req,res) => {
  console.log('Dammy server connected')
 });