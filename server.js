const nodemailer = require('nodemailer')
require('dotenv').config()

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
})

let mailOptions = {
    from:"igeemusics@gmail.com",
    to:"igee54077@gmail.com",
    subject:"ACTION REQUIRED",
    important:"",
    text:"IT WORKS"
}

transporter.sendMail(mailOptions, function(err,data) {
if(err){
    console.log('Error',err);
}
else{
    console.log('email sent')
}
})