//app.js
const models = require('./models');
var express = require("express");
const app = express();
const bodyParser = require("body-parser");
const content = require("./utils/constant.js").content;
const mailer = require("./services/mailer.js").sendmail;
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.get("/",function(req,res){
	res.send("UP");
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "access-control-allow-origin");
  next();
 });
app.post("/register", function(req, res) {
    register(req.body, (val) => {
    res.send(val);
  });
})
app.delete("/:id",function(req,res){
req.body.id = req.params.id;
deleterec(req.body,(val) =>{
	res.send(val);
})
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
const deleterec = (state, callback) => {
  if(state.id){	
  models.User.destroy({
  where: {
    id: state.id;
  }
}).then((val) => {    
	  callback("DELETION SUCCESSFUL")
  }).catch((err) => {
    callback("DELETION FAILED")
  })
  }
else{
	   callback("PASS A ID")
}
}

models.sequelize.sync();
 app.listen(process.env.PORT, () => console.log("Server Started at " + process.env.PORT));

