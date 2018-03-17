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

var list = `A & M Institute Of Mgt. & Tech ,,Punjab   
A B M College ,,Jharkhand   
A B M Degree College ,Prakasam   ,Andhra Pradesh   
A C College Of Technology ,Chennai   ,Tamil Nadu   
A D Biligowda First Grade College ,,Karnataka   
A D P College ,Nagaon   ,Assam   
A D V S First Grade College ,,Karnataka   
A E S National College ,,Karnataka   
A G K M College ,Sathupally   ,Andhra Pradesh   
A G S G College ,Krishna   ,Andhra Pradesh   
A I Jat Heroes Memorial College ,,Haryana   
A J Kalasala ,Machilipatnam   ,Andhra Pradesh   
A L Choudhury College ,Algapur   ,Assam   
A M A L College ,Anakapalle   ,Andhra Pradesh   
A M College ,,Bihar   
A M Reddy Memorial College Of Engineering & Technology ,Guntur   ,Andhra Pradesh   
A N College ,,Bihar   
A N D College ,,Bihar   
A N P Sanskrit Mahavidyalaya ,,Bihar   
A N R College Krishna ,Gudivada   ,Andhra Pradesh   
A N S College Aurangabad ,,Bihar   
A N S College Patna ,,Bihar   
A N Varadarajula First Grade College ,,Karnataka   
A One College Village Raja Ka Bagh (Baduhi) ,,Himachal Pradesh   
A R Govindaswamy College Arts Commerce ,,Karnataka   
A R S Shakhida Arts Science College ,,Gujarat   
A S College Rohatas ,,Bihar   
A S College Srinagar ,,Jammu And Kashmir   
A S P College Commerce ,,Karnataka   
A Swahindpedi Phakan College Assam ,Sibsagar   ,Assam   
A V College Science Arts Commerce ,Hyderabad   ,Andhra Pradesh   
A V Kamalamma College For Women ,,Karnataka   
A V Patel Commerce College ,,Gujarat   
A. D. Patel Institute Of Technology ,Anand   ,Gujarat   
A. M. R. Institute Of Technology ,Adilabad   ,Andhra Pradesh   
A. Madhya Pradesh Law College ,Rajkot   ,Gujarat   
"A.A. Arts And Science College, Chennai ",Chennai   ,Tamil Nadu   
"A.A. Government Arts College For Men, Namakkal ",Namakkal   ,Tamil Nadu   
"A.A. Government Arts College, Attur ",Salem   ,Tamil Nadu   
A.B.R. College Of Education ,Hyderabad   ,Andhra Pradesh   
"A.B.V. Indian Institute Of Information Technology And Management, Gwalior ",,Madhya Pradesh   
A.C. College Of Law ,Guntur   ,Andhra Pradesh   
A.C.M.E. College Of Arts & Science ,Hyderabad   ,Andhra Pradesh   
A.C.M.E. Institute Of Management & Technology ,Ajmer   ,Rajasthan   
A.C.N. Institute Of Higher Education ,,Uttar Pradesh   
"A.C.P.M Medical College, Dhule ",Dhule   ,Maharashtra   
"A.C.S Medical College And Hospital, Chennai ",Chennai   ,Tamil Nadu   
A.C.T. Teacher Training Institute, Chennai  , Tamil Nadu  
A.C.T. Teacher Training Institute ,Tiruvallur   ,Tamil Nadu   
A.C.T. Teacher Training Institute ,Chingleput   ,Tamil Nadu   
A.C.T.S. Degree College, Visakhapatnam  , Andhra Pradesh  
A.D. Colleg Of Education,, Maharashtra  
A.D. Mahavidyalaya, Puri  , Orissa  
A.D.J. Dharmambal Women'S Polytechnic College, Nagapattinam  , Tamil Nadu  
A.D.M. College For Women, Nagapattinam  , Tamil Nadu  
A.D.S. College Run By Shri Megh Singh Bal Vikas & S,, Madhya Pradesh  
A.E. & C.S. Pavan College Of Physical Education,, Karnataka  
A.E. Societys College Of Education,, Maharashtra  
A.E.C. Training College Of Centre, Pachama  , Madhya Pradesh  
A.E.C.S. Maruthi D Ed College,, Karnataka  
A.E.S. College Of Education,, Andhra Pradesh  
A.E.S. College Of Education,, Madhya Pradesh  
A.E.S. Post Graduate Institute Of Business Management, Ahmedabad  , Gujarat  
A.E.S. Teacher Training Education Institute,, Tamil Nadu  
A.E.T. College Of Education,, Karnataka  
A.E.T. Teachers Training Institute,, Karnataka  
A.G. College Of Education,, Tamil Nadu  
A.G. Teacher Training Institute,, Tamil Nadu  
A.G. Teachers College,, Gujarat  
A.G.L. Degree College, Visakhapatnam  , Andhra Pradesh  
A.I.T.A.M. School Of Computer Science, Srikakulam  , Andhra Pradesh  
A.J. College Of Education, Machilipatnam  , Andhra Pradesh  
A.J. College Of Science & Technology, Trivandrum  , Kerala  
"A.J. Institute Of Medical Science & Research Centre, Mangalore", Mangalore  , Karnataka  
A.K. (Pg) College,, Uttar Pradesh  
A.K. Chanda Law College, Silchar  , Assam  
A.K. College,, Uttar Pradesh  
A.K. Navajeevan College For Women, Hyderabad  , Andhra Pradesh  
A.K. Vishwanatha Reddy Degree College, Karimnagar  , Andhra Pradesh  
A.K.C. College Of Arts And Science, Virudunagar  , Tamil Nadu  
A.K.D. Dharmarajas Womens College, Virudunagar  , Tamil Nadu  
A.K.I. Junior College Of Education,, Maharashtra  
A.K.K. New Law Academy, Pune  , Maharashtra  
A.K.P. Degree College,, Uttar Pradesh  
A.K.R. Teacher Training Institute For Women,, Tamil Nadu  
A.K.R.G. College, Nallajerla  , Andhra Pradesh  
A.K.R.G. College Of Pharmacy, Nallajerla  , Andhra Pradesh  
A.K.T. Memorial College Of Education, Villupuram  , Tamil Nadu  
A.K.V.K. Degree College, Ongole  , Andhra Pradesh  
A.L.C. Teachers Training Institute For Women, Tiruvannamalai  , Tamil Nadu  
A.M. College Of Education,, Haryana  
A.M. Linganna College Of Education,, Andhra Pradesh  
A.M. Marathi Junior College Of Education (Ded),, Maharashtra  
A.M. Patil Arts And Commerce & Kail N.K. Patil Science College,, Maharashtra  
A.M. Reddy College Of Education,, Andhra Pradesh  
A.M. Reddy Memorial College Of Pharmacy, Guntur  , Andhra Pradesh  
A.M.C. Engineering College, Bangalore  , Karnataka  
A.M.E.S. College Of Education,, Tamil Nadu  
A.M.K. Kothari Technological Polytechnical Institute, Thanjavur  , Tamil Nadu  
A.M.S. Mannadiar Memorial Teacher Training Institute,, Kerala  
A.M.S. School Of Informatics, Hyderabad  , Andhra Pradesh  
"A.N. Magadh Medical College, Gaya", Gaya  , Bihar  
A.N. Shiksha Shashtri College,, Rajasthan  
A.N.D. Teachers Training College,, Uttar Pradesh  
A.N.J.A. College, Virudunagar  , Tamil Nadu  
A.N.R. & P.L. Arts & Science College, Gudivada  , Andhra Pradesh  
A.P. College Of Education,, Andhra Pradesh  
A.P.A. College Of Arts And Culture, Palani  , Tamil Nadu  
A.P.C. Mahalakshmi College For Women, Tuticorin  , Tamil Nadu  
A.P.S. Degree College,, Uttar Pradesh  
A.Q.J. College, Visakhapatnam  , Andhra Pradesh  
A.R. Engineering College, Villupuram  , Tamil Nadu  
A.R.C. Viswanathan College, Mayiladuthurai  , Tamil Nadu  
A.R.J College Of Engineering And Technology, Mannargudi  , Tamil Nadu  
A.R.R. College Of Education,, Tamil Nadu  
A.R.R. College Of Education For Women,, Tamil Nadu  
A.R.R. Teacher Training Institute,, Tamil Nadu  
A.R.R. Teachers Education Institute,, Tamil Nadu  
A.R.R. Teachers Training Institute For Women,, Tamil Nadu  
A.S. College Deoghar,, Jharkhand  
A.S. College For Women,, Punjab  
A.S. College Of Education,, Tamil Nadu  
A.S. College Of Teacher Training Institute,, Tamil Nadu  
"A.S. College,Ludhiana",, Punjab  
A.S. Degree College,, Uttar Pradesh  
A.S. Pre Primary Tti,, Kerala  
A.S. Teacher Training Institute,, Kerala  
A.S.M. College For Women, Warangal  , Andhra Pradesh  
A.S.M.M. Teacher Training Institute,, Kerala  
A.S.N. Degree College, Guntur  , Andhra Pradesh  
A.S.N. Degree College For Women, Amalapuram  , Andhra Pradesh  
A.S.R. College Of Education,, Andhra Pradesh  
A.S.R. Degree College, Kovvur  , Andhra Pradesh  
A.S.S. Mahavidyalaya,, Uttar Pradesh  
A.S.S.P. Mandals Maharaj J.P. Valvi Arts College,, Maharashtra  
A.S.S.S. Sanchalit D Ed College,, Maharashtra  
A.T.S.P.M. Arts & Commerce College,, Maharashtra  
A.V. Abdurahiman Haji Arts & Science College, Kozhikode  , Kerala  
"A.V. College Of Arts, Science & Commerce", Hyderabad  , Andhra Pradesh  
A.V.C. College, Mayiladuthurai  , Tamil Nadu  
A.V.C.C. Polytechnic College, Mayiladuthurai  , Tamil Nadu  
A.V.M. Degree College, Nalgonda  , Andhra Pradesh  
A.V.M. Teachers Training Isntitute,, Karnataka  
A.V.R. & V.P.R. Degree College, Mandapeta  , Andhra Pradesh  
A.V.R. Degree College, Krishna  , Andhra Pradesh  
A.V.S. College Of Education,, Karnataka  
A.V.S. College Of Education,, Tamil Nadu  
A.V.S. College Of Science, Salem  , Tamil Nadu  
A.V.V. Degree College, Warangal  , Andhra Pradesh  
A.V.V.M. Sri Pushpam College, Poondi  , Tamil Nadu  
A.W.H. Special College, Kozhikode  , Kerala  
A.Y.T. College Of Education,, Uttar Pradesh  
Aadi Lakshmi College Of Education,, Andhra Pradesh  
Aadinath Mahila Shikshak Prashikshan Mahavidyalaya,, Rajasthan  
Aadinath Teacher Training College,, Rajasthan  
Aadishakti Bahuudeshiya Sanstha,, Maharashtra  
Aaditya Teachers College,, Karnataka  
Aadya Shree Nijalingeswar S Sansthes Bed College,, Karnataka  
Aakar Adhyapan Mandir,, Gujarat  
Aaksh College Of Education,, Haryana  
Aaksh Vidyalaya Teacher Training Institute,, Tamil Nadu  
Aalim Muhammed Salegh College Of Engineering, Chennai  , Tamil Nadu  
Aalim Muhammed Salegh Polytechnic College, Chennai  , Tamil Nadu  
Aaricent College Of Education,, Madhya Pradesh  
Aarupadai Veedu Institute Of Technology, Chennai  , Tamil Nadu  
"Aarupadai Veedu Medical College, Pondicherry", Pondicherry  , Pondicherry  
Aasee College Of Education,, Tamil Nadu  
Aasee Teacher Training Institute,, Tamil Nadu  
Aastha College Of Education For Women,, Haryana  
Aastha College Of Education Vpo,, Haryana  
Aastha Educational Institute,, Uttar Pradesh  
Aatama Ram Teachers Training College,, Rajasthan  
Aathavan Teacher Training Institute,, Tamil Nadu  
Aathityaa Teacher Training Institute,, Tamil Nadu  
Abacus Institute Of Engineering & Management, Hooghly  , West Bengal  
Abasaheb Kakade Shikshan Sanstha Vidyalaya,, Maharashtra  
Abasaheb Marathe Arts And New Commerce,, Maharashtra  
Abdul Aziz Ansari Degree College,, Uttar Pradesh  
Abdul Kalam Institute Of Technological Sciences, Khammam  , Andhra Pradesh  
Abdul Qadir Jeelani Centre For Pg Studies, Anandapuram  , Andhra Pradesh  
Abdul Razzak Quadri Institute Of P G Studies In,, Maharashtra  
Abeda Begum Memorial D Ed College,, Karnataka  
Abeda Inamdar Senur College For Girls Arts Science & Commerce,, Maharashtra  
Abes Institute Of Technology, Ghaziabad  , Uttar Pradesh  
Abhay Mahavidyalaya,, Uttar Pradesh  
Abhay Shikshan Kendra Dr Babasaheb A S Bhavan,, Maharashtra  
Abhay Yung Kalyan Kendra'S Ju College Of Education,, Maharashtra  
Abhay Yuwa Kalyan Kendar'S College Of Education,, Maharashtra  
Abhayapuri College, Bongaigaon  , Assam  
Abhedananda Mahavidyalaya,, West Bengal  
Abhijit Kadam Institute Of Management & Social Sciences, Sholapur  , Maharashtra  
Abhilasha T T College,, Rajasthan  
Abhilasha Teachers Training Collage,, Rajasthan  
Abhilashi College Of Education,, Himachal Pradesh  
Abhilashi College Of Physical Education,, Madhya Pradesh  
Abhilashi Sanskratik Avm Shaikshnik Samiti,, Madhya Pradesh  
Abhinav College Of Education,, Maharashtra  
Abhinav Education Society,, Maharashtra  
Abhinav Education Society Institute Of Management & Research, Haveli  , Maharashtra  
Abhinav Education Societys Law College, Pune  , Maharashtra  
Abhinav Sewa Sansthan Mahavidyalaya,, Uttar Pradesh  
Abhyudaya Degree College, West Godavari  , Andhra Pradesh  
"Abhyudaya Degree College, Srikakulam", Srikakulam  , Andhra Pradesh  
Abhyudaya Mahila Degree College, Guntur  , Andhra Pradesh  
Abi Abi College, Thanjavur  , Tamil Nadu  
Abinav Institute Of Management & Technology, Prakasam  , Andhra Pradesh  
Abms Parishad'S Yashwantrao Chavan Law College, Pune  , Maharashtra  
Abraham Malpan Memorial Teacher Trg Institute,, Kerala  
Abs Academy,, West Bengal  
Abss Institute Of Technology, Meerut  , Uttar Pradesh  
Abubakar Memorial Hindi Pandit Trng College,, Andhra Pradesh  
Abul Kalam Azad Degree College, Medak  , Andhra Pradesh  
Abul Kalam Azad Educational Institute,, Uttar Pradesh  
Ac Evening College, Guntur  , Andhra Pradesh  
Academy Of Business & Engineering Sciences, Ghaziabad  , Uttar Pradesh  
Academy Of Business Administration, Balasore  , Orissa  
Academy Of Business Management,, Uttar Pradesh  
Academy Of Engineering And Educational Research Institute Of Technology,, Maharashtra  
Academy Of Management Excellence,, Uttar Pradesh  
Academy Of Management Studies, Bhubaneswar  , Orissa  
Academy Of Management Studies,, Uttaranchal  
"Academy Of Medical Sceiences, Pariyaram, Kannur", Kannur  , Kerala  
Academy Of Technology, Hooghly  , West Bengal  
Accurate Institute Of Management & Technology, Noida  , Uttar Pradesh  
Ace Engineering College, Ghatkesar  , Andhra Pradesh  
Acharatlal Girdhar Lal Teachers College,, Gujarat  
Achariya Arts And Science College, Pondicherry  , Pondicherry  
Achariya College Of Education,, Pondicherry  
Achary Nanesh Shikshak Shiksha Mahavidhyalaya,, Rajasthan  
Acharya B.N. Seal College College,, West Bengal  
Acharya College Of Education,, Karnataka  
Acharya D Ed College,, Karnataka  
"Acharya Degree College, Narsampet", Narsampet  , Andhra Pradesh  
"Acharya Degree College, Zaheerabad", Zaheerabad  , Andhra Pradesh  
Acharya Deshabhushan College Of Education,, Karnataka  
Acharya First Grade College For Women,, Karnataka  
Acharya Institute Of Management & Science, Bangalore  , Karnataka  
Acharya Institute Of Technology, Bangalore  , Karnataka  
Acharya J C Bose College Calcutta,, West Bengal  
Acharya Jagadish Chandra Bose College,, West Bengal  
Acharya Jawadekar College Of Education,, Maharashtra  
Acharya Jawadekar Shikshan Shastra Mahavidyalaya,, Maharashtra  
Acharya Motibhai Patel Institude Of Computer Studies, Kherva  , Gujarat  
Acharya N G Ranga Andhra Pradesh Agricultural University, Hyderabad  , Andhra Pradesh  
Acharya N. G. Ranga College Of Education,, Andhra Pradesh  
Acharya Nagarjuna University, Guntur  , Andhra Pradesh  
Acharya Narendra Deo Kisan Degree College,, Uttar Pradesh  
Acharya Narendra Deo Kisan P G College,, Uttar Pradesh  
Acharya Narendra Deo Nagar Nigam Girls Degree (Pg) College,, Uttar Pradesh  
Acharya Narendra Deo Nagar Nigam Mahila Mahavidy,, Uttar Pradesh  
Acharya Narendra Deo Teacher Training Pg College,, Uttar Pradesh  
Acharya Narendra Dev College, Delhi  , Delhi  
Acharya Patasala Rural College Of Engineering A. P. S, Bangalore  , Karnataka  
Acharya Pathasala College Of Arts Science,, Karnataka  
Acharya Pathashala College Of Commerce,, Karnataka  
Acharya Pathashala Evening College Of Arts Commerece,, Karnataka  
Acharya Prafulla Chandra College,, West Bengal  
Acharya Prafulla Chandra College Of Commerce,, West Bengal  
Acharya Shree Nanesh Samta Mahavidyalaya,, Rajasthan  
"Acharya Shri Chander College Of Medical & Hospital, Jammu", Jammu  , Jammu And Kashmir  
Acharya Tulsi National College Commerce,, Karnataka  
Acharya Vidhyasagar Technical Education Society,, Madhya Pradesh  
Acharya Virag Sagar Vidyapeeth,, Madhya Pradesh  
Acharya'S Bangalore B. School, Bangalore  , Karnataka  
Achhruram Memorial College,, West Bengal  
Acme Institute Of Management & Technology,, Uttar Pradesh  
Acme Institute Of Management And Technology,, Uttar Pradesh  
Acropolis Institute Of Technology & Research, Bhopal  , Madhya Pradesh  
Acropolis Institute Of Technology And Research Indore, Indore  , Madhya Pradesh  
Act College Of Engineering & Technology, Chennai  , Tamil Nadu  
Adaikala Matha College, Vallam  , Tamil Nadu  
Adaikala Matha Institute Of Management, Kanyakumari  , Tamil Nadu  
Adaikalamatha Institute Of Teacher Education,, Tamil Nadu  
Adam College Of Education,, Andhra Pradesh  
Adamas Institute Of Technology, Barasat  , West Bengal  
Adam'S Engineering College, Hyderabad  , Andhra Pradesh  
Adarash College,, Jharkhand  
Adarash Education Society,, Maharashtra  
Adarash Teachers Training Center,, Karnataka  
"Adarsa Degree College, Kakinada", Kakinada  , Andhra Pradesh  
Adarsa Teacher Training Institute,, Andhra Pradesh  
Adarsh Adhyapak Vidyalaya,, Maharashtra  
Adarsh Adhyapan Vidyalaya,, Maharashtra  
Adarsh Bal Shala Mahila S Prashikshan Kendra,, Rajasthan  
Adarsh Bharati Mahavidyalaya,, Uttar Pradesh  
Adarsh College Of Education,, Haryana  
Adarsh College Of Education Post Office,, Himachal Pradesh  
Adarsh College Of Teacher Education,, Andhra Pradesh  
Adarsh College Science Commerce Arts, Karimnagar  , Andhra Pradesh  
Adarsh D Ed College,, Karnataka  
Adarsh Ded College,, Haryana  
Adarsh Degree College For Women, Guntur  , Andhra Pradesh  
Adarsh Degree College, Mahboobnagar", Mahabubnagar  , Andhra Pradesh  
Adarsh Degree College. Medak, Medak  , Andhra Pradesh  
Adarsh Gyan Ganga Shikshan Sansthan,, Madhya Pradesh  
Adarsh Hindi Maha Vidyalaya Degree College, Nizamabad  , Andhra Pradesh  
Adarsh Janta Mahavidyalaya,, Uttar Pradesh  
Adarsh Kanya Mahavidyalaya,, Uttar Pradesh  
Adarsh Krishna College Of Edn,, Uttar Pradesh  
Adarsh Mahila Mahavidyalaya,, Haryana  
Adarsh Mahila Shikshak Prashikshan Mahavidyalaya,, Rajasthan  
Adarsh Pg College Of Computer Sciences, Mahabubnagar  , Andhra Pradesh  
Adarsh Physical Teacher Training College,, Rajasthan  
Adarsh Pre Primary Teachers Trg College,, Gujarat  
Adarsh Sangit College,, Madhya Pradesh  
Adarsh Science J.B. Arts And Birla Commerce Mahavidyalaya,, Maharashtra  
Adarsh Sewa Bhartiya Mahavidyalaya,, Uttar Pradesh  
Adarsh Shikshan Prasarak Mandal,, Maharashtra  
Adarsh Shikshan Prasark Mankals K T Path D Ed,, Maharashtra  
Adarsh Shri Basudeo Sanskrit Mahavidyalaya,, Uttar Pradesh  
Adarsh Subhash Tayal College Of Education,, Haryana  
Adarsh Vidya Mandir College Of Education Shiksha Mahavidyalaya,, Rajasthan  
Adarsh Vidya Vardhaka Sangha Shiv Parappasangappa Sajjan Art College,, Karnataka  
Adarsha Bahuddeshiya Shikshan Prasarak Mandal,, Maharashtra  
Adarsha College Of Education,, Andhra Pradesh  
Adarsha College Of Elementry Teacher Education,, Andhra Pradesh  
Adarsha Comprehensive College Of Edu And Research,, Maharashtra  
Adarsha D Ed College,, Karnataka  
"Adarsha Degree College, Cherial", Cherial  , Andhra Pradesh  
"Adarsha Law College, Hanamkonda", Hanamakonda  , Andhra Pradesh  
Adarsha Mahila Degree College, Vijayawada  , Andhra Pradesh  
Adarsha P T C College,, Gujarat  
Adarsha Shikshan Sansthas College Of Edn For (W),, Maharashtra  
Adarsha Shikshna Samitis Commerce College,, Karnataka  
Adarsha Vidya Samshte D Ed College,, Karnataka  
Adarsha Womens Degree College, Bellampally  , Andhra Pradesh  
Adepalli Mahalakshmi Devi Teacher Training Institu,, Andhra Pradesh  
Adesh Institute Of Engineering & Technology,, Punjab  
"Adesh Institute Of Medical Sciences & Research, Bhatinda", Bhathinda  , Punjab  
Adhar Mahila & Bal Vikas Sanstha,, Maharashtra  
Adharsh Vidhyalaya College Of Education
B L D E A Svachana Pitamaha Dr. P.G.Halakatti College Of Engineering And Technology ,Bijapur   ,Karnataka   
B S A College Of Engineering And Technology ,Mathura   ,Uttar Pradesh   
B. S. Abdur Rahman Crescent Engineering College ,Chingleput   ,Tamil Nadu   
B.A College Of Engineering And Technology ,,Jharkhand   
B.B.S. College Of Management & Technology ,Allahabad   ,Uttar Pradesh   
B.I.T Institute Of Technology ,Hindupur   ,Andhra Pradesh   
B.K.Birla Institute Of Engineering & Technology ,,Rajasthan   
B.M. College Of Technology & Management ,Gurgaon   ,Haryana   
B.M.S. Evening College Of Engineering ,Bangalore   ,Karnataka   
B.P. Poddar Institute Of Management &. Technology ,Calcutta   ,West Bengal   
B.S. Anangpuria Institute Of Technology & Management ,Faridabad   ,Haryana   
B.S.R. College Of Science And Technology ,Gokavaram   ,Andhra Pradesh   
Baba Banda Singh Bahadur Engineering College ,Patiala   ,Punjab   
Baba Hira Singh Bhattal Institute Of Engineering And Technology ,,Punjab   
Baba Kuma Singh Ji Engineering College ,Amritsar   ,Punjab   
Baba Saheb Dr. Bhim Rao Ambedkar College Of Agriculture Engineering & Technology ,,Uttar Pradesh   
Babaria Institute Of Technology ,Vadodara   ,Gujarat   
Babu Banarasi Das Institute Of Engineering & Technology & Research Centre ,Bulandshahar   ,Uttar Pradesh   
Babu Banarasi Das National Institute Of Technology And Management ,Lucknow   ,Uttar Pradesh   
Babu Banarsi Das Institute Of Technology ,Ghaziabad   ,Uttar Pradesh   
Babu Mohanlal Arya Smarak Engineering College ,Agra   ,Uttar Pradesh   
Bahubali College Of Engineering ,Hassan   ,Karnataka   
Balaji College Of Engineering ,Trichy   ,Tamil Nadu   
Balaji Institute Of Engineering & Sciences ,Narsampet   ,Andhra Pradesh   
Balaji Institute Of Engineering And Technology ,Kanchipuram   ,Tamil Nadu   
Balaji Institute Of Technology And Science ,Narsampet   ,Andhra Pradesh   
Balaji Institute Of Technology Management & Research ,Rajnandgaon   ,Chhattisgarh   
Balana Israna ,,Haryana   
Balasore College Of Engineering And Technology ,Balasore   ,Orissa   
Baldev Ram Mirdha Institute Of Technology ,Jaipur   ,Rajasthan   
Baldev Ram Mirdha Institute Of Technology Its ,Jaipur   ,Rajasthan   
Banarsidas Chandiwala Institute Of Information Technology ,Kalkaji   ,Delhi   
Bandari Srinivas Institute Of Technology ,Chevella   ,Andhra Pradesh   
Bangalore College Of Engineering And Technology ,Bangalore   ,Karnataka   
Bangalore Institute Of Technology ,Bangalore   ,Karnataka   
Bankura Unnayani Institute Of Engineering ,,West Bengal   
Bannari Amman Institute Of Technology ,Erode   ,Tamil Nadu   
"Bansal College Of Engineering, ",Mandideep   ,Madhya Pradesh   
Bansal Institute Of Research & Technology ,Bhopal   ,Madhya Pradesh   
Bansal Institute Of Science & Technology ,Bhopal   ,Madhya Pradesh   
Bapatla Engineering College ,Bapatla   ,Andhra Pradesh   
Bapuji Engineering College ,Nirmal   ,Andhra Pradesh   
"Bapuji Institute Of Engineering & Technology, ",Davanagere   ,Karnataka   
Bapurao Deshmukh College Of Engineering ,Wardha   ,Maharashtra   
"Bapurao Deshmukh College Of Engineering, Sewagram,Wardha ",,Maharashtra   
Bargur Engineering College ,Dharmapuri   ,Tamil Nadu   
Basava Academy Of Engineering ,Bangalore   ,Karnataka   
Basava Kalyan Engineering College ,Bidar   ,Karnataka   
Basaveshwara Institute Of Information Technology ,Hyderabad   ,Andhra Pradesh   
Basilous Mathews Ii College Of Engineering ,Kollam   ,Kerala   
Bbd Northern India Institute Of Technology ,Delhi   ,Delhi   
Beant College Of Engineering And Technology ,Amritsar   ,Punjab   
Bellary Engineering College ,Bellary   ,Karnataka   
Bengal College Of Engineering And Technology ,Durgapur   ,West Bengal   
Bengal Engineering College ,,West Bengal   
Bengal Institute Of Technology And Management ,Birbhum   ,West Bengal   
"Bengal Institute Of Technology"" ",Calcutta   ,West Bengal   
Besant Institute Of Technology And Science ,Anantapur   ,Andhra Pradesh   
Bethlahem Institute Of Engineering ,Kanyakumari   ,Tamil Nadu   
Bgs Institute Of Technology ,Mandya   ,Karnataka   
Bhabha Engineering Research Institute ,Bhopal   ,Madhya Pradesh   
Bhabha Institute Of Technology ,Kanpur   ,Uttar Pradesh   
Bhadrak Institute Of Engineering & Technology ,Barapada   ,Orissa   
Bhadrak Institute Of Engineering & Technology - Balasore 
Bhagalpur College Of Engineering ,Bhagalpur   ,Bihar   
Bhagwan Mahavir Institute Of Engineering & Technology ,,Haryana   
Bhagwan Parshuram College Of Engineering ,Gohana   ,Haryana   
Bhagwan Parshuram Institute Of Technology ,Delhi   ,Delhi   
Bhagwant Institute Of Technology ,Muzaffarnagar   ,Uttar Pradesh   
Bhagyanagar Institute Of Technology ,Rangareddy   ,Andhra Pradesh   
Bhai Gurdas Institute Of Engg. & Technology ,,Punjab   
Bhai Maha Singh College Of Engineering ,,Punjab   
Bhajarang Engineering College ,Tiruvannamalai   ,Tamil Nadu   
Bharat Institute Of Engineering And Technology ,Ibrahimpatnam   ,Andhra Pradesh   
Bharat Institute Of Technology ,Meerut   ,Uttar Pradesh   
Bharat Ratna Indira Gandhi College Of Engineering ,Sholapur   ,Maharashtra   
Bharath Institute Of Higher Education And Research ,Chennai   ,Tamil Nadu   
Bharath Institute Of Science And Technology ,Chennai   ,Tamil Nadu   
Bharath Niketan Engineering College ,Theni   ,Tamil Nadu   
Bharathidasan Engineering College ,Vellore   ,Tamil Nadu   
Bharathidasan Institute Of Engineering & Technology ,Trichy   ,Tamil Nadu   
Bharathiyar College Of Engineering & Technology ,Karaikal   ,Pondicherry   
Bharathiyar Institute Engineering Women ,Salem   ,Tamil Nadu   
Bharati Vidyapeeth'S College Of Engineerin Pune ,Pune   ,Maharashtra   
Bharati Vidyapeeth'S College Of Engineering ,Delhi   ,Delhi   
Bharati Vidyapeeth'S College Of Engineering Kolapur ,Kolhapur   ,Maharashtra   
Bharati Vidyapeeth'S College Of Engineering Maharastra ,Pune   ,Maharashtra   
Bharati Vidyapeeth'S College Of Engineering New Bombay ,Thane   ,Maharashtra   
Bharatiya Vidya Bhavan'S Sardar Patel College Of Engineering ,Mumbai   ,Maharashtra   
Bharatpur Engineering College ,Shyorana   ,Rajasthan   
Bharti College Of Engineering And Technology ,Durg   ,Chhattisgarh   
Bhartiya Vidya Mandir College Of Technology And Management ,Gwalior   ,Madhya Pradesh   
Bhasker Engineering College ,Narsampet   ,Andhra Pradesh   
Bhilai Institute Of Technology Bhilai House ,Bhilai   ,Chhattisgarh   
Bhimavaram Institute Of Engineering & Technology ,Palakoderu   ,Andhra Pradesh   
Bhiwani Institute Of Technology And Science ,,Haryana   
Bhoj Reddy Engineering College For Women ,Hyderabad   ,Andhra Pradesh   
Bhopal Engineering College ,,Madhya Pradesh   
Bhopal Institute Of Technology ,Bhopal   ,Madhya Pradesh   
Bhopal Institute Of Technology & Science ,Bhopal   ,Madhya Pradesh   
Bhutta College Of Engineering And Technology ,Ludhiana   ,Punjab   
Bihar Institute Of Silk & Textiles ,Bhagalpur   ,Bihar   
"Bihar Institute Of Technology, ",Dhanbad   ,Jharkhand   
Biju Patnaik University Of Technology Bput ,,Orissa   
Birbhum Institute Of Engineering & Technology ,Birbhum   ,West Bengal   
Birla Institute Of Applied Sciences ,Nainital   ,Uttaranchal   
Birla Vishvakarma Mahavidyalaya ,Anand   ,Gujarat   
Bkr College Of Engineering And Technology ,Chennai   ,Tamil Nadu   
Bm College Of Technology ,Indore   ,Madhya Pradesh   
Bm Institute Of Engineering & Technology ,,Haryana   
Bms College Of Engineering ,Bangalore   ,Karnataka   
Bms Institute Of Technology Management ,Bangalore   ,Karnataka   
Bnm Institute Of Technology ,Bangalore   ,Karnataka   
Bomma Institute Of Tech. & Science ,Khammam   ,Andhra Pradesh   
Bonam Venkata Chalamayya Engineering College ,Amalapuram   ,Andhra Pradesh   
Bonam Venkata Chalmayya Institute Of Technology ,Amalapuram   ,Andhra Pradesh   
Brahmdevdada Mane Institute Of Technology ,Sholapur   ,Maharashtra   
Brcm College Of Engineering And Technology ,,Haryana   
Brindavan College Of Engineering ,Bangalore   ,Karnataka   
Btl Institute Of Technology ,Bangalore   ,Karnataka   
Bundelkhand Institute Of Engineering & Technology ,Jhansi   ,Uttar Pradesh   
Bvb College Of Engineering And Technology - Dharwad ,Dharwad   ,Karnataka   
C B Patel Arts College,,Gujarat  
C E D College Education,,Jammu And Kashmir  
C M Bhola College,,Bihar  
C M College,,Bihar  
C M College Science,,Bihar  
C M Dubey Postgraduate College,,Chhattisgarh  
C M J College,,Bihar  
C M K National Girls College,,Haryana  
C N Arts And B D Commerce College,,Gujarat  
C N B College,,Bihar  
C N College,,Bihar  
C Nehru Maha Vidyalaya Art And Science College Coimbatore,Coimbatore  ,Tamil Nadu  
C P Patel F H Shah Commerce College,,Gujarat  
C R Arya College,,Haryana  
C R Kisan College,,Haryana  
C S H Desai Arts College And L K L Doshi Commerce College Gujarat,,Gujarat  
C S I Ewart Womens Christian College,Kanchipuram  ,Tamil Nadu  
C S R Sarma College,Ongole  ,Andhra Pradesh  
C U Shah Arts College,,Gujarat  
C U Shah City Commerce College,,Gujarat  
C U Shah Commerce College,,Gujarat  
C U Shah Science College,,Gujarat  
C. Abdul Hakeem College(Men),Vellore  ,Tamil Nadu  
C. Impact Institute,,Uttar Pradesh  
C. K. Pithawala College Of Engineering & Technology,Surat  ,Gujarat  
C. Kandasami Naidu College For Men,Chennai  ,Tamil Nadu  
C. Kandaswami Naidu College For Women,Cuddalore  ,Tamil Nadu  
C. S. I. College Of Education,,Andhra Pradesh  
C. V. Raman College Of Engineering,Bhubaneswar  ,Orissa  
C.A.T. College,Nampally  ,Andhra Pradesh  
C.Abdul Hakeem College Of Engineering And Technology,Vellore  ,Tamil Nadu  
C.Achuta Menon Government College,,Kerala  
C.B. Gupta Agriculture Degree College,,Uttar Pradesh  
C.B. Memorial Degree College,Mahabubnagar  ,Andhra Pradesh  
C.B.M. College,Coimbatore  ,Tamil Nadu  
C.C.R.D. College,,Uttar Pradesh  
C.D. Jain College Of Commerce,,Maharashtra  
C.E S. College Of Arts & Commerce,,Goa  
C.E.S. College Of Educational Research And Training,,Delhi  
C.F. Teacher Training Institute,,Kerala  
C.H. Mohammed Koya Memorial Pptti,,Kerala  
C.H.M.M. College For Advanced Studies,Trivandrum  ,Kerala  
C.I. College,,Manipur  
C.I.T. Sandwich Polytechnic College,Chennai  ,Tamil Nadu  
C.J. Mandavia Edn & Charitable Trust,,Gujarat  
C.J. Patel Arts & Commerce College,,Maharashtra  
C.K. Patel College Of Primary Teacher Education,,Gujarat  
C.K. Raghavan Memorial College Of Education,,Kerala  
C.K. Raghavan Memorial Teacher Training Institute,,Kerala  
C.K.G. Memorial Government College,Kozhikode  ,Kerala  
C.K.G.M. Government College,,Kerala  
C.K.M. Arts & Science College,Warangal  ,Andhra Pradesh  
C.K.S. College Of Education,,Tamil Nadu  
C.K.S. Teacher Training Institute,,Tamil Nadu  
C.L. Baid Mehta College Of Pharmacy,Chennai  ,Tamil Nadu  
C.L. College Of Education,,Haryana  
C.L. Jain College,,Uttar Pradesh  
C.L.E. Societys B Ed College,,Karnataka  
C.L.R. College Of Education,,Andhra Pradesh  
C.M. Institute Of Mgt,Mandal  ,Andhra Pradesh  
C.M.A. B.Ed College,,Karnataka  
C.M.B.C. Degree College For Women,Ongole  ,Andhra Pradesh  
C.M.D. Post Graduate College,,Chhattisgarh  
"C.M.I. Degree College, Anantapur",Anantapur  ,Andhra Pradesh  
"C.M.I. Degree College, Kalyandurg",Kalyandurg  ,Andhra Pradesh  
C.M.R. Instt Of Mgt. Studies,Bangalore  ,Karnataka  
C.M.R. Law College,Bangalore  ,Karnataka  
C.M.S. College,Kottayam  ,Kerala  
C.M.S. College Of Education,,Tamil Nadu  
C.M.S. College Of Science & Commerce,Coimbatore  ,Tamil Nadu  
C.M.S. Teacher Training Institute,,Tamil Nadu  
C.Madhya Pradesh. Degree College,,Uttar Pradesh  
C.N.I. Teacher Training Institute,,Kerala  
C.N.K. Reddy College Of Business Mgt,Bangalore  ,Karnataka  
C.N.K. Reddy College Of Education,,Karnataka  
C.N.R. Arts & Science College,Piler  ,Andhra Pradesh  
C.P. & Berar Education Societys Arts & Commerce College,,Maharashtra  
C.P. Mahila Mahavidyalaya,,Madhya Pradesh  
C.P.A. College,Theni  ,Tamil Nadu  
C.P.C.L. Polytechnic College,Salem  ,Tamil Nadu  
C.P.M. Degree College,Allahabad  ,Uttar Pradesh  
C.R. College Ccc,Guntur  ,Andhra Pradesh  
C.R. College Of Education,,Haryana  
C.R. Institute Of Education,,Haryana  
C.R. Institute Of Management Studies,Bhopal  ,Madhya Pradesh  
C.R. Law College,Hissar  ,Haryana  
C.R. Memorial Tt College,,Rajasthan  
C.R. Reddy Degree College,Rayachoti  ,Andhra Pradesh  
C.R. Reddy Law College,Eluru  ,Andhra Pradesh  
C.R.C. Techer Training College College,,Rajasthan  
C.R.R. College Of Eduction,,Andhra Pradesh  
C.S. Jain College Of Education,,Tamil Nadu  
C.S. Jain College Of Physical Education,,Tamil Nadu  
C.S. Jain Teacher Training Institute,,Tamil Nadu  
C.S. Mahavidylaya,,Uttar Pradesh  
C.S. Tubachi Education Society,,Karnataka  
C.S.I. Bishop Appasamy College Of Arts And Science,Coimbatore  ,Tamil Nadu  
C.S.I. College Of Education,,Tamil Nadu  
C.S.I. Darling Selvabai Thavaraj David College Of Arts & Science For Women,Madurai  ,Tamil Nadu  
C.S.I. Jeyaraj Annapackiam College,Tirunelveli  ,Tamil Nadu  
C.S.I. Polytechnic College,Chennai  ,Tamil Nadu  
C.S.I. Rayalaseema Diocese Institute Of Mgt. & Tech,Anantapur  ,Andhra Pradesh  
C.S.I. Teacher Training Institute,,Kerala  
C.S.I. Teacher Training Institute,,Tamil Nadu  
C.S.I. Teacher Training Institute For Women,,Tamil Nadu  
C.S.I.Institute Of Technology,Kanyakumari  ,Tamil Nadu  
C.S.K.M. College Of Law,Rajahmundry  ,Andhra Pradesh  
C.T. College Of Education,,Punjab  
C.T.Insitute Of Management & Information Tech,,Punjab  
C.T.M. College Of Arts And Science,Chennai  ,Tamil Nadu  
"C.U Shah Medical College, Surendranagar",,Gujarat  
C.V. Raja Reddy Memorial Degree College,Chitoor  ,Andhra Pradesh  
C.V. Raman College Of Education,,Madhya Pradesh  
C.V. Raman Degree College,Mancherial  ,Andhra Pradesh  
C.V.L.N.R. Insitute Of Science & Technology,Anantapur  ,Andhra Pradesh  
C.V.S.R. College Of Engineering.,Ghatkesar  ,Andhra Pradesh  
Caarmel Engineering College,Pathanamthitta  ,Kerala  
Cachar College,Silchar  ,Assam  
Calcutta Girls B.T. College,,West Bengal  
Calcutta Girls College,,West Bengal  
Calcutta Institute Of Engineering And Management,Calcutta  ,West Bengal  
Calcutta Institute Of Technology,Howrah  ,West Bengal  
Calcutta National Medical College,Calcutta  ,West Bengal  
Calicut Orphanage Tti,,Kerala  
Calicut University Teacher Education Centre,,Kerala  
Calicut University Teacher Eduction Centre,,Gujarat  
Cambridge College Of Education,,Haryana  
Cambridge College Of Education (For Girls),,Haryana  
Cambridge Court College Of Education,,Rajasthan  
Cambridge Institute Of Technology,Bangalore  ,Karnataka  
Cambridge Institute Of Technology Jharkhand,Ranchi  ,Jharkhand  
Camellia Institute Of Technology,Calcutta  ,West Bengal  
Camellia School Of Business Management,Calcutta  ,West Bengal  
Camellia School Of Engineering & Technology,Calcutta  ,West Bengal  
Campus School Department Of Edn,,Uttar Pradesh  
Canara College,,Karnataka  
Canara Engineering College,,Karnataka  
Cancer Chikitsalya (Jan Vikas Nyas) Nursing Mahavidyalaya,,Madhya Pradesh  
"Cancer Institute, College Of Oncological Sciences, Chennai",Chennai  ,Tamil Nadu  
Cane Societies Nehru Degree (Pg) College,,Uttar Pradesh  
Cape Institute Of Technology,Tirunelveli  ,Tamil Nadu  
Capital Law College,Bhubaneswar  ,Orissa  
Capitol Teachers Training College,,Karnataka  
Capitol Teachers Training Institution,,Karnataka  
Capitonia Teacher Training Institute For Women,,Karnataka  
Capt Haardev Singh College Of Education,,Haryana  
Captain Sukhwasi Singh Smarak Janta Mahavidyalaya,,Uttar Pradesh  
Cardamom Planters Association College,Theni  ,Tamil Nadu  
Care Degree College,Nizamabad  ,Andhra Pradesh  
Career College,,Madhya Pradesh  
Career College Of Education & Technology,,Madhya Pradesh  
Career College Of Law,Bhopal  ,Madhya Pradesh  
Career Degree College,Brodipet  ,Andhra Pradesh  
Career Institute Of Technology And Management,Faridabad  ,Haryana  
Career Teacher Training College,,Rajasthan  
Carlin Telugu Pandit College,,Andhra Pradesh  
Carlo Bonvini Pg College,Mahabubnagar  ,Andhra Pradesh  
Carmel College,,Kerala  
Carmel College Of Arts Science Commerce For Women,,Goa  
Carmel Teacher Training Institute Pakyong,,Sikkim  
Carrier College,,Madhya Pradesh  
Cath Erine Inst Itute Of Elementry Teacher Educat,,Andhra Pradesh  
Catherine College Of Education,,Andhra Pradesh  
Catholicate College,,Kerala  
Cattamanchi Ramalinga Reddy College Of Education,,Andhra Pradesh  
Cauvery B Ed College,,Karnataka  
Cauvery College,,Karnataka  
Cauvery College For Women,Trichy  ,Tamil Nadu  
Cauvery College Of Engineering And Technology,Trichy  ,Tamil Nadu  
Cauvery D Ed College,,Karnataka  
Cbae Baireveshwara College Of Physical Education,,Karnataka  
Centenary College Of Physical Education,,Karnataka  
Centenary College Physical Education,,Karnataka  
Center For Environmental Law,Delhi  ,Delhi  
Center For Environmental Planning And Technology,,Gujarat  
Center For Higher Studies & Research For A A H Edu,,Madhya Pradesh  
Central Acedemy Teachers Training College,,Rajasthan  
Central Agricultural University,,Manipur  
Central College Of Engineering & Management,Raipur  ,Chhattisgarh  
Central College Of Information Technology,,Chhattisgarh  
Central Electrochemical Research Institute Cecri,Karaikudi  ,Tamil Nadu  
"Central Health Education Bureau, New Delhi",Delhi  ,Delhi  
Central India College Of Education,,Madhya Pradesh  
Central India College Of Law,Nagpur  ,Maharashtra  
Central India Institute Of Technology,Indore  ,Madhya Pradesh  
Central Institute Of Agricultural Engineering,Bhopal  ,Madhya Pradesh  
Central Institute Of Business Research Development,Nagpur  ,Maharashtra  
Central Institute Of English & Foreign Languages,,Andhra Pradesh  
Central Institute Of Fisheries Education,,Maharashtra  
Central Institute Of Higher Tibetan Studies,Varanasi  ,Uttar Pradesh  
Central Institute Of Plastics Engineering & Technology,Ahmedabad  ,Gujarat  
Central Institute Of Plastics Engineering & Technology,Bhopal  ,Madhya Pradesh  
Central Institute Of Plastics Engineering & Technology Bhubaneswar,,Orissa  
Central Institute Of Plastics Engineering & Technology Chennai,Chennai  ,Tamil Nadu  
Central Institute Of Plastics Engineering & Technology Karnataka,Mysore  ,Karnataka  
Central Institute Of Plastics Engineering & Technology Patna,Hajipur  ,Bihar  
Central Institute Of Plastics Engineering & Technology Uttar Pradesh,Lucknow  ,Uttar Pradesh  
Central Institute Of Psychiatry,Ranchi  ,Jharkhand  
Central Institute Of Tool Design,Hyderabad  ,Andhra Pradesh  
Central Instt Of Edu University Of Delhi,,Delhi  
Central Law College,Salem  ,Tamil Nadu  
Central Polytechnic College,Thanjavur  ,Tamil Nadu  
Central Research Institute,,Himachal Pradesh  
Central Womens College Of Education,,Uttar Pradesh  
Centre For Advanced Study In Psychology Utkal Univ,,Orissa  
Centre For Development Of Advance Computing,Mohali  ,Punjab  
"Centre For Develpoment Of Advanced Computing,Centre Of India",Noida  ,Uttar Pradesh  
Centre For Distance Education,,Tamil Nadu  
Centre For Human Initiative And Education Farther,,Madhya Pradesh  
Centre For It Education,Bhubaneswar  ,Orissa  
Centre For Management Research & Development,Pune  ,Maharashtra  
Centre For Management Studies,Jatni  ,Orissa  
Centre For Management Technology,Noida  ,Uttar Pradesh  
Centurion Institute Of Professional Studies,Jaipur  ,Rajasthan  
Century Foundation College Of Education,,Tamil Nadu  
Century Foundation Teacher Training Institute,,Tamil Nadu  
Century Foundation Teachers,,Tamil Nadu  
Centwin Institute Of Teacher Training,,Tamil Nadu  
Ch Charan Siggn University,Meerut  ,Uttar Pradesh  
Ch Ishwar Singh Kanya Mahavidyalaya,,Haryana  
Ch. Baluram Godara Government Girls College,,Rajasthan  
Ch. Charan Singh Degree College,,Uttar Pradesh  
Ch. Charan Singh Shivden Singh College,,Uttar Pradesh  
Ch. Devi Lal College Of Education,,Haryana  
Ch. Devi Lal Memorial Engineering College,Sirsa  ,Haryana  
Ch. Devi Lal Post Graduate Regional Centre,,Haryana  
Ch. Harchand Singh Mahavidhyalaya,,Uttar Pradesh  
Ch. Harchand Singh Mahavidyalaya,,Uttar Pradesh  
Ch. Hetram Johari Lal Memo College Of Education,,Haryana  
Ch. Institute Of Management And Commerce,Indore  ,Madhya Pradesh  
Ch. Kapoori Ram College Of Education,,Haryana  
Ch. Katar Singh Memorial College Of Education,,Haryana  
Ch. Mahkar Singh Girls College Of Education,,Uttar Pradesh  
Ch. Matu Ram College Of Education,,Haryana  
Ch. Mota Ram Meel Memorial College Of Education,,Rajasthan  
Ch. Mukhtiyar Singh Yadav Degree College,,Uttar Pradesh  
Ch. Multan Singh College Of Education,,Uttar Pradesh  
Ch. Narendra Singh College,,Uttar Pradesh  
Ch. P.R. Memorial College Of Education,,Haryana  
Ch. P.R.M. College Of Education,,Haryana  
Ch. Parma Ram Godara Shikshak Prashikshan College,,Rajasthan  
Ch. Pratap Singh Memorial College Of Edn,,Haryana  
Ch. R.R. Memorial College Of Education,,Haryana  
Ch. Raghunath Singh Mahavidyalaya,,Uttar Pradesh  
Ch. Rajmal College Of Education,,Haryana  
Ch. S D St Theresas College For Women,Eluru  ,Andhra Pradesh  
Ch. Shivnath Singh Shandilya (P.G) College,,Uttar Pradesh  
Ch. Suraj Singh Mahavidylaya,,Uttar Pradesh  
Ch. Tulsiram Yadav Mahavidyalaya,,Uttar Pradesh  
Ch.Nathu Singh Mahavidylaya,,Uttar Pradesh  
Chacha Satya Pal Tuli Memorial College Of Education,,Punjab  
Chacha Vishal Singh Degree College,,Uttar Pradesh  
Chadalawada Ramanamma Engineering College,Tirupati  ,Andhra Pradesh  
Chaiduar College,Sonitpur  ,Assam  
Chaitanya Bhahuuddeshya Shikshan Prasarak Mandal,,Maharashtra  
Chaitanya Bharathi Degree College,Chirala  ,Andhra Pradesh  
"Chaitanya Bharathi Degree College, Nalgonda",Nalgonda  ,Andhra Pradesh  
"Chaitanya Bharathi Degree College, Siddipet",Siddipet  ,Andhra Pradesh  
Chaitanya Bharathi Institute Of Technology,Hyderabad  ,Andhra Pradesh  
Chaitanya College Of Education,,Andhra Pradesh  
Chaitanya Degree & Pg College For Women,Visakhapatnam  ,Andhra Pradesh  
Chaitanya Degree College,Krishna  ,Andhra Pradesh  
"Chaitanya Degree College For Women, Mancherial",Mancherial  ,Andhra Pradesh  
"Chaitanya Degree College, Badvel",Badvel  ,Andhra Pradesh  
"Chaitanya Degree College, Budhavaram",Krishna  ,Andhra Pradesh  
"Chaitanya Degree College, Kakinada",Kakinada  ,Andhra Pradesh  
"Chaitanya Degree College, Razole",Razole  ,Andhra Pradesh  
"Chaitanya Degree College, Vizianagaram",Vizianagaram  ,Andhra Pradesh  
Chaitanya E.S. Degree College,Srikakulam  ,Andhra Pradesh  
Chaitanya Engineering College,Hyderabad  ,Andhra Pradesh  
Chaitanya Institute Of Computer Science,Kakinada  ,Andhra Pradesh  
Chaitanya Institute Of Engineering & Technology,Hyderabad  ,Andhra Pradesh  
Chaitanya Institute Of Science & Technology,Kakinada  ,Andhra Pradesh  
Chaitanya Kalashala,Rangareddy  ,Andhra Pradesh  
Chaitanya Pg College,Hanamakonda  ,Andhra Pradesh  
Chaitanya Teachers Training Institute,,Karnataka  
Chaithanya Bharathi Degree College For Women,Suryapet  ,Andhra Pradesh  
Chaithanya D Ed College,,Karnataka  
Chajju Ram College Education,,Haryana  
Chajju Ram Memorial Jat College,,Haryana  
Chakan Shikshan Mandals Arts & Commerce College,,Maharashtra  
Chakdaha College,,West Bengal  
Chakradhar Degree College,Guntur  ,Andhra Pradesh  
Chakravartula Bhaskara Rao (Cbr) Degree College,Pithapuram  ,Andhra Pradesh  
Chalapathi Institute Of Engineering & Technology,Kakinada  ,Andhra Pradesh  
Chalapati Degree College,Guntur  ,Andhra Pradesh  
Chamarajendra Academy Visual Arts,,Karnataka  
Chamaria Anchalik College,Kamrup  ,Assam  
Chamba Mi Millennium B Ed College,,Himachal Pradesh  
Chambal Bed Mahavidyalaya,,Madhya Pradesh  
Chamber Of Commerce Manali Ramakrishna Polytechnic College,Tuticorin  ,Tamil Nadu  
Chameli Devi Durga Prasad Girls Degree College,,Uttar Pradesh  
Chamelidevi Institute Of Technology & Management,Indore  ,Madhya Pradesh  
Champhai College,,Mizoram  
Chanakya Adhyapan Mandir,,Gujarat  
Chanakya B Ed College,,Gujarat  
"Chanakya Degree College, Jammikunta",Jamikunta  ,Andhra Pradesh  
"Chanakya Degree College, Mancherial",Mancherial  ,Andhra Pradesh  
"Chanakya Degree College, Nirmal",Nirmal  ,Andhra Pradesh  
Chanakya Institute Of Management,Mohali  ,Punjab  
Chanakya Ptc College,,Gujarat  
Chanakya Shikshan Mahavidyalaya,,Gujarat  
Chanchal College,,West Bengal  
Chand Bibi College Of Education,,Karnataka  
Chandanvan Institute Of Education,,Uttar Pradesh  
Chanddy Polytechnic College,Tiruvannamalai  ,Tamil Nadu  
Chandernagore Government College,,West Bengal  
Chandi Das Mahavidyalaya,,West Bengal  
Chandibali College,,Orissa  
Chandigarh College Of Education,,Punjab  
Chandigarh College Of Engineering And Technology,Chandigarh  ,Chandigarh  
Chandigarh Engineering College,Mohali  ,Punjab  
Chandmal Tarachand Bara College Of Arts Commerce & Science,,Maharashtra  
Chandra Bhagabai Yelgulwar Adhyapak Vidyalaya,,Maharashtra  
Chandra Bhan Singh Memorial Shikshan Sansthan,,Uttar Pradesh  
Chandra Chellappan College Of Education,,Tamil Nadu  
Chandra Kamal Bejbarua College,Jorhat  ,Assam  
Chandra Kamal Bezharua Commerce College,,Assam  
Chandra Kanta Hazarika College Dibrugarh,,Assam  
Chandra Sekhar College,,Orissa  
Chandra Shekhar Azad Institute Of Science & Technology,,Uttar Pradesh  
Chandra Shekhar Azad University,Kanpur  ,Uttar Pradesh  
Chandra Teacher Training School,,Tamil Nadu  
Chandrakala Devi Sarda Degree College,Vizianagaram  ,Andhra Pradesh  
Chandrakant Patil Memorial D Ed College,,Karnataka  
Chandrakanti Ramawati Devi Arya Mahila P G Colle,,Uttar Pradesh  
Chandrakanti Ramwati Devi Arya Mahila Pg College,,Uttar Pradesh  
Chandrakona Vidyasagar Mahavidyalaya,,West Bengal  
Chandralop Shikshan Prasarak Mandal,,Maharashtra  
Chandrapur Adhyapak Vidyalaya,,Maharashtra  
Chandrapur College,,West Bengal  
Chandrashekhar Shikshamahavidyalaya,,Madhya Pradesh  
Chandravati College Of Education
D A V Centanary College,,Himachal Pradesh  
D A V Centenary College,,Haryana  
D A V College,,Himachal Pradesh  
D A V College Bihar,,Bihar  
D A V College Cheeka,,Haryana  
D A V College For Girls,,Haryana  
D A V College For Women,,Haryana  
D A V College Haryana,,Haryana  
D A V College Himachal Pradesh,,Himachal Pradesh  
D A V College Karnal,,Haryana  
D A V College Naneola,,Haryana  
D A V College Of Education For Women Punjab,,Haryana  
D A V College Pehowa,,Haryana  
D A V College Pundari,,Haryana  
D A V College Sadhaura,,Haryana  
D B College,,Bihar  
D B K N College,,Bihar  
D Banumaiahs College Commerce Arts,,Karnataka  
D D Chokshi College Secondary Education,,Gujarat  
D D Thaker Arts K J Patel Commerce College,,Gujarat  
D G Shikshan Mahavidyalaya,,Gujarat  
D H S K College,,Assam  
D J College Of Engineering And Technology.,Ghaziabad  ,Uttar Pradesh  
D K College,,Bihar  
D K Govt College For Women,Nellore  ,Andhra Pradesh  
D K M College For Women,Vellore  ,Tamil Nadu  
D K V Arts And Science College,,Gujarat  
D L R Degree College,Madanpalle  ,Andhra Pradesh  
D M Patel Arts S S Patel Commerce College,,Gujarat  
D P Vipra College,,Chhattisgarh  
D P Vipra Law College,,Chhattisgarh  
D R G College For Women,Tadepalligudem  ,Andhra Pradesh  
D R G Govt Degree College,Tadepalligudem  ,Andhra Pradesh  
D R M Science College,,Karnataka  
D R N S C V S College,Guntur  ,Andhra Pradesh  
D S College,,Bihar  
D V S College Arts Science,,Karnataka  
D V S Evening College,,Karnataka  
D. Y. Patil College Of Engineering And Technology,,Maharashtra  
D.A.N. College Of Education For Women,,Punjab  
D.A.V. (Pg) College,,Uttar Pradesh  
D.A.V. College,, Orissa  
D.A.V. College,, Punjab  
D.A.V. College, Muzaffarnagar  , Uttar Pradesh  
D.A.V. College,,Orissa  
D.A.V. College Of Education Vpo,,Haryana  
D.D. Institute Of Advance Studies,, Uttaranchal  
D.D. Kotiwala Munivipal Law College, Porbandar  , Gujarat  
D.D. Mahila Mahavidyalaya,, Uttar Pradesh  
D.D. Shinde Sarkar College,, Maharashtra  
D.D.R. Bed College,, Andhra Pradesh  
D.D.Trivedi Med Colleage,, Gujarat  
D.E.S. Law College, Pune  , Maharashtra  
D.E.V. College,, Uttar Pradesh  
D.Ed College,, Karnataka  
D.Ed College,, Maharashtra  
D.G. Government Arts College For Women, Mayiladuthurai  , Tamil Nadu  
D.G. Ruparel College Of Arts Science & Commerce,, Maharashtra  
D.G. Vaishnav College, Chennai  , Tamil Nadu  
D.G.B. Dayanand Evening Law College, Sholapur  , Maharashtra  
D.G.M. College Of Education,, Haryana  
D.G.M.P. D.Ed College,, Karnataka  
D.G.Melmalagi Ayurved Medical College,, Karnataka  
D.H.M. Teacher Training Institute,, Kerala  
D.H.S.K. Law College, Dibrugarh  , Assam  
D.I.E.T. Balangir,, Orissa  
D.I.E.T. Cuttack,, Orissa  
D.I.E.T. Dhenkanal,, Orissa  
D.I.E.T. Jajpur,, Orissa  
D.I.E.T. Jaypore,, Orissa  
D.I.E.T. Kalahandi,, Orissa  
D.I.E.T. Keonjhar,, Orissa  
D.I.E.T. Khalikote,, Orissa  
D.I.E.T. Khurda,, Orissa  
D.I.E.T. Mayurbhanj Baripada,, Orissa  
D.I.E.T. Mokokchung,, Nagaland  
D.I.E.T. Remuna Balasore,, Orissa  
D.I.E.T. Sambalpur,, Orissa  
D.I.E.T. Tikabali,, Orissa  
D.I.E.T. Tuensang,, Nagaland  
D.J. Academy For Managerical Excellence, Coimbatore  , Tamil Nadu  
D.J. College,, Uttar Pradesh  
D.J. College Of Dental Science & Research,, Uttar Pradesh  
D.K. Shivakumar Teachers Training Institute,, Karnataka  
D.K.R. College Of Education,, Tamil Nadu  
D.K.R. Teacher Training Institute,, Tamil Nadu  
D.K.T. Teacher Training Institute For Women,, Tamil Nadu  
D.M College Of Teacher Education,, Manipur  
D.M. And R Teacher Training Institute,, Tamil Nadu  
D.M. College Of Arts,, Manipur  
D.M. College Of Commerce,, Manipur  
D.M. College Of Education,, Punjab  
D.M. College Of Science,, Manipur  
D.M. College Of Teacher Education Imphal,, Manipur  
D.M.College Of Education,, Punjab  
D.M.I. Institute Of Teachers Training Institute,, Tamil Nadu  
D.M.S. Mandals D Ed College,, Karnataka  
D.N. College,, Uttar Pradesh  
D.N. Jain College,, Madhya Pradesh  
D.N. Postgraduate College,, Uttar Pradesh  
D.N.M. D.Ed College Vidyavardhini Education,, Maharashtra  
D.N.R. College, Bhimavaram  , Andhra Pradesh  
D.N.R. College If Law, Bhimavaram  , Andhra Pradesh  
D.N.R. College Of Education,, Andhra Pradesh  
D.N.R. College Of Elementry Education,, Andhra Pradesh  
D.N.R. Government Degree College For Women, Palakol  , Andhra Pradesh  
D.N.S. College Of Engg. & Tech,, Uttar Pradesh  
D.P. Institute Of Advanced Studies In Education,, Orissa  
D.P. Vipra P G College,, Chhattisgarh  
D.P.B. Dayanand College Of Education,, Maharashtra  
D.P.Bhosale College,, Maharashtra  
D.P.C. Polytechnic College, Perambalur  , Tamil Nadu  
D.P.I.A.S.E.,, Orissa  
D.P.M. Institute Of Education,, Uttar Pradesh  
D.P.S. College Of Education,, Haryana  
D.P.S. College Of Education,, Madhya Pradesh  
D.R. Mahila Shikshak Prashikshan Mahavidyalaya,, Rajasthan  
D.R.M. College,, Rajasthan  
D.R.S. Bed College,, Madhya Pradesh  
D.R.S. College, Khammam  , Andhra Pradesh  
D.R.V.D.A.V. Centenary College,, Punjab  
"D.R.W. College, Gudur", Gudur  , Andhra Pradesh  
D.S. Arya College Of Eduation,, Haryana  
D.S. College, Aligarh  , Uttar Pradesh  
D.S. Memorial College Of Education,, Madhya Pradesh  
D.S.C. Teachers Training College,, Rajasthan  
D.S.G. Teacher Training Institute,, Tamil Nadu  
D.S.M. College,, Maharashtra  
D.S.M. Degree College,, Uttar Pradesh  
D.S.N. College,, Uttar Pradesh  
D.S.N. Degree (Pg) College,, Uttar Pradesh  
D.S.R. Hindu College Of Law, Machilipatnam  , Andhra Pradesh  
D.V. Degree Colege,, Uttar Pradesh  
D.V. Gundappa Teachers Training Institute,, Karnataka  
D.V.C. College Of Education,, Tamil Nadu  
D.V.C. Teachers Training Institute,, Tamil Nadu  
D.V.D. Teacher Training Institute,, Tamil Nadu  
D.V.M. College Of Education, Nalgonda  , Andhra Pradesh  
D.V.M. Degree College, Hyderabad  , Andhra Pradesh  
D.V.R. College Of Engineering And Technology, Mandal  , Andhra Pradesh  
Dada Dukhayal College Of Education,, Gujarat  
Dada Khalandaria College Of Education,, Andhra Pradesh  
Dada Patil Mahavidyalaya,, Maharashtra  
Dada Patil Rajale Arts And Science College,, Maharashtra  
Dadasaheb Divekar College Of Education,, Maharashtra  
Dadasaheb Ramesh Singh Rajput College Of Phy Edu,, Maharashtra  
Dadhimathi Mahila Shikshak P Mahavidyalaya,, Rajasthan  
Dadhimati Teachers Training College,, Rajasthan  
Dadi Institute Of Engineering And Technology, Visakhapatnam  , Andhra Pradesh  
Dadi Satyanaraya College Of Education,, Andhra Pradesh  
Dadi Veera Naidu College, Anakapalle  , Andhra Pradesh  
Daffodils Teachers Training Institute,, Karnataka  
Daggubatichanchuramayye Memorial Degree College, Prakasam  , Andhra Pradesh  
Dahiwadi College,, Maharashtra  
Dahod Anaj Mahajan Sarvajanaik Education Society,, Gujarat  
Dahya Bhai Patel College Of Phy Edn,, Maharashtra  
Daita Madhusudhana Sastry Sri Venkateswara Hindu College Of Engineering, Machilipatnam  , Andhra Pradesh  
Dakshin Bharat Hindi Pracharak Training College,, Andhra Pradesh  
Dakshin Kamrup College, Kamrup  , Assam  
Dakshin Kamrup Girls' College, Kamrup  , Assam  
Dalgoma Anchalik College, Goalpara  , Assam  
Dalitha Mahasabha Davangere,, Karnataka  
Dalitmitra V T Nagpur D Ed College,, Maharashtra  
Dalmia College,, Orissa  
Dalvoy D Ed College,, Karnataka  
Damdei Christian College,, Manipur  
Damyantitai Deshmukh Bed College,, Maharashtra  
Danie Inbam Teacher Training Institute,, Tamil Nadu  
Danie Teacher Training Institute,, Tamil Nadu  
Danielson Degree College,, Madhya Pradesh  
Darbar Gopaldas Shikshan Mahavidyalaya,, Gujarat  
Darbari Lal Foundation College,, Uttar Pradesh  
Darbhanga Medical College, Darbhanga  , Bihar  
Daripally Anantha Ramulu College Of Engineering & Technology, Khammam  , Andhra Pradesh  
Darjeeling Government College,, West Bengal  
Darrong College, Tezpur  , Assam  
Darsh College Of Education,, Haryana  
Darshan Singh Smriti Mahavidyala,, Uttar Pradesh  
Darul Huda Teacher Training Institute,, Kerala  
Darul Uloum Teachers Training Institute,, Kerala  
Darunnajath Arabic College,, Kerala  
Darusalam College Of Law, Hyderabad  , Andhra Pradesh  
Dasarth Dev Memorial College Khowai Government College,, Tripura  
Daskhin Guwahati B Ed College,, Assam  
Dasmesh Girls College Of Education,, Punjab  
Dasmesh Khalsa College,, Punjab  
Dattaaguru Sai Maa Shikshan Shastra Mahavidyalaya,, Maharashtra  
Dattaji Rao Kadam Artscommerce & Science College,, Maharashtra  
Dattajirao Kadam Tech.Ed.Soc'S Textile &. Engineering Institute, Kolhapur  , Maharashtra  
Dattatray Govind Rao Walse Patil Med College,, Maharashtra  
Dattatreya Teacher Training Institute,, Karnataka  
Dau Dayal Mahila (P G ) College,, Uttar Pradesh  
Daudnagar College,, Bihar  
Daulat Ram College, Delhi  , Delhi  
Daulatbhai Trivedi Law College, Ahmedabad  , Gujarat  
Dav College,, Uttar Pradesh  
Dav College For Girls,, Punjab  
Dav College Of Education,, Punjab  
Dav Institute Of Engineering & Technology,, Haryana  
Dav Institute Of Engineering & Technology, Jalandhar  , Punjab  
Dav Shiksha Avam Bahuudeshiya Mahavidyalaya,, Madhya Pradesh  
David Hare Training (Iase) College Calcutta,, West Bengal  
David Memorial College Of Education For Women,, Andhra Pradesh  
David Memorial Degree & Pg College, Secunderabad  , Andhra Pradesh  
David Memorial Institute Of Mgt, Secunderabad  , Andhra Pradesh  
David Memorial Teacher Training Institute,, Andhra Pradesh  
Davidraja Teacher Training Institute,, Tamil Nadu  
Dawarka Dass Memorial Sai College Of Edn,, Himachal Pradesh  
Daxina Murti Bal Adhyapan Mandir,, Gujarat  
Daya Nand College,, Haryana  
Daya Teacher Training Institute,, Kerala  
Dayal Singh College,, Haryana  
Dayalbagh Education Institute (Deemed University),, Uttar Pradesh  
Dayalbagh Educational Institute, Agra  , Uttar Pradesh  
Dayan Prasark Mandals College Arts,, Goa  
Dayanad Brijendra Swarup P G College,, Uttar Pradesh  
Dayananad Bachhrawan Degree College,, Uttar Pradesh  
Dayanand Academy Of Management Studies, Kanpur  , Uttar Pradesh  
Dayanand Amarnath College Of Education,, Punjab  
Dayanand Anglo Vedic (Pg) College,, Uttar Pradesh  
Dayanand Arya Kanya Degree College,, Uttar Pradesh  
Dayanand Arya Kanya Mahavidyalaya,, Maharashtra  
Dayanand Ayurvedic College,, Punjab  
Dayanand Bachhrawan Degree College,, Uttar Pradesh  
Dayanand College,, Rajasthan  
Dayanand College Of Arts,, Maharashtra  
Dayanand College Of Commerce,, Maharashtra  
Dayanand College Of Law, Kanpur  , Uttar Pradesh  
Dayanand Girls (Pg) College,, Uttar Pradesh  
Dayanand Girls College,, Uttar Pradesh  
Dayanand Mahila Mahavidyalaya,, Haryana  
Dayanand Mathradas College,, Punjab  
Dayanand Medical College & Hospital, Ludhiana  , Punjab  
Dayanand Public School,, Haryana  
Dayanand Sagar College Of Law, Bangalore  , Karnataka  
Dayanand Science College,, Maharashtra  
Dayanand Vaidik Post Graduate College,, Uttar Pradesh  
Dayanand Women Training College Deptt Of Edu,, Uttar Pradesh  
Dayanand Womens Training College,, Uttar Pradesh  
Dayanand Womens Training College,, Uttaranchal  
Dayananda Sagar Business School, Bangalore  , Karnataka  
Dayananda Sagar College Of Education,, Karnataka  
Dayananda Sagar College Of Engineering, Bangalore  , Karnataka  
"Dayanandasagar College Of Sc., Arts, Commerce", Bangalore  , Karnataka  
Dayapuram Arts & Science College For Women, Kozhikode  , Kerala  
Dayawanti Memorical College Of Education,, Haryana  
Dayawanti Punj Training Institute,, Uttar Pradesh  
Daynand Law College, Latur  , Maharashtra  
Db K Jankalyan Shikshan Sanstha,, Maharashtra  
Dbhps Acharya Vinoba Bhave Shiksha Snatak College,, Karnataka  
Dbhps B Ed College,, Kerala  
Dbhps Basaveswara Shiksha Snatak College,, Karnataka  
Dbhps College & Pracharak Vidyalaya,, Andhra Pradesh  
Dbhps Dr B D Jatti College Of Education,, Karnataka  
Dbhps Dr B D Jatti Shiksha Snatak College,, Karnataka  
Dbhps Hindi Pracharak Prashikshan Mahavidyalaya,, Andhra Pradesh  
Dbhps Hindi Pracharak Training College,, Andhra Pradesh  
Dbhps Hindi Pracharak Training College,, Tamil Nadu  
Dbhps Indira Gandhi Shiksha Snatak College,, Karnataka  
Dbhps Lalbahadur Shastri B Ed College,, Karnataka  
Dbhps M S Bharathi Hindi Shikshak Trng College,, Tamil Nadu  
Dbhps Mahatma Gandhi Shiksha Snatak College,, Karnataka  
Dbhps Mahaveer Shiksha Snatak College,, Karnataka  
Dbhps Rajiv Gandhi B Ed College,, Karnataka  
Dbhps S Nijalingappa Shiksha Snatak College,, Karnataka  
Dbhps Sardar Vallabhai Patel B Ed College,, Karnataka  
Dbhps Training College,, Andhra Pradesh  
Dcs College Of Education,, Haryana  
De Paul Institute Os Science & Technology, Kochi  , Kerala  
Deben Mahato Teachers Training Institute,, West Bengal  
Deccan College Of Education,, Andhra Pradesh  
Deccan College Of Education,, Karnataka  
Deccan College Of Education For Women,, Karnataka  
Deccan College Of Engineering And Technology, Hyderabad  , Andhra Pradesh  
"Deccan College Of Medical Science, Hyderabad", Hyderabad  , Andhra Pradesh  
Deccan College Post Graduate And Research Institute,, Maharashtra  
Deccan Ded College,, Karnataka  
"Deccan Education Society, Pune"" , The Navinchandra Mehta Institute Of Technology And Development", Mumbai  , Maharashtra  
Deccan M Ed College,, Karnataka  
Deccan School Of Mgt, Hyderabad  , Andhra Pradesh  
Deccan Teacher Training Institute,, Karnataka  
Deeksha Degree College, Nirmal  , Andhra Pradesh  
Deen Dayal College,, Uttar Pradesh  
Deen Dayal College Of Law, Muzaffarnagar  , Uttar Pradesh  
Deen Dayal College Of Management,, Uttar Pradesh  
Deen Dayal Engineering College, Tiruvallur  , Tamil Nadu  
Deen Dayal Mahesh College For Education,, Himachal Pradesh  
Deen Dayal Rustagi College Of Education,, Haryana  
Deen Dayal Upadhayay Government Degree College,, Uttar Pradesh  
Deen Dayal Upadhyay B Ed College,, Uttar Pradesh  
Deen Dayal Upadhyay Gorakhpur University, Gorakhpur  , Uttar Pradesh  
Deen Dayal Upadhyaya College, Delhi  , Delhi  
Deen Dayal Upadhyaya Government Degree College,, Uttar Pradesh  
Deep International College For Education,, Rajasthan  
Deep International Educationnsociety,, Rajasthan  
Deep International Tt School,, Rajasthan  
Deep Narayan Singh College,, Bihar  
Deep Paramedical Orgnaisation,, Maharashtra  
Deepanshu Law College, Saharanpur  , Uttar Pradesh  
Deepanshu Womens Degree College,, Uttar Pradesh  
Deepshikha College Of Technical Education, Jaipur  , Rajasthan  
Deepshikha Institute Of Management Studies, Jaipur  , Rajasthan  
Deepshiksha Teachers Training College,, Rajasthan  
Deepthi Degree College, East Godavari  , Andhra Pradesh  
Deesa Nagarpanchayat Arts And Commerce College,, Gujarat  
Deevan Bahadur Padma Rao Mudaliar Womens College, Secunderabad  , Andhra Pradesh  
Defence College Of Education,, Haryana  
Defence Services Staff College, Nilgiris  , Tamil Nadu  
Degloor College,, Maharashtra  
Degree College,, Madhya Pradesh  
Degree College,, Uttar Pradesh  
Degree College,, Uttar Pradesh  
Degree College Of Physical Education,, Gujarat  
Degree College Of Physical Education & Recreation,, Maharashtra  
Degree College Pure Buddhidhar,, Uttar Pradesh  
Dehat Vikas Institute Of Education And Technolgoy,, Haryana  
Dehradun Institute Of Technology, Dehradun  , Uttaranchal  
Dekha Devi Rasiwasia College,, Assam  
Delhi College Of Arts & Commerce, Delhi  , Delhi  
Delhi College Of Engineering, Delhi  , Delhi  
Delhi College Of Studies,, Uttar Pradesh  
Delhi Institute Of Advanced Studies,, Delhi  
Delhi Institute Of Management And Technology,, Uttar Pradesh  
Delhi Institute Of Management Technology, Gannaur  , Haryana  
Delhi Institute Of Tool Engineering, Delhi  , Delhi  
Delhi Kannada Education Society'S Institute, Delhi  , Delhi  
Delhi Nursery Teacher Training Institute,, Delhi  
Delhi Public Academy,, Madhya Pradesh  
Delhi School Of Professional Studies & Res, Delhi  , Delhi  
Delhi Teacher Training College,, Delhi  
Demow College,, Assam  
Dental College,, Karnataka  
Deo Chander Mahavidyalaya,, Bihar  
Deo Indrawati Mahavidyalaya,, Uttar Pradesh  
Deo Sundari Memorial College,, Bihar  
Deoband College Of Higher Education,, Uttar Pradesh  
Deogarh College,, Orissa  
Deoghar College,, Jharkhand  
Deogiri College,, Maharashtra  
Deorao Patil Gramin Vikas Pratishthan,, Maharashtra  
Departmant Of Education,, Andhra Pradesh  
Department Forensic Science, Chennai  , Tamil Nadu  
Department Of Advance Studies & Research, Nagpur  , Maharashtra  
Department Of Business Administraiton, Bhavnagar  , Gujarat  
Department Of Business Administration, Rewa  , Madhya Pradesh  
Department Of Business And Industrial Management, Surat  , Gujarat  
Department Of Business Management, Nagpur  , Maharashtra  
"Department Of Business Management, Kolkata", Calcutta  , West Bengal  
Department Of C S Punjabi University,, Punjab  
Department Of Continuing Education & Ext Prog,, Madhya Pradesh  
Department Of Correspondence Studies,, Chandigarh  
Department Of Education,, Assam  
Department Of Education,, Gujarat  
Department Of Education,, Maharashtra  
Department Of Education,, Tamil Nadu  
Department Of Education & Training,, Andhra Pradesh  
Department Of Education Calicut University,, Kerala  
Department Of Education Dibrugarh University,, Assam  
Department Of Education H N B Garhwal University,, Uttaranchal  
Department Of Education Patna University,, Bihar  
Department Of Education University Of Calcutta,, West Bengal  
Department Of Education University Of Mumbai,, Maharashtra  
Department Of Educational Technology,, Tamil Nadu  
"Department Of Instrumentation Technology, Kurukshetra University",, Haryana  
Department Of Management & Technology Engineering College,, Rajasthan  
Department Of Management Studies, Nadiad  , Gujarat  
Department Of Management Studies, Jalgaon  , Maharashtra  
"Department Of Management Studies, Anna University", Chennai  , Tamil Nadu  
"Department Of Management Studies, Dhanbad", Dhanbad  , Jharkhand  
"Department Of Management Studies, Iit Delhi", Delhi  , Delhi  
Department Of Physcial Education,, Chhattisgarh  
Department Of Physical Education,, Chandigarh  
Department Of Physical Education,, Gujarat  
Department Of Physical Education,, West Bengal  
Department Of Polymer Science Rubber Technology Cochin University,, Kerala  
Department Of Special Education,, Maharashtra  
Department Of Teacher Education,, Haryana  
Dept Of Chemical Tech North University,, Maharashtra  
Dept Of Human Development Sndt University(Women'S),, Maharashtra  
Dept Of Pg Studies & Research In Education,, Karnataka  
Dept. Of Chemical Tech,, Maharashtra  
Deptt Of Education Arunachal University,, Arunachal Pradesh  
Deptt Of Education Bangalore University,, Karnataka  
Deptt Of Education Gulbarga University,, Karnataka  
Deptt Of Education Karnataka University,, Karnataka  
Deptt Of Education Rabindra Bharati University,, West Bengal  
Deptt Of Education University Of Kalyani,, West Bengal  
Deptt Of Physical Education Gujarat Vidyapeeth,, Gujarat  
Deptt Of Studies In Education Mysore University,, Karnataka  
Dera Natung Govt College, Itanagar  , Arunachal Pradesh  
Derabis College,, Orissa  
Dergaon Kamal Dowerah College,, Assam  
Derozio Memorial College,, West Bengal  
Desai Chandulal Manilal Arts And Commerce College,, Gujarat  
Desh Bagat College,, Punjab  
Desh Bhagat College Of Education,, Punjab  
Desh Bhagat Engineering College,, Punjab  
Desh Bhagat Institute Of Education,, Punjab  
Desh Bhagat Pandit Chetandev Govt College Of Edu,, Punjab  
Desh Deepak Adarsh Mahavidyalaya,, Uttar Pradesh  
Deshbandhu College, Delhi  , Delhi  
Deshbandhu College (Evening), Delhi  , Delhi  
Deshbandhu College For Girls,, West Bengal  
Deshbandhu Mahavidyalaya,, West Bengal  
Deshbhakta Ratnappa College Of Commerce, Kolhapur  , Maharashtra  
Deshbhakta Ratnappa Kumbhar College Of Commerce,, Maharashtra  
Deshrstan Dr. Rajendra Prasad Law College, Hazaribag  , Jharkhand  
Dess Bangurnagar Arts Science And Commerce College,, Karnataka  
Dev B Ed Girls College,, Rajasthan  
Dev Bhoomi Institute Of Technology, Dehradun  , Uttaranchal  
Dev Bhoomi Institute Of Technology For Women, Dehradun  , Uttaranchal  
Dev Education College,, Uttar Pradesh  
Dev Kanya Shikshak Prashikshan Mahavidyalaya,, Rajasthan  
Dev Samaj College For Girls,, Haryana  
Dev Samaj College Of Education For Women,, Chandigarh  
Dev Samaj College Of Education For Women,, Punjab  
Dev Shikshak Prashikshan Mahavidyalaya,, Rajasthan  
Dev Teacher Training College,, Rajasthan  
Deva Matha College, Kottayam  , Kerala  
Deva Nagri College,, Uttar Pradesh  
Devaki Amma Memorial Teacher Education College,, Kerala  
Devamatha Arts And Science College, Kannur  , Kerala  
Devan Teacher Training Institute,, Tamil Nadu  
Devanga Arts College, Virudunagar  , Tamil Nadu  
Devarajan Teacher Training Institute,, Tamil Nadu  
Devarasetty Adilakchuma Women'S College, Proddatur  , Andhra Pradesh  
Devasagayam Annathaiyammal Arts & Science Women College, Madurai  , Tamil Nadu  
Devaswon Board College, Kollam  , Kerala  
Devaswon Board Pampa College,, Kerala  
Devathi Venkata Subbaiah College, Prakasam  , Andhra Pradesh  
Devathi Venkata Subbaiah College Of Education,, Andhra Pradesh  
Devbhumi Institute Of Professional Education,, Uttaranchal  
Devchand College,, Maharashtra  
Devendra Degree College,, Uttar Pradesh  
Devendra Nath Janta Mahavidyalaya,, Uttar Pradesh  
Devendranath Jantha Degree College,, Uttar Pradesh  
Devi Ahilya Girls Arts & Commerce Degree College,, Madhya Pradesh  
Devi Ahilya Vishwavidyalaya, Indore  , Madhya Pradesh  
Devi Ahilya Vishwavidyalaya Deptt Of Physical Edu,, Madhya Pradesh  
Devi Dutt Dalmiya Sharirik Shiksha Mahavidyalaya,, Rajasthan  
Devi Singh Kesarbai College,, Madhya Pradesh  
Devi Venkatachalam College Of Education,, Tamil Nadu  
Devi Venkatachalam Teacher Training Institute,, Tamil Nadu  
Devi Vilasom Teacher Training Institute,, Kerala  
Devineni Venkata Ramana & Dr. Hima Sekhar Mic College Of Technology, Krishna  , Andhra Pradesh  
Devki Devi Jain Memorial College For Women,, Punjab  
Devraj Roy College,, Assam  
Devsangha Institute Of Professional Studies And E,, Jharkhand  
Devta Mahavidyalaya,, Uttar Pradesh  
Dewajibhau Budhe Memorial College Of Phy Edn,, Maharashtra  
Dewan Abdul Gani College,, West Bengal  
Dewan Institute Of Management Studies,, Uttar Pradesh  
Dewan Law College, Partapur  , Uttar Pradesh  
Dewan V.S. Institute Of Engineering & Technology, Meerut  , Uttar Pradesh  
Dewanshu Samaj Kalyan Sewa Mahavidyalaya,, Uttar Pradesh  
Dhaanish Ahmed Engineering College, Chennai  , Tamil Nadu  
Dhadhi Mathi Mahila S P Mahavidyalaya,, Rajasthan  
Dhakhakha College,, Assam  
Dhamanagar College,, Orissa  
Dhampur Degree College,, Uttar Pradesh  
Dhanabagiyam Krishnaswamy Mudaliar College For Women, Vellore  , Tamil Nadu  
Dhanaji Nana Mahavidyalaya,, Maharashtra  
Dhanalakshmi College Of Engineering, Kanchipuram  , Tamil Nadu  
Dhanalakshmi Srinivasan College Of Arts & Science For Women, Perambalur  , Tamil Nadu  
Dhanalakshmi Srinivasan College Of Edn For Women,, Tamil Nadu  
Dhanalakshmi Srinivasan College Of Education,, Tamil Nadu  
Dhanalakshmi Srinivasan College Of Engineering And Technology, Chennai  , Tamil Nadu  
Dhanalakshmi Srinivasan College Of Physical Edu,, Tamil Nadu  
Dhanalakshmi Srinivasan Engineering College, Pudukotai  , Tamil Nadu  
Dhanalakshmi Srinivasan Engineering College In Perambalur, Perambalur  , Tamil Nadu  
Dhanalakshmi Srinivasan Polytechnic College, Chennai  , Tamil Nadu  
Dhanalakshmi Teacher Training Institute,, Tamil Nadu  
Dhananjayrao Gadgil College Of Commerce,, Maharashtra  
Dhanbad Law College, Dhanbad  , Jharkhand  
Dhaneswar Rath Institute Of Engineering & Management Studies, Tangi  , Orissa  
Dhanish College Of Engineering, Chennai  , Tamil Nadu  
Dhanpatti Dharma Mahavidyalaya,, Uttar Pradesh  
Dhanraj Bain Jain College, Chennai  , Tamil Nadu  
Dhansura Peoples Co Operative Bank Ltd Mahila Arts Commerce College,, Gujarat  
Dhanvantri College Of Education,, Karnataka  
Dhanwantri Shikshan Va Samajik Pratishthan Vikas,, Maharashtra  
Dhanwate National College,, Maharashtra  
Dharam Jyoti Degree College,, Uttar Pradesh  
Dharam Samaj Mahavidyalaya,, Uttar Pradesh  
Dharamamurthi Rao Bahadur Calavala Cunnan Chettys Hindu College, Chennai  , Tamil Nadu  
Dharamjeevi Institute Professional Education,, Haryana  
Dharampeth Madhya Pradesh. Deo Memorial Science Co,, Maharashtra  
Dharamsamaj Sanskrit College,, Uttar Pradesh  
Dharanidhar College,, Orissa  
Dhareshwar Vidya Va Krida Pratisthan,, Maharashtra  
Dhareshwarvidya Va Krida Prastishthan,, Maharashtra  
Dharma Appa Rao College, Krishna  , Andhra Pradesh  
Dharma Ayurveda Medical Research Institution, Kanchipuram  , Tamil Nadu  
Dharma Samaj P.G. College,, Uttar Pradesh  
Dharmada Govt Ptti Dharmada,, West Bengal  
Dharmambal Ramasamy Arts And Science College, Thanjavur  , Tamil Nadu  
Dharmana Ramalingam Naidu College, Tirupati  , Andhra Pradesh  
Dharmanagar Government College,, Tripura  
Dharmapuram Adinam Arts College, Mayiladuthurai  , Tamil Nadu  
Dharmarathnakara Dr. Mahalingam Institute Of Paramedical Sciences And Research, Erode  , Tamil Nadu  
Dharmasala Mahavidyalaya,, Orissa  
Dharmasinh Desai Institute Commerce,, Gujarat  
Dharmavant College Science Commerce, Hyderabad  , Andhra Pradesh  
Dharmendrasinhji Arts College,, Gujarat  
Dharmjeet Singh Mahavidyalaya,, Uttar Pradesh  
Dharmsingh Desai Institute Of Technology,, Gujarat  
Dharmsinh Desai University, Nadiad  , Gujarat  
Dhemaji College,, Assam  
Dhenkanal College,, Orissa  
Dhenkanal Law College, Dhenkanal  , Orissa  
Dhenkanal Mahila Mahavidyalaya,, Orissa  
Dhing College, Nagaon  , Assam  
Dhirendra Mahila Mahavidyalaya,, Uttar Pradesh  
Dhoraji Sanchalit P T C College,, Gujarat  
Dhoraji Sandhalit B Ed College,, Gujarat  
Dhote Bandhu Science College,, Maharashtra  
Dhruba Chandra Halder College,, West Bengal  
Dhruvarutvij College Of Education,, Gujarat  
Dhubri Girls' College, Dhuburi  , Assam  
Dhubri Law College, Dhuburi  , Assam  
Dhubri Post Graduate Teacher Training College,, Assam  
Dhule Education Society'S College Of Education,, Maharashtra  
Dhyanopsak College Of Physcial Education,, Maharashtra  
Diana College Of Education,, Karnataka  
Diana D Ed College (T T I),, Karnataka  
Dibru College,, Assam  
Dibrugargh Law College, Dibrugarh  , Assam  
Dibrugarh H S Kanoi Commerce College,, Assam  
Dibrugarh University, Dibrugarh  , Assam  
Diet,, Manipur  
Diet Chaltlang,, Mizoram  
Diet Cherrapunjee,, Meghalaya  
Diet Lunglei,, Mizoram  
Diet Thadlaskein,, Meghalaya  
Digambar Jain Adarsh Mahila Sanskrit Pg,, Rajasthan  
Digambarrao Bindu Arts & Commerce College,, Maharashtra  
Digamber Degree College,, Uttar Pradesh  
Digamber Jain Balika Vidyapeeth,, Uttar Pradesh  
Digamber Jain P G College,, Uttar Pradesh  
Diganth Teacher Training Institute,, Karnataka  
Digboi B Ed College,, Assam  
Digboi College,, Assam  
Digboi Mahila Mahavidyalaya,, Assam  
Digijai Nath Pg College,, Uttar Pradesh  
Digvijay Nath L T Training College,, Uttar Pradesh  
Digvijay Nath P G College,, Uttar Pradesh  
Dilip College Of Physical Education,, Maharashtra  
Dilipravji Sopal Shikshan Prasarak And Krida Manda,, Maharashtra  
Dimapur College,, Nagaland  
Dimoria College, Kamrup  , Assam  
Dina Krishna College,, Orissa  
Dinabandhu Andrews College,, West Bengal  
Dinabandhu Institute,, West Bengal  
Dinabandhu Mahavidyalaya,, West Bengal  
Dinabandhu Sahu Law College, Kendrapara  , Orissa  
Dinahata College,, West Bengal  
Dinakar Rao K Shinde College Of Education,, Maharashtra  
Dinkarrao Ram Chandra Mane Mahavidyalaya,, Maharashtra  
Dinshan Daboo Law College, Navsari  , Gujarat  
Diphu Government College,, Assam  
Diphu Law College, Diphu  , Assam  
Directorate Of Distance Education,, Andhra Pradesh  
Directorate Of Distance Education,, Bihar  
Directorate Of Distance Education,, Tripura  
Disha College Of Education,, Haryana  
Disha College Of Information Technology,, Chhattisgarh  
Disha Institute Of Management And Technology, Chandigarh  , Chandigarh  
Disha Institute Of Managemnet & Technology Satya Vihar, Raipur  , Chhattisgarh  
Disha Institute Of Science & Technology,, Uttar Pradesh  
Dispur College, Kamrup  , Assam  
Distance Education Unit Directorate Of Te&Scert,, Orissa  
District Institue Of Education And Training,, Kerala  
District Institute Of Education & Tchrs Training,, Karnataka  
District Institute Of Education & Training,, Arunachal Pradesh  
District Institute Of Education & Training,, Assam  
District Institute Of Education & Training,, Bihar  
District Institute Of Education & Training,, Delhi  
District Institute Of Education & Training,, Haryana  
District Institute Of Education & Training,, Himachal Pradesh  
District Institute Of Education & Training,, Manipur  
District Institute Of Education & Training,, Orissa  
District Institute Of Education & Training,, Sikkim  
District Institute Of Education & Training,, Tripura  
District Institute Of Education & Training,, Uttaranchal  
District Institute Of Education & Training (Diet),, Andhra Pradesh  
District Institute Of Education & Training (Diet),, Arunachal Pradesh  
District Institute Of Education & Training (Diet),, Bihar  
District Institute Of Education & Training (Diet),, Haryana  
District Institute Of Education & Training (Diet),, Himachal Pradesh  
District Institute Of Education & Training (Diet),, Manipur  
District Institute Of Education &Training,, Rajasthan  
District Institute Of Education And Training,, Andhra Pradesh  
District Institute Of Education And Training,, Chhattisgarh  
District Institute Of Education And Training,, Goa  
District Institute Of Education And Training,, Gujarat  
District Institute Of Education And Training,, Jharkhand  
District Institute Of Education And Training,, Karnataka  
District Institute Of Education And Training,, Kerala  
District Institute Of Education And Training,, Madhya Pradesh  
District Institute Of Education And Training,, Meghalaya  
District Institute Of Education And Training,, Pondicherry  
District Institute Of Education And Training,, Punjab  
District Institute Of Education And Training,, Tamil Nadu  
District Institute Of Education And Training,, Uttar Pradesh  
District Institute Of Education And Training Distr,, Chhattisgarh  
District Institute Of Education& Training,, Rajasthan  
District Institute Of Educational Traning,, Maharashtra  
District Institute Of Educqation And Training,, Karnataka  
District Institute Of Eduction And Training(Rural),, Karnataka  
Dit School Of Engineering, Noida  , Uttar Pradesh  
Divine Mother College, Pondicherry  , Pondicherry  
Divine Pre Primary Training Institute,, Karnataka  
Divya Chethana D Edollege,, Karnataka  
Divya College Of Education,, Andhra Pradesh  
Divya College Of Education,, Tamil Nadu  
Divya Drusti Charitable Trust,, Gujarat  
Divya Drusti Charitable Trust B Ed College,, Gujarat  
Divya Jyothi D Ed College,, Karnataka  
Divya Shiksha Gurukul College Of Education,, Punjab  
Diwaliba Ptc College Ambicakrupa Education Trust,, Gujarat  
Dm Institute Of Teachers Education,, Karnataka  
Dmi College Of Education,, Tamil Nadu  
Dmi College Of Engineering, Tiruvallur  , Tamil Nadu  
Dnyan Ganga Education Trusts College Of Edu,, Maharashtra  
Dnyanasadhana College (Arts Science And Commerce),, Maharashtra  
Dnyandan Shikshan Sanstha,, Maharashtra  
Dnyandeep Bahuddeshiya Shikshan Prasarak Mandal,, Maharashtra  
Dnyandeep Education Society,, Maharashtra  
Dnyaneshwar Gramonnati Mandals Hon.Balasaheb Jadhav Arts Commerce & Science College,, Maharashtra  
Dnyanganga College Of Education,, Maharashtra  
Dnyanganga College Of Engineering And Research, Haveli  , Maharashtra  
Dnyanganga Shikshan Prasarak Mandal,, Maharashtra  
Dnyangangecha Bhagirath Mahatma Phule Shikshan San,, Maharashtra  
Dnyanoday College Of Education,, Maharashtra  
Dnyanopasak Shikshan Mandali,, Maharashtra  
Dnyanopasak Shikshan Prasarak Mandal'S College Of Phy Edn,, Maharashtra  
Dnyanpasak Shikshan Mandals Arts Commerce And Science College,, Maharashtra  
Dnyansampada Shikshan Prasarak Mandal,, Maharashtra  
Dnyanvardhini Trusts Sonubhau Baswant College Of Arts And Co Shahapur,, Maharashtra  
Dnyanwardhini Shikshan Prasarak Mandal,, Maharashtra  
Dnyanyog Shikshan Prasarak Mandals College Of P E,, Maharashtra  
Doaba College,, Punjab  
Doaba Institute Of Engineering And Technology Diet,, Punjab  
Dodda Paneni Prameela Memorial College Of Education,, Andhra Pradesh  
Dodda Rachamma Memorial Ele Teachers Education,, Andhra Pradesh  
Doddappa Appa College Of Education,, Karnataka  
Doddappa Appa Instt.Of Mba, Gulbarga  , Karnataka  
Doeacc Centre, Gorakhpur  , Uttar Pradesh  
Doeacc Centre Maharastra, Aurangabad  , Maharashtra  
"Doeacc Centre, Calicut", Kozhikode  , Kerala  
Dolphin (Pg) Institute Of Bio Medical & Natural Sciences,, Uttaranchal  
Dolphins D Ed College,, Karnataka  
Don Bosco College, Lower Subansiri  , Arunachal Pradesh  
Don Bosco College,, Goa  
Don Bosco College, Kannur  , Kerala  
Don Bosco College Of Education,, Karnataka  
Don Bosco College Of Engineering And Technology, Guwahati  , Assam  
Don Bosco College Of Teacher Education,, Meghalaya  
"Don Bosco College, Sulthan Bathery", Wayanad  , Kerala  
Don Bosco D Ed College,, Karnataka  
Don Bosco Degree College, Hyderabad  , Andhra Pradesh  
"Don Bosco Degree College, Nalgonda", Chennoor  , Andhra Pradesh  
Don Bosco Institute Of Technology, Bangalore  , Karnataka  
Don Bosco Institute Of Technology, Kurla  , Maharashtra  
Don Bosco Institute Of Technology Science, Vaticherukura  , Andhra Pradesh  
Don Bosco Teacher Training Institute,, Pondicherry  
Don Bosco Teacher Training Institute,, Tamil Nadu  
Donyipolo Government College, West Siang  , Arunachal Pradesh  
Doom Doom College,, Assam  
Doon (Pg) College Of Agriculture Sc Tech & Edn,, Uttaranchal  
Doon College Of Education,, Uttar Pradesh  
Doon College Of Education,, Uttaranchal  
Doon College Of Education For Women,, Uttar Pradesh  
Doon College Of Engineering & Technology, Muzaffarnagar  , Uttar Pradesh  
Doon College Of Law And Education, Saharanpur  , Uttar Pradesh  
Doon Ghati College Of Professional Education,, Uttaranchal  
Doon Institute Of Education,, Uttaranchal  
Doon Institute Of Teachers Training,, Uttaranchal  
Doon International College For Educatioin,, Himachal Pradesh  
Doon Valley College Of Education,, Uttaranchal  
Doon Valley Institute Of Education,, Haryana  
Doon Valley Institute Of Engineering & Technology, Karnal  , Haryana  
Doraha College Of Education,, Punjab  
Doraha Institute Of Mgt. & Technology,, Punjab  
Doranda College,, Jharkhand  
Doying Gumin College, East Siang  , Arunachal Pradesh  
Dpc-Inst. Of Mgt. Science & Productivity Res, Delhi  , Delhi  
Dr .Mahalingam College Of Engineering & Technology, Coimbatore  , Tamil Nadu  
Dr A V Baliga College Art Science,, Karnataka  
Dr A V Baliga College Commerce,, Karnataka  
Dr Ambedkar College Education,, Karnataka  
Dr Ambedkar Degree College Arts And Commerce,, Karnataka  
Dr Ambedkar First Grade Arts College,, Karnataka  
Dr Ambedkar Institute Of Technology For Handicapped, Kanpur  , Uttar Pradesh  
Dr B K Baruah College, Nagaon  , Assam  
Dr B R Ambedkar College Art Sci Commerce, Tenali  , Andhra Pradesh  
Dr B R Ambedkar First Grade College,, Karnataka  
Dr B R Ambedkar National Institute Of Technology,, Punjab  
Dr B R Ambedkar Open University, Hyderabad  , Andhra Pradesh  
Dr B R Ambedkar University, Agra  , Uttar Pradesh  
Dr B R R Government College, Jadcherla  , Andhra Pradesh  
Dr Babasaheb Ambedkar Marathwada University, Aurangabad  , Maharashtra  
Dr Babasaheb Ambedkar Open University, Ahmedabad  , Gujarat  
Dr Babasaheb Ambedkar Technological University, Raigad  , Maharashtra  
Dr Balasaheb Sawant Konkan Krishi Vidypeeth,, Maharashtra  
Dr Bhim Rao Ambedkar University,, Uttar Pradesh  
Dr C V Raman Institute Of Technology, Bilaspur  , Chhattisgarh  
Dr Harisingh Gour Vishwavidyalaya University, Sagar  , Madhya Pradesh  
Dr J J Magdum College Of Engineering, Kolhapur  , Maharashtra  
Dr Jagnnath Mishra College,, Bihar  
Dr Jyothirmayi Degree College, Kurnool  , Andhra Pradesh  
Dr K R R M Degree College, Guntur  , Andhra Pradesh  
Dr Kn Modi Institute Of Engineering & Technology, Ghaziabad  , Uttar Pradesh  
Dr Kv Subba Reddy Institute Of Technology, Vaticherukura  , Andhra Pradesh  
Dr Lankaplli Bullayya College, Visakhapatnam  , Andhra Pradesh  
Dr Lohiya Karpoori V D College,, Bihar  
Dr M G R Educational And Research Institute, Chennai  , Tamil Nadu  
Dr Mv Shetty Institute Of Technology, Mangalore  , Karnataka  
Dr N S A M First Grade College,, Karnataka  
Dr N T R University Of Health Sciences, Vijayawada  , Andhra Pradesh  
Dr P G A S Samitis Pandit Panchaxara Gavaigalav,, Karnataka  
Dr P N Singh Degree College,, Bihar  
Dr Panjabrao Deshmukh Krishi Vidyapeeth,, Maharashtra  
Dr Paul Raj Engineering College, Bhadrachalam  , Andhra Pradesh  
Dr R M L S College,, Bihar  
Dr Ram Manohar Lohia University, Faizabad  , Uttar Pradesh  
Dr S Gopalaraju Government First Grade College,, Karnataka  
Dr S K Sinha Women'S College,, Bihar  
Dr Subhash Mahila College Education,, Gujarat  
Dr T M A Pai College Education,, Karnataka  
Dr V H Dave Homoeopathic Medical College And S I Patel Homeopathic Hos,, Gujarat  
Dr V S K Government Degree College, Visakhapatnam  , Andhra Pradesh  
Dr Y S Parmar University Of Horticulture Forestry, Solan  , Himachal Pradesh  
Dr Z H T T College,, Bihar  
Dr. A H Rizvi Degree College,, Uttar Pradesh  
Dr. A.C. Homoeopathic Medical College And Hospital,, Orissa  
Dr. Agarala Eswara Reddy Degree College, Tirupati  , Andhra Pradesh  
Dr. Akhtar Hasan Rizvi Shia Degree College,, Uttar Pradesh  
"Dr. Alm Pg Institution Of Basic Medical Sciences, Chennai", Chennai  , Tamil Nadu  
Dr. Ambedkar Arts & Science College, Kasaragod  , Kerala  
Dr. Ambedkar Arts Sc. & Commerce College,, Maharashtra  
Dr. Ambedkar B Ed College,, Rajasthan  
Dr. Ambedkar College,, Maharashtra  
Dr. Ambedkar College Of Arts & Commerce,, Maharashtra  
Dr. Ambedkar College Of Education,, Karnataka  
Dr. Ambedkar College Of Education,, Kerala  
Dr. Ambedkar College Of Law, Mumbai  , Maharashtra  
"Dr. Ambedkar College Of Law, Nagpur", Nagpur  , Maharashtra  
Dr. Ambedkar Department Of Management Studies & Research, Nagpur  , Maharashtra  
Dr. Ambedkar Government Arts College, Chennai  , Tamil Nadu  
Dr. Ambedkar Government Law College, Chennai  , Tamil Nadu  
"Dr. Ambedkar Institute Of Hotel Management, Chandigarh",, Chandigarh  
Dr. Ambedkar Institute Of Technology, Bangalore  , Karnataka  
Dr. Ambedkar Law College, Tirupati  , Andhra Pradesh  
Dr. Ambedkar Law College, Aurangabad  , Maharashtra  
Dr. Ambedkar Memorial Institute Of Information Technology,, Orissa  
Dr. Ambedkar Memorial Teacher Training Institute,, Kerala  
Dr. Ambedkar Women Teacher Training Institute,, Tamil Nadu  
Dr. Anbu Paul College Of Education,, Tamil Nadu  
Dr. Anbu Paul College Of Physical Education,, Tamil Nadu  
Dr. Anbu Paul Teacher Training Institute,, Pondicherry  
Dr. Anita Baruah Sarma College Of Education,, Assam  
Dr. Annasaheb G.D. Bendale Ladies College,, Maharashtra  
Dr. Asha Smriti Mahavidyalaya,, Uttar Pradesh  
Dr. Ayesha Jr College Of Education,, Maharashtra  
Dr. B G Patil College Of Physical Education,, Karnataka  
Dr. B R Ambedkar College,, West Bengal  
Dr. B R Ambedkar College Of Education,, Bihar  
Dr. B R Ambedkar College Of Education,, Haryana  
Dr. B R Ambedkar Education Society,, Gujarat  
Dr. B R Ambedkar Government Polytechnic, Port Blair  , Andaman And Nicobar Islands  
Dr. B R Ambedkar Memorial D Ed College,, Karnataka  
Dr. B. Ambedkar Arts And Commerce College,, Maharashtra  
Dr. B. C. Roy Engineering College, Durgapur  , West Bengal  
Dr. B. R. Ambedkar Open University,, Andhra Pradesh  
Dr. B. V. Syamala Ratnam College Of Education,, Andhra Pradesh  
Dr. B.A. Raju Inst. Of Computer Education, Bhimavaram  , Andhra Pradesh  
"Dr. B.R Ambedkar Medical College, Banglore", Bangalore  , Karnataka  
Dr. B.R. Ambedkar College,, West Bengal  
Dr. B.R. Ambedkar College Of Law, Visakhapatnam  , Andhra Pradesh  
Dr. B.R. Ambedkar Degree College, Cherkupalli  , Andhra Pradesh  
"Dr. B.R. Ambedkar Degree College, Ravulapalem", Revulapalem  , Andhra Pradesh  
Dr. B.R. Ambedkar Janamshatabdi Mahavidyalaya,, Uttar Pradesh  
Dr. B.R. Ambedkar Junior College Of Education,, Maharashtra  
Dr. B.R. Ambedkar Krishak Degree College,, Uttar Pradesh  
Dr. B.R.Ambedkar Government Girls Postgraduate Degree College,, Uttar Pradesh  
Dr. B.R.Ambedkar Institute Of Management & Technology, Hyderabad  , Andhra Pradesh  
Dr. Baba Saheb Ambedkar College Of Arts & Commerce,, Maharashtra  
Dr. Baba Saheb Ambedkar Memorial Law College, Dhule  , Maharashtra  
Dr. Baba Saheb Ambedkar National Institute Of Social Science,, Madhya Pradesh  
Dr. Babasaheb Ambedkar College Of Arts Science & Commerce,, Maharashtra  
Dr. Babasaheb Ambedkar College Of Law, Bhandara  , Maharashtra  
Dr. Babasaheb Ambedkar Commercedr.M.V.R.Shinde Arts College,, Maharashtra  
Dr. Babasaheb Ambedkar Education Society,, Maharashtra  
Dr. Babasaheb Ambedkar Khadi Gramoudyog Sanghs,, Maharashtra  
Dr. Babasaheb Ambedkar Marathwad University,, Maharashtra  
Dr. Babasaheb Ambedkar Shikshan Samsthe D Ed,, Karnataka  
Dr. Babasaheb Ambedkar Shikshana Sansthe,, Karnataka  
Dr. Babasaheb Ambedkar Vidya Vardhaka Sanghas,, Karnataka  
Dr. Babasaheb Nandurkar Sharirik Shikshan Mahavidyalaya,, Maharashtra  
Dr. Babasaheb Smarak Samiti,, Maharashtra  
Dr. Babasheb Ambedkar Education Society,, Maharashtra  
Dr. Balasaheb Ambedkar College Of Arts & Commerce,, Maharashtra  
"Dr. Bc Roy Pg Institute Of Basic Medical Sciences, Kolkata", Calcutta  , West Bengal  
Dr. Bezawada Gopal Reddy Womens Academy, Nellore  , Andhra Pradesh  
Dr. Bhagwat Sahai Smarak Government Mahavidyalaya,, Madhya Pradesh  
Dr. Bhim Rao Ambedkar Degree College,, Uttar Pradesh  
Dr. Bhim Rao Ambedkar Mahavidyalaya,, Uttar Pradesh  
Dr. Bhimrao Ambedker University,, Uttar Pradesh  
Dr. Br. Ambedkar Govt. Law College, Pondicherry  , Pondicherry  
Dr. Br. Ambedkar Law College, Dharmagarh  , Orissa  
Dr. C P Tiwari Smriti B Ed College,, Madhya Pradesh  
Dr. C V Raman College Of Education,, Chhattisgarh  
Dr. C V Raman College Of Physical Education,, Chhattisgarh  
Dr. C. L. Naidu College Of Education,, Andhra Pradesh  
Dr. C.L. Naidu Degree College, Palakonda  , Andhra Pradesh  
Dr. C.S.N. Degree & P.G College, Bhimavaram  , Andhra Pradesh  
Dr. C.V. Raman Degree College, Naidupet  , Andhra Pradesh  
"Dr. D.Y. Patial Medical College, Kolhapur", Kolhapur  , Maharashtra  
Dr. D.Y. Patil Centre For Management And Reseach, Haveli  , Maharashtra  
Dr. D.Y. Patil Institute Of Management, Pune  , Maharashtra  
Dr. D.Y. Patil Jr College,, Maharashtra  
Dr. D.Y. Patil Prastishan'S Padmashree Dr. D.Y.Patil Institute Of Engineering & Technology, Pune  , Maharashtra  
Dr. D.Y. Patil Pratishtan,, Maharashtra  
"Dr. D.Y. Patil Pratishthans Medical College, Pimpri, Pune",, Maharashtra  
Dr. D.Y.Patil Par.'S Dr. D.Y. Patil Col Of Engg, Pune  , Maharashtra  
Dr. Datar Science Dr. Behera Arts & Shri P.J. Commerce College,, Maharashtra  
Dr. David Raja & Dr Chandraleka College Of Edn,, Tamil Nadu  
Dr. Davidr.Aja Teacher Training Institute,, Karnataka  
Dr. Dharmambal Government Polytechnic College For Women, Tiruvannamalai  , Tamil Nadu  
Dr. G Dass D A V College Of Education For Women,, Haryana  
Dr. G R Damodaran College Of Education,, Tamil Nadu  
Dr. G U Pope College Of Education,, Tamil Nadu  
Dr. G.R. Damodaran College Of Science, Coimbatore  , Tamil Nadu  
Dr. Ghali College,, Maharashtra  
Dr. Ghanshyam Singh Mahavidyalaya,, Uttar Pradesh  
Dr. Gopalrao Khedkar Mahavidyalaya,, Maharashtra  
Dr. Govind Prasad Rani Devi Patel Mahavidyalaya,, Uttar Pradesh  
Dr. Gu Pope College Of Engineering, Tuticorin  , Tamil Nadu  
Dr. Gyan Prakash Educational Research Centre,, Madhya Pradesh  
Dr. H N Education D Ed College,, Karnataka  
Dr. H R Gajwani College Of Education,, Gujarat  
Dr. H.N. Sinha Arts And Commerce College,, Maharashtra  
Dr. Hagdewar Government Degree College,, Uttar Pradesh  
Dr. Harekrushna Mahatab College,, Orissa  
Dr. Hari Ram Mishra Bed College (R B S W A E S ),, Madhya Pradesh  
Dr. Harivijay Madhavrao Umekar Adhyapak Vidyalaya,, Maharashtra  
Dr. Hima Sekhara Degree College, Anakapalle  , Andhra Pradesh  
Dr. Homiahangir Bhabha Degree College, Guntur  , Andhra Pradesh  
Dr. I.T. Business School,, Punjab  
Dr. I.T. Institute Of Mgt & Tech,, Punjab  
Dr. Islam Majeed Teacehrs Trg College,, Uttar Pradesh  
Dr. Islam Majid Degree College,, Uttar Pradesh  
Dr. Jayapradamba Degree College, Guntur  , Andhra Pradesh  
Dr. Jyothirmayee Degree College, Kurnool  , Andhra Pradesh  
Dr. K. K. R. S. Gowtham College Of Education,, Andhra Pradesh  
Dr. K. V. S. R. Hindi Pandits Training College,, Andhra Pradesh  
Dr. K.V.R. Sanskrit College, Guntur  , Andhra Pradesh  
Dr. K.V.R.D & Smt. G.J.V.R.S. Degree College, East Godavari  , Andhra Pradesh  
Dr. Kailashnath Katju Vidhi Mahavidyalaya,, Madhya Pradesh  
Dr. Kalaikannan College Of Education For Women,, Pondicherry  
Dr. Kanailal Bhattacharyya College,, West Bengal  
Dr. Keshavram Baliram Hedagewar T T College,, Rajasthan  
Dr. Kodela Siva Prasada Rao College Of Education,, Andhra Pradesh  
Dr. Kunchala Rajarathnam Christian College Of Education,, Andhra Pradesh  
Dr. Kunchala Rajaratnam Christian Degree College, Chitoor  , Andhra Pradesh  
Dr. L. Bullaiah College Of Education,, Andhra Pradesh  
Dr. M G R Ednl & Research Institute,, Tamil Nadu  
Dr. M S Udayamurthy Teacher Training Institute,, Tamil Nadu  
Dr. M. R. Reddy College Of Education,, Andhra Pradesh  
Dr. M.G.R. Chockalingam Arts College, Tiruvannamalai  , Tamil Nadu  
Dr. M.G.R. Janaki College Of Arts And Science For Women, Chennai  , Tamil Nadu  
Dr. M.G.R. Polytechnic College, Tiruvannamalai  , Tamil Nadu  
Dr. M.K.. Umathe Arts & Ramchandrarao Mokhare Comm,, Maharashtra  
Dr. Maddi Gopala Krishna Reddy Degree College, Ramachandrapuram  , Andhra Pradesh  
Dr. Mc Saxena College Of Engineering & Technology, Lucknow  , Uttar Pradesh  
Dr. Meenakshi College Of Teacher Education,, Tamil Nadu  
Dr. Melkote Memorial Womens College, Hyderabad  , Andhra Pradesh  
Dr. Moonje Institute For Management & Computer Studies, Nashik  , Maharashtra  
Dr. Mr Reddy Degree College, Warangal  , Andhra Pradesh  
Dr. Mr. Reddy College Of Ele Teacher Education,, Andhra Pradesh  
Dr. Mrs. Indira Bai B. Pathak Mahila Mahavidyalaya,, Maharashtra  
Dr. N G P College Of Education,, Tamil Nadu  
Dr. N G P Teacher Training Institute,, Tamil Nadu  
Dr. N J Paulbudhe College Of Education,, Maharashtra  
Dr. N Mahalingam Teacher Training Institute,, Tamil Nadu  
Dr. N.G.P. Arts & Science College, Coimbatore  , Tamil Nadu  
Dr. N.G.P. Institute Of Technology, Coimbatore  , Tamil Nadu  
Dr. N.T.R. Degree College Of Arts & Science, Narsipatnam  , Andhra Pradesh  
Dr. Nagarathinams College Of Education,, Tamil Nadu  
Dr. Nagarathinams Teacher Training Institute,, Tamil Nadu  
Dr. Nallikuppusamy Arts College, Thanjavur  , Tamil Nadu  
Dr. Nallini College Of Teacher Education,, Tamil Nadu  
Dr. Navalar Nedunchezhiyan College Of Engineering, Cuddalore  , Tamil Nadu  
Dr. P G A S Samitis,, Karnataka  
Dr. P M Institute Of Advance Studies In Education,, Orissa  
Dr. P. V. G. Rajah Sahab College Of Education,, Andhra Pradesh  
Dr. P.D.B.H. Government Post Graduate College,, Uttaranchal  
Dr. P.D.B.H. Govt Post Graduate College,, Uttaranchal  
Dr. Palpu Memorial Sndp Yogam College Of Education,, Kerala  
Dr. Panjabrao Deshmukh College Of Law, Amravati  , Maharashtra  
Dr. Panjabrao Deshmukh Institute Of Management Technology & Research, Nagpur  , Maharashtra  
"Dr. Panjabrao Deshmukh Memorial Medical College, Amrawati", Amravati  , Maharashtra  
Dr. Parshuram Mishra Institute Of Advanced,, Orissa  
Dr. Paul'S Engineering College, Villupuram  , Tamil Nadu  
Dr. R B Patel Ptc College,, Gujarat  
Dr. R K Shanmugam College Of Education,, Tamil Nadu  
Dr. R.K. Barua Law College, Dibrugarh  , Assam  
Dr. R.K. Shanmugam College Of Arts And Science, Villupuram  , Tamil Nadu  
Dr. R.P. Richharia Degree College,, Uttar Pradesh  
Dr. Radha Krishan Teacher Training College,, Rajasthan  
Dr. Radha Krishnan Shiksha Shastri Mahavidyalaya,, Rajasthan  
Dr. Radhakrishan College Of Education R,, Madhya Pradesh  
Dr. Radhakrishan Teachers Training College,, Maharashtra  
Dr. Radhakrishna Teacher Education Institution,, Karnataka  
Dr. Radhakrishna Teacher Training Institute,, Tamil Nadu  
Dr. Radhakrishna Teacher Training School,, Maharashtra  
Dr. Radhakrishnan Mahavidyalaya,, Madhya Pradesh  
Dr. Rajabather Tagore Women Teachers Trg College,, Tamil Nadu  
"Dr. Rajendar Prasad Government Medical College, Tanda", Kangra  , Himachal Pradesh  
Dr. Rajendra Prasad B Ed College,, Andhra Pradesh  
Dr. Rajendra Prasad Memorial Girls Degree College,, Uttar Pradesh  
Dr. Rajendra Prasad Nursery T T School,, Rajasthan  
Dr. Rajeshwar Sewashram Degree College,, Uttar Pradesh  
Dr. Ram Kumar Gayatri Devi Degree College,, Uttar Pradesh  
Dr. Ram Manohar Lohia Degree College,, Uttar Pradesh  
"Dr. Ram Manohar Lohia Hospital, New Delhi", Delhi  , Delhi  
Dr. Ram Manohar Lohiya Avadh University,, Uttar Pradesh  
Dr. Ram Manohar Lohiya Degree College,, Uttar Pradesh  
Dr. Ram Manohar Lohiya Institute,, Uttar Pradesh  
Dr. Ram Manohar Lohiya Mahavidyalaya,, Uttar Pradesh  
Dr. Ram Prasanna Maniram Singh Mahavidyalaya,, Uttar Pradesh  
Dr. Ram Rodge B Ed College,, Maharashtra  
Dr. Rama Prasana Maniram Singh Mahavidyalaya,, Uttar Pradesh  
Dr. Ramadoss Teacher Training Institute,, Tamil Nadu  
Dr. Rammanohar Lohia College Of Law, Bangalore  , Karnataka  
Dr. Rawatmalgi Dhanrupmalgi Sojatia,, Madhya Pradesh  
Dr. Reddivari Jayachandra Reddy College Of Higher Education, Khammam  , Andhra Pradesh  
Dr. Rizvi College Of Engineering,, Uttar Pradesh  
Dr. Rizvi College Of Law, Karari  , Uttar Pradesh  
Dr. S & .S. S. Gandhi College Of Engg. & Technology,, Gujarat  
Dr. S N S College Of Education,, Tamil Nadu  
Dr. S R J College Of Education,, Tamil Nadu  
Dr. S Radha Krishnan Teacher Training Institute,, Karnataka  
Dr. S Radhakrishna College Of Physical Education,, Karnataka  
Dr. S Radhakrishnan D Ed College,, Karnataka  
Dr. S Radhakrishnan Education Society,, Karnataka  
Dr. S.N.S. Rajalakshmi College Of Arts And Science, Coimbatore  , Tamil Nadu  
Dr. S.R.J. Degree College, Atmakur  , Andhra Pradesh  
Dr. Sampurnanand Medical College, Jodhpur  , Rajasthan  
Dr. Samuel George Institute Of Engineering & Technology, Markapur  , Andhra Pradesh  
Dr. Saravepalli Radhakrishna Government Arts College, Pondicherry  , Pondicherry  
Dr. Sarojini Naidu Womens Bed College,, Karnataka  
Dr. Sarvapalli Radhakrishna College Of Education,, Andhra Pradesh  
Dr. Sarvepalli Radhakrishna Degree College, Nallajerla  , Andhra Pradesh  
Dr. Sashi Bhushan Institute Of Education Hailakandi,, Assam  
Dr. Shadi Lal College Of Education,, Uttar Pradesh  
Dr. Shankar Dayal Sharma Smriti Mahavidyalaya,, Madhya Pradesh  
Dr. Shri R M S College Of Education,, Madhya Pradesh  
Dr. Shri R M Sojatia Foundation,, Madhya Pradesh  
Dr. Shyama Prasad Mukherjee,, Uttar Pradesh  
Dr. Shyama Prasad Mukherjee College Of Edn,, Assam  
Dr. Sir A.L. Mudaliar Vocational Arts And Science, Tiruvallur  , Tamil Nadu  
Dr. Sivanthi Aditanar College Of Education,, Tamil Nadu  
Dr. Sivanthi Aditanar College Of Physical Education,, Tamil Nadu  
"Dr. Somervel Memorial Csi Hospital & Medical College, Thiruvananthapuram", Trivandrum  , Kerala  
Dr. Sri Jachani Teachers Training Institute,, Karnataka  
Dr. Subhash Adhyapan Mandir,, Gujarat  
Dr. Subhash College Of Education,, Gujarat  
Dr. Subhash College Of Education (Gbtc),, Gujarat  
Dr. Subhash College Of Physical Education,, Gujarat  
Dr. Subhash Mahila College Of Education,, Gujarat  
Dr. Subhash P Chavda Ahir Kelwani Mandal,, Gujarat  
Dr. Subhash P Chawda Ahir Kelawani Mandal Dr Subhash College Of Phy Education,, Gujarat  
Dr. Susheela Tiwari College Of Advanced Studies,, Uttaranchal  
Dr. Sushila Tiwari B Ed College,, Uttaranchal  
Dr. T M A Pai College Of Education,, Karnataka  
Dr. Ulhas Patil Law College, Jalgaon  , Maharashtra  
"Dr. Ulhas Patil Medical College & Hospital, Jalgaon", Jalgaon  , Maharashtra  
Dr. V.M. Medical College,, Maharashtra  
"Dr. Vaishampayan Memorial Medical College, Solapur", Sholapur  , Maharashtra  
Dr. Vellasamy Nadar College Of Education,, Tamil Nadu  
Dr. Vellaswamy Nadar Teacher Training Institute,, Tamil Nadu  
Dr. Virendra Swaroop Instt Of Prof Studies,, Uttar Pradesh  
Dr. Vithal D Ed College,, Karnataka  
Dr. Y.L.P. College Of Arts & Science, Vizianagaram  , Andhra Pradesh  
Dr. Z H Degree College,, Uttar Pradesh  
Dr. Z.H. Degree College,, Uttar Pradesh  
Dr. Zakir Husain Teacher Training Institute,, Madhya Pradesh  
Dr. Zakir Husain Teachers Training Institute,, Madhya Pradesh  
Dr. Zakir Hussain,, Madhya Pradesh  
Dr. Zakir Hussain College, Sivagangai  , Tamil Nadu  
Dr. Zakir Hussain College Of Education,, Andhra Pradesh  
Dr. Zakir Hussain College Of Education,, Maharashtra  
Dr. Zakir Hussain Degree College, Ibrahimpatnam  , Andhra Pradesh  
Dr. Zakir Hussain English Medium D Ed College,, Maharashtra  
Dr. Zakir Hussain Jr College Of Education,, Maharashtra  
Dr. Zakir Hussain Junior College Of Education,, Maharashtra  
Dr. Zakir Hussain Memorial College Of Teacher Educ,, Andhra Pradesh  
Dr. Zakir Hussain Teachers' Training College,, Bihar  
Dr. Zakir Hussain Urdu Junior College Of Education,, Maharashtra  
Dr.Bhausaheb Nandurkar College Of Engineering,, Maharashtra  
Dr.D.Y.Patil Institute Of Management & Research, Pune  , Maharashtra  
Dr.Dypatil Pratishthan Dy Patil College Of Engineering And Technology, Kolhapur  , Maharashtra  
Dr.L. Bullayya Pg College, Visakhapatnam  , Andhra Pradesh  
Dr.M.G.R. Engineering. College, Chennai  , Tamil Nadu  
Dr.Ram Manohar Lohia Degree College,, Uttar Pradesh  
Dr.Sivanthi Aditanar College Of Engineering, Tuticorin  , Tamil Nadu  
"Dr.T.Thimmaiah Institute Of Technology,", Kolar  , Karnataka  
Dr.V.R.K.Women'S College Of Engineering & Technology, Moinbad  , Andhra Pradesh  
Dr.Vrk College Of Engineering & Technology, Karimnagar  , Andhra Pradesh  
Dravidian University,, Andhra Pradesh  
Dravidian University Chitoor, Kuppam  , Andhra Pradesh  
Dream Institute Of Technology, Calcutta  , West Bengal  
Drk Institute Of Science & Technology, Vaticherukura  , Andhra Pradesh  
Dron B Ed College,, Uttaranchal  
Drona College Of Education,, Haryana  
Dronacharya College Of Education,, Himachal Pradesh  
Dronacharya College Of Engineering, Noida  , Uttar Pradesh  
Dronacharya College Of Engineering Haryana, Gurgaon  , Haryana  
Dronacharya Government College,, Haryana  
Dronacharya Institute Of Mgt. & Tech, Kurukshetra  , Haryana  
Dronacharya Institute Of Teacher Education,, Uttaranchal  
Dronas College Of Management And Technical Edn,, Uttaranchal  
Dsbg Government First Grade College,, Karnataka  
Dsr College Of Education,, Maharashtra  
Dudhnoi College,, Assam  
Dugyala Gopal Rad Memorial Degree College, Nalgonda  , Andhra Pradesh  
Duja Devi Degree College,, Uttar Pradesh  
Dukhulal Nibaran Chandra College,, West Bengal  
Dulari Devi Degree College,, Uttar Pradesh  
Duliajan College,, Assam  
Dum Dum Motijheel College,, West Bengal  
Dumakal College,, West Bengal  
Dumkul Institute Of Engineering & Technology, Murshidabad  , West Bengal  
Dunger College,, Rajasthan  
Durai Murugan College Of Education,, Tamil Nadu  
Durai Murugan Teacher Training Institute,, Tamil Nadu  
Durai Vidhyalakshmi College Of Education,, Tamil Nadu  
Durga College Education,, Jammu And Kashmir  
Durga College Of Law, Mahabubnagar  , Andhra Pradesh  
Durga Devi T T College,, Rajasthan  
Durga Narain Degree (Pg) College,, Uttar Pradesh  
Durga Prasad & B.S.Degree College,, Uttar Pradesh  
Durga Prasad Baljeet Singh P G College,, Uttar Pradesh  
Durgamata Bahu Uddeshiya Sikshan Sanstha,, Maharashtra  
Durgapur Government College,, West Bengal  
Durgapur Institute Of Advanced Technology & Management, Durgapur  , West Bengal  
Durgapur Womens College,, West Bengal  
Dusane Education Society,, Maharashtra  
Dusi Polytechnic College, Villupuram  , Tamil Nadu  
Dutika Sahu College,, Orissa  
Duvvuru Ramanamma Women'S College, Nellore  , Andhra Pradesh  
Dwaba Sanskrit Prachar Samiti Mahavidyalaya,, Uttar Pradesh  
Dwarka College Of Education,, Maharashtra  
Dwarkamai Sarvangin Vikas Sanstha,, Maharashtra  
Dwijendralal College,, West Bengal  
Dyal Singh College, Delhi  , Delhi  
Dyal Singh College (Evening) Delhi, Delhi  , Delhi  
Dyanand Danku Paraga Gyan Udai Mahavidyalaya,, Uttar Pradesh  
Dyanoba Shikshan Mandali,, Maharashtra  
Dyanoba Shikshan Shastra Women Mahavidyalaya,, Maharashtra  
Dynan Vikas Mandal Priydarshani Adhyapak Vidyalay,, Maharashtra  
Dynanganga Institute Of Carrier Empowerment & Research, Pune  , Maharashtra  
Dynapasak Shikshan Mandals College Of Arts Commerce And Science,, Maharashtra  
E.S. College Of Engineering And Technology ,Villupuram   ,Tamil Nadu   
E.V.P. Engineering College ,Tiruvallur   ,Tamil Nadu   
Easa College Engineering Technology ,Coimbatore   ,Tamil Nadu   
East Point College Of Engineering And Technology ,Bangalore   ,Karnataka   
East Point College Of Engineering For Women ,Virgonagar   ,Karnataka   
East West Institute Of Technology ,Bangalore   ,Karnataka   
Eastern Academy Of Science And Technology ,Phulnakhara   ,Orissa   
Easwari Engineering College ,Chennai   ,Tamil Nadu   
Easwari Engineering College For Women ,Chennai   ,Tamil Nadu   
Echelon Institute Of Technology Eit ,Faridabad   ,Haryana   
Edayathangudi Gs Pillay Engineering College ,Nagapattinam   ,Tamil Nadu   
Einstein College Of Engineering ,Tirunelveli   ,Tamil Nadu   
Ellenki College Of Engineering And Technology ,Medak   ,Andhra Pradesh   
Engineering College Ajmer ,Ajmer   ,Rajasthan   
Engineering College Bikaner ,Bikaner   ,Rajasthan   
Engineering College For Women ,Delhi   ,Delhi   
"Engineering College, Kota ",Kota   ,Rajasthan   
Er & Dci Institute Of Technology ,Trivandrum   ,Kerala   
Er.Perumal Manimekalai College Of Engineering ,Hosur   ,Tamil Nadu   
Erode Sengunthar Engineering College ,Erode   ,Tamil Nadu   
Evm College Of Engineering And Technology ,Vaticherukura   ,Andhra Pradesh   
Excecilla Ed. Soc'S Kavikulguru Inst Of Tech. & Sc ,,Maharashtra   
Excel College Of Engineering ,Namakkal   ,Tamil Nadu   
Excel College Of Engineering For Women ,Salem   ,Tamil Nadu   
Excel Institute Of Management & Technology ,Mathura   ,Uttar Pradesh   
F D Arts And Commerce College For Women,,Gujarat  
F. Education Societys Girls College,,Maharashtra  
F.A. Ahmed College,Kamrup  ,Assam  
F.A.A.Government Degree (Pg) College,,Uttar Pradesh  
F.M. College,,Orissa  
F.S. College Of Education,,Uttar Pradesh  
Faculty Of Agriculrtal Engineering,,West Bengal  
Faculty Of Edu Deen Dayal Upadhyaya University,,Uttar Pradesh  
Faculty Of Education & Allied Sciences M J P Rohilkhand University,,Uttar Pradesh  
Faculty Of Education Kumaun University,,Uttaranchal  
Faculty Of Engineering And Technology,Delhi  ,Delhi  
Faculty Of Engineering And Technology Agra,Agra  ,Uttar Pradesh  
Faculty Of Engineering And Technology Uttra Pradesh,Agra  ,Uttar Pradesh  
Faculty Of Management,,Gujarat  
Faculty Of Management,,Uttar Pradesh  
Faculty Of Management Studies,Sagar  ,Madhya Pradesh  
Faculty Of Management Studies,,Rajasthan  
"Faculty Of Management Studies, University Institute Of Management",Jabalpur  ,Madhya Pradesh  
"Faculty Of Management Studies, University Of Delhi",Delhi  ,Delhi  
Faculty Of Technology & Engineering,Baroda  ,Gujarat  
Fae,,Uttar Pradesh  
Faiz E Aam Modern Degree College,,Uttar Pradesh  
Faizal Uloom Kannada Medium Tti,,Karnataka  
Fakir Chand College,,West Bengal  
Fakiragram College,,Assam  
Falakata B Ed College,,West Bengal  
Falakata College,,West Bengal  
Famitha Girls Teacher Training Institute,,Tamil Nadu  
Farah College Of Engineering & Technology,Chevella  ,Andhra Pradesh  
Farah Institute Of Computer Sciences,Mandal  ,Andhra Pradesh  
Farida Education Society,,Madhya Pradesh  
Faridabad Institute Of Technology,Faridabad  ,Haryana  
Farook Bed College,,Kerala  
Farook College,,Kerala  
"Farook College, Kozhikode",Kozhikode  ,Kerala  
Farook Training College,,Kerala  
Farooqia Teacher Trng Institute For Women,,Karnataka  
Fateh Chand College For Women,,Haryana  
"Father Muller'S Institute Of Medical Education And Research, Mangalore",Mangalore  ,Karnataka  
Fathima Memorial Training College,,Kerala  
Fathima Teacher Training Institute For Women,,Karnataka  
Fatima College,Madurai  ,Tamil Nadu  
Fatima College Of Education,,Andhra Pradesh  
Fatima College Of Elementry Teacher Education,,Andhra Pradesh  
Fatima Mata National College,Kollam  ,Kerala  
Fatima Teacher Training Institute,,Tamil Nadu  
Fazfari Teachers Training Institute,,Kerala  
Fazl Ali College,,Nagaland  
Federal Institute Of Science And Technology,Ernakulam  ,Kerala  
Federal Primary Teacher Training Centre,,Karnataka  
Ferguson Degree College,Hyderabad  ,Andhra Pradesh  
Fergusson College,,Maharashtra  
Fergusson College Pg Centre,Hyderabad  ,Andhra Pradesh  
Fergusson College Pune,Pune  ,Maharashtra  
Feroz Gandhi Institute Of Engineering & Technology,,Uttar Pradesh  
Feroze Gandhi College,,Uttar Pradesh  
Feroze Gandhi Degree (Pg) College,,Uttar Pradesh  
Feroze Gandhi Memorial Govt College,,Haryana  
Field Marshal K M Kariappa College,,Karnataka  
Film And T.V. Institute Of Tamilnadu,Coimbatore  ,Tamil Nadu  
Finolex Academy Of Management And Technology,Mirjole  ,Maharashtra  
First Grade College Arts Science Commerce,,Karnataka  
First Grade College K G F,,Karnataka  
"Flaiz Memorial Adventist College, Narsapur",Narasapur  ,Andhra Pradesh  
Flora Teacher Training Institute,,Karnataka  
Florida College Of Education,,Karnataka  
Florida D Ed College,,Karnataka  
Forbesganj College,,Bihar  
Fore School Of Management,Delhi  ,Delhi  
Forensic Science Laboratory,Chennai  ,Tamil Nadu  
"Forest College And Research Institute,Mettupalayam",,Tamil Nadu  
Forest Research Institute,,Uttaranchal  
Forook Institute Of Management Studies,Kozhikode  ,Kerala  
Forte Institute Of Technology,,Uttar Pradesh  
Fortune Institute Of International Business,Delhi  ,Delhi  
Foster Development College Of Education,,Maharashtra  
Fr Agnel College Of Arts And Commerce,,Goa  
Fr. Conceicao Rodrigues College Of Engineering,Mumbai  ,Maharashtra  
Fr. Conceicao Rodrigues Institute Of Management Studies,Thane  ,Maharashtra  
Fr. Heyer College,Guntur  ,Andhra Pradesh  
Francis Xavier Engineering College,Tirunelveli  ,Tamil Nadu  
Frank College Of Education,,Karnataka  
Friends Education Society,,Maharashtra  
Future Business School,Calcutta  ,West Bengal  
Future Institute Of Engineering & Management,Calcutta  ,West Bengal  
G. B. Pant Engineering College,,Uttaranchal  
G. Narayanamma Institute Of Technology And Science,Hyderabad  ,Andhra Pradesh  
G.B. Pant Govt. Engineering College,Delhi  ,Delhi  
G.H.Raisoni College Of Engineering & Management,Haveli  ,Maharashtra  
G.H.Raisoni Institute Of Engineering & Management,Jalgaon  ,Maharashtra  
G.Pulla Reddy Engineering College,Kurnool  ,Andhra Pradesh  
G.Pullaiah College Of Engineering & Technology,Kurnool  ,Andhra Pradesh  
Galgotias College Of Engineering & Technology,Noida  ,Uttar Pradesh  
Ganadipathy Tulsi'S Engineering College,Vellore  ,Tamil Nadu  
Ganapathy Chettiar College Of Engineering And Technology,Ramanathapuram  ,Tamil Nadu  
Ganapathy Engineering College,Warangal  ,Andhra Pradesh  
Gandhi Engineering College,Bhubaneswar  ,Orissa  
Gandhi Institute For Technological Advancement,Bhubaneswar  ,Orissa  
Gandhi Institute For Technology,,Orissa  
Gandhi Institute Of Engineering And Technology,Gunupur  ,Orissa  
Gandhinagar Institute Of Technology,,Gujarat  
Ganeshi Lal Bajaj Institute Of Technology & Management,Noida  ,Uttar Pradesh  
Ganpati Institute Of Technology & Management,Yamunanagar  ,Haryana  
Garv Institute Of Management & Technology,Durg  ,Chhattisgarh  
Gates Institute Of Technology,Anantapur  ,Andhra Pradesh  
Gayatri Vidya Parishad College Of Engineering,Visakhapatnam  ,Andhra Pradesh  
Gd Rungta College Of Engineering & Technology,Bhilai  ,Chhattisgarh  
Geeta Institute Of Management And Technology.,Thaneasar  ,Haryana  
Geetanjali Institute Of Technical Education,Udaipur  ,Rajasthan  
Geethanjali College Of Engineering And Technology,Keesara  ,Andhra Pradesh  
Genba Sopanrao Moze College Of Engineering,Pune  ,Maharashtra  
Ggr College Of Engineering,Vellore  ,Tamil Nadu  
Gh Patel College Of Engg And Technology,Anand  ,Gujarat  
Ghanashyam Hemalata Institute Of Technology And Management,,Orissa  
Gharda Institute Of Technology,Khed  ,Maharashtra  
Ghousia College Of Engineering,Bangalore  ,Karnataka  
Giani Zail Singh College Of Engineering And Technology,Bhathinda  ,Punjab  
Girijananda Chowdhury Institute Of Management And Technology,Guwahati  ,Assam  
Gits Gwalior Inst. Of Tech. & Sc,Gwalior  ,Madhya Pradesh  
Gkm College Of Engineering & Technology,Chennai  ,Tamil Nadu  
Gla Institute Of Technology & Management,Mathura  ,Uttar Pradesh  
Global Academy Of Technology,Bangalore  ,Karnataka  
Global Institute Of Engineering & Technology,Mandal  ,Andhra Pradesh  
Global Institute Of Information Technology I,Noida  ,Uttar Pradesh  
Global Institute Of Technology,Jaipur  ,Rajasthan  
Globus Engineering College,Bhopal  ,Madhya Pradesh  
Gls Institute Of Computer Technology,,Gujarat  
Gm Institute Of Technology,Davanagere  ,Karnataka  
Gmr Institute Of Technology,Hyderabad  ,Andhra Pradesh  
Gnanamani College Of Technology,Namakkal  ,Tamil Nadu  
Gnit Girls Institute Of Technology,Noida  ,Uttar Pradesh  
Gnyana Saraswati College Of Engineering And Technology,Nizamabad  ,Andhra Pradesh  
Goa College Of Engineering,Najafgarh  ,Goa  
Godavari College Of Engineering,Jalgaon  ,Maharashtra  
Godavari Institute Of Engineering & Technology,Rajahmundry  ,Andhra Pradesh  
Gojan School Of Business And Technology,Chennai  ,Tamil Nadu  
Gokaraju Rangaraju Institute Of Engineering,Miyapur  ,Andhra Pradesh  
Gokaran Narvadeshwar Institute Of Technology & Management,Barabanki  ,Uttar Pradesh  
Gokul Institute Of Tech. & Science,Bobbili  ,Andhra Pradesh  
Gokula Krishna College Of Engineering,Nellore  ,Andhra Pradesh  
Gold Field Institute Of Technology And Management,,Haryana  
Gopal Krishna College Of Engineering & Technology,,Orissa  
Gopal Ramalingam Memorial Engineering College,Chennai  ,Tamil Nadu  
Government Central Textile Institute,Kanpur  ,Uttar Pradesh  
Government College Of Art & Craft,Chandigarh  ,Chandigarh  
Government College Of Engineering,Surat  ,Gujarat  
Government College Of Engineering & Leather Technology,Calcutta  ,West Bengal  
Government College Of Engineering And Technology,,Jammu And Kashmir  
Government College Of Engineering Kerala,Kannur  ,Kerala  
Government College Of Engineering Nammakal,Namakkal  ,Tamil Nadu  
Government College Of Engineering Pune,,Maharashtra  
Government College Of Engineering Salem,Salem  ,Tamil Nadu  
Government College Of Engineering Tamil Nadu,Dharmapuri  ,Tamil Nadu  
"Government College Of Engineering, Amravati",Amravati  ,Maharashtra  
"Government College Of Engineering, Aurangabad",Aurangabad  ,Maharashtra  
"Government College Of Engineering, Bargur",Krishnagiri  ,Tamil Nadu  
"Government College Of Engineering, Jalgaon",Jalgaon  ,Maharashtra  
"Government College Of Engineering, Karad",Karad  ,Maharashtra  
"Government College Of Engineering, Sukhada",Chandrapur  ,Maharashtra  
Government College Of Technology,Imphal  ,Manipur  
Government College Of Technology,Coimbatore  ,Tamil Nadu  
Government College Of Technology Jammu And Khasmir,,Jammu And Kashmir  
Government College Of Technology Karnataka,,Karnataka  
H A College Commerce ,,Gujarat   
H C Boraiah Memorial Sc St First Grade College ,,Karnataka   
H C D G College ,,Assam   
H C Women'S College ,,Chhattisgarh   
H D Jain College ,,Bihar   
H H B Kotak Institute Science ,,Gujarat   
H K E S' Smt Chinamma Bisappapatil Arts Commerce College Karnataka ,,Karnataka   
H K E Society M S I Arts Science Degree College ,,Karnataka   
H K E Socity'S A V Patil Degree College Of Arts Science Commerce ,,Karnataka   
H K E Socitys Basaveshwar College Education ,,Karnataka   
H K Es S S Margol College Arts Science Commerce Shasabad ,,Karnataka   
H K E'S Smt V G College For Women'S ,,Karnataka   
H K Es Sri Prabhu Arts Science And J M Bohra Commerce College Sholapur ,,Karnataka   
H K H College ,Theni   ,Tamil Nadu   
H K Veerana Gowdh First Grade College ,,Karnataka   
H L Institute Commerce ,,Gujarat   
H L Institute Commerce C O H L Commerce College Comp Gujarat ,,Gujarat   
H L Institute Computer Applications ,,Gujarat   
H L Patel Arts And Commerce College ,,Gujarat   
H M V Arts And Commerce College ,,Gujarat   
H Madhya Pradeshatel Institute English Training And Research ,,Gujarat   
H N Doshi Arts R N Doshi College Commerce ,,Gujarat   
H P P C Government First Grade College ,,Karnataka   
H P S College ,,Bihar   
H R College Amanour ,,Bihar   
H R College Bihar ,,Bihar   
H R Sri Ramalu Memorial Arts Science College ,,Karnataka   
H S College Bihar ,,Bihar   
H S College Haveli Hkharagpur ,,Bihar   
H. Muniswamy Reddy D Ed College ,,Karnataka   
H.B. B Ed College ,,Maharashtra   
H.B. College ,,Madhya Pradesh   
H.B. College Of Educational Excellence ,,Maharashtra   
H.B.T. Institute ,,Uttar Pradesh   
H.C. P.G.College ,,Uttar Pradesh   
H.D. College Of Education ,,Haryana   
H.D. Teacher Training Institute ,,Rajasthan   
H.Govindrao Pansare Mahavidyalaya ,,Maharashtra   
H.H. Marthoma Mathews Ii Training College Adoor ,,Kerala   
H.H. Memorial Law College ,,Karnataka   
H.H. Swamy Parijnanashram College Of Education ,,Karnataka   
H.H. The Rajas College ,Pudukotai   ,Tamil Nadu   
H.I.S. Degree College ,East Godavari   ,Andhra Pradesh   
H.J. Institute Of Education And Technology ,,Haryana   
H.K. Primary Training College ,,Gujarat   
H.K.C.C..M. Institute Of Management Research & Development ,Ahmednagar   ,Maharashtra   
H.K.D.E. Trusts College Of Education ,,Karnataka   
H.K.D.E. Trusts Shakunthala Patil Pg Center ,,Karnataka   
H.K.E. Societys P.D.A. Engineering College ,,Karnataka   
H.K.Institute Of Management Studies & Research ,Mumbai   ,Maharashtra   
H.K.L. College Of Education ,,Punjab   
H.K.R.H. College ,Theni   ,Tamil Nadu   
H.L. Agrawal College Of Education ,,Madhya Pradesh   
H.L.M. College ,,Uttar Pradesh   
H.L.M. Girls College ,,Uttar Pradesh   
H.L.Y. Degree College ,,Uttar Pradesh   
"H.M. Degree College, Punganur ",Punganur   ,Andhra Pradesh   
"H.M. Degree College, Rayachoti ",Rayachoti   ,Andhra Pradesh   
H.M. Patel Institute Of English Training & Research ,,Gujarat   
H.M. Training College ,,Kerala   
H.M.K.S. & M.G.S.M. College Of Education ,,Andhra Pradesh   
H.N. Bahuguna Degree College ,,Uttar Pradesh   
H.N. College Of Education ,,Haryana   
H.N. Shukla College Of Management Studies ,,Gujarat   
H.P. College Of Education ,,Himachal Pradesh   
H.P. Institute Of Mgt. Studies ,Shimla   ,Himachal Pradesh   
H.P.T. Arts & R.Y.K.Science College ,,Maharashtra   
H.R. College Of Commerce & Economics ,,Maharashtra   
H.R.D. Degree College ,Narayanguda   ,Andhra Pradesh   
"H.R.D. Degree College, Nalgonda ",Deverakonda   ,Andhra Pradesh   
H.R.Institute Of Technology ,Ghaziabad   ,Uttar Pradesh   
H.S. Law College ,Agra   ,Uttar Pradesh   
H.T.P. College Of Education ,,Tamil Nadu   
H.T.P. Teacher Training Institute ,,Tamil Nadu   
H.V. Desai College Of Artsscience & Commcollege ,,Maharashtra   
H.V. Teacher Training Institute ,,Karnataka   
H.V.P. Mandal'S College Of Gineering & Technology ,,Maharashtra   
H.V.P. Mandal'S Degree College Of Physical Edu ,,Maharashtra   
Haardik College Of Education ,,Punjab   
Hadgaon Taluka Shikshan Prasarak Mandal'S Adhyapak ,,Maharashtra   
Haess Smt K A Jigalur Arts Commerce College ,,Karnataka   
Hafiz Rehmat Khan Law College ,Chandauli   ,Uttar Pradesh   
Haindavi College ,Hyderabad   ,Andhra Pradesh   
Haindavi Universal B Ed College ,,Andhra Pradesh   
Hais Pre Primary Tti ,,Kerala   
Haji Ismail Degree College ,,Uttar Pradesh   
Haji Jan Mohammed Motiwala Iqra ,,Maharashtra   
Haji Mohammed Khasim & Mohammed Gulab Saheb Coll O ,,Andhra Pradesh   
Haji Sms Shaik Jalaludeen Teacher Training Instt ,,Tamil Nadu   
Hakeem Harbans Singh New Era College Of Education ,,Haryana   
Halakura College ,Dhuburi   ,Assam   
Halappa Kote B Ed Colllege ,,Karnataka   
Haldia Government College ,,West Bengal   
Haldia Institute Of Technology. ,East Medinipur   ,West Bengal   
Haldia Law College ,Medinipur   ,West Bengal   
Halflong Government College ,,Assam   
Halim Muslim Degree (Pg) College ,,Uttar Pradesh   
Halim Muslim Degree College Deptt Of Education ,,Uttar Pradesh   
Hallmark Business School ,Trichy   ,Tamil Nadu   
Hamdard Associations Ashrafee Tti ,,Karnataka   
Hameed Piyare College Of Education ,,Karnataka   
Hamidabad College ,Nagaon   ,Assam   
Hamidia Girls Degree College ,,Uttar Pradesh   
Hamirpur College Of Education ,,Himachal Pradesh   
Hanamgowda Patil Smaraka Teacher Training Institut ,,Karnataka   
Handa College Education ,,Jammu And Kashmir   
Handia Degree College ,,Uttar Pradesh   
Handia Post Graduate College ,,Uttar Pradesh   
Handique Girls' College ,Kamrup   ,Assam   
Haneefa Kunju Memorial College Of Education ,,Kerala   
Hanifa Kunju Memorial Teacher Trg Institute ,,Kerala   
Hanna College Of Education ,,Andhra Pradesh   
Hanna Telgu Pandit College ,,Andhra Pradesh   
Hannamma Christian College Of Education ,,Andhra Pradesh   
Hans College Of Education ,,Rajasthan   
Hans Raj College ,Delhi   ,Delhi   
Hans Raj Mahila College ,,Punjab   
Hans Raj Memorial College Of Education ,,Punjab   
Hans Teacher Training College ,,Rajasthan   
Hansraj Jivandas College Of Education ,,Maharashtra   
Hansraj Jiwandas College Of Education ,,Maharashtra   
Hanuman Gramin Vikas And Shikshan Prasarak Mandal ,,Maharashtra   
Hanuman Vyamshala Krida Mandals Physical Education College ,,Maharashtra   
Hanuman Vyayamshala Kreeda Mandal'S College ,,Maharashtra   
Hanumat Vidyapeeth Women Teachers Training College ,,Rajasthan   
Happy Child Shiksha Samiti ,,Haryana   
Happy College Of Education ,,Haryana   
Happy Institute Of Education ,,Haryana   
Happy Valley Business School ,Coimbatore   ,Tamil Nadu   
Har Sahai P G College ,,Uttar Pradesh   
Harakejamd Chouradia College ,,Madhya Pradesh   
Haranahalli Ramaswamy Institute Of Higher Edu ,Hassan   ,Karnataka   
Harcourt Butler Technological Institute ,Kanpur   ,Uttar Pradesh   
Harda Adarsh College ,,Madhya Pradesh   
Hardayal Bed College ,,Madhya Pradesh   
Hardekar Manjappa D Ed College ,,Karnataka   
Hari College Of Law ,Saharanpur   ,Uttar Pradesh   
Hari Das Institute Of Legal Studies And Research ,Mathura   ,Uttar Pradesh   
Hari Institute Of Technology ,,Uttar Pradesh   
Hari Om Bahuuddeshiya Sevabhavi Sanstha ,,Maharashtra   
Hari Om Shiv Om College Of Education ,,Haryana   
Hari Shankar Prasad Law College ,Ballia   ,Uttar Pradesh   
Hari Sree Educational Trust ,,Tamil Nadu   
Haribhau Upadhayay Teachers College For Women ,,Rajasthan   
Harichandra Mahavidhyalaya ,Varanasi   ,Uttar Pradesh   
Harideo Joshi T T School ,,Rajasthan   
Harideojoshi Rajkiya Kanya Mahavidyalaya ,,Rajasthan   
Harihar P T C College ,,Gujarat   
Harihar Prasad Mahavidyalaya ,,Uttar Pradesh   
Harihareshwara Vidya Samsthe ,,Karnataka   
Harinaik D Ed College ,,Maharashtra   
Haringata Mahavidyalya ,,West Bengal   
Harish Chandra P G College Deptt Of Edu ,,Uttar Pradesh   
Harish Chandra Post Graduate College ,,Uttar Pradesh   
Harish More Sharirik Shikshan Mahavidyalaya ,,Maharashtra   
Harivallabhdas Kalidas Arts College ,,Gujarat   
Harkamaya College Of Education ,,Sikkim   
Harkamya College Of Education ,,Sikkim   
Harlal Institute Of Management & Technology ,Noida   ,Uttar Pradesh   
Harlal School Of Law ,Noida   ,Uttar Pradesh   
Harmukh College Education ,,Jammu And Kashmir   
Harnam Das Lekhraj Institute Of Education ,,Rajasthan   
Harsahay Degree College ,,Uttar Pradesh   
Harsh College Of Education ,,Haryana   
Harsh Teacher Training College ,,Rajasthan   
Harshavardhana B Ed College ,,Karnataka   
Harshit Teachers Training Institute ,,Karnataka   
Harsiddh Sarvajanik Trust ,,Gujarat   
Harur Muthu Arts And Science College For Women ,Dharmapuri   ,Tamil Nadu   
Harvard College Of Education ,,Andhra Pradesh   
"Harvard Degree College, Thondangi ",East Godavari   ,Andhra Pradesh   
Haryana College Of B Ed Mudhal Road Sokhi ,,Haryana   
Haryana College Of Education ,,Haryana   
Haryana College Of Education For Women ,,Haryana   
Haryana College Of Technology & Management. ,Ambala   ,Haryana   
"Haryana Engineering Colleges, ",Jagadhari   ,Haryana   
Haryana Institute Of Business Management ,Bahadurgarh   ,Haryana   
Haryana Institute Of Education ,,Haryana   
Haryana Institute Of Technology ,Rohtak   ,Haryana   
Haryana School Of Business ,Hissar   ,Haryana   
Hasanamba College Of Education ,,Karnataka   
Hasananmba College Education ,,Karnataka   
Hashmatrai And Gangaram Himathmal Mansukhani Institute Of Management ,Thane   ,Maharashtra   
Hashmi Girls Degree College ,,Uttar Pradesh   
Hashmiya Urdu Junior College Of Education ,,Maharashtra   
Hasmukh Goswami College Of Engineering ,Ahmedabad   ,Gujarat   
Hasnath College For Women ,,Karnataka   
"Hassan Institute Of Medical Sciences, Hasssan ",Bijapur   ,Karnataka   
Hasvita Institute Of Engineering & Technology Hiet ,Keesara   ,Andhra Pradesh   
Havanur College Of Law ,Bangalore   ,Karnataka   
Havard Instt Of Management And Technology ,,Uttar Pradesh   
Hawabag Women'S College (Education Department) ,,Madhya Pradesh   
Hawabagh Womens College ,,Madhya Pradesh   
Hayathul Islam Orphange Teacher Training Institut ,,Kerala   
Hazarath Sheik Min Ajuddin Ansari Kollerawan Chari ,,Karnataka   
Hazrat Sayed Fateh Sha Vali Teachers Training Inst ,,Karnataka   
Hazrath Ameeruddin College Of Education ,,Andhra Pradesh   
Hazrath Madar Shah Makan D Ed College ,,Karnataka   
Hdpy B Ed Training College ,,Kerala   
Heeralal Yadav Balika Degree College ,,Uttar Pradesh   
Heeralal Yadav Law College ,Lucknow   ,Uttar Pradesh   
Hemanth D Ed College ,,Karnataka   
Hemchandracharya North Gujarat University ,Patan   ,Gujarat   
Hemoprova Barbera Girls College ,,Assam   
Hemwati Nandan Bahuguna Garhwal University ,,Jammu And Kashmir   
Henry Baker College ,Kottayam   ,Kerala   
Heramba Chandra College ,,West Bengal   
Heritage College Of Physical Education ,,Haryana   
Heritage Institute Of Technology. ,Calcutta   ,West Bengal   
Hi Tech Institute Of Technology ,,Uttar Pradesh   
Hict Shiksha Mahavidyalaya ,,Madhya Pradesh   
Hidayatullah National Law University Hnlu ,Raipur   ,Chhattisgarh   
Hilal E Ahmar Educational Trust(R) ,,Karnataka   
Hilal Education Society (R) ,,Karnataka   
Hill College ,,Manipur   
Hills College Of Teacher Education ,,Arunachal Pradesh   
Hillside Institute Of Mgt. & Academy ,Bangalore   ,Karnataka   
Him Institute Of Teacher Education ,,Himachal Pradesh   
Himachal College Of Education ,,Himachal Pradesh   
Himachal Institute Of Education ,,Himachal Pradesh   
Himachal Pradesh College Of Education ,Haryana,Himachal Pradesh   
Himachal Pradesh College Of Law ,Sirmaur   ,Himachal Pradesh   
Himachal Pradesh Krishi Vishwavidyalaya ,,Himachal Pradesh   
Himachal Pradesh University ,Shimla   ,Himachal Pradesh   
Himachal Pradesh University Deptt Of Education ,,Himachal Pradesh   
Himachal Pradesh University Evening College ,,Himachal Pradesh   
Himalayan College ,,Uttaranchal   
Himalayan College Education ,,Jammu And Kashmir   
Himalayan College Of Education ,,Himachal Pradesh   
Himalayan Doon Academy ,,Uttaranchal   
"Himalayan Institute Of Medical Sciences, Dehradun ",Dehradun   ,Uttaranchal   
Himalayan Institute Of Mgt ,Sirmaur   ,Himachal Pradesh   
Himgiri Educational Institute ,,Uttaranchal   
Himmat Nagar Kelwani Mandal Law College ,Himmatnagar   ,Gujarat   
Himtaj Degree College Deptt Of B Ed ,,Uttar Pradesh   
Hindi Mahavidayalaya ,Nalgonda   ,Andhra Pradesh   
Hindi Prachar Kendra ,,Kerala   
Hindi Prachara Kendra College Of Teacher Education ,,Kerala   
Hindi Shikshak Prasikshan Mahavidyalaya ,,Andhra Pradesh   
Hindi Teachers Training College ,,Manipur   
Hindi Training Institute Cuttack ,,Orissa   
Hindu College ,Guntur   ,Andhra Pradesh   
Hindu College ,Delhi   ,Delhi   
Hindu College ,,Haryana   
Hindu College ,,Punjab   
Hindu College ,,Uttar Pradesh   
Hindu College Krishna ,Krishna   ,Andhra Pradesh   
Hindu College Of Engineering ,Sonipat   ,Haryana   
Hindu Degree College ,,Uttar Pradesh   
Hindu Degree College For Women ,Hyderabad   ,Andhra Pradesh   
Hindu Girls College ,,Haryana   
Hindu Girls College Jagadhari ,,Haryana   
Hindu Institute Of Management ,Sonipat   ,Haryana   
Hindu Institute Of Management & Technology ,Rohtak   ,Haryana   
Hindu Kanya College ,,Punjab   
Hindu Kanya Mahavidhalaya ,,Uttar Pradesh   
Hindu Kanya Mahavidyalaya ,,Haryana   
Hindu Kanya Mahavidyalaya ,,Punjab   
Hindu Kanya Mahavidyalaya (Pg) College ,,Uttar Pradesh   
"Hindu Rao Hospital, Delhi ",Delhi   ,Delhi   
Hindustan Academy - Bangalore ,Kochi   ,Kerala   
Hindustan College Of Engineering ,Kanchipuram   ,Tamil Nadu   
Hindustan College Of Science & Technology ,Mathura   ,Uttar Pradesh   
Hindustan Institute Of Engineering Technology ,Trichy   ,Tamil Nadu   
Hindustan Institute Of Management & Computer Studies ,,Uttar Pradesh   
Hindustan Institute Of Technology ,Noida   ,Uttar Pradesh   
"Hindustan Institute Of Technology & Management, ",Ambala   ,Haryana   
Hindustan Institute Of Technology Tamil Nadu ,Coimbatore   ,Tamil Nadu   
Hindustan Shipyard Degree College ,Visakhapatnam   ,Andhra Pradesh   
Hindustan University Chennai ,Chennai   ,Tamil Nadu   
Hindusthan College Of Arts And Science ,Coimbatore   ,Tamil Nadu   
Hindusthan College Of Arts And Science ,Chennai   ,Tamil Nadu   
Hindusthan College Of Education ,,Tamil Nadu   
Hindusthan College Of Engineering & Technology ,Coimbatore   ,Tamil Nadu   
Hindusthan Teachers Training Institute ,,Tamil Nadu   
Hi-Point College Of Engineering & Technology ,Moinbad   ,Andhra Pradesh   
Hira B Ed College ,,Karnataka   
Hira Lal Ram Niwas Pg Degree College ,,Uttar Pradesh   
Hira Sugar Institute Of Technology ,Belgaum   ,Karnataka   
Hirachand Nemchand College Of Commerce ,Sholapur   ,Maharashtra   
Hiralal Bapulal Kapadia College Of Edn ,,Gujarat   
Hiralal Bharat College ,,West Bengal   
Hiralal Ramniwas Post Graduate College ,,Uttar Pradesh   
Hirekerur Taluka Vidyavardhak Sahakari Sangha Ltd ,,Karnataka   
Hiremath Samsthan Vidyapeeth Trust ,,Karnataka   
Hislop College ,,Maharashtra   
Hi-Tech College Of Engineering & Technology ,Moinbad   ,Andhra Pradesh   
Hi-Tech Institute Of Engineering ,Ghaziabad   ,Uttar Pradesh   
Hi-Tech Institute Of Information Technology (Hiit) ,Jaypore   ,Orissa   
Hi-Tech Institute Of Technology ,Aurangabad   ,Maharashtra   
"Hi-Tech Medical College & Hospital, Bhubaneswar ",Bhubaneswar   ,Orissa   
Hitkari Co Op Womens College Of Education ,,Rajasthan   
Hitkari Co Operative Shrmjivi Evening College ,,Rajasthan   
Hitkari College Of Education ,,Haryana   
Hitkarini Arts Commerce & Science College ,,Madhya Pradesh   
Hitkarini Law College ,Jabalpur   ,Madhya Pradesh   
Hitkarini Mahila College ,,Madhya Pradesh   
Hitkarni College Of Engineering Technology ,Jabalpur   ,Madhya Pradesh   
Hitkarni Women'S College Of Education ,,Madhya Pradesh   
Hits Degree College ,Hyderabad   ,Andhra Pradesh   
Hits Institute Of Eduncational Training ,,Andhra Pradesh   
Hkbk College Of Engineering ,Bangalore   ,Karnataka   
Hkes Sln College Of Engineering ,Raichur   ,Karnataka   
Hmr Institute Of Technology And Management ,Delhi   ,Delhi   
Hms Institute Of Technology ,Tumkur   ,Karnataka   
Hms Teachers Training Institute ,,Karnataka   
Hojai College ,Nagaon   ,Assam   
Holkar Science College ,,Madhya Pradesh   
Holly Cross Mahila Basic Training Institute ,,Chhattisgarh   
Holy Angels Teacher Training Institute For Women ,,Tamil Nadu   
Holy Crescent College Of Education ,,Kerala   
Holy Cross College ,Trichy   ,Tamil Nadu   
Holy Cross College Of Education ,,Tamil Nadu   
"Holy Cross College, Nagercoil ",Nagarcoil   ,Tamil Nadu   
Holy Cross Degree College For Women ,Hyderabad   ,Andhra Pradesh   
Holy Cross Home Science College ,Tuticorin   ,Tamil Nadu   
Holy Cross Institute Of Management And Technology ,Kozhikode   ,Kerala   
Holy Cross Teacher Training Institute ,,Tamil Nadu   
Holy Faith Minority College Of Education ,,Andhra Pradesh   
Holy Faith Pg College ,Mandal   ,Andhra Pradesh   
Holy Family Training College For Women ,,Kerala   
Holy Grace Academy Of Management Studies ,Malappuram   ,Kerala   
Holy Jesus & Mary Pg College Of Computer Science ,Secunderabad   ,Andhra Pradesh   
Holy Mary Institute Of Tech. & Science ,Keesara   ,Andhra Pradesh   
Holy Mary Institute Of Technology And Science College,,Andhra Pradesh   
Holy Mother Pg College ,Hyderabad   ,Andhra Pradesh   
Holy Trinity College Of Education ,,Andhra Pradesh   
Holy Trinity College Of Education ,,Tamil Nadu   
Holy Trinity Institute Of Ednl Training(Elementar ,,Andhra Pradesh   
"Home Science College And Research Institute,Madurai ",Madurai   ,Tamil Nadu   
Hooghly B C Roy Institute 
Ideal College Arts Science ,Kakinada   ,Andhra Pradesh   
Ideal College Of Education ,,Maharashtra   
Ideal College Of Education ,,Maharashtra   
Ideal College Of Education ,,Uttar Pradesh   
Ideal Degree College For Women ,Hyderabad   ,Andhra Pradesh   
Ideal Educational Institute Of Teacher Training ,,Kerala   
Ideal Educational Society Training College ,,Kerala   
Ideal Girls College ,,Manipur   
Ideal Institute Of Management & Technology ,,Delhi   
Ideal Institute Of Technology ,Ghaziabad   ,Uttar Pradesh   
Ideal Teacher Training Institute ,,Tamil Nadu   
Ideal Training College ,,Kerala   
Idhaya College Of Arts & Scence For Women ,Pondicherry   ,Pondicherry   
Idhaya College Of Arts And Science For Women ,Kumbakonam   ,Tamil Nadu   
Idhaya Engineering College For Women ,Villupuram   ,Tamil Nadu   
"Idhaya Womens College, Sarugani ",Sivagangai   ,Tamil Nadu   
Idhayaam College Of Education ,,Tamil Nadu   
Idhayam Womens College ,Ramanathapuram   ,Tamil Nadu   
Iec College Of Engineering & Technology ,Noida   ,Uttar Pradesh   
Iercem Institute Of Information Technology: ,North 24 Parganas   ,West Bengal   
Ies College Of Education ,,Madhya Pradesh   
Ies College Of Engineering ,Trichur   ,Kerala   
Ies College Of Technology ,Bhopal   ,Madhya Pradesh   
Iet P T C College (Gujrati Medium) ,,Gujarat   
Ifet College Of Engineering. ,Villupuram   ,Tamil Nadu   
Ihm Lucknow 
"Ihm, Ahmedabad ",Gandhi Nagar   ,Gujarat   
"Ihm, Aurangabad (Taj Group) ",Aurangabad   ,Maharashtra   
"Ihm, Bangalore ",Bangalore   ,Karnataka   
"Ihm, Chennai ",Chennai   ,Tamil Nadu   
"Ihm, Delhi ",Delhi   ,Delhi   
"Ihm, Hyderabad ",Hyderabad   ,Andhra Pradesh   
"Ihm, Kolkata ",,West Bengal   
"Ihm, Lucknow ",Noida   ,Uttar Pradesh   
Iimt Academy Of Teacher Education ,,Uttar Pradesh   
Iimt College Of Engineering ,Noida   ,Uttar Pradesh   
Iimt Engineering College ,Meerut   ,Uttar Pradesh   
Iimtcollege Of Science And Technology ,,Uttar Pradesh   
Iipm-School Of Management ,Rourkela   ,Orissa   
Iits College ,,Madhya Pradesh   
Iitt College Of Engineering And Technology ,Rajkot   ,Himachal Pradesh   
Iitt College Of Engineering And Technology Punjab ,,Punjab   
Ilahia College Of Engineering & Technology ,Ernakulam   ,Kerala   
Ilahiya Arts & Science College ,Kozhikode   ,Kerala   
Illahia College Of Arts And Science ,,Kerala   
Ilva Commerce And Science College ,,Madhya Pradesh   
Imam College Of Business Management & Science ,Darbhanga   ,Bihar   
Imanul Hai Khan Law College ,Bokaro   ,Jharkhand   
Imayam College Of Education ,,Tamil Nadu   
Imayam Teacher Training Institute ,,Tamil Nadu   
Immaculate College ,Krishna   ,Andhra Pradesh   
Indira Gandhi Arts & Commerce College ,,Maharashtra   
Indira Gandhi Arts Science College ,,Chhattisgarh   
Indira Gandhi B Ed College ,,Karnataka   
Indira Gandhi B Ed Mahavidyalaya ,,Madhya Pradesh   
Indira Gandhi Balika Niketan College ,,Rajasthan   
Indira Gandhi Balika Niketan College ,,Rajasthan   
Indira Gandhi College For Women ,Secunderabad   ,Andhra Pradesh   
Indira Gandhi College Of Education ,,Karnataka   
Indira Gandhi College Of Education ,,Madhya Pradesh   
Indira Gandhi College Of Education ,,Maharashtra   
Indira Gandhi College Of Engineering ,Sagar   ,Madhya Pradesh   
Indira Gandhi College Of Engineering & Technology For Women ,Chennai   ,Tamil Nadu   
Indira Gandhi College Of Physical Education ,,Maharashtra   
Indira Gandhi Colleges Of Arts & Science ,Pondicherry   ,Pondicherry   
Indira Gandhi Degree College ,,Uttar Pradesh   
"Indira Gandhi Degree College, Bobbili ",Bobbili   ,Andhra Pradesh   
Indira Gandhi Government College ,Lohit   ,Arunachal Pradesh   
Indira Gandhi Government Degree College ,,Uttar Pradesh   
Indira Gandhi Govt. General Hospital And Post Graduate Institute ,Pondicherry   ,Pondicherry   
Indira Gandhi Inst Of Phy Edu And Sports Science ,,Delhi   
"Indira Gandhi Institute Of Child Health, Bangalore ",Bangalore   ,Karnataka   
Indira Gandhi Institute Of Co-Operative Management ,,Uttar Pradesh   
Indira Gandhi Institute Of Development Research ,,Maharashtra   
Indira Gandhi Institute Of Medical Sciences ,Patna   ,Bihar   
Indira Gandhi Institute Of Science And Technology ,,Orissa   
Indira Gandhi Institute Of Technology ,Dhenkanal   ,Orissa   
Indira Gandhi Jayanthi Womens College ,Villupuram   ,Tamil Nadu   
Indira Gandhi Krishi Vishwavidyalaya ,Raipur   ,Chhattisgarh   
Indira Gandhi Medical College ,Shimla   ,Himachal Pradesh   
"Indira Gandhi Medical College & Hospital, Nagpur ",Nagpur   ,Maharashtra   
Indira Gandhi National Open University ,Delhi   ,Delhi   
Indira Gandhi Post Graduate College ,,Uttar Pradesh   
Indira Gandhi Primary Teacher Training Center ,,Karnataka   
Indira Gandhi Rajkiya Mahila Mahavidyalaya ,,Uttar Pradesh   
Indira Gandhi Rashtriy Uran Akadamic ,,Uttar Pradesh   
Indira Gandhi Teachers Training Institute ,,Kerala   
Indira Gandhi Urdu D Ed College ,,Maharashtra   
Indira Gandhi Womens College ,,Orissa   
Indira Institute Of Business Management ,Mumbai   ,Maharashtra   
Indira Institute Of Engineering And Technology ,Tiruvallur   ,Tamil Nadu   
Indira Institute Of Management ,Pune   ,Maharashtra   
Indira Institute Of Management And Research ,Tiruvallur   ,Tamil Nadu   
Indira Kala Sangit Vishwavidyalaya ,Khairagarh   ,Chhattisgarh   
Indira Mahavidyalaya ,,Maharashtra   
Indira Priyadarshani College ,,Madhya Pradesh   
Indira Priyadarshini College Of Law ,Bangalore   ,Karnataka   
Indira Priyadarshini College Of Management ,Bhopal   ,Madhya Pradesh   
Indira Priyadarshini Govt Degree Colleg For Women ,Nampally   ,Andhra Pradesh   
Indira Rajiv Memorial College ,Kuppam   ,Andhra Pradesh   
Indira Shikshan Prasarak Mandal'S ,,Maharashtra   
Indira Teachers Training Institute ,,Karnataka   
Indira Teachers Training Institute ,,Tamil Nadu   
Indira Womens Degree College ,Adilabad   ,Andhra Pradesh   
"Indira Womens Degree College, Siddipet ",Siddipet   ,Andhra Pradesh   
Indiramma Womens Degree College ,Achampet   ,Andhra Pradesh   
Indo American Institute Village ,,Rajasthan   
Indo Global College Of Education ,,Punjab   
Indo Global College Of Engineering ,,Punjab   
Indo Universal College Of Management & Technology ,,Uttar Pradesh   
Indo-American College ,Tiruvannamalai   ,Tamil Nadu   
Indore Christian College ,Indore   ,Madhya Pradesh   
Indore Institute Of Law ,Indore   ,Madhya Pradesh   
Indore Institute Of Technology ,Indore   ,Madhya Pradesh   
Indore Mahavidyalaya ,,Madhya Pradesh   
Indore Management Institute ,Indore   ,Madhya Pradesh   
Indore School Of Social Work ,,Madhya Pradesh   
Indra B Ed College ,,Karnataka   
Indra Educational & Charitable Trust ,,Karnataka   
Indra Ganesan College Of Education ,,Tamil Nadu   
Indra Ganesan College Of Engineering ,Trichy   ,Tamil Nadu   
Indra Ganesan Teacher Training Institute ,,Tamil Nadu   
Indra Priyadarshini College ,,Madhya Pradesh   
Indra Teacher Training Institute ,,Tamil Nadu   
Indrabhyga Krushi Va Gramin Vikas Sanstha ,,Maharashtra   
Indradev Institute Of Education And Technology ,,Uttar Pradesh   
Indrani Mahavidyalaya ,,Maharashtra   
Indrapati Mahavidyalaya ,,Uttar Pradesh   
Indraprastha College ,,Uttar Pradesh   
Indraprastha College For Women ,Delhi   ,Delhi   
Indraprastha College Of Education & Technology ,,Uttar Pradesh   
Indraprastha Engineering College ,Ghaziabad   ,Uttar Pradesh   
Indraprastha Institute Of Education & Management ,,Uttar Pradesh   
Indraprastha University ,Delhi   ,Delhi   
Indrapuri Asha Shiksha Samiti ,,Madhya Pradesh   
Indrawas Kumari Memorial Degree College ,,Uttar Pradesh   
Indu Memorial Teacher Training Centre ,,Kerala   
Induben Trivedi B Ed College ,,Gujarat   
Indukaka Lpcowala Institute Of Management ,Anand   ,Gujarat   
Indur College Of Education ,,Andhra Pradesh   
Indur Institute Of Elementary Teacher Edn ,,Andhra Pradesh   
Indur Institute Of Engineering & Technology ,Siddipet   ,Andhra Pradesh   
Indur Pg College Of Business Management ,Nizamabad   ,Andhra Pradesh   
Indus College Of Education ,,Haryana   
Indus College Of Engineering ,Coimbatore   ,Tamil Nadu   
Indus College Of Engineering Orissa ,,Orissa   
Indus Institute Of Engineering & Technology ,Gandhi Nagar   ,Gujarat   
Indutai Memorial College Of Physical Education ,,Maharashtra   
Infant Jesus College Of Engineering ,Tuticorin   ,Tamil Nadu   
Infant Jesus D Ed College ,,Karnataka   
Infant Jesus Polytechnic College ,Cuddalore   ,Tamil Nadu   
Infant Jesus Society ,,Maharashtra   
Infant Jesus Teacher Training Institute ,,Tamil Nadu   
Info Institute Engineering ,Coimbatore   ,Tamil Nadu   
Infotech Education Society ,,Madhya Pradesh   
Innocent Heart College Of Education ,,Punjab   
Innovative Institute Of Education And Technology ,,Uttar Pradesh   
Innovative Institute Of Law ,Noida   ,Uttar Pradesh   
Insight Institute Education And Training ,,Jammu And Kashmir   
Inspiration College Of Teachers Education ,,Uttaranchal   
Inst Of Advncd Study In Edn Sri Venkateswara Unive ,,Andhra Pradesh   
Inst. Of Marketing & Management ,Delhi   ,Delhi   
Institute Aviation Medicine ,,Karnataka   
Institute Engineering Technology Agra ,,Uttar Pradesh   
Institute Engineering Technology Jaunpur ,,Uttar Pradesh   
Institute Engineering Technology Jhansi ,,Uttar Pradesh   
Institute Engineering Technology Kanpur ,,Uttar Pradesh   
Institute For Education & Technical Sciences ,,Uttar Pradesh   
Institute For Financial Management And Research ,Chennai   ,Tamil Nadu   
Institute For Higher Education ,,Uttar Pradesh   
"Institute For Integrated Learning In Management, Delhi ",Delhi   ,Delhi   
Institute For Management Studies ,Haridwar   ,Uttaranchal   
"Institute For Technology & Management, Chennai ",Chennai   ,Tamil Nadu   
Institute Of Advance Studies In Education ,,Andhra Pradesh   
Institute Of Advance Studies In Education ,,Kerala   
Institute Of Advanced Computer ,,Orissa   
Institute Of Advanced Studies In Education ,Chennai   ,Tamil Nadu   
Institute Of Advanced Studies In Education ,,Tripura   
Institute Of Advanced Studies In Education (Deemed ,,Rajasthan   
Institute Of Advanced Study In Education ,,Andhra Pradesh   
Institute Of Advanced Study In Education ,,Tamil Nadu   
Institute Of Advanced Technology And Science ,,Madhya Pradesh   
Institute Of Advancedscience And Technology ,Gwalior   ,Madhya Pradesh   
Institute Of Aeronautical Engineering ,Quthubullapur   ,Andhra Pradesh   
"Institute Of Aerospace Medicine Indian Air Force, Bangalore ",Bangalore   ,Karnataka   
Institute Of Allied Sciences And Computer Appl ,,Madhya Pradesh   
Institute Of Applied Medicines & Research ,,Uttar Pradesh   
Institute Of Business & Computer Studies ,Bhubaneswar   ,Orissa   
Institute Of Business Adminstration & Training ,Bhubaneswar   ,Orissa   
Institute Of Business Management ,Darbhanga   ,Bihar   
Institute Of Business Management & Research ,Indore   ,Madhya Pradesh   
Institute Of Business Management & Research ,Pune   ,Maharashtra   
Institute Of Business Management & Research ,Calcutta   ,West Bengal   
Institute Of Business Management & Rural Development ,Ahmednagar   ,Maharashtra   
"Institute Of Business Management & Technology, Bangalore ",Bangalore   ,Karnataka   
Institute Of Business Management And Research ,Pune   ,Maharashtra   
Institute Of Business Mangement & Fashion Tec ,,Uttar Pradesh   
Institute Of Co-Operative Management ,Bhopal   ,Madhya Pradesh   
J B College,,Assam  
J B S Dhanour College,,Bihar  
J C E Trust Sanchalit Commerce College,,Gujarat  
J D S G College,,Assam  
J D Womens' College,Patna  ,Bihar  
J G College Commerce,,Karnataka  
J J College Arrah,,Bihar  
J J College Bihar,,Bihar  
J J College Jharkhand,,Jharkhand  
J K College Education,,Jammu And Kashmir  
J K Institute Of Applied Physics Technology,,Uttar Pradesh  
J K K Nataraja College Arts Science,Salem  ,Tamil Nadu  
J L N College,,Bihar  
J L N College Jharkhand,,Jharkhand  
J L N Degree College,,Chhattisgarh  
J L N M College,,Bihar  
J M College,,Jharkhand  
J M D P L Mahila College,,Bihar  
J M J College For Women,Guntur  ,Andhra Pradesh  
J M M Institute Of Technology,,Karnataka  
J M S College,,Bihar  
J M Shah Arts And Commerce College,,Gujarat  
J N College Arunachal Pradesh,East Siang  ,Arunachal Pradesh  
J N College Bihar,,Bihar  
J N College Jharkhand,,Jharkhand  
J N L College,,Bihar  
J P College,,Bihar  
J P Mahila College,,Bihar  
J P Pardiwala Arts And Commerce College,,Gujarat  
J S College,,Bihar  
J S S College Arts Commerce Science Chamrajanagar,,Karnataka  
J S S College Arts Commerce Science Karnataka,,Karnataka  
J S S College Arts Science Commerce Mysore,,Karnataka  
J S S College For Women,,Karnataka  
J S S College Karnataka,,Karnataka  
J S S College Pharmacy,,Karnataka  
J Z Shah Arts H P Shah Commerce College,,Gujarat  
J. Baruah Law College,Guwahati  ,Assam  
J. Beera College Of Education,,Andhra Pradesh  
J. Buana College,,Mizoram  
J. Dugad Charitable Trust,,Maharashtra  
J. S. Institute Of Management & Technology,Shikohabad  ,Uttar Pradesh  
"J. Sikkle Degree College, Narsapur",Narasapur  ,Andhra Pradesh  
J.A. Arts And Science College,Chennai  ,Tamil Nadu  
J.A.S. Teacher Training Institute,,Tamil Nadu  
J.A.T. B Ed College For Women Jadeed Anjuman E,,Maharashtra  
J.A.T. Junior College Of Education,,Maharashtra  
J.As. College Of Education,,Tamil Nadu  
J.B. Institute Of Pg Course,Chitoor  ,Andhra Pradesh  
J.B. Shah Girls College,,Rajasthan  
J.B. Teachers Training Institute,,Rajasthan  
J.B.M. College Of Education,,Haryana  
J.C. D.A.V. College,,Punjab  
J.C. Education Trust Law College,Junagadh  ,Gujarat  
J.C. Mills Girls College,,Madhya Pradesh  
J.C.T. Teacher Training Institute,,Tamil Nadu  
J.D. College Of Education,,Punjab  
J.D. Patil Sangludkar Arts & Commerce College,,Maharashtra  
J.D. Patil Sangludkar Smriti Kendra,,Maharashtra  
J.D.B. Girls College,,Rajasthan  
J.D.C. Byteco Institute Of Management Studies,Nashik  ,Maharashtra  
J.D.M.V.P. Coop. Samajs Arts Science & Commerce College,,Maharashtra  
J.D.T. Islam College Of Arts & Science,Kozhikode  ,Kerala  
J.E.S. College Of Education,,Andhra Pradesh  
J.E.S. Degree College For Women,Visakhapatnam  ,Andhra Pradesh  
J.E.S.S.R.J.B. Artss.B.L. Commerce And R.Bezoji Science College,,Maharashtra  
J.G. College Of Education,,Haryana  
J.G. College Of Education For Women,,Gujarat  
J.G. College Of Primary Education,,Gujarat  
J.G.K.P. Teacher Training Institute,,Karnataka  
J.J. College Of Arts And Science,Pudukotai  ,Tamil Nadu  
J.J. College Of Education,,Tamil Nadu  
J.J. College Of Engg & Technology,Tiruvarur  ,Tamil Nadu  
J.J. College Of Physical Education,,Tamil Nadu  
J.J. Mahila M Ed College,,Gujarat  
J.J. Teachers Training Institute,,Tamil Nadu  
J.J.M. Medical College,Davanagere  ,Karnataka  
J.J.R. Education Society,,Karnataka  
J.K. College Of Education,,Tamil Nadu  
J.K. Institute Of Engineering,Bilaspur  ,Chhattisgarh  
J.K. Jain Memorial College Of Education,,Madhya Pradesh  
J.K. Memorial College Of Education,,Haryana  
J.K. Padampat Singhania Institute Of Mgt. & Tech,Gurgaon  ,Haryana  
J.K. Teacher Training Institute,,Tamil Nadu  
J.K.C. College,Guntur  ,Andhra Pradesh  
J.K.K. Munirajah College Of Technology,Erode  ,Tamil Nadu  
J.K.K. Nataraja College Of Engineering And Technology,Salem  ,Tamil Nadu  
J.L. Nehru Degree College,,Uttar Pradesh  
"K J Somaiya College Of Engineering, Vidya-Nagar ",Vidyavihar   ,Maharashtra   
K M E A Engineering College ,Alwaye   ,Kerala   
"K. J. Somaiya Institute Of Engineering & Information Technology, ",Mumbai   ,Maharashtra   
K. K. Wagh Institute Of Engineering Education & Research College Of Engineering ,Panchavati   ,Maharashtra   
K. L. E. Society'S College Of Engineering ,Belgaum   ,Karnataka   
K. S. Rangasamy College Of Technology ,Namakkal   ,Tamil Nadu   
K.C.E. Soc'S College Of Engineering And Information Technology ,Jalgaon   ,Maharashtra   
K.L.N. College Of Engineering ,Madurai   ,Tamil Nadu   
K.L.S. Gogte Institute Of Technology ,Belgaum   ,Karnataka   
K.N.R. College Of Engineering & Technology ,Mulugh   ,Andhra Pradesh   
K.Ramakrishnan College Of Engineering ,Trichy   ,Tamil Nadu   
Kakatiya Institute Of Technology & Science ,Warangal   ,Andhra Pradesh   
Kakinada Institute Of Engineering & Technology ,Kakinada   ,Andhra Pradesh   
Kalaignar Karunanidhi Institute Of Technology ,Coimbatore   ,Tamil Nadu   
Kalasalingam Institute Technology ,Virudunagar   ,Tamil Nadu   
Kali Charan Nigam Institute Of Technology ,Banda   ,Uttar Pradesh   
Kalol Institute Of Technology & Researach Centre ,Gandhi Nagar   ,Gujarat   
Kalpataru Institute Of Technology ,Tiptur   ,Karnataka   
Kalsar College Of Engineering ,Kanchipuram   ,Tamil Nadu   
Kamala Institute Of Tech & Science ,Huzurabad   ,Andhra Pradesh   
Kamaraj College Of Engg & Technology ,Madurai   ,Tamil Nadu   
Kamareddy Engineering College ,Kamareddy   ,Andhra Pradesh   
Kamban Engineering College ,Tiruvannamalai   ,Tamil Nadu   
Kamla Nehru Institute Of Technology ,Saharanpur   ,Uttar Pradesh   
Kanad Institute Of Engg. & Management ,Birbhum   ,West Bengal   
Kanchi Pallavan Engineering College ,Kanchipuram   ,Tamil Nadu   
Kandula Obul Reddy Memorial College Of Engineering ,Cuddapah   ,Andhra Pradesh   
Kanpur Institute Of Technology ,Kanpur   ,Uttar Pradesh   
Karavali Institute Of Technology ,Mangalore   ,Karnataka   
Karmaveer Dadasaheb Kannamwar College Of Engineering ,Nagpur   ,Maharashtra   
Karnataka Law Society'S Viswanathrao Deshpande Rural Institute Of Technology ,,Karnataka   
Karpaga Vinayaga College Of Engineering And Technology ,Kanchipuram   ,Tamil Nadu   
Karpagam College Of Engineering ,Coimbatore   ,Tamil Nadu   
Karpagam Institute Of Technology ,Coimbatore   ,Tamil Nadu   
Karshak Engineering College ,Rangareddy   ,Andhra Pradesh   
Karunya Institute Of Technology ,Coimbatore   ,Tamil Nadu   
Karunya Institute Of Technology. ,Coimbatore   ,Tamil Nadu   
Kathir College Of Engineering ,Coimbatore   ,Tamil Nadu   
Kaushik College Of Engineering ,Cuddapah   ,Andhra Pradesh   
Kautilya Institute Of Technology & Engineering ,Jaipur   ,Rajasthan   
Kavikulguru Institute Of Technology And Science ,Nagpur   ,Maharashtra   
Kc College Of Engineering ,Kondhwa   ,Maharashtra   
Kc College Of Engineering And Information Technology ,,Punjab   
Kcb Technical Academy ,Indore   ,Madhya Pradesh   
Kcg College Of Technology ,Chennai   ,Tamil Nadu   
Kct Engineering College ,Gulbarga   ,Karnataka   
Keshav Memorial Institute Of Technology ,Narayanguda   ,Andhra Pradesh   
Kgisl Institute Technology ,Coimbatore   ,Tamil Nadu   
Khader Memorial College Of Engineering & Technology ,Nalgonda   ,Andhra Pradesh   
Khaja Banda Nawaz College Of Engineering ,Gulbarga   ,Karnataka   
Kiit College Of Engineering. ,Gurgaon   ,Haryana   
King College Of Technology ,Namakkal   ,Tamil Nadu   
Kings College Of Engineering ,Pudukotai   ,Tamil Nadu   
Kings College Of Engineering Tamil Nadu ,Kanchipuram   ,Tamil Nadu   
Kingston Engineering College ,Vellore   ,Tamil Nadu   
Kirodimal Institute Of Technology ,Raigarh   ,Chhattisgarh   
Kles College Of Engineering And Technology ,Belgaum   ,Karnataka   
Kles Kle Institute Of Technology ,Hubli   ,Karnataka   
"Kln College Of Information Technology, ",Madurai   ,Tamil Nadu   
"Kmct College Of Engineering, ",Kozhikode   ,Kerala   
Kngd Modi Engineering College ,Modinagar   ,Uttar Pradesh   
Kns Institute Of Technology ,Bangalore   ,Karnataka   
Knsk College Of Engineering ,Kanyakumari   ,Tamil Nadu   
Kodaikanal Institute Of Technology ,Kodaikanal   ,Tamil Nadu   
Kolhapur Instt.Of Tech'S Col Of Engg ,Kolhapur   ,Maharashtra   
Konark Inst Of Sci & Tech ,Bhubaneswar   ,Orissa   
Koneru Lakshmaiah College Of Engineering ,Guntur   ,Andhra Pradesh   
Kongu Engineering College ,Erode   ,Tamil Nadu   
Kongunadu College Of Engineering And Technology ,Trichy   ,Tamil Nadu   
Konkan Education Society'S Engineering College ,,Maharashtra   
Konkan Gyanpith'S College Of Engg ,,Maharashtra   
Kothagudem School Of Mines ,Khammam   ,Andhra Pradesh   
Kottam College Of Engineering ,Kallur   ,Andhra Pradesh   
Koustuv Institute Of Self Domain ,Patia   ,Orissa   
Krishna Engineering College ,Ghaziabad   ,Uttar Pradesh   
Krishna Institute Of Engineering And Technology ,Ghaziabad   ,Uttar Pradesh   
Krishna Murthy Institute Of Technology & Engineering ,Ghatkesar   ,Andhra Pradesh   
Krishnasamy College Of Engineering & Technology ,Cuddalore   ,Tamil Nadu   
Krupajala Engineering College ,Bhubaneswar   ,Orissa   
Kruti Institute Of Technology And Engineering ,Raipur   ,Chhattisgarh   
"Ks Institute Of Technology, ",Bangalore   ,Karnataka   
Kshatriya College Of Engineering ,Nizamabad   ,Andhra Pradesh   
Ksr College Of Engineering ,Namakkal   ,Tamil Nadu   
Ksrm College Of Engineering ,Cuddapah   ,Andhra Pradesh   
Ktvr Knowledge Park For Engineering And Technology ,Coimbatore   ,Tamil Nadu   
Kumaon Engineering College ,Almora   ,Uttaranchal   
Kumaraguru College Of Technology ,Coimbatore   ,Tamil Nadu   
Kuppam Engineering College ,Kuppam   ,Andhra Pradesh   
Kurinji College Of Engineering And Technology ,Trichy   ,Tamil Nadu   
"Kurukshetra. Institute Of Technology & Management, ",,Haryana   
Kvg College Of Engineering ,,Karnataka   
Kvm College Of Engineering And Information Technology ,,Kerala   
Kvvs Institute Of Technology ,Pathanamthitta   ,Kerala   
L B S Memorial College,,Jharkhand  
L C Bharali College,,Assam  
L N College,,Bihar  
L N D College,,Bihar  
L N Gupta College Science Commerce,Hyderabad  ,Andhra Pradesh  
L N Janta College,,Bihar  
L N K College Education,,Gujarat  
L N Mishra B Jha Mahila College,,Bihar  
L N Mishra Memorial College,,Bihar  
L N Rameshwar Sanskrit Mahavidyalaya,,Bihar  
L N T Mahavidyalaya,,Bihar  
L R Valia Arts And P R Mehta Commerce College,,Gujarat  
L S College,,Bihar  
L T K College,,Assam  
L. Patel Centre For Science And Technology,Anand  ,Gujarat  
L.B. College Of Education,,Andhra Pradesh  
L.B.S College Of Engineering,,Kerala  
L.B.S. Institute Of Management Studies & Research,Chandigarh  ,Chandigarh  
L.B.S. Mahila Shikshak Prashikshan Mahavidyalaya,,Rajasthan  
L.C.R.T. College Of Education,,Haryana  
L.E.S. Smt. K. Mirji Arts And Commerce College,,Karnataka  
L.J. Institute Of Engineering & Technology,Ahmedabad  ,Gujarat  
L.J. Institute Of Management Studies,Ahmedabad  ,Gujarat  
L.L.R.M. Medical College,,Uttar Pradesh  
L.M.S. Law College,,Manipur  
L.N. Patel Education College,,Gujarat  
L.N.M. College Of Business Management,Bhagalpur  ,Bihar  
L.N.M. Institute Of Economic Development & Social Change,Patna  ,Bihar  
L.R. College Of Advanced Studies,,Delhi  
L.R. Institute Of Education,,Himachal Pradesh  
L.R. Institute Of Legal Studies,Solan  ,Himachal Pradesh  
L.R. Institute Of Management,Solan  ,Himachal Pradesh  
L.R. Rav Primary Teacher Training College,,Gujarat  
L.R.G. Government Arts & Science College For Women,Coimbatore  ,Tamil Nadu  
L.S. Patel Mahila Adhyapan Mandir,,Gujarat  
L.T.R. Institute Of Technology,,Uttar Pradesh  
L.V.H. Arts Science & Commerce College,,Maharashtra  
L.V.R. Naidu College Of Physical Education,,Tamil Nadu  
L.V.R. Teacher Training Institute,,Karnataka  
Labhubhai Trivedi Ptc College,,Gujarat  
Labour India College Of Techer Education,,Kerala  
Labour India Educational Society Teachers Training,,Kerala  
Lachoo Memorial College Of Science,Jodhpur  ,Rajasthan  
Ladwa College Of Education,,Haryana  
Lady Barabourne College,,West Bengal  
Lady Doak College,Madurai  ,Tamil Nadu  
"Lady Hardinge Medical College, New Delhi",Delhi  ,Delhi  
Lady Irwin College,,Delhi  
"Lady Irwin College, New Delhi",Delhi  ,Delhi  
Lady Kean Girls College,,Meghalaya  
Lady Reid Basic Training Centre Shillong,,Meghalaya  
Lady Sharifa Ameen Jr College Of Education,,Maharashtra  
Lady Shri Ram College For Women,,Delhi  
"Lady Shri Ram College For Women, New Delhi",Delhi  ,Delhi  
Lady Violet College Of Women Chennai,Chennai  ,Tamil Nadu  
Lady Willingdon Institute Of Advncd Study In Edn,,Tamil Nadu  
Lady Willingdon Training College,Chennai  ,Tamil Nadu  
Lahanuji Maharaj Bahuddeshiya Shikshan Prasarak Ma,,Maharashtra  
Laheri T T College,,Rajasthan  
Lahoti Degree College,Kondanagula  ,Andhra Pradesh  
Lajpat Rai College,,Uttar Pradesh  
Lajpat Rai D.A.V. College,,Punjab  
Lajpat Rai Law College,Sambalpur  ,Orissa  
Lakhdhirji Engineering College,,Gujarat  
Lakhimpur Commerce College,,Assam  
Lakhimpur Girls College,,Assam  
Lakhimpur Kendriya Mahavidyalaya,,Assam  
Lakhimpur Post Graduate Training College North La,,Assam  
Lakhipur College,Lakhimpur  ,Assam  
Lakhmi Chand Institute Of Technology,Bilaspur  ,Chhattisgarh  
Lakhmi Chand Patwari College Of Education,,Uttar Pradesh  
Lakireddy Bali Reddy College Of Engineering,Mylavaram  ,Andhra Pradesh  
Lakjivan Bahudeshiya Sevabhavi Sansha,,Maharashtra  
Lakshay College Of Education,,Haryana  
Lakshay Institute Of Education,,Himachal Pradesh  
Lakshay Institute Of Mgt. Studies,Panipat  ,Haryana  
Lakshmi Ammal College Of Education,,Tamil Nadu  
Lakshmi Ammal College Of Education For Women,,Tamil Nadu  
Lakshmi Ammal Polytechnic College,Trichy  ,Tamil Nadu  
Lakshmi Ammal Teacher Training Institute,,Tamil Nadu  
Lakshmi Bai College,Delhi  ,Delhi  
Lakshmi Bai National College Of Physical Education,,Kerala  
Lakshmi Chand Rajani College Of Engineering And Technology,Tiruvallur  ,Tamil Nadu  
Lakshmi College Of Education,Dindigul  ,Tamil Nadu  
M & M College Of Education,,Punjab  
M A L D Government Arts Science College,Mahabubnagar  ,Andhra Pradesh  
M A Rameshwar Lata Sanskrit Mahavidyalaya,,Bihar  
M B Arts And Commerce College,,Gujarat  
M B College Commerce Sgmnl Arts College,,Gujarat  
M B R R V Pd Singh College,,Bihar  
M C College,,Assam  
M C Das College,,Assam  
M C Sheth Commerce College,,Gujarat  
M D D Mahila College,,Bihar  
M D S D Girls College,,Haryana  
M D Science College,,Gujarat  
M D Shah Commerce B D Patel Arts College,,Gujarat  
"M D T Hindu College, Tirunelveli",Tirunelveli  ,Tamil Nadu  
M E T Teachers College,,Jammu And Kashmir  
M G College Bihar,,Bihar  
M H Azad National Degree College,,Bihar  
M H B M College,,Bihar  
M J College Commerce,,Gujarat  
M J K College,,Bihar  
M J M Mahila College,,Bihar  
M K Jain College For Women Vellore,Vellore  ,Tamil Nadu  
M K R Government Degree College,Nalgonda  ,Andhra Pradesh  
M K S College,,Bihar  
M L Arya College,,Bihar  
M L R S College Education,,Haryana  
M L S College,,Bihar  
M L S M College,,Bihar  
M M College,,Bihar  
M M Gandhi Arts And Commerce College,,Gujarat  
M M Ghodasara Mahila Arts And Commerce College,,Gujarat  
M M Mahila College,,Bihar  
M N C Balika Mahavidyalaya,,Assam  
M R College For Women,Vizianagaram  ,Andhra Pradesh  
M R Government Sanskrit College,Vizianagaram  ,Andhra Pradesh  
M R Mahila College,,Bihar  
M S C M College,,Himachal Pradesh  
M S K B College,,Bihar  
M S M Science College,,Gujarat  
M S N Degree College Kakinada,Kadakatia  ,Andhra Pradesh  
M S S Giri College,,Bihar  
M V College,,Bihar  
M V N J S R V R College,Malkapuram  ,Andhra Pradesh  
M V S Government Arts Science College,Mahabubnagar  ,Andhra Pradesh  
M V S Government Evening College Arts,Mahabubnagar  ,Andhra Pradesh  
M. Bashir Patel Shikshan Santhas M M Patel,,Maharashtra  
M. Durai College Of Education,,Tamil Nadu  
M. Durai Teacher Training Institute,,Tamil Nadu  
M. Kumarasamy College Of Education,,Tamil Nadu  
M. Kumarasamy College Of Engineering,Karur  ,Tamil Nadu  
"M. P. Birla Institute Of Management, Associate",,Karnataka  
M. Rampur College,,Orissa  
M. Shanthi College Of Education,,Tamil Nadu  
M.A. Baig College Of Education,,Andhra Pradesh  
M.A. Educational Institute,,Delhi  
M.A.E.T. Training College,,Kerala  
M.A.K. Azad College Of Education,,Andhra Pradesh  
M.A.K.A Degree College,Prakasam  ,Andhra Pradesh  
M.A.M. College Of Engineering ... Of Technology,Trichy  ,Tamil Nadu  
M.A.R. College Of Engineering And Technology,Pudukotai  ,Tamil Nadu  
M.A.R. Polytechnic College,Trichy  ,Tamil Nadu  
M.A.S. Teacher Training Institute,,Tamil Nadu  
M.A.V.M.M. Ayira Vysiar College,Madurai  ,Tamil Nadu  
M.B. Degree College,,Uttar Pradesh  
M.B. Hindi Pandit Training College,,Andhra Pradesh  
M.B. Khalsa Education College,,Madhya Pradesh  
M.B. Khalsa Institution Of Education,,Madhya Pradesh  
M.B. Khalsa Law College,Indore  ,Madhya Pradesh  
M.B. Mahila Shikshak Prashikshan Mahavidyalaya,,Rajasthan  
M.B. Patel College Of Education,,Gujarat  
M.B. Patel Degree College Of Law,Bhandara  ,Maharashtra  
M.B. Residential College,,Karnataka  
M.B.G. Government College,,Punjab  
M.B.M. B Ed College,,Rajasthan  
M.C. Cormic Hindi Shikshak Prashishan Mahavidyala,,Andhra Pradesh  
M.C.E. Society'S H G M Azam College Of Edu,,Maharashtra  
M.C.E.S. College Of Education & Research,,Maharashtra  
M.C.T. Teacher Training Institute,,Kerala  
M.C.T. Training College,,Kerala  
M.D College,,Uttar Pradesh  
M.D. Bed College,,Rajasthan  
M.D. Bed College Of Education,,Gujarat  
M.D. College,,Uttar Pradesh  
M.D. College Of Arts & Science & Commerce,,Maharashtra  
M.D. College Of Education,,Haryana  
M.D. College Of Education Vpo,,Haryana  
M.D. College Of Technology,Panipat  ,Haryana  
M.D. High School,,Haryana  
M.D. University Deptt Of Distance Education,,Haryana  
M.D.M. Co Education Bed College,,Rajasthan  
M.D.N. College Of Education,,Haryana  
M.D.S. Teacher Training Institution,,Karnataka  
M.E.A.S. Science College,,Kerala  
M.E.C.F. College Of Teacher Education,,Kerala  
M.E.S. Abasaheb Garware College,,Maharashtra  
M.E.S. Arts & Commerce College,,Maharashtra  
M.E.S. Arts & Science College,Kozhikode  ,Kerala  
M.E.S. Asambi College,,Kerala  
M.E.S. College,Ernakulam  ,Kerala  
M.E.S. College,Kozhikode  ,Kerala  
M.E.S. College Of Arts Commerce & Science,,Karnataka  
M.E.S. College Of Education,,Andhra Pradesh  
"M.E.S. College, Erumeli",Kottayam  ,Kerala  
M.E.S. D Ed College,,Karnataka  
M.E.S. Garware College Of Commerce,,Maharashtra  
M.E.S. Kalladi College,,Kerala  
M.E.S. Keveyam College,,Kerala  
"M.E.S. Medical College, Perintalmanna",Malappuram  ,Kerala  
M.E.S. Ponnani College,,Kerala  
M.E.S. Teachers College,,Karnataka  
M.E.S. Training College,,Kerala  
M.E.S.S College Of Commerce,,Karnataka  
M.E.S.S Law College,,Karnataka  
M.E.T. College,Kozhikode  ,Kerala  
M.E.T. College Of Education,,Tamil Nadu  
M.E.T. Teacher Training Institute,,Tamil Nadu  
M.Ed College Of Vadu,,Gujarat  
M.G. Balika Vidyalaya Degree College,,Uttar Pradesh  
M.G. College,,Madhya Pradesh  
M.G. College Of Education,,Andhra Pradesh  
M.G. Degree College,,Uttar Pradesh  
M.G. Teacher Training Institute,,Tamil Nadu  
M.G. University Deptt Of Education,,Kerala  
M.G. Vidya Mandals Arts Science & Commerce College,,Maharashtra  
M.G.D. Appa Arts & Commerce College For Women,,Karnataka  
M.G.Institute Of Management & Research,Panchavati  ,Maharashtra  
M.G.M. Medical College,Jamshedpur  ,Jharkhand  
M.G.M. Medical College,Indore  ,Madhya Pradesh  
M.G.M.'S College Of Engineering And Technology,Noida  ,Uttar Pradesh  
M.G.R. College,Dharmapuri  ,Tamil Nadu  
M.G.S. Janata College,,Punjab  
M.G.T. Mandals Arts & Science & Commerce College,,Maharashtra  
M.G.V.G. Arts Science & Commerce College,,Karnataka  
M.H. Degree College,,Uttar Pradesh  
M.H. Ramaiah Teachers Training Institute,,Karnataka  
M.H.D. College,,Orissa  
M.H.D. Governmentcollege Of Home Sc.For Women,,Madhya Pradesh  
M.H.E.S. College Of Science & Technology,Kozhikode  ,Kerala  
M.I. Training College,,Kerala  
M.I.E.T. College Of Arts And Science,Trichy  ,Tamil Nadu  
M.I.E.T. Engineering College,Trichy  ,Tamil Nadu  
M.I.E.T. Polytechnic College,Tirunelveli  ,Tamil Nadu  
M.J. College,,Chhattisgarh  
M.J.D. Government College,,Rajasthan  
M.J.R. College Of Education,,Andhra Pradesh  
M.J.R.P College Of Corporate Management,,Rajasthan  
M.J.S. Government Postgraduate College,,Madhya Pradesh  
M.J.Shindo Arts Science & Commerce College,,Maharashtra  
M.K. Anantharaj College Of Physical Education,,Karnataka  
M.K. College Of Education,,Gujarat  
M.K. College Of Education,,Punjab  
M.K. English Medium Pre Ptc College For Girls,,Gujarat  
M.K. Girls Pre Ptc College,,Gujarat  
M.K. Haji Adhyapak Vidyalaya,,Maharashtra  
M.K. Institute Of Education And Research,,Gujarat  
M.K. Institute Of Elementary Teacher Education,,Gujarat  
M.K. Institute Of Management Studies,,Punjab  
M.K. Institute Of Secondary Teacher Education,,Gujarat  
M.K. Law College,Bharuch  ,Gujarat  
M.K. Patel Physical Education College,,Gujarat  
M.K. Raman Teacher Training Institute,,Tamil Nadu  
"M.K. University College, Madurai",Madurai  ,Tamil Nadu  
M.K. Womens Degree College,Mukarampura  ,Andhra Pradesh  
M.K.B. Mahila B Ed Mahavidyalaya,,Rajasthan  
M.K.Chhattishgarh. Medical College,Berhampur  ,Orissa  
M.K.M Institute Of Management,Jaipur  ,Rajasthan  
M.K.P. College,,Uttaranchal  
M.K.R. Memorial Degree College,Nalgonda  ,Andhra Pradesh  
M.K.S. College Of Education,,Uttar Pradesh  
M.Krishna Law College,,Karnataka  
M.L. & J.N.K. Girls College,,Uttar Pradesh  
M.L. Chausiya Bed College,,Madhya Pradesh  
M.L. Chausiya Bed College Chaurasiya Hospital & Re,,Madhya Pradesh  
M.L. Dahanukar College Of Commerce,,Maharashtra  
M.L. Gandhi Higher Education Society,,Gujarat  
M.L. Law College,,Madhya Pradesh  
M.L. Parmar Charitable Trust'S Chanchalba Prathmik Adhyapan Mandir,,Gujarat  
M.L.A. College Of Education,,Haryana  
M.L.B. Arts & Commerce College,,Madhya Pradesh  
M.L.B. Government College,,Rajasthan  
"M.L.B. Govt. College, Institute Of Management",Gwalior  ,Madhya Pradesh  
M.L.B. Medical College,,Uttar Pradesh  
M.L.C. Government Girls P.G. College,,Madhya Pradesh  
M.L.K. Pg College,,Uttar Pradesh  
M.L.K. Postgraduate College,,Uttar Pradesh  
M.L.M. Institute Of Education,,Haryana  
M.L.M.N. College Of Education,,Karnataka  
M.L.R. Naidu Degree College,Tirupati  ,Andhra Pradesh  
M.L.R. Saraswati College Of Education,,Haryana  
M.M. Artscommerce Home Science & Science College For Women,,Karnataka  
M.M. Chandrashekhar Agashe College Of Physical Edu,,Maharashtra  
M.M. College Of Education,,Haryana  
M.M. College Of Education,,Karnataka  
M.M. Shinde Junior College Of Education,,Maharashtra  
M.M.Arts And Commerce College,,Karnataka  
M.M.H. College,,Uttar Pradesh  
M.M.M. Postgraduate College,,Uttar Pradesh  
M.M.U. Teachers Training College,,Karnataka  
M.N Institute Of Management Studies,,Rajasthan  
"M.N.R Medical College, Sangareddy",Sangareddy  ,Andhra Pradesh  
M.N.R. Degree College,Hyderabad  ,Andhra Pradesh  
M.N.R. Rural P G College Of Education,,Andhra Pradesh  
M.N.R. Tpt Teacher Education College,,Andhra Pradesh  
M.O.P. Vaishnav College For Women,Chennai  ,Tamil Nadu  
M.P Institute Of Management & Computer Application,,Uttar Pradesh  
"M.P Shah Medical College, Jamnagar",Jamnagar  ,Gujarat  
M.P. Christian College Of Engineering Technology,Bhilai  ,Chhattisgarh  
M.P. D Ed College,,Karnataka  
M.P. Institute Of Mngt And Computer Application,,Uttar Pradesh  
M.P. Law College,Aurangabad  ,Maharashtra  
M.P.R. College Of Law,Srikakulam  ,Andhra Pradesh  
M.P.S. Shiksha Mahavidhalayath,,Madhya Pradesh  
M.P.S. Shiksha Mahavidyalaya,,Madhya Pradesh  
M.P.T. Government Girls Degree College,,Uttar Pradesh  
M.R. College,,Punjab  
M.R. College Of Education,,Haryana  
M.R. College Of Education Mitterpura Chok,,Haryana  
M.R. Dav College Of Education,,Haryana  
M.R. Government Arts College,Tiruvarur  ,Tamil Nadu  
M.R. Institute Of D Ed College,,Karnataka  
M.R. Institution,,Haryana  
M.R. Nauhnty College Of Education,,Haryana  
M.R.A. College,Visakhapatnam  ,Andhra Pradesh  
M.R.M. Institue Of Mgt,Mandal  ,Andhra Pradesh  
M.R.R. College Of Mca,Nandigram  ,Andhra Pradesh  
M.R.R. Institute Of Computer Application,Rangareddy  ,Andhra Pradesh  
M.S. Bhagat & C.S. Sonawala Law College,Nadiad  ,Gujarat  
M.S. College,Motihari  ,Bihar  
M.S. College,,Orissa  
M.S. College,,Uttar Pradesh  
"M.S. Degree College, Anantapur",Anantapur  ,Andhra Pradesh  
M.S. Garg B Ed College,,Uttaranchal  
M.S. Institute,,Uttar Pradesh  
M.S. Kakdade College,,Maharashtra  
M.S. Patel Institute Of Management Studies,Baroda  ,Gujarat  
M.S. Ramaiah College Of Education,,Karnataka  
M.S. Ramaiah Institute Of Technology,Bangalore  ,Karnataka  
M.S. Ramaiah Instt. Of Mgt,Bangalore  ,Karnataka  
M.S. Ramaiah Law College,Bangalore  ,Karnataka  
"M.S. Ramaiah Medical College, Bangalore",Bangalore  ,Karnataka  
M.S. Ramaiah Teachers Training Institute,,Karnataka  
M.S. University,,Gujarat  
M.S.B. Evening College,,Karnataka  
M.S.D. Kotak Law College,Amreli  ,Gujarat  
M.S.E.S. College Of Education,,Tamil Nadu  
M.S.G. Arts Science And Commerce College,,Maharashtra  
M.S.G.G. Shikshan Sanstha'S Adhyapak Vidyalaya,,Maharashtra  
M.S.J. College,,Rajasthan  
"M.S.N. Degree College, Vizianagaram",Thotapalem  ,Andhra Pradesh  
M.S.P. Arts Science & K.P.T. Commerce College,,Maharashtra  
M.S.P. Mandals Law College,,Maharashtra  
M.S.P. Velayutha Nadar Lakshmithaiammal Polytechnic College,Namakkal  ,Tamil Nadu  
M.S.R. College Of Education,,Andhra Pradesh  
M.S.R. Degree College,Nizamabad  ,Andhra Pradesh  
"M.S.R. Degree College, Nellore",Kavali  ,Andhra Pradesh  
M.S.R. Institute Of Teacher Education,,Andhra Pradesh  
M.S.R. Women Teachers Training Institute,,Tamil Nadu  
M.S.R.S. Siddhartha Degree College,Visakhapatnam  ,Andhra Pradesh  
M.S.S. Teacher Training Institute,,Kerala  
"M.S.S. Wakf Board College, Madurai",Madurai  ,Tamil Nadu  
M.T. College Of Education,,Haryana  
M.U.C. Womens College,,West Bengal  
"M.V. Hospital For Diabetes & Diabetes Research Centre, Chennai",Chennai  ,Tamil Nadu  
M.V. Muthiah Government Arts College For Women,Dindigul  ,Tamil Nadu  
M.V.A.S.Sri K.G.Nadgir Coll.Of Physical Education,,Karnataka  
M.V.G. Memorial Degree College,Medak  ,Andhra Pradesh  
M.V.G.R.R. College,Guntur  ,Andhra Pradesh  
M.V.J. College Of Education,,Karnataka  
M.V.J. College Of Engineering,Bangalore  ,Karnataka  
"M.V.J. Medical College And Research Hospital, Bangalore",Bangalore  ,Karnataka  
M.V.M. Chellamuthu Alagu Rathinam College Of Edu,,Tamil Nadu  
M.V.Madhya Pradesh. Government Arts College For Women,Dindigul  ,Tamil Nadu  
M.V.P.S Mahantswamy Arts Sc. And Commerce College,,Karnataka  
M.V.P.Samajs Artsscience & Commerce College,,Maharashtra  
M.V.R. Degree College,Krishna  ,Andhra Pradesh  
"M.V.R. Degree College, Visakhapatnam",Visakhapatnam  ,Andhra Pradesh  
M.V.R.S. Viveka Degree College,Tenali  ,Andhra Pradesh  
Ma Khandwari Degree College,,Uttar Pradesh  
Maa Ashapura Med College For Girls,,Gujarat  
Maa Ashapura P T C College For Girls,,Gujarat  
Maa Bala Sundri College Of Education,,Haryana  
Maa Bharti Teachers Training College,,Rajasthan  
Maa Durga S Sansthan (W) Teacher Trg College,,Rajasthan  
Maa Ganga College Of Education,,Haryana  
Maa Gayatri Arya Kanya Mahavidyalaya,,Uttar Pradesh  
Maa Kaila Devi College Of Education,,Madhya Pradesh  
Maa Kamala Chandrika Je Teachers Training College,,Bihar  
Maa Khandwari Mahavidyalaya,,Uttar Pradesh  
Maa Omwati College Of Education,,Haryana  
Maa Sarada Law College,Azamgarh  ,Uttar Pradesh  
Maa Saraswati B Ed College,,Rajasthan  
Maa Saraswati J B T College Vpo,,Haryana  
Maa Saraswati Teacher Training College,,Rajasthan  
Maa Saraswati Teachers Training Institute,,Haryana  
Maa Sharda B Ed College,,Madhya Pradesh  
Maa Sharda Bed College,,Rajasthan  
Maa Sharda Mahavidyalaya,,Uttar Pradesh  
Maa Sharda P G College,,Uttar Pradesh  
Maa Vidya Devi Jan Jagrati Sewa Samiti,,Madhya Pradesh  
Maamallan Institute Of Technology,Kanchipuram  ,Tamil Nadu  
Machhi Mahajan Education Societys College Of Edu,,Daman And Diu  
Machkhowa Degree College,,Assam  
Madam Mohan Malviya Government Ayurvedic College,,Rajasthan  
Madan Ahiyalia Mahila College,,Bihar  
Madan Maharaj College,,Madhya Pradesh  
Madan Maharaj Law College,Bhopal  ,Madhya Pradesh  
Madan Mohan Malviya Engineering College,Gorakhpur  ,Uttar Pradesh  
Madan Mohan Malviya P G College,,Uttar Pradesh  
Madan Mohan Malviya Pg College Deptt Of Education,,Uttar Pradesh  
Madan Mohan Malviya Postgraduate College,,Uttar Pradesh  
Madan Mohan Smarak Mahavidyalaya,,Uttar Pradesh  
Madanapalle Institute Of Technology & Science,Madanpalle  ,Andhra Pradesh  
Madeena D Ed College,,Andhra Pradesh  
Madeena D Ed College Madeena Educational Society,,Karnataka  
Madeena Degree College,Khammam  ,Andhra Pradesh  
Madha College Of Education,,Tamil Nadu  
Madha Engineering College
N B G S M College ,,Haryana   
N B K R Arts Science College ,Nellore   ,Andhra Pradesh   
N B T N V C College ,Guntur   ,Andhra Pradesh   
N C Bodiwala M C Desai Commerce College ,,Gujarat   
N H Patel College Education ,,Gujarat   
N L S College ,,Bihar   
N P Arts And Commerce College ,,Gujarat   
N S Patel Arts College ,,Gujarat   
N T R Govt Degree College For Women ,Mahabubnagar   ,Andhra Pradesh   
N.A. Manjammal Polytechnic College ,Nilgiris   ,Tamil Nadu   
N.A.M. College ,Kannur   ,Kerala   
N.A.S. College ,Meerut   ,Uttar Pradesh   
N.B. Science & Pg College ,Hyderabad   ,Andhra Pradesh   
N.B.C. College ,,Orissa   
N.B.M. College Of Law ,Visakhapatnam   ,Andhra Pradesh   
N.B.P. College Of Education ,,Maharashtra   
"N.B.R. Degree College, Nirmal ",Nirmal   ,Andhra Pradesh   
N.B.T.M. Law College ,Visakhapatnam   ,Andhra Pradesh   
N.C. College Of Education ,,Haryana   
N.C.College Of Engineering I ,Panipat   ,Haryana   
N.C.K. Hindi Pandit Training College ,,Andhra Pradesh   
N.D. Y.M.C.A. Institute Of Management ,Delhi   ,Delhi   
"N.D.M.V.P. Samaj Medical College, Nashik ",Nashik   ,Maharashtra   
N.D.M.V.P. Samajs Artsscience & Commerce College ,,Maharashtra   
N.D.M.V.P. Samajs College Of Education ,,Maharashtra   
N.D.M.V.P. Samajs Law College ,Nashik   ,Maharashtra   
N.D.R.K. D Ed College ,,Karnataka   
N.E.S. College Of Education ,,Madhya Pradesh   
N.E.S. College Of Information Technology ,Visakhapatnam   ,Andhra Pradesh   
N.E.S. Law College ,Jabalpur   ,Madhya Pradesh   
N.E.S. Science College ,,Madhya Pradesh   
N.E.W.S. Degree College ,Visakhapatnam   ,Andhra Pradesh   
N.H. Patel College Of Education ,,Gujarat   
N.I.M.S Institute Of Management ,Jaipur   ,Rajasthan   
N.I.M.T Institute Of Agri Business & Rural Management College ,Jaipur   ,Rajasthan   
N.I.M.T Institute Of Hospital & Pharma Management ,Noida   ,Uttar Pradesh   
N.I.P. Teacher Training Institution ,,Tamil Nadu   
N.J.R. Teacher Training Institute ,,Tamil Nadu   
N.J.S.A. Government College ,,Punjab   
N.K. Shikshak Prashikshan Mahavidyalaya ,,Rajasthan   
N.K. Varadkar Arts & R.V. Belose Commerce College ,,Maharashtra   
N.K.B.M. Girls College ,,Uttar Pradesh   
N.K.B.R. College Of Professional Studies ,,Uttar Pradesh   
"N.K.P. Salve Institute Of Medical Sciences, Nagpur ",Nagpur   ,Maharashtra   
N.K.R. Government Arts College For Women ,Namakkal   ,Tamil Nadu   
N.K.T. National College Of Education For Women ,Chennai   ,Tamil Nadu   
N.M. Christian College ,Kanyakumari   ,Tamil Nadu   
N.M. Institutue Of Diploma In Teacher Education ,,Tamil Nadu   
"N.M.D. Pg College Of Arts, Commerce, Law & Management ",Kudwa   ,Maharashtra   
N.M.K.R.V. First Grade College For Women ,,Karnataka   
N.M.S. Das P G College ,,Uttar Pradesh   
N.M.S. Sermathai Vasan College For Women ,Madurai   ,Tamil Nadu   
N.M.S.M. Government College ,Wayanad   ,Kerala   
N.M.S.S. Vellaichamy Nadar College ,Madurai   ,Tamil Nadu   
N.M.S.S.V.N. Teacher Training Institute ,,Tamil Nadu   
N.N.R & C.L College ,Ongole   ,Andhra Pradesh   
N.P. Girls Degree College ,,Uttar Pradesh   
N.P.A. Centenary Polytechnic College ,Coimbatore   ,Tamil Nadu   
N.P.R. P.G. (Mca) College ,Warangal   ,Andhra Pradesh   
N.P.V.N. Patil Law College ,Aurangabad   ,Maharashtra   
N.R. Dass Teacher Training Institute ,,Tamil Nadu   
N.R. Vekaria Institute Of Busi. Magt Studies ,Junagadh   ,Gujarat   
N.R.E.C. College ,Bulandshahar   ,Uttar Pradesh   
"N.R.I Medical College, Guntur ",Guntur   ,Andhra Pradesh   
N.R.K & K.S.R. Gupta College ,Guntur   ,Andhra Pradesh   
N.R.M. Degree College ,Rangareddy   ,Andhra Pradesh   
N.R.T. Krishnaveni Degree College ,Guntur   ,Andhra Pradesh   
N.S. Law College ,Sangli   ,Maharashtra   
N.S. Memorial College Of Science & Studies ,,Madhya Pradesh   
N.S.C.B.M. Govt College ,,Himachal Pradesh   
N.S.K. Teacher Training Institute ,,Tamil Nadu   
N.S.N. Teacher Training Institute ,,Tamil Nadu   
N.S.S. College ,Kollam   ,Kerala   
N.S.S. College ,Pathanamthitta   ,Kerala   
N.S.S. College ,Alappuzha   ,Kerala   
N.S.S. Engineering College ,,Kerala   
N.S.S. Hindu College ,Kottayam   ,Kerala   
N.S.S. Teacher Training Institute ,,Kerala   
N.S.S. Training College ,,Kerala   
N.S.S. Training College ,,Kerala   
N.S.V. Degree College ,Jagityal   ,Andhra Pradesh   
N.T.A. Arts & Vedumurti S.R. Spare Commerce College ,,Maharashtra   
N.T.R Memorial Degree College ,Prakasam   ,Andhra Pradesh   
N.T.S. Shri Shankar Artsand Commerce College ,,Karnataka   
N.T.V. Samiti'S College Of Physical Education ,,Maharashtra   
N.V.K.S. Teacher Training Institute ,,Tamil Nadu   
N.V.K.S.D. College Of Education ,,Tamil Nadu   
N.V.P. Mandals Artscommerce & Science College ,,Maharashtra   
Naami College ,,Orissa   
Nabadwip Vidyasagar College ,,West Bengal   
Nabagram Hiralal Paul College ,,West Bengal   
Nabajyoti College ,,Assam   
Nabakrushna Choudhury College Of Teacher Education ,,Orissa   
Nabarangpur Womens College ,,Orissa   
Nabinchandra College ,,Assam   
Nabira Mahavidalaya ,,Maharashtra   
Nachimuthu Polytechnic College ,Erode   ,Tamil Nadu   
Nachiyarammal College Of Education ,,Tamil Nadu   
Nachiyarammal College Of Physical Education ,,Tamil Nadu   
Nachuni College ,,Orissa   
Nadaprabhu Kempegowda D Ed College ,,Karnataka   
Nadaprabhu Kempegowda D Ed College (Telugu Medium) ,,Karnataka   
Nadaprabhu Kempegowda D Ed College(English Medium) ,,Karnataka   
Nadar Mahajana Sangam S. Vellaichamy Nadar College ,Madurai   ,Tamil Nadu   
Nadar Saraswathi College Of Teacher Education ,,Tamil Nadu   
Nadar Saraswathy College Of Arts And Science ,Theni   ,Tamil Nadu   
"Nadgir Institute Engineering Technology, ",Bangalore   ,Karnataka   
Nagai College Of Education ,,Tamil Nadu   
Nagai Teacher Training Institute ,,Tamil Nadu   
Nagaji Institute Of Teacher Education ,,Madhya Pradesh   
Nagaji Institute Of Technology & Management ,Gwalior   ,Madhya Pradesh   
Nagaland College Of Education ,,Nagaland   
Nagaland College Of Teacher Education Kohima ,,Nagaland   
Nagaland Institute Of Management ,Dimapur   ,Nagaland   
Nagaland University ,,Nagaland   
Nagamalai Navarasam Arts Science College ,Erode   ,Tamil Nadu   
Nagambika College Of Education For Women ,,Karnataka   
Nagammai Teacher Training Institute ,,Tamil Nadu   
"Nagaon Ed. Trusts, Gangamai College Of Engineering ",Nagaon   ,Maharashtra   
Nagaon G. N. D. G. Commerce College Nagaon ,Nagaon   ,Assam   
Nagar Yuvak Shikshan Sanstha\'S Datta Meghe College Of Engineering ,Thane   ,Maharashtra   
Nagar Yuwak Shikshan Sanstha-Institute Of Management & Research ,Nagpur   ,Maharashtra   
Nagarjun College Of Physical Education ,,Maharashtra   
Nagarjuna College Of Education ,,Andhra Pradesh   
Nagarjuna College Of Engineering & Technology ,Bangalore   ,Karnataka   
Nagarjuna College Of Teacher Education ,,Andhra Pradesh   
Nagarjuna Ded College ,,Andhra Pradesh   
Nagarjuna Degree College For Women ,Cuddapah   ,Andhra Pradesh   
"Nagarjuna Degree College, Medak ",Medak   ,Andhra Pradesh   
"Nagarjuna Degree College, Sangareddy ",Sangareddy   ,Andhra Pradesh   
Nagarjuna Government College ,Nalgonda   ,Andhra Pradesh   
Nagarjuna Government Evening College ,Nalgonda   ,Andhra Pradesh   
Nagarjuna Institute Of Management Studies ,Ongole   ,Andhra Pradesh   
Nagarjuna Institute Of Technology & Science ,Miryalaguda   ,Andhra Pradesh   
Nagarjuna University ,,Andhra Pradesh   
Nagashree Diploma In Education Institution ,,Karnataka   
Nagendra Jha Mahila College ,,Bihar   
Nagin D Ed College ,,Karnataka   
Nagindas Khandwala College Of Commerce & Arts ,,Maharashtra   
Nagnath Arts Commerce And Science College ,,Maharashtra   
Nagnath College Of Physical Education ,,Maharashtra   
Nagnathappa Halge Engineering College ,Beed   ,Maharashtra   
Nagpur Sharirik Shikshan Mahavidyalaya ,,Maharashtra   
Nagpur University ,Nagpur   ,Maharashtra   
Nagpurs College Of Education ,,Maharashtra   
Nagrik Degree College ,,Uttar Pradesh   
Nagrik Shikshan Sanstha'S College Of Education ,,Maharashtra   
Nagrik Shikshan Sanstha'S D Ed College ,,Maharashtra   
Naharkatiya College ,,Assam   
Nahata Jogendra Nath Mandal Smriti Mahavidyalaya ,,West Bengal   
Nai Talim Adhyapan Mandir ,,Gujarat   
Naik College Of Education ,,Andhra Pradesh   
Naina Mohamed College Of Arts And Science ,Thanjavur   ,Tamil Nadu   
Naina Mohamed College Of Education ,,Tamil Nadu   
Nair Hospital Dental College ,,Maharashtra   
Nair Samajam Teacher Training Institute ,,Kerala   
Nairs College Of Eduction ,,Tamil Nadu   
Nairs Teacher Training Institute ,,Tamil Nadu   
Nakoda Parshavnath Jain Mahavidyalaya ,,Rajasthan   
Nalanda Adhyapan Mandir ,,Gujarat   
Nalanda B Ed College ,,Karnataka   
Nalanda College ,,Bihar   
Nalanda College Of Arts & Science ,Kasaragod   ,Kerala   
Nalanda College Of Education ,,Andhra Pradesh   
Nalanda College Of Education ,,Himachal Pradesh   
Nalanda College Of Teacher Education ,,Andhra Pradesh   
Nalanda D Ed College ,,Karnataka   
Nalanda Degree College ,Vijayawada   ,Andhra Pradesh   
Nalanda Degree College For Women ,Nizamabad   ,Andhra Pradesh   
"Nalanda Degree College, Adilabad ",Adilabad   ,Andhra Pradesh   
"Nalanda Degree College, Bheemgal ",Bheemgal   ,Andhra Pradesh   
"Nalanda Degree College, Mahabubabad ",Mahaboobabad   ,Andhra Pradesh   
"Nalanda Degree College, Medak ",Medak   ,Andhra Pradesh   
"Nalanda Degree College, Miryalaguda ",Miryalaguda   ,Andhra Pradesh   
"Nalanda Degree College, Mulugu ",Mulugh   ,Andhra Pradesh   
"Nalanda Degree College, Nalgonda ",Suryapet   ,Andhra Pradesh   
"Nalanda Degree College, Nizamabad ",Nizamabad   ,Andhra Pradesh   
"Nalanda Degree College, Uppal ",Nalgonda   ,Andhra Pradesh   
Nalanda Diploma In Education ,,Karnataka   
Nalanda Elementary Teachers Educational Institute ,,Haryana   
Nalanda Engineering College ,Nalanda   ,Bihar   
Nalanda Institute Of Engineering & Technology ,Guntur   ,Andhra Pradesh   
Nalanda Institute Of Technology ,Bhubaneswar   ,Orissa   
Nalanda Law College ,Mumbai   ,Maharashtra   
Nalanda Mahila College ,,Bihar   
Nalanda Medical College ,Patna   ,Bihar   
Nalanda Open University ,Patna   ,Bihar   
Nalanda Teacher Training Institute ,,Andhra Pradesh   
Nalanda Teacher Training Institute ,,Kerala   
Nalanda Teachers Trining College ,,Bihar   
Nalbari College ,Nalbari   ,Assam   
Nalini Arvind T V Patel Arts College ,,Gujarat   
Nalini Devi Women Teachers Training College ,,Orissa   
Nalini Devi Women'S College Of Teacher Education ,,Orissa   
Nalla Malla Reddy Engineering College ,Ghatkesar   ,Andhra Pradesh   
Nallamuthu Gounder Mahalingam College ,Pollachi   ,Tamil Nadu   
Nalsar University Of Law ,Hyderabad   ,Andhra Pradesh   
Nalwa College Of Education ,,Haryana   
Namakkal Kavignar Ramalingam Government Arts College For Women ,Namakkal   ,Tamil Nadu   
Nambol L. Sanoi College ,,Manipur   
Namboodiris College Of Teacher Education ,,Kerala   
Namdhari Education Society ,,Himachal Pradesh   
Namrup College ,,Assam   
Namrup College Of Teacher Education ,,Assam   
Nanak Chand Anglo Sanskrit College Deptt Of Edu ,,Uttar Pradesh   
Nanakram Bhagwandas Science College ,Hyderabad   ,Andhra Pradesh   
Nanasaheb Dr Uttamrao Mahajan Shikshan Shastra ,,Maharashtra   
Nanda Nath Saikia College ,,Assam   
Nandagokulam Teachers Training Institute ,,Karnataka   
Nandalal Ghosh B T College ,,West Bengal   
Nandalal Ghosh B.T. College ,,West Bengal   
Nandana Degree College ,Nirmal   ,Andhra Pradesh   
Nandani Nagar Mahavidyalya ,,Uttar Pradesh   
Nandha Arts And Science College ,Erode   ,Tamil Nadu   
Nandha College Of Education ,,Tamil Nadu   
Nandha College Of Physiotherapy ,Erode   ,Tamil Nadu   
Nandha College Technology ,Erode   ,Tamil Nadu   
Nandha Engineering College ,Erode   ,Tamil Nadu   
Nandha Polytechnic College ,Coimbatore   ,Tamil Nadu   
Nandha Teacher Training Institute ,,Tamil Nadu   
Nandi Teacher Training Institute ,,Karnataka   
Nandini B Ed College ,,Karnataka   
Nandini D Ed College ,,Karnataka   
Nandini Nagar Law College ,Bareilly   ,Uttar Pradesh   
Nandini Nagar Mahavidyalaya ,,Uttar Pradesh   
Nandini Teachers Training Institute ,,Karnataka   
Nandubar Taluka Vidhayak Samiti'S College Of Edu ,,Maharashtra   
Nandurbar Taluka Vidhayak Samitis ,,Maharashtra   
Nandurbar Taluka Vidhayak Samitis College Of Law Nstitute Of Legal Education & Research ,Nandurbar   ,Maharashtra   
Nandurbar Taluka Vidhayak Samiti'S College Of Phy Edn ,,Maharashtra   
Nanibai College Of Education ,,Maharashtra   
Nanjamma Teacher Training Institute ,,Karnataka   
Nanjappa Institute Of Technology ,Coimbatore   ,Tamil Nadu   
Nanjiah Lingammal Polytechnic College ,Kanyakumari   ,Tamil Nadu   
Nao Nalanda Mahavihar ,,Bihar   
Naradha Art Science College ,Erode   ,Tamil Nadu   
Narain College ,,Uttar Pradesh   
Naraina College Of Engineering & Technology ,Kanpur   ,Uttar Pradesh   
Narajole Raj College ,,West Bengal   
Narasaraopet Engineering College ,Guntur   ,Andhra Pradesh   
Narasimha Reddy Engineering College ,Medchal   ,Andhra Pradesh   
Narasingha Choudhury College ,,Orissa   
Narasingha Dutta College ,,West Bengal   
Narasu'S Sarathy Institute Of Technology ,Salem   ,Tamil Nadu   
Narayan Arya Kanya Pathshala Degree Pg College ,,Uttar Pradesh   
Narayan College Of Education ,,Haryana   
Narayan Mahavidyalaya ,,Bihar   
"Narayan Medical College And Hospital, Sasaram ",Sasaram   ,Bihar   
Narayan S.S. College ,,Kerala   
Narayana College Of Education ,,Andhra Pradesh   
Narayana Dora Degree College ,Srikakulam   ,Andhra Pradesh   
Narayana Engineering College ,Guntur   ,Andhra Pradesh   
Narayana Engineering College Andhra Pradesh ,Nellore   ,Andhra Pradesh   
"Narayana Medical College, Nellor ",Nellore   ,Andhra Pradesh   
Narayana Memorial Degree College ,Krishna   ,Andhra Pradesh   
Narayana Shikshak Prashikshan Mahavidyalaya ,,Rajasthan   
Narayanaguru College Of Engineering ,Kanyakumari   ,Tamil Nadu   
Narayanpet Institute Of Technology & Science ,Mahabubnagar   ,Andhra Pradesh   
Narayni Devi Verma Mahila Phy T T College ,,Rajasthan   
Narendar College Of Education ,,Tamil Nadu   
Narendra College Of Physical Education ,,Karnataka   
Narendra Degree College ,Armoor   ,Andhra Pradesh   
"Narendra Degree College, Metpally ",Metpally   ,Andhra Pradesh   
Narendra Deva University Of Agriculture Technology ,Faizabad   ,Uttar Pradesh   
Narendra Womens Degree College ,Armoor   ,Andhra Pradesh   
Naresh Shikshak Prashikshan Mahavidyalaya ,,Rajasthan   
Narhar Balwant Thankur Law College ,Nashik   ,Maharashtra   
Narheji Degree College ,,Uttar Pradesh   
Nari Shiksha Niketan Degree College ,,Uttar Pradesh   
Naripella Narayana Swamy Vidya College Of Pg Studies ,Mandal   ,Andhra Pradesh   
Naripella Narayana Swamy Vidya Degree College ,Chirala   ,Andhra Pradesh   
Narketpally College Of Education ,,Andhra Pradesh   
Narmada College Of Management ,Bharuch   ,Gujarat   
Narmada College Science And Commerce ,,Gujarat   
Narmada Devi Mahila Mahavidyalay ,,Uttar Pradesh   
Narmada Education Society College Of Education ,,Madhya Pradesh   
Narottam Singh Padam Singh Government College ,,Uttar Pradesh   
"Narsee Monjee Institue Of Management Studies, Mumbai ",Mumbai   ,Maharashtra   
Narsinghpur College ,,Orissa   
Narula Institute Of Technology ,Calcutta   ,West Bengal   
Narvadeshwar Management College ,,Uttar Pradesh   
Narvdeshwar Vidhi Mahavidyalaya ,Lucknow   ,Uttar Pradesh   
Nasamony Memorial Christian College ,Kanyakumari   ,Tamil Nadu   
Nashik District Maratha Vidya Prasarak Samaj-Institute Of Management Research & Technology ,Nashik   ,Maharashtra   
Nasik District Maratha Vidya Prasarak ,,Maharashtra   
Nasik Gramin Shikshan Prasarak Mandals ,,Maharashtra   
Natesan Institute Of Co-Operative Management ,Chennai   ,Tamil Nadu   
Natham P R College Of Education ,,Tamil Nadu   
Natham P R Teacher Training Institute ,,Tamil Nadu   
Nathubai V Patel College Pure Applied Scienc ,,Gujarat   
Nathulal Das Primary Teachers Training Institute ,,West Bengal   
National Academy Of Legal Studies And Research University Of Law (Nalsar) ,Hyderabad   ,Andhra Pradesh   
National B Ed College ,,Karnataka   
National B Ed College ,,Madhya Pradesh   
National B Ed College Run By National Educational ,,Maharashtra   
National College ,,Karnataka   
National College ,Trivandrum   ,Kerala   
National College ,,Orissa   
National College ,,Punjab   
National College ,Trichy   ,Tamil Nadu   
National College For Teacher Education ,,Kerala   
National College For Teacher Eduction ,,Kerala   
National College Of Arts & Science ,Kozhikode   ,Kerala   
National College Of Education ,,Andhra Pradesh   
National College Of Education ,,Karnataka   
National College Of Education ,,Maharashtra   
National College Of Education ,,Tamil Nadu   
O P Jindal Institute Of Technology,Raigarh  ,Chhattisgarh  
O.P.R. Memorial College Of Education,,Tamil Nadu  
O.P.R. Memorial Teacher Training Institute,,Tamil Nadu  
O.V.R. Degree College,Tirupati  ,Andhra Pradesh  
Oasis Imperial College Of Education,,Madhya Pradesh  
"Oberoi School Of Hotel Management, Delhi",Delhi  ,Delhi  
Odaiyappa College Of Engineering And Technology,Tirupur  ,Tamil Nadu  
Odapada Panchayat Samit Mahavidyalaya,,Orissa  
Ojaswani College Par Excellence,,Madhya Pradesh  
Ojaswini Institute Of Management & Technology,Damoh  ,Madhya Pradesh  
Olaver College,,Orissa  
Olive College Of Education,,Andhra Pradesh  
Olive Pg College,Ibrahimpatnam  ,Andhra Pradesh  
Om College Of Education,,Haryana  
Om D Ed College,,Karnataka  
Om Education Trust P T C College,,Gujarat  
Om Institute Of Mgt,Jagadhari  ,Haryana  
Om Institute Of Tech. & Mgt,Hissar  ,Haryana  
Om Institute Of Technical And Teachers Education,,Madhya Pradesh  
Om Jai Shriram Samaj Seva Sanstha,,Maharashtra  
Om Karnanda Institute Of Management & Technology,Tehri Garhwal  ,Uttaranchal  
Om Kothari Institute Of Management & Research,,Rajasthan  
Om Parimary Teachers Training College,,Gujarat  
Om Prakash Memorial Institute Of Education,,Punjab  
Om Rajyog Bahuudeshiya Vikas Mandal,,Maharashtra  
Om Sai D Ed College,,Karnataka  
Om Shanthi Teacher Training Institute,,Tamil Nadu  
Om Shanti College Of Education,,Tamil Nadu  
Om Shanti Junior College Of Education,,Maharashtra  
Om Shree Foundations D Ed College,,Karnataka  
Om Sri Vigneswara Women Teacher Trg Institute,,Tamil Nadu  
Om Vindhyavasani Institute Of Management,Rajkot  ,Gujarat  
Omega College Of Education,,Andhra Pradesh  
Omega College Of Elementry Teacher Education,,Andhra Pradesh  
"Omega Degree College, Keesar",Keesara  ,Andhra Pradesh  
Omega P.G. College,Mandal  ,Andhra Pradesh  
Omkar College Of Professional Studies,,Madhya Pradesh  
Omkaramal Somani College Of Education,,Karnataka  
Omshanti College Of Education,,Maharashtra  
Omshree Mahavidyalaya,,Madhya Pradesh  
Onkarmal Somani College Of Commerce,,Rajasthan  
Ooliyasthanam Teacher Training Institute,,Tamil Nadu  
Oriental B Ed College,,Madhya Pradesh  
Oriental College,,Manipur  
Oriental College Bihar,,Bihar  
Oriental College Of Education,,Bihar  
Oriental College Of Management,Bhopal  ,Madhya Pradesh  
Oriental College Of Teacher Education,,Kerala  
Oriental Education Trust National College Of Education,,Maharashtra  
Oriental Educaton Society,,Maharashtra  
Oriental Institute Of Management,Mumbai  ,Maharashtra  
Oriental Institute Of Science & Technology,Indore  ,Madhya Pradesh  
"Oriental Institute Of Science And Technology, Thakral Nagar",Bhopal  ,Madhya Pradesh  
Oriental Law Institute,Deoria  ,Uttar Pradesh  
Oriental Teacher Training Institute,,Tamil Nadu  
Orissa Computer Academy,Khurta  ,Orissa  
Orissa Engineering College,Bhubaneswar  ,Orissa  
Orissa Medical College Of Homeopathy & Research,,Orissa  
Orissa School Of Mining Engineering,,Orissa  
Orissa University Of Agriculture And Technology,Bhubaneswar  ,Orissa  
Osmania College,Kurnool  ,Andhra Pradesh  
Osmania College Of Education,,Andhra Pradesh  
Osmania Degree College,Proddatur  ,Andhra Pradesh  
Osmania Graduates Asscn & Exhibition Society Coll,,Andhra Pradesh  
Osmania Law College,Kurnool  ,Andhra Pradesh  
Osmania Medical College,Hyderabad  ,Andhra Pradesh  
Osmania University,Hyderabad  ,Andhra Pradesh  
Oupada College,,Orissa  
Our Lady College Of Education,,Tamil Nadu  
Our Lady Dolours Teacher Training Institute,,Tamil Nadu  
Our Ladys Teacher Training Institute,,Kerala  
Oxbridge Business School,Bangalore  ,Karnataka  
Oxford College Of Eduation,,Tamil Nadu  
Oxford College Of Engineering,Bangalore  ,Karnataka  
Oxford College Of Engineering Tamil Nadu,Trichy  ,Tamil Nadu  
Oxford College Of Law,Bangalore  ,Karnataka  
Oxford D Ed College,,Karnataka  
Oxford Degree College,Vizianagaram  ,Andhra Pradesh  
Oxford Girls College Of Education,,Haryana  
Oxford International College Of Education,,Haryana  
Oxford Model Institute Of Advance Studies,,Uttar Pradesh  
Oxford Teacher Training Institute,,Karnataka  
Oxford Teacher Training Institute,,Tamil Nadu  
Ozar Vikas Sansthas Vishwasattya B Ed College,,Maharashtra  
P B N College, Guntur  , Andhra Pradesh  
P B S College,, Bihar  
P B Sidhartha College Arts Science, Vijayawada  , Andhra Pradesh  
P C Vigyan Mahavidyalaya,, Bihar  
P D M College Commerce,, Gujarat  
P D M Graduate Teachers College,, Gujarat  
P D Pandya Mahila Commerce College,, Gujarat  
P G College Godwal, Mahabubnagar  , Andhra Pradesh  
P G College Medak, Medak  , Andhra Pradesh  
P G College Mehboobnagar, Mahabubnagar  , Andhra Pradesh  
P G College Mirzapur, Medak  , Andhra Pradesh  
P G College Nalgonda, Nalgonda  , Andhra Pradesh  
P G College Nizamabad, Nizamabad  , Andhra Pradesh  
P G College Osmania University, Hyderabad  , Andhra Pradesh  
P G College Science, Hyderabad  , Andhra Pradesh  
P G College Siddipet, Siddipet  , Andhra Pradesh  
P G College Vikrabad, Rangareddy  , Andhra Pradesh  
P K Roy Memorial College,, Jharkhand  
P L Singh College,, Bihar  
P M S College,, Bihar  
P N C K R Degree College, Guntur  , Andhra Pradesh  
P N College,, Bihar  
P P K College,, Jharkhand  
P R Government College Evening Courses, Kadakatia  , Andhra Pradesh  
P R R Memorial Engineering College, Rangareddy  , Andhra Pradesh  
P R R V S Government College, Vidavalur  , Andhra Pradesh  
P S C K V S C Government College, Nandyal  , Andhra Pradesh  
P Science College,, Bihar  
P T Sarvajanik College Science,, Gujarat  
P V A Ekka M College,, Jharkhand  
P V K N Government College, Chitoor  , Andhra Pradesh  
P V R Trust Degree College, Kadakatia  , Andhra Pradesh  
P. A. College Of Engineering, Mangalore  , Karnataka  
P. Satyanarayana Rao Memorial Degree College, Khammam  , Andhra Pradesh  
P.A Aziz College Of Engineering And Technology, Coimbatore  , Tamil Nadu  
P.A. College Of Education,, Tamil Nadu  
P.A.C. Ramasamy Raja'S Polytechnic College, Namakkal  , Tamil Nadu  
P.B. College Of Engineering., Chennai  , Tamil Nadu  
P.C Jabin Science College,, Karnataka  
P.C. Bagla P G College Deptt Of Edu,, Uttar Pradesh  
P.C.M.S.D. College For Women,, Punjab  
P.D. Mahila Degree College,, Uttar Pradesh  
P.D. Rajan College Of Education,, Tamil Nadu  
P.D.E.As College Of Engg,, Maharashtra  
P.D.M. College Of Education,, Haryana  
P.D.R. Teacher Training Institute,, Tamil Nadu  
P.D.R. Vellachiammal Teacher Training Institute,, Tamil Nadu  
P.E. Society'S Junior College Of Education,, Maharashtra  
"P.E.S Institute Of Medical Science And Research, Kuppam", Kuppam  , Andhra Pradesh  
P.E.S. College Of Education,, Karnataka  
P.E.S. College Of Engineering, Mandya  , Karnataka  
P.E.S. College Of Physical Education,, Maharashtra  
P.E.S. College Of Science,, Karnataka  
P.E.S. Degree College, East Godavari  , Andhra Pradesh  
P.E.S. Evening College,, Karnataka  
P.E.S. Instt. Of Tech, Bangalore  , Karnataka  
P.E.S. Law College, Mandya  , Karnataka  
P.E.S. Modern Law College, Pune  , Maharashtra  
P.E.T. College Of Education,, Karnataka  
P.E.T. Teachers Training Institute,, Karnataka  
P.G Department Of Management Studies, Sivakasi  , Tamil Nadu  
P.G. College Of Law, Hyderabad  , Andhra Pradesh  
"P.G. College Of Science, Secunderabad", Secunderabad  , Andhra Pradesh  
P.G. Department Of Education,, Maharashtra  
P.G. Vigyan Mahavidyalaya,, Madhya Pradesh  
P.G.D.A.V. College, Delhi  , Delhi  
P.G.D.A.V. College (Evening), Delhi  , Delhi  
P.G.M. Teacher Training Institute,, Kerala  
P.G.P. College Of Arts And Science, Namakkal  , Tamil Nadu  
P.G.P. Polytechnic College, Chennai  , Tamil Nadu  
P.G.P. Teacher Training Institute,, Tamil Nadu  
P.Indra Reddy Memorial Engineering College, Chevella  , Andhra Pradesh  
P.J. College Of Management & Technology, Bhubaneswar  , Orissa  
P.K.D. College Of Education,, Tamil Nadu  
P.K.D. Teacher Training Institute,, Tamil Nadu  
P.K.M. College Of Education,, Kerala  
P.K.N. Arts And Science College, Madurai  , Tamil Nadu  
P.K.R. Arts College For Women, Erode  , Tamil Nadu  
P.K.R. Jain College Of Education,, Haryana  
P.L. Dubey Memorial College Of Eduction,, Rajasthan  
P.L. Dubey Memorial Shiksha Shashtri College,, Rajasthan  
P.L. Dubey Memorial Stc College,, Rajasthan  
P.M. College Of Physical Education & Yoga Tigiria,, Orissa  
P.M.B. Gujarati Arts And Law College,, Madhya Pradesh  
P.M.B. Gujarati Commerce College,, Madhya Pradesh  
P.M.B. Gujarati Science College,, Madhya Pradesh  
P.M.N. Degree College, Visakhapatnam  , Andhra Pradesh  
P.M.P. College Of Arts And Science, Dharmapuri  , Tamil Nadu  
P.N. Das College,, West Bengal  
P.N.C.A. Degree College, Prakasam  , Andhra Pradesh  
P.P.College Of Education,, Maharashtra  
P.P.G. College Of Education,, Tamil Nadu  
P.P.G. College Of Physiotherapy, Coimbatore  , Tamil Nadu  
P.P.G. Teacher Training Institute,, Tamil Nadu  
P.P.G. Teacher Training Institute For Women,, Tamil Nadu  
P.R. Arts And Science College, Dindigul  , Tamil Nadu  
P.R. Rajkiya Mahila Mahavidyalaya,, Uttar Pradesh  
P.R. Teacher Training Institute,, Tamil Nadu  
P.R.N. Teacher Training Institute,, Tamil Nadu  
P.R.R. Institute Of Management Sciences, Anantapur  , Andhra Pradesh  
P.R.R.M. Institute Of Technolgy, Cuddapah  , Andhra Pradesh  
P.S. Muthu Physial Education Teacher Training,, Tamil Nadu  
P.S. Raju College Of Law, Kadakatia  , Andhra Pradesh  
P.S.B. College Of Education,, Andhra Pradesh  
P.S.B. Polytechnic College, Coimbatore  , Tamil Nadu  
P.S.D. Girls Law College, Jhajjar  , Haryana  
"P.S.G Institute Of Medical Sciences, Coimbatore", Coimbatore  , Tamil Nadu  
P.S.G. Arts & Science College, Coimbatore  , Tamil Nadu  
P.S.G. College Of Education,, Tamil Nadu  
P.S.G. College Of Paramedical Sciences, Coimbatore  , Tamil Nadu  
P.S.G. Institute Of Management, Coimbatore  , Tamil Nadu  
P.S.G. Polytechnic College, Chennai  , Tamil Nadu  
P.S.G. Ponnammal College Of Education,, Tamil Nadu  
P.S.G. Ponnammal Teachers Training Institute,, Tamil Nadu  
P.S.G.R. Krishnammal College For Women, Coimbatore  , Tamil Nadu  
P.S.G.V.P. Mandal'S College Of Education,, Maharashtra  
"P.S.I Medical College, Chinoutpalli", Krishna  , Andhra Pradesh  
P.S.N. College Of Education,, Tamil Nadu  
P.S.N. Murthy Degree College, Ramachandrapuram  , Andhra Pradesh  
P.S.N.L. College Of Educational,, Tamil Nadu  
P.S.R. College Of Education,, Tamil Nadu  
P.S.R. Engineering College, Sivakasi  , Tamil Nadu  
P.S.R.Rengasamy College Of Engineering For Women, Sivakasi  , Tamil Nadu  
P.S.S.K. Ded College,, Karnataka  
P.S.S.R. College Of Arts And Science, Nellimarla  , Andhra Pradesh  
P.S.V. College Of Education,, Tamil Nadu  
P.S.V. College Of Engineering & Technology, Krishnagiri  , Tamil Nadu  
P.T. Lee Chengalvaraya Naicker College Of Engineering & Technology, Kanchipuram  , Tamil Nadu  
P.T. Lee Chengalvaraya Naicker Polytechnic College, Villupuram  , Tamil Nadu  
P.T.C. College,, Gujarat  
P.T.C. College Run By Himatnagar Kelavani Mandal,, Gujarat  
P.T.M. Teacher Training Institute,, Kerala  
P.V. Krishna Kishore (Pvkk) Degree College, Anantapur  , Andhra Pradesh  
P.V. Polytechnic College, Cuddalore  , Tamil Nadu  
P.V.D.T. College Of Education For Women,, Maharashtra  
P.V.M. D Ed College,, Karnataka  
P.V.S. Educaion And Rural Development Society,, Karnataka  
P.W. Medical College Patna,, Bihar  
P.W.S. Arts & Commerce College,, Maharashtra  
Pa Aziz College Of Engineering & Technology, Trivandrum  , Kerala  
Pa Pu Swami Pranavanad Saraswati Shikshan Prasara,, Maharashtra  
Paavai College Of Engineering, Namakkal  , Tamil Nadu  
Paavai College Of Engineering Tamil Nadu, Namakkal  , Tamil Nadu  
Paavai Engineering College, Namakkal  , Tamil Nadu  
Paavendhar College Of Arts And Science, Salem  , Tamil Nadu  
Paaventhar Teacher Training Institute,, Pondicherry  
Pabbu Madhusudhan Rao Degree College, Nandyal  , Andhra Pradesh  
Pachaiyappas College For Men, Chennai  , Tamil Nadu  
"Pachaiyappas College For Men, Kanchipuram", Kanchipuram  , Tamil Nadu  
"Pachaiyappas College For Women, Kanchipuram", Kanchipuram  , Tamil Nadu  
Pachammal Institute Of Teacher Training,, Tamil Nadu  
Pachamuthu College Of Education,, Tamil Nadu  
Pachhunga University Colege,, Mizoram  
Pachumuthu Teacher Training Institute,, Tamil Nadu  
Pacific College Of Teachers Education,, Rajasthan  
Pacific Institute Of Management,, Rajasthan  
Pad. Dr. D.Y. Patil Institute Of Management Studies, Pune  , Maharashtra  
Padala Ram Reddy Law College, Hyderabad  , Andhra Pradesh  
Padala Rama Reddi Degree College, Hyderabad  , Andhra Pradesh  
Padala Rama Reddy College Of Commerce & Mgt, Rajendernagar  , Andhra Pradesh  
Padalesuwarar Polytechnic College, Trichy  , Tamil Nadu  
Padamashree Dr.D.Y.Patil Institute Of Management, Thane  , Maharashtra  
Padma Pani College Of Phy Education,, Maharashtra  
Padmabhooshan Vasantdada Patil Institute Of Technology, Sangli  , Maharashtra  
Padmabhusan Sri N. Ramasamy Iyer Memorial Polytechnic College For Girls, Chennai  , Tamil Nadu  
Padmabhushan Dr. Vasantraodada Pail Mahavidyalaya,, Maharashtra  
Padmabhushan Vasant Dada Patil College,, Maharashtra  
"Padmabhushan Vasantdada Ppcollege Of Engg,", Mumbai  , Maharashtra  
Padmabhushan Vasantraodada Patil Institute Of Technology, Pune  , Maharashtra  
Padmaja Naidu College Of Music,, West Bengal  
Padmanabham Narshiman Shetty Annapurnamma College, Prakasam  , Andhra Pradesh  
Padmanabhan Jayantimala College Arts Science, Cuddalore  , Tamil Nadu  
Padmanava College Of Engineering, Rourkela  , Orissa  
Padmashree College Of Education,, Karnataka  
Padmashree Dr. D.Y. Patil College Of Law, Mumbai  , Maharashtra  
Padmashree Dr. D.Y. Patil Law College, Pune  , Maharashtra  
"Padmashree Dr. D.Y.Patil Medical College, Nerul, Navi Mumbai", Mumbai  , Maharashtra  
Padmashree Institute Of Mgt. Studies, Bangalore  , Karnataka  
Padmashree Kurtartha Acharya College Of Engineering,, Orissa  
Padmashri Ajit Wadekar College Of Phy Edn,, Maharashtra  
Padmashri Dr Vikhe Patil College Of Engineering, Ahmednagar  , Maharashtra  
"Padmashri Dr. Vithalrao Vikhe Patil Foundations Medical College, Ahmednagar", Ahmednagar  , Maharashtra  
Padmashri Vikhe Patil College Of Arts Science & Commerce,, Maharashtra  
Padmasri Dr.B.V.Raju Institute Of Technology, Medak  , Andhra Pradesh  
Padmavani College Of Arts & Science For Women, Salem  , Tamil Nadu  
Padmavani College Of Education,, Tamil Nadu  
Padmavathi Degree College For Women, Kothawada  , Andhra Pradesh  
Padmavathi Mahila Degree College, Razole  , Andhra Pradesh  
Padmavathi Teacher Training Institute,, Tamil Nadu  
Padmavathy College Of Physiotherapy, Dharmapuri  , Tamil Nadu  
Padmavati Teacher Training Institute,, Karnataka  
Padmawati Bal Vidyapeeth,, Uttar Pradesh  
Pailan College Of Management & Technology, Calcutta  , West Bengal  
Painganga Education Society,, Maharashtra  
Palaniammal Teacher Training Institute,, Tamil Nadu  
Pali Education Society,, Karnataka  
Paliwal Degree College,, Uttar Pradesh  
Pallagatti Adavappa College Of Arts And Commerce,, Karnataka  
Pallavan College Of Engineering, Kanchipuram  , Tamil Nadu  
Pallavan Polytechnic College, Vellore  , Tamil Nadu  
Pallavi College Of Diploma In Education,, Maharashtra  
Pallavi College Of Education,, Andhra Pradesh  
Pallavi Degree College, Rangareddy  , Andhra Pradesh  
Pallavi Institute Of Diploma In Education,, Andhra Pradesh  
Pallerla Hanumanth Rao Memorial Degree College, Mahabubnagar  , Andhra Pradesh  
Pamidi Institute Of Science And Technology, Nellore  , Andhra Pradesh  
Pan School Of Education Bankoi Khurda,, Orissa  
Panampilly Memorial Government College,, Kerala  
Panch Kroshi Shikshan Mandal'S,, Maharashtra  
Panchakot Primary Teachers Training Institute,, West Bengal  
"Panchamukhi Degree College, Kanekal", Kanekal  , Andhra Pradesh  
Panchasheela College Of Education,, Andhra Pradesh  
Panchayat College,, Orissa  
Panchayat Samiti College,, Orissa  
Panchayat Samiti Degree College,, Orissa  
Panchmi College Of Law, Bangalore  , Karnataka  
Panchmura Mahavidyalaya,, West Bengal  
Panchratna Adhyapak Vidyalaya,, Maharashtra  
Panchsheel College Of Education,, Andhra Pradesh  
Panchsheel Institute Of Education,, Andhra Pradesh  
Panchsheel Institute Of Eduction Research & Edu,, Haryana  
Panchshil College Of Education,, Gujarat  
Panchshil Mahila P T C College,, Gujarat  
Panchshil P T C College,, Gujarat  
Pandharpur Eduction Society,, Maharashtra  
Pandhhya Multipurpose Educational Society,, Maharashtra  
Pandian Polytechnic College, Chennai  , Tamil Nadu  
Pandian Saraswathi Yadav Engineering College, Sivagangai  , Tamil Nadu  
Pandit Badri Prasad Shikshak P Mahavidyalaya,, Rajasthan  
Pandit Bhagwat Dayal Sharma P.G. Institute Of Medical Sciences,, Haryana  
Pandit Deen Dayal Upadhyay Government Girls Degree College,, Uttar Pradesh  
"Pandit Deendayal Upadhyay Medical College, Rajkot", Rajkot  , Gujarat  
Pandit Durga Prasad Mishra Shiksha Avam Samaj,, Madhya Pradesh  
Pandit G R Memorial Shiksha Shastri College,, Rajasthan  
Pandit Harishankar Shukla Memorial Mahavidyalaya,, Chhattisgarh  
Pandit J P University T T College,, Rajasthan  
Pandit J P Upadhyaya T T College Civil Line Road,, Rajasthan  
Pandit J.L.Nehru Mahavidyalaya,, Maharashtra  
Pandit Jawahar Lal Nehru Memorial College,, Karnataka  
Pandit Mahadeo Mahavidyalaya Kesli,, Madhya Pradesh  
Pandit Moti Lal Nehru Vidhi Mahavidyalaya, Chhattarpur  , Madhya Pradesh  
Pandit Raghunath Murmu Samritis Mahavidyalaya,, West Bengal  
Pandit Raghunath Murmu Teachers Training College,, West Bengal  
Pandit Rajpati Mishra College Of Education & Research,, Uttar Pradesh  
Pandit Ramlal Sharma Education College,, Madhya Pradesh  
Pandit Ravishankar Shukla University, Raipur  , Chhattisgarh  
Pandit Shiv Datta Shastri Educational Foundation'S, Haveli  , Maharashtra  
Pandit Sundarlal Sharma University, Bilaspur  , Chhattisgarh  
Pandu College, Guwahati  , Assam  
Pandua College Of Education,, West Bengal  
Pandurang Desai Junior College Of Education,, Maharashtra  
Panihati Mahavidyalaya,, West Bengal  
Panimalar Engineering College, Tiruvallur  , Tamil Nadu  
Panimalar Institute Of Management Studies And Computer Science, Chennai  , Tamil Nadu  
Panimalar Institute Of Technology, Chennai  , Tamil Nadu  
Panimalar Polytechnic College, Tirunelveli  , Tamil Nadu  
Panineeya Mahavidyalaya College Of Education,, Andhra Pradesh  
Panipat Institute Of Textile And Engineering, Panipat  , Haryana  
Panjab University, Patiala  , Punjab  
Pankaj Sogani Smriti Mahavidyalaya,, Madhya Pradesh  
Pannai College Of Engineering & Technology, Sivagangai  , Tamil Nadu  
Pannaikadu Veerammal Paramasivam College, Dindigul  , Tamil Nadu  
Panskura Banamali College,, West Bengal  
Panskura Primary Teachers Training Institute,, West Bengal  
Para Primary Adhyapak Mandir,, Gujarat  
Paradip College,, Orissa  
Paradise College Of Education,, Haryana  
Paradise College Of Education,, Punjab  
Paradise College Of Education Jaurasi,, Haryana  
Parajang Mahavidyalaya,, Orissa  
Paramahans Ramakrishna Mauntibaba Sanstha'S Anuradha Engineering College, Buldana  , Maharashtra  
Paramananda College,, Orissa  
Paramapujya Jagannatha Swamy Vidya V Edn Society,, Karnataka  
Parameswar Mahavidyalaya (B Ed ),, West Bengal  
Parameswari College Of Education Ded,, Andhra Pradesh  
Paramhans College Of Education,, Haryana  
Paramount College Of Education,, Haryana  
Paramount Education Society,, Haryana  
Paramveer College Of Education,, Tamil Nadu  
Paramveer Teacher Training Institute,, Tamil Nadu  
Parangat B Ed College,, Gujarat  
Parasakthi College Of Education,, Tamil Nadu  
Parashari Vidaya Prasarak Sansthas Shri D S,, Maharashtra  
Paravathareddy Babulreddy Visvodaya Institute Of Technology, Nellore  , Andhra Pradesh  
Parekh Brothers Science College,, Gujarat  
Parigaon Omprakash Dinodia College,, Assam  
Parijat Academy Teacher Education Institution,, Assam  
Parijat College,, Madhya Pradesh  
Parimal Mitra Smriti Mahavidyalaya,, West Bengal  
Parimala Teacher Training Institute,, Tamil Nadu  
Parimalar Teacher Training Institute,, Tamil Nadu  
Parish Priesh Catholic Chruch Trust,, Gujarat  
Parishram Adhyapan Mandir,, Gujarat  
Parishram Ptc Mahila College,, Gujarat  
Parisutham Institute Of Technology And Science, Thanjavur  , Tamil Nadu  
Paritala Sriramulu Government College, Anantapur  , Andhra Pradesh  
Parivartan Gramin Vikas Mahila Va Shikshan,, Maharashtra  
Park College Of Eduction,, Tamil Nadu  
Park College Of Engineering Technology, Coimbatore  , Tamil Nadu  
Park Teacher Training Institute,, Tamil Nadu  
Parks College, Tirupur  , Tamil Nadu  
Parle Tilak Vidyalaya Associations Sathye College,, Maharashtra  
Parmanand Degree College For B Ed,, Rajasthan  
Parmanand Trilok Chand Tt College,, Rajasthan  
Parmeshwar Mahavidyalaya,, Uttar Pradesh  
Parshwanath Charitable Trust'S College Of Engineering, Thane  , Maharashtra  
Partap College Of Education,, Punjab  
Parth College Of Education,, Gujarat  
Parth Education And Charitable Trust,, Gujarat  
Partiarch Ignatius Zakka Training College,, Kerala  
Parul Institute Of Engineering & Technology,, Gujarat  
Parul Institute Of Ptc Education,, Gujarat  
Parvathaneni Brahmayya Siddhartha College Of Art & Science, Vijayawada  , Andhra Pradesh  
Parvathys Arts And Science College, Dindigul  , Tamil Nadu  
Parvati Bahuuddeshiya Sanstha,, Maharashtra  
Parvati Mahila Mahavidyalaya,, Uttar Pradesh  
Parvati Tad Junior College Of Education,, Maharashtra  
Parvatibai Adhyapak Vidyalaya,, Maharashtra  
Parvatibai Genba Moze College Of Engineering, Pune  , Maharashtra  
Paschim Guwahati Mahavidyalaya, Guwahati  , Assam  
Paschim Maharashtra Education Trust,, Maharashtra  
Pasha Educational Training Institute,, Andhra Pradesh  
Pashupati Institute Of Studies,, Uttar Pradesh  
Paspo College Of Educational,, Tamil Nadu  
Pastor Lenssen Polytechnic College, Tirunelveli  , Tamil Nadu  
Pasumpon Muthuramalinga Thevar College, Tirunelveli  , Tamil Nadu  
Pasumpon Muthuramalinga Thevar College, Madurai  , Tamil Nadu  
Pasumpon Nethaji Polytechnic College
Pes College Arts And Science ,,Goa   
Pes Institute Of Technology ,Bangalore   ,Karnataka   
Pes Institute Technology Management ,Shimoga   ,Karnataka   
Pes School Of Engineering ,Bangalore   ,Karnataka   
Pestle Weed College Of Information Technology ,,Uttaranchal   
Pet College Of Teaher Education ,,Tamil Nadu   
Pet Engineering College ,Tirunelveli   ,Tamil Nadu   
Pet Post Graduate Center For Education & Research ,,Karnataka   
Pettigrew College ,,Manipur   
Pgp College Of Education ,,Tamil Nadu   
Pgp College Of Engineering A ,Namakkal   ,Tamil Nadu   
Phool Bun Teachers Training Institute For Women ,,Karnataka   
Phoolwati Devi Institute Of Law ,Baghpat   ,Uttar Pradesh   
Phule Samaj Sudharak Samiti Madhukarrao Ghate ,,Maharashtra   
Phule Samaj Sudhark Samitti?S Shahir Annabhau Sath ,,Maharashtra   
Phulsing Naik Mahavidyalaya ,,Maharashtra   
Pillais College Of Education And Research ,,Maharashtra   
Pillais Comprehensive College Of Edn & Research ,,Maharashtra   
"Pillai'S Institute Of Information Technology, Engineering, Media Studies & Research ",Raigad   ,Maharashtra   
Pimpri Chinchwad Education Trust'S. Pimpri Chinchwad College Of Engineering ,Pune   ,Maharashtra   
Pine Grove College Of Education ,,Punjab   
Pingla Thana Mahavidyalaya ,,West Bengal   
Pinnamaneni Rajendra Prasad Memorial Degree College ,Krishna   ,Andhra Pradesh   
Pioneer College Of Arts And Science ,Coimbatore   ,Tamil Nadu   
Pioneer College Of Physiotherapy ,Ramanathapuram   ,Tamil Nadu   
Pioneer Ded College Vpo ,,Haryana   
Pioneer Institute Of Management (Pim) ,Udaipur   ,Rajasthan   
Pioneer Institute Of Professional Studies ,Indore   ,Madhya Pradesh   
Pioneer Kumarasamy College ,Kanyakumari   ,Tamil Nadu   
Pipar Teachers Training College ,,Rajasthan   
Pipli College ,,Orissa   
Pitamah Umda Singh College Of Education ,,Haryana   
Pitamberbhai And Tulsibhai Patel College Of Edn ,,Gujarat   
Pithapur Rajahs Government College ,Kakinada   ,Andhra Pradesh   
Pkjm Teacher Training Institute Mulavana ,,Kerala   
Pmr Engineering College ,Chennai   ,Tamil Nadu   
Pmr Institute Of Technology ,Tiruvallur   ,Tamil Nadu   
Pocker Sahib Memorial College ,,Kerala   
Poddar Management Training Institute ,,Rajasthan   
Poddar Shikshan Sansthan ,,Rajasthan   
Poineer College ,Hyderabad   ,Andhra Pradesh   
Poineer Kumaraswamy College ,Kanyakumari   ,Tamil Nadu   
Pokharan Teachers Training College ,,Rajasthan   
Polytechnic For Women South Ext. - Delhi ,Delhi   ,Delhi   
Pompei College ,,Karnataka   
Ponda Education Societys ,,Goa   
Pondicherry Engineering College ,Pondicherry   ,Pondicherry   
"Pondicherry Institute Of Medical Sciences & Research, Pondicherry ",Pondicherry   ,Pondicherry   
Pondicherry Teacher Training Institute ,,Pondicherry   
Pondicherry University ,Pondicherry   ,Pondicherry   
Ponjesly College Of Education ,,Tamil Nadu   
Ponjesly College Of Engineering ,Kanyakumari   ,Tamil Nadu   
Ponkaliamman College Of Education ,,Tamil Nadu   
Ponmanam Institute Of Management Studies & Computer Application ,Chennai   ,Tamil Nadu   
Ponmari College Of Education ,,Tamil Nadu   
Ponmari Teacher Training Institute ,,Tamil Nadu   
Ponnaiyah College Of Education ,,Tamil Nadu   
Ponnaiyah Ramajayam College ,Thanjavur   ,Tamil Nadu   
Ponnaiyah Ramajayam College Of Education ,,Tamil Nadu   
Ponnaiyah Ramajayam College Of Engineering & Technology ,Thanjavur   ,Tamil Nadu   
Ponnaiyah Ramajayam Polytechnic College ,Vellore   ,Tamil Nadu   
Ponnaiyah Teacher Training Institute ,,Tamil Nadu   
Ponnur Degree College ,Ponnur   ,Andhra Pradesh   
Ponnusamy Nadar College Of Education ,,Tamil Nadu   
Ponnusamy Nadar Teacher Training Institute ,,Tamil Nadu   
Ponugoti Madhav Rao(Pmr) Degree College ,Rangareddy   ,Andhra Pradesh   
Pooja Bhagavat Mahajana Post Graduate Wing Of Sbrr ,Mysore   ,Karnataka   
Pooja Sharirik Shikshan Mahavidyalaya ,,Maharashtra   
Poojya Sane Guruji V.P. Mandal'S College Of Engineering ,Dhule   ,Maharashtra   
Poojya Sane Guruji Vidya Prasarak Mandal ,,Maharashtra   
Poojya Shri Madhavanji College Of Education ,,Andhra Pradesh   
Pookoya Thangal Memorial Government College ,,Kerala   
Poompuhar College ,Poompuhar   ,Tamil Nadu   
Poona College Of Arts Science And Commerce ,,Maharashtra   
Poona District Education Association College Of Engineering ,Pune   ,Maharashtra   
Poonga College Of Arts And Science ,Chennai   ,Tamil Nadu   
Poorani Teacher Training Institute ,,Tamil Nadu   
Pooranmal Ram Lal Degree College ,,Uttar Pradesh   
Poorna Pragna Institute Of Managemnet ,Udupi   ,Karnataka   
Poornasai Vivekananda Degree College ,Visakhapatnam   ,Andhra Pradesh   
Poornima College Of Engineering ,Jaipur   ,Rajasthan   
Poornima Institute Of Engineering And Technology ,Jaipur   ,Rajasthan   
Pope John Paul Ii College Of Education ,Pondicherry   ,Pondicherry   
Popes College ,Tuticorin   ,Tamil Nadu   
Popular College Education ,,Jammu And Kashmir   
Porukara College Of Education ,,Kerala   
Post G. Training College For Physical Education ,,West Bengal   
Post Graduate College ,,Uttar Pradesh   
Post Graduate Department Of Education ,,Gujarat   
Post Graduate Institute Of Medical Education And Research ,Chandigarh   ,Chandigarh   
"Post Graduate Institute Of Swasthiyog Pratisthan, Miraj ",Sangli   ,Maharashtra   
Post Graduate Teaching Department Of Physical Edu ,,Maharashtra   
Post Graduate Teaching Deptt In Education ,,Maharashtra   
Post Graduate Training College ,,Assam   
Post Graduate Training College For Phy Education ,,West Bengal   
Post Graduate Training College Jorahat ,,Assam   
Potdar Foundation Potdar Ded College ,,Maharashtra   
Potti Sreeramulu Telugu University ,Hyderabad   ,Andhra Pradesh   
Ppg Institute Of Technology ,Coimbatore   ,Tamil Nadu   
Pr Engineering College ,Thanjavur   ,Tamil Nadu   
Prabha Degree College ,Palem   ,Andhra Pradesh   
Prabha Devi Mahavidyalaya ,,Uttar Pradesh   
Prabhakar Mamulkar Ded College ,,Maharashtra   
Prabhala Lakshminarayana Memorial Degree College ,Guntur   ,Andhra Pradesh   
Prabhala Pg College For Women ,Guntur   ,Andhra Pradesh   
Prabharani B Ed College ,,West Bengal   
Prabharani Institute Of Education ,,West Bengal   
Prabhas College Of Education ,,Andhra Pradesh   
Prabhas Degree College ,Vijayawada   ,Andhra Pradesh   
Prabhat Engineering College ,Kanpur   ,Uttar Pradesh   
Prabhath College Of Education ,,Andhra Pradesh   
Prabhath Institute Of Business Management ,Kurnool   ,Andhra Pradesh   
Prabhath Institute Of Computer Sciences ,Kurnool   ,Andhra Pradesh   
Prabhatku Mar College ,,West Bengal   
Prabhodhan S.P. S'S Rajendra Mane College Of Engineering & Tech ,Ratnagiri   ,Maharashtra   
Prabhu Jagatbandhu College ,,West Bengal   
Prabhu Narain Singh Mahavidyalaya ,,Uttar Pradesh   
Prabhudas Thakkar Arts Commerce College ,,Gujarat   
Prachya Niketan ,,Madhya Pradesh   
Prachya Sahara Shikshan Sanstha Samiti ,,Madhya Pradesh   
Pradeep Memorial Comprehensive Coll Of Edu ,,Delhi   
Pradnya Bahuuddeshiya Mahila Santha ,,Maharashtra   
Pradnya Prathishthan ,,Maharashtra   
Prafulla Chandra College ,,West Bengal   
Praga Bal Uthan Samiti ,,Madhya Pradesh   
Pragajyotish College ,Guwahati   ,Assam   
Pragat Mahila Mandal ,,Maharashtra   
Pragathi Arts & Science College ,Nalgonda   ,Andhra Pradesh   
"Pragathi Arts & Science College, Mahaboobnagar ",Mahabubnagar   ,Andhra Pradesh   
Pragathi College Of Education ,,Andhra Pradesh   
Pragathi College Of Education ,,Karnataka   
Pragathi Degree College ,Kukatpally   ,Andhra Pradesh   
Pragathi Degree College For Women ,Hyderabad   ,Andhra Pradesh   
"Pragathi Degree College, Chundoor ",Chennoor   ,Andhra Pradesh   
"Pragathi Degree College, Kakinada ",Kakinada   ,Andhra Pradesh   
"Pragathi Degree College, Kothavalasa ",Kothavalasa   ,Andhra Pradesh   
"Pragathi Degree College, Nizamabad ",Nizamabad   ,Andhra Pradesh   
"Pragathi Degree College, Valigonda ",Valigonda   ,Andhra Pradesh   
Pragathi School Of Business ,Warangal   ,Andhra Pradesh   
Pragathi T T I ,,Karnataka   
Pragathi Teacher Training Institute ,,Karnataka   
Pragathi Womens College ,Hyderabad   ,Andhra Pradesh   
Pragathi Womens Degree College ,Mahabubnagar   ,Andhra Pradesh   
Pragati College ,,Chhattisgarh   
Pragati College Of Education ,,Andhra Pradesh   
Pragati D Ed College ,,Karnataka   
Pragati Engineering College ,East Godavari   ,Andhra Pradesh   
Pragati Institute Of Education & Training ,,Delhi   
Pragati Mahavidyalaya Pg College ,Hyderabad   ,Andhra Pradesh   
Pragati Mahila Mandal ,,Maharashtra   
Pragati Shikshan Sanstha Jawahar Lal Nehru College ,,Madhya Pradesh   
Pragati Teachers Training College ,,Rajasthan   
Pragati Telugu Pandit Training College ,,Andhra Pradesh   
Pragatishil Bahuddeshiya Sanstha ,,Maharashtra   
Pragna College Of Education ,,Andhra Pradesh   
Pragna Pg College ,Ibrahimpatnam   ,Andhra Pradesh   
Pragya College ,,Madhya Pradesh   
Pragya College Of Education ,,Haryana   
"Pragyna Degree College, Kakinada ",Kakinada   ,Andhra Pradesh   
Prahladbhai S Patel Adhyapan Mandir ,,Gujarat   
Prahladrai D.L.College Of Commerce & Economics ,,Maharashtra   
Praja Mandal Mahila Mahavidyalaya ,,Orissa   
Prajasattak Bed College ,,Maharashtra   
Prajasattak Colony Of Education ,,Maharashtra   
Prajna College Of Science And Arts ,Srikakulam   ,Andhra Pradesh   
"Prajna Institute Of Technology And Managment, ",Haripuram   ,Andhra Pradesh   
Prajnananda Govt Ptti Barajagulia ,,West Bengal   
Prakasam Degree College ,West Godavari   ,Andhra Pradesh   
Prakasam Engineering College ,Kandukur   ,Andhra Pradesh   
Prakash Adhyapan Mandir ,,Gujarat   
Prakash College Education ,,Gujarat   
Prakash College Of Education ,,Gujarat   
Prakash P T C Vidhyalaya ,,Gujarat   
Prakash Shikshak Prashishan Mahavidyalaya ,,Rajasthan   
Pramathesh Barua College Dhuburi ,Dhuburi   ,Assam   
Pramila Gowda D Ed College ,,Karnataka   
Pramod D Ed College ,,Karnataka   
Pramod Ravindra Dhuri ,,Maharashtra   
Pramothes Barua College ,,Assam   
Pramukh Swami Medical College ,Anand   ,Gujarat   
Pramukh Swami Science H D Patel Arts College ,,Gujarat   
Pranabananda Womens College ,,Nagaland   
Pranam Primary Teachers Training College ,,Gujarat   
Pranathi Ded College ,,Karnataka   
Prannath Mahavidyalaya ,,Orissa   
Pranveer Singh Institute Of Technology ,Kanpur   ,Uttar Pradesh   
Prarthana Primary Teachers Training College ,,Gujarat   
Prasad Institute Of Technology ,Jaunpur   ,Uttar Pradesh   
Prasad Institute Of Technology & Sciences ,Krishna   ,Andhra Pradesh   
Prasad V. Potluri Siddhartha Institute Of Technology ,Vijayawada   ,Andhra Pradesh   
Prasakthi Teacher Training Institute For Women ,,Tamil Nadu   
Prasanna College Of Education ,,Karnataka   
Prasanna D Ed College ,,Karnataka   
Prasannadeb Womens College ,,West Bengal   
Prasannamani College Of Physical Edn & Yoga ,,Orissa   
Prasanthi Degree College ,Krishna   ,Andhra Pradesh   
Prasarak Sanstha Sanchalit Senior College Of ,,Maharashtra   
Prasasvi T T College Collectorate Chauraha ,,Rajasthan   
Prashanth D Ed College ,,Karnataka   
Prashanti College Of Education ,,Rajasthan   
Prashanti College Of Professional Studies ,,Madhya Pradesh   
Prassasvi T T College ,,Rajasthan   
Prassive Teacher Training College ,,Rajasthan   
Pratap Bahadur Degree College ,,Uttar Pradesh   
Pratap Bahadur P G College ,,Uttar Pradesh   
Pratap College Of Education ,,Andhra Pradesh   
Pratap Junior College Of Education ,,Maharashtra   
"Prathiba Degree College, Siddipet ",Siddipet   ,Andhra Pradesh   
Prathiba Vignana Es Degree College For Women ,Bhimavaram   ,Andhra Pradesh   
Prathibha College Of Education ,,Andhra Pradesh   
"Prathibha Degree College, Kallur ",Kallur   ,Andhra Pradesh   
"Prathima Institute Of Medical Sciences, Karimnager ",Karimnagar   ,Andhra Pradesh   
Prathisthan Mahavidyalaya ,,Maharashtra   
Prathyusha Institute Of Technology And Management ,Tiruvallur   ,Tamil Nadu   
Pratibha College Of Education ,,Andhra Pradesh   
Pratibha Degree College ,Guntur   ,Andhra Pradesh   
Pratibha Degree College For Women ,Rangareddy   ,Andhra Pradesh   
"Pratibha Degree College, Rangareddy ",Ibrahimpatnam   ,Andhra Pradesh   
"Pratibha Degree College, Vizianagaram ",Vizianagaram   ,Andhra Pradesh   
Pratibha Institute Of Business Management ,Pune   ,Maharashtra   
Pratibha Niketan Mahavidyalaya(Arts Sc Com.) ,,Maharashtra   
Pratibha Pratishthan ,,Maharashtra   
Pravara College Of Physical Education ,,Maharashtra   
Pravara Institute Of Research & Education In Natural & Social Science ,Ahmednagar   ,Maharashtra   
Pravara Rural College Of Education ,,Maharashtra   
Pravara Rural College Of Engineering ,Ahmednagar   ,Maharashtra   
Pravara Rural Edn Society'S College Of Phy Edn ,,Maharashtra   
Pravara Rural Edu Soc Visvesvaraya Engineering College ,Nashik   ,Maharashtra   
Praveen College Of Education ,,Andhra Pradesh   
Praveen Hindi Pandit Training College ,,Andhra Pradesh   
Praveenya Institute Of Marine Engineering ,Denkada   ,Andhra Pradesh   
Prayag Mahila Vidyapeeth Degree College ,,Uttar Pradesh   
Prayas College Of Education ,,Delhi   
Pre Primary Training College ,,Gujarat   
Pre Primary Tti ,,Kerala   
Prema College Of Education ,,Andhra Pradesh   
Prema Katiyar Shiksha Sansthan Mahavidyalaya ,,Uttar Pradesh   
Premchand Mugadiya D Ed College ,,Maharashtra   
Premchand Raichand Training College ,,Gujarat   
Premi Devi Samaj Kalyan Mahila Mahavidyalaya ,,Uttar Pradesh   
Premier College Of Management ,Bangalore   ,Karnataka   
Premier Teacher Training Institute ,,Tamil Nadu   
Prerana Degree College ,Mancherial   ,Andhra Pradesh   
Presidency College ,Bangalore   ,Karnataka   
Presidency College ,,Manipur   
Presidency College ,Chennai   ,Tamil Nadu   
Presidency College ,,West Bengal   
"Presidency College For Women, Hyderabad ",Hyderabad   ,Andhra Pradesh   
Presidency College Of Arts & Science ,Kukatpally   ,Andhra Pradesh   
Presidency College Of Education ,,Andhra Pradesh   
Presidency College Of Education ,,Karnataka   
Presidency College Of Education & Technology ,,Uttar Pradesh   
Presidency Degree College ,Visakhapatnam   ,Andhra Pradesh   
Presidency School Of Mgt. & Computer Sciences ,Hyderabad   ,Andhra Pradesh   
President College Of Education ,,Gujarat   
Prestige Institute Of Education ,,Madhya Pradesh   
Prestige Institute Of Management ,Dewas   ,Madhya Pradesh   
Prestige Institute Of Management & Research ,Indore   ,Madhya Pradesh   
Prestige Institute Of Management. ,Gwalior   ,Madhya Pradesh   
Preston College ,,Madhya Pradesh   
Primary College Of Education (Vado Juth Kelavan ,,Gujarat   
Primary College Of Education (Vado Juth Kelvani Mandal'S) ,,Gujarat   
Primary Education College ,,Gujarat   
Primary Teacher Education College ,,Bihar   
Primary Teacher Education College ,,Jharkhand   
Primary Teacher Education College (Diet) Narar ,,Bihar   
Primary Teacher Education Collge Cum Diet Pirauta ,,Bihar   
Primary Teacher Education Collge Pusa ,,Bihar   
Primary Teacher Training Centre ,,Karnataka   
Primary Teacher Training College ,,Gujarat   
Primary Teacher Training College ,,Jharkhand   
Primary Teachers Education College ,,Bihar   
Primary Teachers Education College ,,Jharkhand   
Primary Teachers Education College ( Diet) Sonepu ,,Bihar   
Primary Teachers Education College Bangra ,,Bihar   
Primary Teachers Education College Barh ,,Bihar   
Primary Teachers Education College Bundu ,,Jharkhand   
Primary Teachers Education College Chakulia ,,Jharkhand   
Primary Teachers Education College Gurwa ,,Jharkhand   
Primary Teachers Education College Madhopatti ,,Bihar   
Primary Teachers Education College Patahi ,,Bihar   
Primary Teachers Training College ,,Gujarat   
Primary Teachers Training College ,,Jharkhand   
Primary Teachers Training College Cum Diet ,,Bihar   
Primary Teachers Training College Cum Diet ,,Jharkhand   
Prime (Mca) College ,Anandapuram   ,Andhra Pradesh   
Prime College Of Education ,,Tamil Nadu   
Prime Teacher Training Institute ,,Tamil Nadu   
Prime Teachers Training Institute ,,Tamil Nadu   
Prin M C Shah College Commerce ,,Gujarat   
Prin. L.N. Wellingkar Institute Of Mgt. Develop ,Bangalore   ,Karnataka   
Prin.N.G.Naralkar Institute Of Career Development & Research ,Pune   ,Maharashtra   
Prince Advance Studies ,,Delhi   
Prince Institute Of Innovative Technology ,,Uttar Pradesh   
Prince Marthanda Varma Teacher Trg Institute ,,Kerala   
Prince Shivaji Institute Of Education ,,Maharashtra   
Prince Shri Venkateshwara Arts And Science College ,Chennai   ,Tamil Nadu   
Prince Shri Venkateshwara Padmavathy Engineering College ,Chennai   ,Tamil Nadu   
Princes Shehkar College For Women ,Hyderabad   ,Andhra Pradesh   
Princess B Ed College ,,Rajasthan   
Princess Esin Womens Educational Centre ,,Andhra Pradesh   
Princess Teacher Traning College ,,Rajasthan   
Princess Tt College ,,Rajasthan   
Princeton College Of Engineering & Technology ,Ghatkesar   ,Andhra Pradesh   
Princeton Degree College ,Ramanthapur   ,Andhra Pradesh   
Princeton Pg College ,Hyderabad   ,Andhra Pradesh   
Princeton School Of Education ,,Andhra Pradesh   
Prithvi Engineering College ,Coimbatore   ,Tamil Nadu   
Prithvi Raj Chauhan Mahavidyalaya ,,Uttar Pradesh   
Prithvi Raj Chauhan Mahavidylaya ,,Uttaranchal   
Priya Darshini Anjuman Islamia Girls College ,,Madhya Pradesh   
Priya Darshini D Ed College ,,Karnataka   
Priyadarshani Adyapak Vidyala ,,Maharashtra   
Priyadarshini College ,Nalgonda   ,Andhra Pradesh   
Priyadarshini College Of Computer Sciences ,Noida   ,Uttar Pradesh   
Priyadarshini College Of Education ,,Andhra Pradesh   
Priyadarshini College Of Education ,,Karnataka   
Priyadarshini College Of Engineering ,Nellore   ,Andhra Pradesh   
Priyadarshini College Of Engineering Andhra Pradesh ,Nellore   ,Andhra Pradesh   
Priyadarshini College Of Engineering Maharastra ,Nagpur   ,Maharashtra   
Priyadarshini D Ed Teachers Training Institute ,,Karnataka   
Priyadarshini Degree & Pg College ,Hyderabad   ,Andhra Pradesh   
Priyadarshini Degree College ,Tenali   ,Andhra Pradesh   
"Priyadarshini Degree College, Jangareddygudem ",Jangareddigudem   ,Andhra Pradesh   
"Priyadarshini Degree College, Khammam ",Khammam   ,Andhra Pradesh   
"Priyadarshini Degree College, Kothagudem ",Kothagudem   ,Andhra Pradesh   
"Priyadarshini Degree College, Nalgonda ",Nalgonda   ,Andhra Pradesh   
"Priyadarshini Degree College, Nellore ",Nellore   ,Andhra Pradesh   
Priyadarshini Engineering College ,Vellore   ,Tamil Nadu   
"Priyadarshini Institute Of Engineering And Technology, ",Nagpur   ,Maharashtra   
Priyadarshini Institute Of Management & Science ,Jammu   ,Jammu And Kashmir   
Priyadarshini Institute Of Technology & Science ,Guntur   ,Andhra Pradesh   
Priyadarshini Mahavidyalaya ,,Madhya Pradesh   
Priyadarshini Mahila Mahavidyalaya ,,Maharashtra   
Priyadarshini Pg Centre ,Nellore   ,Andhra Pradesh   
Priyadarshini Pg College ,Mandal   ,Andhra Pradesh   
Priyadarshini Polytechnic College ,Villupuram   ,Tamil Nadu   
Priyadarshini Seva Sanstha ,,Maharashtra   
Priyadarshini Teacher Training Institute ,,Karnataka   
Priyadarshini Teacher Training Institute ,,Tamil Nadu   
Priyal Education Society ,,Madhya Pradesh   
Priyanka College Of Education ,,Andhra Pradesh   
Priyanka Degree College For Women ,Hyderabad   ,Andhra Pradesh   
Priyanka Teacher Training College ,,Andhra Pradesh   
Priyanka Teachers Training Institute ,,Karnataka   
Priyatam Institute Of Technology & Science ,Indore   ,Madhya Pradesh   
Prm Vijaya Teachers Training Institute ,,Karnataka   
Prof Gursewak Singh Govt College Of Physical Edn ,,Punjab   
Prof S A College Of Education ,,Tamil Nadu   
Prof. Dhanapalan College For Women ,Chennai   ,Tamil Nadu   
Prof. G. Sundera Reddy Degree College ,Saluru   ,Andhra Pradesh   
Professor Rangas Physical Education Institute ,,Rajasthan   
Progati College Dhuburi ,Dhuburi   ,Assam   
Progessive Learning College Of Education ,,Haryana   
Progressive College ,Hyderabad   ,Andhra Pradesh   
Progressive Education Societys B Ed College ,,Maharashtra   
Progressive Education Society'S Modern College Of Engineering ,Haveli   ,Maharashtra   
Progressive Engineering College ,Nalgonda   ,Andhra Pradesh   
Projyothi Niketan College ,,Kerala   
Promod D Ed College ,,Karnataka   
Proudadevaraya Institute Of Technology ,Hospet   ,Karnataka   
Providence College For Women ,Nilgiris   ,Tamil Nadu   
Providence College Of Teacher Education (B Ed) For ,,Kerala   
Providence Junior College Of Education ,,Maharashtra   
Providence Womens College ,,Kerala   
"Providence Womens College, Kozhikode ",Kozhikode   ,Kerala   
Pruthvi Evening Law College ,Bangalore   ,Karnataka   
Psg College Of Technology ,Coimbatore   ,Tamil Nadu   
Psn College Of Engineering & Technology ,Tirunelveli   ,Tamil Nadu   
Psn College Of Engineering. ,Tirunelveli   ,Tamil Nadu   
Psna College Of Engineering And Technology ,Dindigul   ,Tamil Nadu   
Pt. Ambika Pratap Narayan Degree College ,,Uttar Pradesh   
"Pt. B.D Sharma Postgraduate Institute Of Medical Science, Rohtak ",Rohtak   ,Haryana   
Pt. Brij Kishore Pateria Shiksha Mahavidyalaya ,,Madhya Pradesh   
Pt. Deen Dayal Institute - Physically Handicapped ,Delhi   ,Delhi   
Pt. Deen Dayal Upadhya Girls College ,,Madhya Pradesh   
Pt. Deen Dayal Upadhya Government Degree College ,,Uttar Pradesh   
Pt. Deen Dayal Upadhyay Government Girls Degree College ,,Uttar Pradesh   
Pt. Deen Dayal Upadhyay Gramodya Mahavidyalaya ,,Uttar Pradesh   
Pt. Deen Dayal Upadhyay Management College ,,Uttar Pradesh   
Pt. Hari Sahai Degree College ,,Uttar Pradesh   
Pt. Harishankar Education College ,,Chhattisgarh   
Pt. Harishankar Shukla Smriti Mahavidyalaya ,,Chhattisgarh   
Pt. J.L.N. College ,,Uttar Pradesh   
"Pt. J.N.M Medical College, Raipur ",Raipur   ,Chhattisgarh   
Pt. Jawahar Lal Nehru College ,,Uttar Pradesh   
Pt. Jawaharlal Nehru Institute Of Business Management ,Ujjain   ,Madhya Pradesh   
Pt. Prithi Nath (Pg) College ,,Uttar Pradesh   
Pt. R.N. Junior College Of Education ,,Maharashtra   
Pt. Ram Dutt Shukla Degree College ,,Uttar Pradesh   
Pt. S.N.Shukla Governmentcollege ,,Madhya Pradesh   
Pt. Sahadev Prasad Trivedi Mahavidyalaya ,,Uttar Pradesh   
Pt. Sahdev Prasad Trivedi Mahavidyalay ,,Uttar Pradesh   
Pt. Sujan Singh Degree College ,,Uttar Pradesh   
Pt. Sunder Lal Memorial P G College ,,Uttar Pradesh   
Pt. Sunderlal Memorial Degree College ,,Uttar Pradesh   
Pt. Surya Narayan Chaturvedi Degree College ,,Uttar Pradesh   
Pt. Tej Ram College Of Edn ,,Uttar Pradesh   
Pt. Thakur Prasad Tripathi ,,Uttar Pradesh   
Pt. Thakur Prasad Tripathi Kisan Degree College ,,Uttar Pradesh   
Pt. Udai Jain Mahavidyalaya ,,Rajasthan   
Pt. Vashudev Tiwari College Of Education ,,Uttar Pradesh   
Ptr College Of Engineering & Technology ,Madurai   ,Tamil Nadu   
Pubkamrup College ,Kamrup   ,Assam   
Public College ,,Punjab   
Public Khalsa College For Women ,,Punjab   
Public Mahila Sahar Degree College ,,Uttar Pradesh   
Pujya Swami Vivekanand College Of Education ,,Haryana   
Pulavar Kuppuswami Teacher Training Institute ,,Tamil Nadu   
Pulijala Venkat Ranga Rao Memorial College Of Edua ,,Andhra Pradesh   
Pulla Rao College Of Education ,,Andhra Pradesh   
Pulla Reddy Institute Of Computer Science ,Hyderabad   ,Andhra Pradesh   
Pune Julha Mandals Mamasahib Mohol Arts & Commerc ,,Maharashtra   
Pune Sevasadan Societys Y B Khare Jr Colege Of Edu ,,Maharashtra   
Pune Vidhyarthi Griha'S College Of Engineering And Technology ,Pune   ,Maharashtra   
Pune Vidyarthi Griha ,,Maharashtra   
Pune Zilla Shikshan Mandal ,,Maharashtra   
Punitha Ohm College Of Education ,,Tamil Nadu   
Punitha Ohm Teacher Training Institute ,,Tamil Nadu   
Punitha Valanar College Of Education ,,Tamil Nadu   
Punjab Agricultural University ,,Punjab   
Punjab Agriculture University Ludhiana ,Ludhiana   ,Punjab   
Punjab Business School ,,Punjab   
Punjab College Of Education ,,Punjab   
Punjab College Of Engineering & Technology ,Patiala   ,Punjab   
Punjab College Of Technical Education ,,Punjab   
Punjab Engineering College ,Chandigarh   ,Chandigarh   
Punjab Institute Of Management & Technology ,,Punjab   
Punjab University ,Chandigarh   ,Chandigarh   
Punjabai Patel College Of Education ,,Maharashtra   
Punjabi Uni Deptt Of Correspondance Courses ,,Punjab   
Punjabi University College Of Education ,,Punjab   
Punjabi University Patiala ,Patiala   ,Punjab   
"Punyagiri Degree College, Vizianagaram ",Vizianagaram   ,Andhra Pradesh   
Purandareswari College Of Education ,,Andhra Pradesh   
Puratchi Thalaivar Dr M G R College Of Edn ,,Tamil Nadu   
Puratchi Thalaivar Dr Mgr Teacher Training Instt ,,Tamil Nadu   
Purba Medinipur Primary Teachers Traning Institute ,,West Bengal   
Purnea College ,,Bihar   
Purnea Mahila College ,,Bihar   
Purnima Ram Pratap Sanskrit Mahavidyalaya ,,Bihar   
Purushottam Institute Of Engineering And Technology ,,Orissa   
Purvanchal Degree College ,,Uttar Pradesh   
Purvanchal University ,,Uttar Pradesh   
Pushp Institute Of Sciences And Higher Studies ,,Uttar Pradesh   
Pushpageeth College Of Teacher Education ,,Kerala   
Pushpagiri College Of Education ,,Andhra Pradesh   
"Pushpagiri Institute Of Medical Sciences And Research Centre, Thiruvalla ",Thiruvalla   ,Kerala   
Pushpanjali College Of Education ,,Maharashtra   
Pyarabai Somani Adhyapika Vidyalaya ,,Maharashtra   
Pydah College ,Visakhapatnam   ,Andhra Pradesh   
Pydah College For Pg Studies ,Visakhapatnam   ,Andhra Pradesh   
"Pydah College For Women, Visakhapatnam ",Palem   ,Andhra Pradesh   
Pydah College Of Education ,,Andhra Pradesh   
Pydah College Of Engineering & Technolog ,Visakhapatnam   ,Andhra Pradesh   
R.K. College Of Education,, Haryana  
R.K. College Of Engineering & Technology, Rajkot  , Gujarat  
R.K. College Of System & Management,, Uttar Pradesh  
R.K. Desai Instt Of Teacher Education,, Gujarat  
R.K. Gupta Memorial Institute Of Tech & Mngt,, Uttar Pradesh  
R.K. Institute Of Management & Research, Mumbai  , Maharashtra  
R.K. Institute Of Management And Computer Sciences, Bangalore  , Karnataka  
R.K. Mission Boy'S Home Ptti Rahara,, West Bengal  
R.K. Mission Sarada Mandir Govt Sponsored Ptti,, West Bengal  
R.K. P D Ed College,, Karnataka  
R.K. P E T D Ed College Mallasandra,, Karnataka  
R.K. Samy College Of Education,, Tamil Nadu  
R.K. Samy Teacher Training Institute,, Tamil Nadu  
R.K. Sanatombi Devi College Of Education,, Manipur  
R.K. Talreja College Of Artsscience & Commerce,, Maharashtra  
R.K. Vidya Prasar Mandal,, Maharashtra  
R.K.Arya College,, Punjab  
R.K.D.F. Institute Of Management, Bhopal  , Madhya Pradesh  
R.K.L.K. College Of Education,, Andhra Pradesh  
R.K.L.K. Rao Degree College, Nalgonda  , Andhra Pradesh  
R.K.L.K. Raos Women Degree College, Suryapet  , Andhra Pradesh  
R.K.P. Degree College, Adilabad  , Andhra Pradesh  
R.K.R. College Of Education,, Tamil Nadu  
R.K.R. Teacher Training Institute,, Tamil Nadu  
R.K.S.D. College Of Education,, Haryana  
R.L. College Of Education,, Haryana  
R.L. Institute Of Management Studies, Madurai  , Tamil Nadu  
R.L. Law College, Belgaum  , Karnataka  
R.L. Patel Ptc College,, Gujarat  
R.L.N. Dora College Of Education,, Andhra Pradesh  
R.L.S.Law College,, Karnataka  
R.M. P C S I P S K Rajaratnam Mem College Of Edn,, Tamil Nadu  
R.M. Teacher Training Institute,, Kerala  
R.M.D Engineering College, Tiruvallur  , Tamil Nadu  
R.M.K College Of Engineering And Technology, Chennai  , Tamil Nadu  
R.M.M. Law College, Saharsa  , Bihar  
R.M.R. College Of Education,, Haryana  
R.Madhya Pradesh. Postgraduate College,, Uttar Pradesh  
R.Madhya Pradesh.P.V. College,, Uttar Pradesh  
R.N. College,, Uttar Pradesh  
R.N. Inst Of Modern Mngt Edn & Research Center,, Uttar Pradesh  
R.N. Shetty Institutute Of Education,, Karnataka  
R.N. Singhgovernment College,, Madhya Pradesh  
R.N.C. Arts J.D.B. Commerce And N.S.C. Science College,, Maharashtra  
R.N.M.M. Law College,, Bihar  
R.N.T. College Pf Teachers Education Highway,, Rajasthan  
R.N.T. Institute Of Bstc,, Rajasthan  
R.N.T. Medical College, Udaipur  , Rajasthan  
R.N.T.T. College,, Rajasthan  
R.P. Post Graduate College,, Uttar Pradesh  
R.P.Gogate College Of Arts Science & R.V.J. College Of Commerce,, Maharashtra  
R.P.M. Degree College,, Uttar Pradesh  
R.P.S. College Of Education,, Haryana  
R.P.S. Teachers Training College,, Bihar  
R.R. B Ed College,, Karnataka  
R.R. Bawa D.A.V. College For Girls,, Punjab  
R.R. College Of Management Studies & Computer Applications, Bangalore  , Karnataka  
R.R. D Ed College,, Karnataka  
R.R. Educational Trust D Ed College,, Maharashtra  
R.R. Institute Of Advanced Studies, Bangalore  , Karnataka  
R.R. Lahoti Science College,, Maharashtra  
R.R. Memorial Degree College, Jangaon  , Andhra Pradesh  
R.R. Tamil Medium D Ed College,, Karnataka  
R.R.M.K. Arya Mahila Mahavidyalaya,, Punjab  
R.S. Bidkar Artsscience& Commerce College,, Maharashtra  
R.S. College,, Punjab  
R.S. Mahavidyalaya,, Orissa  
R.S. Memorial College Of Education,, Haryana  
R.S.C. College,, Madhya Pradesh  
R.S.D. Academy,, Uttar Pradesh  
R.S.G.U. Degree (P.G.) College,, Uttar Pradesh  
R.S.K.D. Pg Degree College,, Uttar Pradesh  
R.S.M. Degree College,, Uttar Pradesh  
R.S.P. College,, Jharkhand  
R.S.S. Degree College,, Uttar Pradesh  
R.S.S.P. Mandals Ltd Sanchalit Rastriya Arts Sc Commerce College,, Maharashtra  
R.S.V. College Of Education,, Karnataka  
R.T.C. B Ed College,, Jharkhand  
R.T.E. Societys College Of Education,, Karnataka  
R.T.E.S.S Arts Sc. & Commerce College,, Karnataka  
R.V. Bidap Law College,, Karnataka  
R.V. Higher Education And Technical Institute,, Uttar Pradesh  
R.V. Teachers College,, Karnataka  
R.V. Teachers Training Institution,, Karnataka  
R.V. Training College,, Kerala  
R.V.P. First Grade College,, Karnataka  
R.V.S College Of Computer Application, Karaikal  , Pondicherry  
R.V.S. College Of Education,, Tamil Nadu  
R.V.S. College Of Engineering, Bangalore  , Karnataka  
R.V.S. College Of Physiotherapy, Cuddalore  , Tamil Nadu  
R.V.S. Teacher Training Institute,, Tamil Nadu  
R.V.S. Teahcer Training Institute,, Pondicherry  
R.V.V.N. College, Guntur  , Andhra Pradesh  
Raadhaa College Of Education,, Tamil Nadu  
Raak Teacher Training Institute,, Pondicherry  
Raath Mahavidyalaya,, Uttaranchal  
Rabiammal Ahamed Maideen College For Women, Tiruvarur  , Tamil Nadu  
Rabindharanath Tagoor College Of Engineering For Women, Salem  , Tamil Nadu  
Rabindharanath Tagore College Of Arts And Science For Women, Salem  , Tamil Nadu  
Rabindharanath Tagore Teacher Trg Instt For Girls,, Tamil Nadu  
Rabindra Bharati University,, West Bengal  
Rabindra Mahavidyalaya,, West Bengal  
Rabindra Nazrul Smriti B Ed Educational Institute,, West Bengal  
Rabindra Satabarsiki Mahavidyalaya,, West Bengal  
Rabindranath Tagore College Of Education,, Andhra Pradesh  
Rabindranath Tagore College Of Education For Women,, Tamil Nadu  
Rabindranath Tagore T T I For Girls,, Tamil Nadu  
Rabindranath Tagore Teacher Training College,, Andhra Pradesh  
Rabindrasashan Girls College,, Assam  
Rachapudi Nagabushanam Degree College, Cuddapah  , Andhra Pradesh  
Radha Govind College Of Edn,, Uttar Pradesh  
Radha Govind Engineering College, Meerut  , Uttar Pradesh  
Radha Govind Primary Teachers Training College,, Jharkhand  
Radha Krishan College Behind Of Sangita Lough,, Madhya Pradesh  
Radha Krishan College Of Education,, Madhya Pradesh  
Radha Krishan Kanya Mahavidyalaya,, Uttar Pradesh  
Radha Krishan Teacher Training College,, Rajasthan  
Radha Mohan Kisan Majdoor Mahavidyalaya,, Uttar Pradesh  
Radha Mohan Kishan Majdoor Mahavidyalaya,, Uttar Pradesh  
Radha Umakant Sanskrit Mahavidyalaya,, Bihar  
Radhabai Kale Mahila Mahavidyalya(Arts & Sciences),, Maharashtra  
Radhakrishnan Teachers Training College,, Rajasthan  
Radhamadhab College,, Assam  
Radhanath Inistitute Of Advanced Studies In Edn,, Orissa  
Radhanath Institute Of Advance Studies,, Orissa  
Radhanath Secondary Training School,, Orissa  
Radharaman Engineering College, Bhopal  , Madhya Pradesh  
Radharaman Institute Of Research And Technology, Ratibad  , Madhya Pradesh  
Radharaman Institute Of Technology And Science, Ratibad  , Madhya Pradesh  
Radhaswami Vivdh Karykari Education Sanstha,, Maharashtra  
Radhaswami Vividh Karykari Education Sanstha,, Maharashtra  
Radhe B Ed College,, Gujarat  
Radhey Charitable Trust,, Maharashtra  
S K R Engineering College ,Tiruvallur   ,Tamil Nadu   
S T J Institute Of Technology ,Dharwad   ,Karnataka   
S.B.S. College Of Engineering & Technology ,Firozpur   ,Punjab   
S.C.T. Institute Of Technology ,Bangalore   ,Karnataka   
S.E.A. College Of Engg. & Tech ,Virgonagar   ,Karnataka   
S.I.E.T. School Of Management ,,Maharashtra   
S.J.B.Institute Of Technology ,Bangalore   ,Karnataka   
S.J.C. Institute Of Technology ,Kolar   ,Karnataka   
S.K.P Engineering College ,Tiruvannamalai   ,Tamil Nadu   
S.M. Khader Engineering College ,Kanchipuram   ,Tamil Nadu   
S.R. Engineering College ,Warangal   ,Andhra Pradesh   
S.R.M. Engineering College ,Chennai   ,Tamil Nadu   
S.S. Institute Of Technology ,Hyderabad   ,Andhra Pradesh   
S.V. Model College Of Tech ,Rangareddy   ,Andhra Pradesh   
S.Veerasamy Chettiar College Of Engineering ,Tirunelveli   ,Tamil Nadu   
Sa Engineering College ,Chennai   ,Tamil Nadu   
Sachdeva Institute Of Technology. ,Mathura   ,Uttar Pradesh   
Sacs M.A.V.M.M Engineering College ,Madurai   ,Tamil Nadu   
Sacs M.A.V.M.M Engineering College Tamil Nadu ,Madurai   ,Tamil Nadu   
Safa College Of Engineering & Technology ,Kurnool   ,Andhra Pradesh   
Sagar Institute Of Science And Technology ,Bhopal   ,Madhya Pradesh   
Sagar Institute Of Technology And Management ,Barabanki   ,Uttar Pradesh   
Sagi Ramakrishnam Raju Engineering College ,West Godavari   ,Andhra Pradesh   
Sahibzada Ajit Singh Institute Of Information Technology ,Mohali   ,Punjab   
Sahrdaya College Of Engineering & Technology ,Trichur   ,Kerala   
Sahyadri Institute Of Technology ,Mangalore   ,Karnataka   
Sai Engineering College ,Balasore   ,Orissa   
Sai Spurthi Institute Of Technology ,Sathupally   ,Andhra Pradesh   
Saint Dyaneshwar Shikshan Sanstha'S College Of Engineering And Technology ,,Maharashtra   
Saint Margaret Engineering College ,Alwar   ,Rajasthan   
"Saintgits College Of Engineering, ",Kottayam   ,Kerala   
Sakthi Engineering College ,Chennai   ,Tamil Nadu   
Sakthi Mariamman Engineering College ,Chennai   ,Tamil Nadu   
Sam College Of Engineering & Technology ,Jabalpur   ,Madhya Pradesh   
Samanta Chandra Sekhar Institute Of Technology And Management ,,Orissa   
Sambhram Institute Of Technology ,Bangalore   ,Karnataka   
Samrat Ashok Technological Institute ,Vidisha   ,Madhya Pradesh   
Sams College Of Engineering & Technology ,Tiruvallur   ,Tamil Nadu   
Samskruti College Of Engineering And Technology ,Ghatkesar   ,Andhra Pradesh   
Sana Engineering College ,Kodad   ,Andhra Pradesh   
Sanghvi Institute Of Management & Science ,Indore   ,Madhya Pradesh   
Sanjay Education Society'S College Of Engineering ,Dhule   ,Maharashtra   
Sanjay Institute Of Engineering And Management ,Mathura   ,Uttar Pradesh   
Sanjay Memorial Institute Of Technology ,Berhampur   ,Orissa   
Sanjivani Education Society College Of Engineering ,Shahajanagar ,Maharashtra   
Sanjivani Rural Education Society'S College Of Engineering ,Ahmednagar   ,Maharashtra   
Sankalchand Patel College Of Engineering ,Gandhi Nagar   ,Gujarat   
Sankethika Vidya Parishad Engineering College ,Visakhapatnam   ,Andhra Pradesh   
Sanmarg Shikshan Sanstha'S Smt.Radhikatai Pandav College Of Engineering ,Nagpur   ,Maharashtra   
Sanskar City Institute Of Technology And Management ,Rajnandgaon   ,Chhattisgarh   
Sant Baba Bhag Singh Institute Of Engineering & Technology ,,Punjab   
"Sant Gajanan Maharaj College Of Engineering, Shegaon ",Buldana   ,Maharashtra   
Sant Longowal Central Institute Of Engineering & Technology ,,Punjab   
Sant Samarth Engineering College ,Hyderabad   ,Andhra Pradesh   
Santhiram Engineering College ,Kurnool   ,Andhra Pradesh   
Santhosha Engineering College ,Tiruvallur   ,Tamil Nadu   
Sapthagiri College Of Engineering Tamil Nadu ,Dharmapuri   ,Tamil Nadu   
Sapthagiri Engineering College ,Bangalore   ,Karnataka   
Sarabhai Institute Of Science And Technology ,Trivandrum   ,Kerala   
Sarada Institute Of Science Technology & Management ,Srikakulam   ,Andhra Pradesh   
Sarada Institute Of Technology And Science ,Raghunathapalem   ,Andhra Pradesh   
Saranathan College Of Engineering ,Trichy   ,Tamil Nadu   
Saraswathi Velu College Of Engineering ,Vellore   ,Tamil Nadu   
Saraswati College Of Engineering ,Thane   ,Maharashtra   
Sardar Patel Memorial Soc'S Chandrapur Engineering College ,Chandrapur   ,Maharashtra   
Sardar Raja College Of Engineering ,Tirunelveli   ,Tamil Nadu   
Sardar Vallabhbhai Patel Institute Of Technolog ,Valsad   ,Gujarat   
Saroj Institute Of Technology ,Lucknow   ,Uttar Pradesh   
Saroj Mohan Institute Of Technology ,Hooghly   ,West Bengal   
Sarvajanik College Of Engineering & Technology ,Surat   ,Gujarat   
Sasi Institute Of Tech Engineering ,Kadakatia   ,Andhra Pradesh   
Sasurie Academy Of College ,Coimbatore   ,Tamil Nadu   
Sasurie College Of Engineering ,Erode   ,Tamil Nadu   
Sat Priya Institute Of Engineering And Technology ,Rohtak   ,Haryana   
Satyadeva Institute Of Technology ,Rajnandgaon   ,Chhattisgarh   
Saveetha Engineering College ,Kanchipuram   ,Tamil Nadu   
Scad College Of Engineering And Technology ,Tirunelveli   ,Tamil Nadu   
School Of Science And Technology ,,Kerala   
Scient Institute Of Tech ,Ibrahimpatnam   ,Andhra Pradesh   
Scms School Of Engineering & Technology ,Kochi   ,Kerala   
Sd College Of Engineering And Technology ,Muzaffarnagar   ,Uttar Pradesh   
Sd Institute Of Technology & Management ,,Haryana   
Sdm College Of Engineering And Technology ,Dharwad   ,Karnataka   
Sdm Institute Of Technology ,Kannada   ,Karnataka   
Seacom Engineering College ,Howrah   ,West Bengal   
"Secab Institute Of Engineering & Technology, ",Bijapur   ,Karnataka   
"Seedling Academy Of Design, Technology And Management ",Jaipur   ,Rajasthan   
Seemanta Engineering College ,,Orissa   
Seethai Ammal Engineering College ,Tirunelveli   ,Tamil Nadu   
Selvam College Of Technology ,Namakkal   ,Tamil Nadu   
Sengunthar College Of Engineering For Women ,Namakkal   ,Tamil Nadu   
Sengunthar Engineering College ,Namakkal   ,Tamil Nadu   
Seth Jai Parkash Mukand Lal Institute Of Engineering & Technology ,Yamunanagar   ,Haryana   
Sethu Institute Of Technology ,Madurai   ,Tamil Nadu   
Shaaz College Of Engineering & Technology ,Moinbad   ,Andhra Pradesh   
Shadan College Of Engineering And Technology ,Hyderabad   ,Andhra Pradesh   
Shadan Women'S College Of Engineering And Technology ,Hyderabad   ,Andhra Pradesh   
Shah Satnam Ji Institute Of Tech. Mgt ,Sirsa   ,Haryana   
Shaheed Bhagat Singh College Of Engineering & Technology ,,Punjab   
Shaheed Udham Singh College Of Engineering & Technology ,Malout   ,Punjab   
Shahjahan College Of Engineering & Technology ,Chevella   ,Andhra Pradesh   
Shahul Hameed Memorial Engineering College ,,Kerala   
Shambhu Nath Institute Of Engineering & Tech ,Allahabad   ,Uttar Pradesh   
Shankara Institute Of Technology ,Jaipur   ,Rajasthan   
Shanmuganathan Engineering College ,Pudukotai   ,Tamil Nadu   
Shantilal Shah Engineering College ,Bhavnagar   ,Gujarat   
Sharada Post Graduate Institute Of Research And Technological Sciences ,Cuddapah   ,Andhra Pradesh   
Shekhawati Engineering College ,,Rajasthan   
Sherwood College Of Engineering Research & Technology ,Barabanki   ,Uttar Pradesh   
Shetkari Shikshan Mandal'S Padmabhoosan ,,Maharashtra   
"Shikshan Sanstha, College Of Engineering ",,Maharashtra   
Shillong Engineering & Management College ,Shillong   ,Meghalaya   
Shirdi. Sai Engineering College ,Bangalore   ,Karnataka   
Shiv Kumar Singh Institute Of Technology & Science ,Indore   ,Madhya Pradesh   
Shiv Shankar Institute Of Engineering And Technology ,Amritsar   ,Punjab   
Shivajirao S. Jondhale College Of Engineering ,Thane   ,Maharashtra   
Shivalik College Of Engineering ,Dehradun   ,Uttaranchal   
Shivalik Institute Of Engineering & Technology ,,Haryana   
Shivdan Singh Institute Of Technology & Management Engineering Collele ,Aligarh   ,Uttar Pradesh   
Shivnagar Vidya Prasarak Mandal'S College Of Engineering ,Pune   ,Maharashtra   
Shobhit Institute Of Engineering & Technology ,Saharanpur   ,Uttar Pradesh   
Shobhit Institute Of Engineering & Technology ,Meerut   ,Uttar Pradesh   
Shrama Sadhana Trust'S Col Of Engg & Tech ,,Maharashtra   
Shree Devi Institute Of Technology ,Mangalore   ,Karnataka   
Shree Ganpati Institute Of Technology ,Ghaziabad   ,Uttar Pradesh   
Shree Institute Of Science And Technology ,Bhopal   ,Madhya Pradesh   
Shree Motilal Kanhaiyalal Fomra Institute Of Technology ,Chennai   ,Tamil Nadu   
Shree Neminath Jain Brahmacharashram College Of Engineering ,Chandwad   ,Maharashtra   
Shree Ram Mulakh Instutute Of Engineering & Technology ,Ambala   ,Haryana   
Shree Rayeshwar Institute Of Engineering & Information Technology ,Najafgarh   ,Goa   
Shree Sai Institute Of Technology ,Ratlam   ,Madhya Pradesh   
Shree Sathguru Engineering College ,,Pondicherry   
Shree Swaminarayan Institute Of Technology ,,Gujarat   
Shree Venkateshwara Hi-Tech Engineering College ,Erode   ,Tamil Nadu   
Shri Andal Alagar College Of Engineering ,Kanchipuram   ,Tamil Nadu   
Shri Angala Amman College Of Engineering And Technology ,Trichy   ,Tamil Nadu   
Shri Annasaheb Dange College Of Engineering & Technology ,Sangli   ,Maharashtra   
Shri B.V.V.Sangha'S Basaveshwar Engineering College ,,Karnataka   
Shri Baba Mastnath Engineering College ,Rohtak   ,Haryana   
Shri Balaji College Of Engineering & Technology ,Jaipur   ,Rajasthan   
Shri Balwant Institute Of Technolog ,Sonipat   ,Haryana   
Shri Chimanbhai Patel Post Graduate Institute Of Computer Applications ,Gandhi Nagar   ,Gujarat   
Shri Gsinstitute Of Technology And Science ,Indore   ,Madhya Pradesh   
Shri Guru Gobind Singhji College Of Engineering And Technology ,,Maharashtra   
Shri Guru Gobind Singhji Institute Of Engineering And Technology ,Nanded   ,Maharashtra   
Shri Jagannath Institute Of Technology ,,Orissa   
Shri Krishna Institute Of Engineering And Technology ,Kurukshetra   ,Haryana   
Shri Mahatma Basweshwar Educational Soc. M.S ,,Maharashtra   
Shri Rajiv Gandhi Institute Of Tech ,Pondicherry   ,Pondicherry   
Shri Ram College Of Engineering And Management ,,Madhya Pradesh   
Shri Ram Institute Of Technology ,Jabalpur   ,Madhya Pradesh   
Shri Ram Murti Smarak College Of Engineering & Technology ,Bareilly   ,Uttar Pradesh   
"Shri Rama Krishna Raju, Engineering College ",West Godavari   ,Andhra Pradesh   
Shri Rawatpura Sarkar Institute Of Technology ,Raipur   ,Chhattisgarh   
Shri Rawatpura Sarkar Institute Of Technology Madhya Pradesh ,,Madhya Pradesh   
Shri S'Ad Vidya Mandal Institute Of Technology ,,Gujarat   
Shri Sant Gadge Baba Engineering College ,Jalgaon   ,Maharashtra   
Shri Shankaracharya College Of Engineering ,Bhilai   ,Chhattisgarh   
"Shri Shankaracharya Mahavidyalaya, Junwani ",Chandigarh   ,Chandigarh   
Shri Shankarprasad Agnihotri College Of Engineering ,Wardha   ,Maharashtra   
Shri Shivaji Edu. Soc'S Amarvathy'S Coll. Of Engg. & Tech ,,Maharashtra   
Shri Shivaji Education Society'S College Of Engineering And Technology ,Akola   ,Maharashtra   
Shri Shivaji V.P.Santha'S College Of Engineering ,Dhule   ,Maharashtra   
Shri Tulja Bhavani College Of Engineering ,Osmanabad   ,Maharashtra   
Shri Vaishnav Institute Of Technology ,Indore   ,Madhya Pradesh   
Shri Venkateshwar Institute Of Technology ,Indore   ,Madhya Pradesh   
Shri Vishnu Engineering College For Women ,Bhimavaram   ,Andhra Pradesh   
Shri Vithal Education & Research Inst. College Of Engg ,Gopalpur   ,Maharashtra   
Shri Warna Vibhag Sm'S Tatya Saheb Kore Inst. Of Engg. & Tech ,Kolhapur   ,Maharashtra   
Shri. Ramdeo Baba Kamla Nehru Engineering College ,Nagpur   ,Maharashtra   
Shridevi Institute Of Engineering Technology ,Tumkur   ,Karnataka   
Shrinathji Institute Of Technology & Engineering ,Udaipur   ,Rajasthan   
Shriram College Of Engineering & Management ,Gwalior   ,Madhya Pradesh   
Shriram Institute Of Information Technology ,Gwalior   ,Madhya Pradesh   
Shwar Chand Vidya Sagar Institute Of Management. ,Mathura   ,Uttar Pradesh   
Shyamlal Memo. E.S. Shyamlal College Of Engineering ,,Maharashtra   
Siddaganga Institute Of Technology ,Tumkur   ,Karnataka   
Siddhant College Of Engineering ,Pune   ,Maharashtra   
Siddharth Institute Of Engineering & Technology ,Puttur   ,Andhra Pradesh   
Siddhi Vinayak College Of Science & Higher Education College ,Alwar   ,Rajasthan   
Sies Graduate School Of Technology ,Mumbai   ,Maharashtra   
Silicon Institute Of Technology ,Bhubaneswar   ,Orissa   
Siliguri Institute Of Technology ,Siliguri   ,West Bengal   
Sindhudurga Shikshan Prasarak Mandal'S College Of Engineering. ,Kankavali   ,Maharashtra   
Sindhura College Of Engineering & Technology ,Karimnagar   ,Andhra Pradesh   
Sinhagad Technical Education Society'S College Of Engineering ,Pune   ,Maharashtra   
Sinhgad Academy Of Engineering ,Pune   ,Maharashtra   
Sinhgad Institute Of Technology. ,Lonawala   ,Maharashtra   
Sipna Shikshan Prasark Mandal Sipna'S College Of Engg & Technology ,Amravati   ,Maharashtra   
Sir C R Reddy College Of Engineering ,Eluru   ,Andhra Pradesh   
Sir Jayachamarajendra College Of Engineering Evening ,,Karnataka   
Sir M Visvesvaraya Institute Of Technology ,Bangalore   ,Karnataka   
"Sir Vishveshwaraiah Institute Of Science & Technology, ",Chitoor   ,Andhra Pradesh   
Siwan Engineering & Technical Institute ,Siwan   ,Bihar   
Sjm Institute Of Technology Sjmit ,Chitradurga   ,Karnataka   
Skyline Institute Of Engineering & Technology ,Noida   ,Uttar Pradesh   
Slcs Institute Of Engineering And Technology ,Hyderabad   ,Andhra Pradesh   
Smt. Bhagwati Chaturvedi College Of Engineering ,Nagpur   ,Maharashtra   
Smt. Indira Gandhi College Of Engineering ,Thane   ,Maharashtra   
Smt. Kamala & Sri Venkappa M. Agadi College Of Engineering & Technology ,Gadag   ,Karnataka   
Smt. Kashibai Navale College Of Engineering ,Haveli   ,Maharashtra   
Smt. Sri Chennamma Devegowda College Of Engineering ,Nelamangala   ,Karnataka   
Snd College Of Engineering & Research Centre ,Nashik   ,Maharashtra   
Sns College Of Engineering ,Coimbatore   ,Tamil Nadu   
Sns College Of Technology ,Coimbatore   ,Tamil Nadu   
Sobhasaria Engineering College ,,Rajasthan   
Society For Comp.Tec'S Pune Inst.Of Computer Tech ,Haveli   ,Maharashtra   
Somany Institute Of Technology And Management ,Rewari   ,Haryana   
Sona College Of Technology ,Salem   ,Tamil Nadu   
Spb Patel Engineering College ,Mehsana   ,Gujarat   
Spoorthy Engineering College ,Rangareddy   ,Andhra Pradesh   
Spr College Of Engineering And Technology ,Ghatkesar   ,Andhra Pradesh   
Sree Chaitanya College Of Engineering ,Thimmapur   ,Andhra Pradesh   
Sree Datha Institute Of Engineering & Science ,Rangareddy   ,Andhra Pradesh   
Sree Kavitha Engineering College ,Karepalli   ,Andhra Pradesh   
"Sree Narayana Guru College Of Engineering & Technology, ",Kannur   ,Kerala   
Sree Narayana Gurukulam College Of Engineering ,Ernakulam   ,Kerala   
"Sree Narayana Mangalam Institute Of Management And Technology, ",Ernakulam   ,Kerala   
Sree Rama Institute Of Technology & Science ,Penuballi   ,Andhra Pradesh   
Sree Sastha Institute Of Engineering And Technology ,Tiruvallur   ,Tamil Nadu   
Sree Sowdambika College Of Engineering ,Virudunagar   ,Tamil Nadu   
Sree Vidya Niketan College Of Engineering ,Chandragiri   ,Andhra Pradesh   
Sree Visvesvaraya Institute Of Technology & Science ,Narayanpet   ,Andhra Pradesh   
Sreenivasa Institute Of Technology And Management Studies ,Cuddapah   ,Andhra Pradesh   
Sri Aravindar Engineering College ,Villupuram   ,Tamil Nadu   
Sri Balaji Chockalingam Engineering College ,Tiruvannamalai   ,Tamil Nadu   
Sri Balaji College Of Engineering & Technology ,Jaipur   ,Rajasthan   
Sri Belimatha Mahasamsthana Institute Of Technology ,Bangalore   ,Karnataka   
Sri Bhagawan Mahaveer Jain College Of Engineering ,Bangalore   ,Karnataka   
Sri Bhagwan Mahaveer Jain Educational & Cultural Society ,Raipur   ,Chhattisgarh   
Sri Buddha College Of Engg ,,Kerala   
Sri Chitra Thirunal College Of Engineering. College ,Trivandrum   ,Kerala   
Sri Chundi Ranganayakulu Engineering College ,Guntur   ,Andhra Pradesh   
Sri Dadaji Institute Of Technology & Science ,Rehmapur   ,Madhya Pradesh   
Sri Eshwar College Of Engineering ,Coimbatore   ,Tamil Nadu   
Sri G.Pulla Reddy Engineering College ,Kurnool   ,Andhra Pradesh   
Sri Ganganagar Engineering College ,,Rajasthan   
Sri Hanuman Vyayam Prasarak Mandal College Of Engineering And Technology ,Amravati   ,Maharashtra   
Sri Indu College Of Engineering And Technology ,Ibrahimpatnam   ,Andhra Pradesh   
Sri Jayachamarajendra College Of Engineering ,Mysore   ,Karnataka   
Sri Jayaram Engineering College ,Cuddalore   ,Tamil Nadu   
Sri K.S. Raju Institute Of Tech. & Science ,Moinbad   ,Andhra Pradesh   
Sri Kalahasteswara Institute Of Technology ,Chitoor   ,Andhra Pradesh   
Sri Kottam Tulasi Reddy Memorial College Of Engineering ,Itikyala   ,Andhra Pradesh   
Sri Krishna College Of Engineering And Technology ,Coimbatore   ,Tamil Nadu   
Sri Krishna Engineering College ,Kanchipuram   ,Tamil Nadu   
Sri Krishna Institute Of Technology. ,Bangalore   ,Karnataka   
Sri Krishnadevaraya Engineering College ,Anantapur   ,Andhra Pradesh   
Sri Lakshmi Ammal Engineering College ,Kanchipuram   ,Tamil Nadu   
Sri Manakula Vinayagar Engineering College ,Pondicherry   ,Pondicherry   
Sri Mittapalli College Of Engineering ,Guntur   ,Andhra Pradesh   
Sri Muthukumaran Institute Of Technology ,Chennai   ,Tamil Nadu   
Sri Nandhanam College Of Engineering & Technology ,Vellore   ,Tamil Nadu   
Sri Padmavathi College Of Engineering ,Kanchipuram   ,Tamil Nadu   
Sri Prakash College Of Engineering ,Tuni   ,Andhra Pradesh   
Sri Ram Swaroop Memorial College Of Engineering & Management ,Lucknow   ,Uttar Pradesh   
Sri Ramakrishna Engineering College ,Coimbatore   ,Tamil Nadu   
Sri Ramakrishna Institute Of Technology ,Coimbatore   ,Tamil Nadu   
Sri Ramanujar Engineering College ,Kanchipuram   ,Tamil Nadu   
Sri Revanna Siddeshwara Engineering College ,Bangalore   ,Karnataka   
Sri Sai Aditya Instt. Of Science & Tech ,Gandepalli   ,Andhra Pradesh   
Sri Sai College Of Engineering & Tech ,Pathankot   ,Punjab   
Sri Sai Institute Of Tech. & Science ,Cuddapah   ,Andhra Pradesh   
Sri Sai Madhavi Institute Of Engineering & Technology ,Mandal   ,Andhra Pradesh   
Sri Sai Ram Engineering College ,Kanchipuram   ,Tamil Nadu   
Sri Sai Ram Institute Of Technology ,Chennai   ,Tamil Nadu   
Sri Sarada Institute Of Science & Technology ,Guntur   ,Andhra Pradesh   
Sri Sarathi Institute Of Engineering & Technology ,Krishna   ,Andhra Pradesh   
Sri Satya Narayana Engineering College ,Ongole   ,Andhra Pradesh   
Sri Satya Sai College Of Engineering ,Gandhinagar   ,Madhya Pradesh   
Sri Satya Sai Institute Of Science & Technology ,Pachama   ,Madhya Pradesh   
Sri Shakthi Institute Of Engineering And Technology ,Coimbatore   ,Tamil Nadu   
"Sri Siddhartha Institute Of Technology, ",Tumkur   ,Karnataka   
Sri Sivani College Of Engineering ,Srikakulam   ,Andhra Pradesh   
Sri Sivasubramaniya Nadar College Of Engineering ,Chennai   ,Tamil Nadu   
Sri Subramanya College Of Engineering & Technology ,Palani   ,Tamil Nadu   
Sri Sukhmani Institute Of Engineering And Technology ,Patiala   ,Punjab   
Sri Sunflower College Of Engineering And Technology ,Krishna   ,Andhra Pradesh   
Sri Suresh Dada Jain College Of Engineering ,Jalgaon   ,Maharashtra   
Sri Vasavi Engineering College ,Tadepalligudem   ,Andhra Pradesh   
Sri Veera Venkata Satyanarayana Engineering College ,Ongole   ,Andhra Pradesh   
Sri Venkatesa Perumal College Of Engineering & Technology ,Chitoor   ,Andhra Pradesh   
Sri Venkateshwara College Of Engineering ,Nalgonda   ,Andhra Pradesh   
Sri Venkateswara College Of Engineering ,Kanchipuram   ,Tamil Nadu   
Sri Venkateswara College Of Engineering And Technology ,Tiruvallur   ,Tamil Nadu   
Sri Venkateswara College Of Engineering And Technology Cuddapah ,Cuddapah   ,Andhra Pradesh   
Sri Venkateswara College Of Engineering Andhra Pradesh ,Tirupati   ,Andhra Pradesh   
Sri Venkateswara College Of Engineering Chittoor ,Chitoor   ,Andhra Pradesh   
Sri Venkateswara College Of Engineering Karnataka ,Bangalore   ,Karnataka   
Sri Venkateswara Institute Of Science And Technology ,Tiruvallur   ,Tamil Nadu   
Sri Vidya College Of Engineering And Technology ,Virudunagar   ,Tamil Nadu   
Sri Vile Parle Kelavani Mandal'S College Of Engg. ,Mumbai   ,Maharashtra   
Sri Y P R College Of Engineering & Technology ,Guntur   ,Andhra Pradesh   
Sridevi Women'S Engineering College ,Rangareddy   ,Andhra Pradesh   
Srinidhi Institute Of Science And Technology ,Ghatkesar   ,Andhra Pradesh   
Srinivas Institute Of Technology ,Kannada   ,Karnataka   
Srinivas Reddy Institute Of Technology. ,Nizamabad   ,Andhra Pradesh   
Srinivasa Engineering College ,Nizamabad   ,Andhra Pradesh   
Srinivasa Institute Of Engineering & Technology ,Tiruvallur   ,Tamil Nadu   
Srinivasan Engineering College ,Perambalur   ,Tamil Nadu   
Sriram Engineering College ,Tiruvallur   ,Tamil Nadu   
Sriram Institute Of Information Technology ,Bhubaneswar   ,Orissa   
Srk Institute Of Technology ,Vijayawada   ,Andhra Pradesh   
Srr Engineering College ,Chingleput   ,Tamil Nadu   
Srr Engineering College Andhra Pradesh ,Yellandu   ,Andhra Pradesh   
Ssj Engineering College ,Rangareddy   ,Andhra Pradesh   
Ssm College Of Engineering ,Namakkal   ,Tamil Nadu   
Ssm College Of Engineering Baramulla ,,Jammu And Kashmir   
St Marys Engineering College ,Nalgonda   ,Andhra Pradesh   
St Marys Engineering College Coimbatore ,Coimbatore   ,Tamil Nadu   
St Marys Engineering College Guntur ,Guntur   ,Andhra Pradesh   
St Theresa Institute Of Engineering & Technology ,Garividi   ,Andhra Pradesh   
St. Francis Institute Of Technology Mt Poinsur ,Mumbai   ,Maharashtra   
St. Johns College Of Engineering & Technology ,Yemmiganur   ,Andhra Pradesh   
St. Joseph'S College Of Engineering & Technology ,Thanjavur   ,Tamil Nadu   
St. Joseph'S College Of Engineering & Technology Kerala ,Palai   ,Kerala   
St. Joseph'S College Of Engineering Kanchipuram ,Chennai   ,Tamil Nadu   
St. Joseph'S College Of Engineering Tamil Nadu ,Chennai   ,Tamil Nadu   
St. Mary'S College Of Engineering And Technology ,Nalgonda   ,Andhra Pradesh   
St. Peter'S Engineering College ,Medchal   ,Andhra Pradesh   
St. Peter'S Engineering College ,Chennai   ,Tamil Nadu   
St. Thomas College Of Engineering ,Calcutta   ,West Bengal   
St. Vincent Pallttion College Of Engg. & Tech ,Nagpur   ,Maharashtra   
St.Ann'S College Of Engineering & Technology ,Chirala   ,Andhra Pradesh   
St.Joseph'S College Of Engineering ,Mangalore   ,Karnataka   
St.Martin'S Engineering College ,Quthubullapur   ,Andhra Pradesh   
St.Michael College Of Engineering And Technology ,Sivagangai   ,Tamil Nadu   
St.Peter'S College Of Engineering And Technology ,Chennai   ,Tamil Nadu   
St.Soldier Management & Technical Institute ,Jalandhar   ,Punjab   
St.Xavier'S Catholic College Of Engineering ,Kanyakumari   ,Tamil Nadu   
Stani Memorial College Of Engineering And Technology ,Jaipur   ,Rajasthan   
Stanley Stephen College Of Engineering & Technology ,Kurnool   ,Andhra Pradesh   
Star Academy Of Technology & Management 
T John Institute Of Technology ,Bangalore   ,Karnataka   
T K M College Of Engineering ,Kollam   ,Kerala   
Tagore Engineering College ,Chennai   ,Tamil Nadu   
Tagore Institute Of Engineering And Technology ,Salem   ,Tamil Nadu   
Takshila Institute Of Technology Tietch ,Jabalpur   ,Madhya Pradesh   
Tamilnadu College Of Engineering ,Coimbatore   ,Tamil Nadu   
Tamilnadu School Of Architecture ,Coimbatore   ,Tamil Nadu   
Tamizhan College Of Engineering & Technology ,Kanyakumari   ,Tamil Nadu   
Tapaswini Institute Of Information Technology ,Rourkela   ,Orissa   
Tapasya Shiksha Samiti ,Bhopal   ,Madhya Pradesh   
Tech. & Medical Education Society'S J. T. Mahajan College Of Engineering ,Jalgaon   ,Maharashtra   
Techno India College Of Technology ,Calcutta   ,West Bengal   
Technocrats Institute Of Technology ,Bhopal   ,Madhya Pradesh   
Technological Institute Of Textile & Science ,,Haryana   
Technology Education & Research Institute ,,Haryana   
Teegala Krishna Reddy Engineering College ,Rangareddy   ,Andhra Pradesh   
Tejaa Shakthi Institute Of Technology For Women ,Coimbatore   ,Tamil Nadu   
Templecity Institute Of Technology & Engineering ,,Orissa   
Tenali Engineering College ,Guntur   ,Andhra Pradesh   
Terna Public Charitable Trust'S Engineering College ,Osmanabad   ,Maharashtra   
Thadomal Shahani Engineering College ,Mumbai   ,Maharashtra   
Thakral College Of Technology ,Bhopal   ,Madhya Pradesh   
Thakur College Of Engineering & Technology ,Mumbai   ,Maharashtra   
Thandra Paparaya Institute Of Science & Technology ,Bobbili   ,Andhra Pradesh   
Thangal Kunju Musaliar Institute Of Technology ,Ezhukone   ,Kerala   
Thangavelu Engineering College ,Chennai   ,Tamil Nadu   
Thanthai Periyar Government Institute Of Technology ,Vellore   ,Tamil Nadu   
"The Bhaskar Pandurang Hivale Education Society'S Institute Of Management Studies, Career Development & Research ",,Maharashtra   
The Institute Of Engineering And Emerging Technologies ,Sunder Nagar   ,Himachal Pradesh   
The Kavery Engineering College ,Salem   ,Tamil Nadu   
The National Institute Of Engineering ,Mysore   ,Karnataka   
The New Royal College Of Engineering & Technology ,Chennai   ,Tamil Nadu   
The Oxford College Of Engineering ,Bangalore   ,Karnataka   
The Rajaas Engineering College ,Tirunelveli   ,Tamil Nadu   
The Techno School ,Bhubaneswar   ,Orissa   
The Younis Sultan College Of Engineering ,Chevella   ,Andhra Pradesh   
Theni Kammavar Sangam College Of Technology ,Theni   ,Tamil Nadu   
Thiagarajar College Of Engineering ,Madurai   ,Tamil Nadu   
Thirumalai Engineering College ,Kanchipuram   ,Tamil Nadu   
Thiruvalluvar College Of Engineering And Technology ,Tiruvannamalai   ,Tamil Nadu   
Tirthankar Anglo Vedic Institute Of Technical Education ,,Madhya Pradesh   
Tirumala Engineering College ,Keesara   ,Andhra Pradesh   
Tj Institute Of Technology ,Chennai   ,Tamil Nadu   
Tkr College Of Engineering And Technology ,Hyderabad   ,Andhra Pradesh   
Toc H Institute Of Science And Technology ,Ernakulam   ,Kerala   
Tontadarya College Of Engineering ,Gadag   ,Karnataka   
Travancore Engineering College ,Kollam   ,Kerala   
Trichy Engineering College ,Trichy   ,Tamil Nadu   
Trident Academy Of Technology ,Bhubaneswar   ,Orissa   
Tripura Institute Of Technology ,Agartala   ,Tripura   
Trr Engineering College ,Patancheru   ,Andhra Pradesh   
Truba College Of Engineering & Technology ,Indore   ,Madhya Pradesh   
Tula'S Institute ,Dehradun   ,Uttaranchal   
U. V. Patel Engineering College,Mehsana  ,Gujarat  
Udaya School Of Engineering,Kanyakumari  ,Tamil Nadu  
Udaynath College Of Science & Technology,Kanchipuram  ,Tamil Nadu  
Udaynath College Of Science And Technology,,Orissa  
Ujjain Engineering College,Ujjain  ,Madhya Pradesh  
Umrer College Of Engineering,,Maharashtra  
United College Of Engineering & Research Noida,Noida  ,Uttar Pradesh  
United College Of Engineering & Research.,Allahabad  ,Uttar Pradesh  
United Institute Of Technology,Allahabad  ,Uttar Pradesh  
University College Of Engineering Kerala,,Kerala  
University College Of Engineering Orissa,Sambalpur  ,Orissa  
University College Of Engineering Osmania,Hyderabad  ,Andhra Pradesh  
"University College Of Engineering, Osmania",Hyderabad  ,Andhra Pradesh  
University Institute Of Engineering And Technology,Chandigarh  ,Chandigarh  
University Institute Of Technology,,Chhattisgarh  
University Institute Of Technology Bhopal,,Madhya Pradesh  
University Institute Of Technology Madhya Pradesh,,Madhya Pradesh  
University Visveshwaraya College Of Engineering,,Karnataka  
Uttam Devi Mohanlal College Of Engineering,Jaipur  ,Rajasthan  
Uttaranchal Institute Of Technology,Dehradun  ,Uttaranchal  
V B Women College,,Jammu And Kashmir  
V K V Government Degree College,Kothapeta  ,Andhra Pradesh  
V N S B Ltd Arts And Commerce College,,Gujarat  
V R College,Nellore  ,Andhra Pradesh  
V R S Degree College,Cuddapah  ,Andhra Pradesh  
V R S Y R N College,Chirala  ,Andhra Pradesh  
V S J College,,Bihar  
V S M College,Ramachandrapuram  ,Andhra Pradesh  
V S Patel College Arts Science,,Gujarat  
V S R N V R College,Guntur  ,Andhra Pradesh  
V T Choksi Sarvjanik College Education,,Gujarat  
V T J M K T R Degree College,Magalagiri  ,Andhra Pradesh  
V V M Degree College,Ongole  ,Andhra Pradesh  
V. R. Siddhartha Engineering College,Vijayawada  ,Andhra Pradesh  
V. Ramakrishna Polytechnic College,Kanyakumari  ,Tamil Nadu  
V. Tech Institute Of Integrated Technology,,Uttar Pradesh  
V. Venkatasamy Naidu College Of Physical Edn,,Tamil Nadu  
V.B. College Of Education,,Haryana  
V.B. Institute Of Teacher Training & Reearch,,Haryana  
V.C. College Of Education,,Andhra Pradesh  
V.C. Institute Of Teacher Education,,Andhra Pradesh  
V.C.R. College Of Education,,Andhra Pradesh  
"V.C.R. College, Chittoor",Chitoor  ,Andhra Pradesh  
V.C.R. Institute Of Computer Science,Chitoor  ,Andhra Pradesh  
V.C.R. Institute Of Teacher Training,,Andhra Pradesh  
V.D. Institute Of Technology,,Delhi  
V.D. Siddhartha College Of Law,Vijayawada  ,Andhra Pradesh  
V.E.T. College Of Education,,Tamil Nadu  
V.G.P School Of Management,Chennai  ,Tamil Nadu  
V.H.N.S.N. College,Virudunagar  ,Tamil Nadu  
V.I.P.S. Degree College,Visakhapatnam  ,Andhra Pradesh  
V.J.P. Teacher Training Institute,,Tamil Nadu  
V.K. Jain College Of Education,,Uttar Pradesh  
V.K. Tyagi Shikshak Prashikshan Mahavidyala,,Rajasthan  
V.K. Vora College Of Education,,Gujarat  
V.K.D.V. Satyanarayana Raju Degree College,Khammam  ,Andhra Pradesh  
V.K.R. Degree College,Krishna  ,Andhra Pradesh  
V.L.B. Janaki Ammal College Of Arts & Science,Coimbatore  ,Tamil Nadu  
V.L.B. Janaki Ammal Polytechnic College,Chennai  ,Tamil Nadu  
V.L.B.Janaki Ammal College Of Engineering And Technology,Coimbatore  ,Tamil Nadu  
V.L.S. Eduacation Trust V L S Teacher Training,,Karnataka  
V.M. Lingaiah College Of Education,,Karnataka  
V.M. Patel Institute Of Management,Mehsana  ,Gujarat  
V.M. Salgaocar College Of Law,Panaji  ,Goa  
V.M.C. Mahila Vidyapeeth Degree College For Women,Visakhapatnam  ,Andhra Pradesh  
V.M.S.R. Vastrad Arts Science And Vijanya Mahantosh Commerce Col,,Karnataka  
V.M.V. Commercej.M.T. Arts And J.G. Patel College Of Science,Nagpur  ,Maharashtra  
V.N. College Patharia Jaat,,Madhya Pradesh  
V.N. Krishnasamy Naidu College Of Arts & Science For Women,Coimbatore  ,Tamil Nadu  
V.N.S College Of Phy Edu & Management Studies,,Madhya Pradesh  
V.N.S. Institute Of Management,Bhopal  ,Madhya Pradesh  
V.N.T. Teacher Training Institute,,Tamil Nadu  
V.O. Chidambaram College,Tuticorin  ,Tamil Nadu  
V.O. Chidambaram College Of Education,,Tamil Nadu  
V.O.C. College Of Education,Tuticorin  ,Tamil Nadu  
"V.P Chest Institute Of Medical Sciences,Delhi",Delhi  ,Delhi  
V.P. Muthaiah P Meenakshi Ammal College Of Edn (W),,Tamil Nadu  
V.P. Muthaiah Pillai Meenakshi Ammal College For Women,Virudunagar  ,Tamil Nadu  
V.P. Muthaiah Pillai Meenakshi Ammal Teacher Training,,Tamil Nadu  
V.P.Mandals Shri S.R.N. Arts & Sh. Mbs Commerce College,,Karnataka  
V.P.M'S Dr. V.N. Bedekar Institute Of Managenet Studies,Thane  ,Maharashtra  
V.P.N. Teachers Training Institute,,Tamil Nadu  
V.P.R. College Of Education,,Andhra Pradesh  
V.P.R. College Of Elementry Teacher Education,,Andhra Pradesh  
V.P.S.C.S.B.Artsshamrp Science And Samitis Commerce College,,Karnataka  
V.R. Arts & Commerce College,,Madhya Pradesh  
V.R. College Of Engineering,,Maharashtra  
V.R. Law College,Nellore  ,Andhra Pradesh  
V.R. Teachers Training Institute,,Karnataka  
V.R.K. College Of Computer Science,Kurnool  ,Andhra Pradesh  
"V.R.K. Degree College, Mahabubnagar",Jadcherla  ,Andhra Pradesh  
V.R.N College Of Computer Science Management,Tirupati  ,Andhra Pradesh  
V.R.S. College Of Engineering And Technology,Villupuram  ,Tamil Nadu  
V.R.V.R. Sudarshan D Ed College,,Karnataka  
V.S Lakshmi Institute Of Computer Application & Management Studies,Kakinada  ,Andhra Pradesh  
V.S. Isaac College Of Education,,Tamil Nadu  
V.S. Lakshmi Degree College For Women,Kakinada  ,Andhra Pradesh  
V.S. Reddy Rural Degree College,East Godavari  ,Andhra Pradesh  
V.S. Sivalingam Chettiar Government Arts College,Sivagangai  ,Tamil Nadu  
V.S. Teacher Training Institute,,Tamil Nadu  
V.S. Vellaichamy Nadar Polytechnic College,Coimbatore  ,Tamil Nadu  
"V.S.K. Degree College, Bhimavaram",Bhimavaram  ,Andhra Pradesh  
V.S.K. Teacher Training Institute,,Tamil Nadu  
V.S.M. College Of Physical Education,,Karnataka  
V.S.R & A.M. Degree College,Prakasam  ,Andhra Pradesh  
"V.S.R. & N.V.R. College, Tenali",Tenali  ,Andhra Pradesh  
V.S.R. Institute Of Computer Education,Eluru  ,Andhra Pradesh  
V.S.S. College Of Education,,Himachal Pradesh  
V.S.S. Medical College,Sambalpur  ,Orissa  
V.S.S.D. College,Kanpur  ,Uttar Pradesh  
V.T. Choksi Sarvajnik College Of Education,,Gujarat  
V.T. Choksi Sarvajnik Law College,Surat  ,Gujarat  
V.V. College,,Uttar Pradesh  
V.V. Mandals Arts Science And Commerce College,,Maharashtra  
V.V. Sangha College Of Education,,Karnataka  
Walchand College Of Engineering ,Sangli   ,Maharashtra   
Walchand Institute Of Technology ,,Maharashtra   
Watumull Institute Of Electronic Engineering And Computer Technology ,Mumbai   ,Maharashtra   
World College Of Technology And Management ,Gurgaon   ,Haryana   
World Institute Of Technology ,Gurgaon   ,Haryana   
Xavier Institute Of Development Action & Studies,Jabalpur  ,Madhya Pradesh  
Xavier Institute Of Engineering,Mumbai  ,Maharashtra  
Xavier Institute Of Management & Enterpreneurship,Bangalore  ,Karnataka  
Xavier Institute Of Management & Research,Mumbai  ,Maharashtra  
"Xavier Institute Of Management, Bhubaneswar",Bhubaneswar  ,Orissa  
"Xavier Labour Relations Institute, Jamshedpur",Jamshedpur  ,Jharkhand  
Xt Xaviers College Education,,Bihar  
Y A Govt College For Women,Chirala  ,Andhra Pradesh  
Y V Rao Siddhartha College Education,Vijayawada,Andhra Pradesh  
Y. Subbi Reddy Memorial College,Cuddapah  ,Andhra Pradesh  
Y.C. Institute Of Science,,Maharashtra  
Y.D.D.Government First Grade College,,Karnataka  
Y.K. College,,Manipur  
Y.M.C.A. College Of Physical Education,Chennai  ,Tamil Nadu  
Y.M.S. Degree College,,Uttar Pradesh  
Y.M.T. College Of Management,Mumbai  ,Maharashtra  
Y.P.R. College Of Education,,Andhra Pradesh  
Y.P.R. Degree College,Siddipet  ,Andhra Pradesh  
Y.S.L. College Of Education,,Uttar Pradesh  
Y.S.R. & B.S. Degree College,Tadepalligudem  ,Andhra Pradesh  
Yadaiah College Of Education,,Andhra Pradesh  
Yadav Deshmukh V.D. Arts & Commerce College,,Maharashtra  
Yadava College,Madurai  ,Tamil Nadu  
Yadavrao Tasgaonkar Institute Of Business Management,Raigad  ,Maharashtra  
Yadavrao Tasgaonkar Institute Of Engineering,Karjat  ,Maharashtra  
Yadunandan College,,Bihar  
Yaduvanshi College Of Education,,Haryana  
Yaduvanshi College Of Education,,Rajasthan  
Yagna Degree College,Armoor  ,Andhra Pradesh  
Yagyavalkya Institute Of Technology Yit,Sitapura  ,Rajasthan  
Yalamarthy Institute Of Computer Science,Visakhapatnam  ,Andhra Pradesh  
Yalmarty College Of Education,,Andhra Pradesh  
Yamakanamardi Vidyavardhak Sangh D Ed College,,Karnataka  
Yanam School Of Education,,Pondicherry  
Yanamadala Kamala College Of Education,,Andhra Pradesh  
Yaseen Hindi Pandit Training College,,Andhra Pradesh  
Yash College Of Education,,Haryana  
Yash College Of Education,,Madhya Pradesh  
Yash Shikshan Sansthan And Gramin Vikas Samiti,,Madhya Pradesh  
Yashawantrao Chavan College,,Maharashtra  
Yashoda Nandan Haribansh Mahavidyalaya,,Uttar Pradesh  
Yashogatha Shikshan Prasarak Mandal,,Maharashtra  
Yashwanrao Chavan College Of Education,,Maharashtra  
Yashwant D Ed College,,Maharashtra  
Yashwant Junior College Of Education,,Maharashtra  
Yashwant Mahavidyalaya,Nanded  ,Maharashtra  
Yashwant Rao Chauhan Adhyapak Vidyalaya,,Maharashtra  
Yashwant Rao Chavan Arts And Commerce College,,Maharashtra  
Yashwant Rao Chavan College Of Arts Commerce & Science,,Maharashtra  
Yashwant Rao Chavan College Of Physcial Education,,Maharashtra  
Yashwant Rao Chavan College Of Science,,Maharashtra  
Yashwant Rao Chavan Law College,Karad  ,Maharashtra  
Yashwant Rao Chavan Maharashtra Open University,,Maharashtra  
Yashwant Rao Chavan Mahavidyalaya,,Maharashtra  
Yashwant Rao Chavan Warana Mahavidyalaya,,Maharashtra  
Yashwant Rao Mohite Institute Of Management,Satara  ,Maharashtra  
Yashwant Shikshan Shastra Mahavidyalaya,,Maharashtra  
Yasin Meo College,,Haryana  
Yasmeen B Ed College,,Andhra Pradesh  
Yasmeen Institute Of Elementry Teacher Education,,Andhra Pradesh  
Yasodha Teacher Training Institute,,Tamil Nadu  
Yellamma Dasappa Institute Of Technology,Bangalore  ,Karnataka  
"Yenepoya Medical College, Mangalore",Mangalore  ,Karnataka  
Yerneni Venkata Nageswara Rao Govt Degree College,Krishna  ,Andhra Pradesh  
Yerra Krishnamurthy College Of Education,,Andhra Pradesh  
Yeshwant Adhyapak Vidyalaya,,Maharashtra  
Yeshwant College Of Physical Education,,Maharashtra  
Yeshwant Mahavidyalaya,Wardha  ,Maharashtra  
Yeshwantrao Chavan College Of Engineering,Nagpur  ,Maharashtra  
Ymca College Of Physical Education,,Karnataka  
Ymca College Of Physical Education,,Tamil Nadu  
Ymca Institute Of Engineering & Technology,Faridabad  ,Haryana  
Yogada Satsangha Palpara Mahavidyalaya,,West Bengal  
Yogeshwar Shiksha Mahavidyalaya,,Madhya Pradesh  
Yogeshwari Science Mahavidyalaya,,Maharashtra  
Yogi Nath Degree College,,Uttar Pradesh  
Yogi Vemana University Kadapa,Cuddapah  ,Andhra Pradesh  
Yogiji Maharaj Mahavidyalaya Mahila Arts Commerce College,,Gujarat  
Yoginath Degree College,,Uttar Pradesh  
Yogoda Satsanga Palpara Mahavidyalaya,,West Bengal  
Younus College Of Engineering & Technology,Kollam  ,Kerala  
Yps Memorial College Of Education,,Haryana  
Yugantar Education Society Tirpude College Of Social Work,Nagpur  ,Maharashtra  
Yugantar Institute Of Technology & Management,Raipur  ,Chhattisgarh  
Yuva Vyavasaik Shikshan Mahavidyalaya,,Madhya Pradesh  
Yuva Vyavasaik Shikshan Sansthan,,Madhya Pradesh  
Yuva Vyavsaik Shiksha Mahavidyalaya Run By Yuva,,Madhya Pradesh  
Yuvak Vikas Jr College Of Education,,Maharashtra  
Yuvak Vikas Shikshan Prasark Mandals,,Maharashtra  
Yuvaraj Dutt Pg College,,Uttar Pradesh  
Yuvarajas College,,Karnataka  
Yuvashakti Sarvjanik Shikshan Sanstha'S College Of Phy Edn,,Maharashtra  
Yuvashakti Sharirik Shikshan Mahavidyalaya,,Maharashtra  
Yuvraj Dutt (Pg) College,,Uttar Pradesh  
Yuvraj Subhaghsinhji Arts And Sri K S Commerce College,,Gujarat  
Z A Islamic College ,,Bihar   
Zainab Memorial B Ed Centre ,,Kerala   
Zakir Husain College ,Delhi   ,Delhi   
Zakir Husain College (Evening) ,Delhi   ,Delhi   
Zakir Husain College Of Engineering & Technology. ,Aligarh   ,Uttar Pradesh   
Zamorins Guruvayurappan College ,Kozhikode   ,Kerala   
Zeenath & Hammu Bi Memorial Inst Of Ele Tchr Ed ,,Andhra Pradesh   
Zion College Of Physical Education ,,Andhra Pradesh   
Zulekha College ,,Maharashtra   
Zunheboto College ,,Nagaland   
School,Chennai,Tamil Nadu  
Other_College,City,State
IITM,Chennai,Tamil Nadu
IITB,Mumbai ,Maharastra
IITK,Kanpur,Uttar pradesh`.replace("\"","").split("\n")

exports.content = mailcontent;
exports.list = list;

