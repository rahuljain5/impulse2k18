const mailcontent = `<!DOCTYPE html><html><head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
<div class="container">
<h2 style="font-size: 20px; font-weight: bold; margin: 0;">Registration Successful</h2>
<p>Dear <strong>@@@@</strong>,<br/>Thank you for your registration for the event:<strong>%%%% </strong>. Your registration has been received!.</p><br/>
<p>If you have any questions leading up to the event, feel free to drop an email to <a href='mailto:toce.impulse@gmail.com'>toce.impulse@gmail.com</a> </p>
<p>We look forward to seeing you on 22nd and 23rd of March as we host the Techno Cultural extravaganza "IMPULSE'18".</p>
<p>Venue: <br/><a href="https://www.google.co.in/maps/place/The+Oxford+College+of+Engineering/@12.9014963,77.63128,15z/data=!4m5!3m4!1s0x0:0xacb3790271972f97!8m2!3d12.9014963!4d77.63128?shorturl=1">The Oxford College of Engineering, Bommanahalli, Bangalore</a></p>
</div><br/>
<p>Thanks,<br/>Registration Team<br/>IMPULSE 2K18</p>
  </body>
</html>`;



exports.content = mailcontent;

