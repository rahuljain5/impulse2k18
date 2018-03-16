//app.js
// const models = require('./models');
var express = require("express");
const app = express();
const bodyParser = require("body-parser");
const content = require("./utils/constant.js").content;
const mailer = require("./services/mailer.js").sendmail;
const list = require("./utils/constant.js").list;
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.all("/",function(req,res){
	res.send("UP");
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "access-control-allow-origin");
  next();
 });

app.get("/college",function(req,res){
	req.body.q=req.query.q;
	getcollege(req.body,(val)=>{
		res.send(val)
	})
});
app.post("/register", function(req, res) {
    register(req.body, (val) => {
    res.send(val);
  });
});

app.delete("/:id",function(req,res){
req.body.id = req.params.id;
deleterec(req.body,(val) =>{
	res.send(val);
})
});
const register = (state, callback) => {
  models.User.create(state).then((val) => {
	  var mailcontent = content.replace("@@@@",state.name);
	  mailcontent = mailcontent.replace("%%%%",state.eventName);
	mailer(state.email,null,"Registration Successfull",mailcontent);
    callback("REGISTRATION SUCCESSFUL")
  }).catch((err) => {
    callback("REGISTRATION FAILED")
  })
}
const getcollege = (state,callback)=>{
	state.q=	state.q.toLowerCase();
	callback(list.filter(s => (s.toLowerCase().includes(state.q) && s.includes("Bangalore"))));
}
const deleterec = (state, callback) => {
  models.User.destroy({
  where: {
    id: state.id
  }
}).then((val) => {   
		console.log("VAL:"+val);
		if(val)
	  callback("DELETION SUCCESSFUL")
		else
		 callback("DELETION FAILED")
  }).catch((err) => {
    callback("DELETION FAILED")
  })
}

models.sequelize.sync();
app.listen(process.env.PORT, () => console.log("Server Started at " + process.env.PORT));

