require('dotenv').config();


const express    = require("express");
const app        = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const session    = require('express-session');
const flash      = require('connect-flash');


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

app.get("/productGallery", function(req, res) {
  res.render("productGallery");
});

app.get("/serviceGallery", function(req, res){
  res.render("serviceGallery");
});

app.get("/about", function(req, res){
  res.render("about");
});

app.get("/contact", function(req, res){
  res.render("contact");
});
//error page
app.get("*", function(req,res){
  res.render("404");
});

//products pages

app.get("/productGallery/products/:brochures", function(Req,res){
  res.send("PRODUCTS PAGE!!");
});


app.get("/products", function(req, res){
  var data ={product: "Brochures", image: "https://s3.us-east-2.amazonaws.com/midwestspray/spraymanv2.jpg", 
  paragraphOne: `Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, <strong>with</strong> the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.`,
  paragraphTwo: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphThree: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it.",
  paragraphFour: "Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, with the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.",
  paragraphFive: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphSix: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it."
  };
  res.render("products", {data: data});
});

app.post('/send', function(req, res){
  console.log(req.body);
});



app.listen(process.env.PORT, process.env.IP, function(){
console.log("The app has started!");
});