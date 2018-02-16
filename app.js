//app.js
const models = require('./models');
var express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.get("/",function(req,res){
	res.send("UP");
});
app.post("/register", function(req, res) {
    register(req.body, (val) => {
    res.send(val);
  });
})
const register = (state, callback) => {
	console.log(state);
  models.User.create(state).then((val) => {
    callback("REGISTRATION SUCCESSFUL")
  }).catch((err) => {
    callback("REGISTRATION FAILED")
  })
}

models.sequelize.sync();
 app.listen(process.env.PORT, () => console.log("Server Started at " + process.env.PORT));

