const nodemailer = require('nodemailer');

const SendEmailUtility= async (EmailTo, EmailText, EmailSubject) => {

    let transporter = await nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 25,
        auth: {
            user: "naminopak@gmail.com",
            pass: 'fyxklmqaopkhmbjb'
        }
    });
    


    let mailOptions = {
        from: 'naminopak@gmail.com',
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    };

    
   return  await transporter.sendMail(mailOptions)

}
module.exports=SendEmailUtility

