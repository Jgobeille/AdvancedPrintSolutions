require('dotenv').config();


const express    = require("express");
const app        = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var session    = require('express-session');
var flash = require('connect-flash');


//EJS view engine middleware
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


//express-session middleware
app.use(session({
  secret: 'Bella',
  resave: true,
  saveUninitialized: true,
}));


//Express session Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

//flash messages
app.use(flash());


//Routing for pages
app.get("/", function(req,res) {
    res.render("home");
});

app.get("/products", function(req, res) {
  res.render("products");
});

app.get("/services", function(req, res){
  res.render("services");
});

app.get("/about", function(req, res){
  res.render("about");
});

app.get("/contact", function(req, res){
  res.render("contact");
});




app.listen(process.env.PORT, process.env.IP, function(){
console.log("The app has started!");
});