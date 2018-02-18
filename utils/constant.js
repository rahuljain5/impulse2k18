const mailcontent = `<!DOCTYPE html><html><head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
<div class="container">
<h2 style="font-size: 20px; font-weight: bold; margin: 0;">Reset Email Request</h2>
<p>We received a request to reset the myDiary password for username <strong>@@@@</strong>.</p>
<p>Please use <strong>####</strong> as a OTP to Reset your password.Your OTP will expire in <strong>%%%% </strong>mins.</p>
<p>Try to Remember your password next time ;) well incase you forgot we got you covered</p>
<p>If you didn't make this request, feel free to ignore this email.</p>
</div>
  </body>
</html>`;

const mailinglist = {
"coding":["rjain.rahul5+coding1@gmail.com","rjain.rahul5+coding2@gmail.com"],
"it_quiz":["rjain.rahul5+it_quiz1@gmail.com","rjain.rahul5+it_quiz2@gmail.com"]

}


exports.content = mailcontent;
exports.bcclist = mailinglist;
