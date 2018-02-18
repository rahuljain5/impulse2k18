const config = require("../config/config");
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: config.mailer_host,
  port: config.mailer_port,
  secure: false, // true for 465, false for other ports
  auth: {
    user: config.mailer_username, // generated ethereal user
    pass: config.mailer_password // generated ethereal password
  }
});

const sendmail = (to,bcc, subject, message) => {
  let mailOptions = {
    from: "noreply@impulse2k18.cf", // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    html: message // html body
  };
  if(bcc!=null)
    mailOptions["bcc"] = bcc;
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Erorr:")
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });
}
exports.sendmail = sendmail;
