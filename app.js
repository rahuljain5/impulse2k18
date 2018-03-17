//app.js
const models = require('./models');
var express = require("express");
const app = express();
const bodyParser = require("body-parser");
const content = require("./utils/constant.js").content;
const mailer = require("./services/mailer.js").sendmail;
var list = require("./utils/constant.js").list;
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
const cleanup = (s) =>{
    	let sarr = s.split(",");
 	sarr = sarr.map(s=>s.trim());
	sarr = sarr.map(s=>s.replace(/\"/g,""))
	let temp = "";
	for(item of sarr)
	{
		if(item.length >1)
		temp +=","+item;
	}
	return temp.substr(1);;
};
const abbsearch = (s,query)=>{
	let clgNamearr = s.split(",")[0].split(" ");
	clgNamearr = clgNamearr.map(s=>s.charAt(0));
	let apx = "";
	for(i of clgNamearr)
	{
		if(i.match(/^[a-z]+$/i))
		   apx += i
	}
	console.warn("Apx:"+apx);
	return apx.startsWith(query.toUpperCase());
// 	let filterarr = clgNamearr.filter(s => s.startsWith(query));
// 	console.warn("Length:"+filterarr);
// 	if(filterarr.length >0)
// 	return true;
// 	else
// 		return false;

}
const getcollege = (state,callback)=>{
	state.q=	state.q.toLowerCase();
	list = list.map(cleanup);
	callback(list.filter(s => (s.toLowerCase().startsWith(state.q)||abbsearch(s,state.q))));
}
const deleterec = (state, callback) => {
  models.User.destroy({
  where: {
    id: state.id
  }
}).then((val) => {   
		if(val)
	  callback("DELETION SUCCESSFUL")
		else
		 callback("NO RECORD FOUND")
  }).catch((err) => {
    callback("DELETION FAILED")
  })
}

models.sequelize.sync();
app.listen(process.env.PORT, () => console.log("Server Started at " + process.env.PORT));

