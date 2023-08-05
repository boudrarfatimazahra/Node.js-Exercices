const nodemailer = require('nodemailer')

//Create a  transporter object using the default SMTP transport

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-Email@gmail.com',
        pass: 'your-password'
    }
})
// Email Content 

const mailOptions = {
    from: 'your-Email@gmail.com',
    to: 'exemple@gmail.com ',
    subject: 'Test Email',
    text: 'This is a test email sent using Node.js and nodemailer'
}
//send email

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error this', error);
    }
    else {
        console.log('Email sent: ', info.response);
    }
})