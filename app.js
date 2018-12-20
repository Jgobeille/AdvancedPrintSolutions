require('dotenv').config();


const express    = require("express");
const app        = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const session    = require('express-session');
const flash      = require('connect-flash');
const fs = require('fs');





//EJS view engine middleware
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.set('views',__dirname+'/views');




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
// app.get("*", function(req,res){
//   res.render("404");
// });



//products pages
app.get("/productGallery/accessories", function(req, res){
  var data = {product: "BUSINESS CARDS", image: "https://s3.us-east-2.amazonaws.com/midwestspray/spraymanv2.jpg", 
  paragraphOne: `Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, <strong>with</strong> the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.`,
  paragraphTwo: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphThree: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it.",
  paragraphFour: "Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, with the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.",
  paragraphFive: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphSix: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it."
  };
  res.render("products/accessories", {data: data});
});

app.get("/productGallery/apparel", function(req, res){
  var data = {product: "BUSINESS CARDS", image: "https://s3.us-east-2.amazonaws.com/midwestspray/spraymanv2.jpg", 
  paragraphOne: `Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, <strong>with</strong> the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.`,
  paragraphTwo: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphThree: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it.",
  paragraphFour: "Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, with the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.",
  paragraphFive: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphSix: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it."
  };
  res.render("products/apparel", {data: data});
});

app.get("/productGallery/brochures", function(req, res){
  var data = {product: "BROCHURES", image: "https://s3.us-east-2.amazonaws.com/midwestspray/spraymanv2.jpg", 
  paragraphOne: `Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, <strong>with</strong> the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.`,
  paragraphTwo: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphThree: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it.",
  paragraphFour: "Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, with the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.",
  paragraphFive: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphSix: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it."
  };
  res.render("products/brochures", {data: data});
});

app.get("/productGallery/business-cards", function(req, res){
  var data = {product: "BUSINESS CARDS", image: "https://s3.us-east-2.amazonaws.com/midwestspray/spraymanv2.jpg", 
  paragraphOne: `Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, <strong>with</strong> the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.`,
  paragraphTwo: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphThree: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it.",
  paragraphFour: "Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, with the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.",
  paragraphFive: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphSix: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it."
  };
  res.render("products/business-cards", {data: data});
});

app.get("/productGallery/calendars", function(req, res){
  var data = {product: "BUSINESS CARDS", image: "https://s3.us-east-2.amazonaws.com/midwestspray/spraymanv2.jpg", 
  paragraphOne: `Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, <strong>with</strong> the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.`,
  paragraphTwo: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphThree: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it.",
  paragraphFour: "Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, with the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.",
  paragraphFive: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphSix: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it."
  };
  res.render("products/calendars", {data: data});
});

app.get("/productGallery/clothing-accessories", function(req, res){
  var data = {product: "BUSINESS CARDS", image: "https://s3.us-east-2.amazonaws.com/midwestspray/spraymanv2.jpg", 
  paragraphOne: `Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, <strong>with</strong> the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.`,
  paragraphTwo: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphThree: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it.",
  paragraphFour: "Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, with the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.",
  paragraphFive: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphSix: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it."
  };
  res.render("products/clothing-accessories", {data: data});
});

app.get("/productGallery/drawstring-bag", function(req, res){
  var data = {product: "BUSINESS CARDS", image: "https://s3.us-east-2.amazonaws.com/midwestspray/spraymanv2.jpg", 
  paragraphOne: `Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, <strong>with</strong> the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.`,
  paragraphTwo: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphThree: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it.",
  paragraphFour: "Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, with the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.",
  paragraphFive: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphSix: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it."
  };
  res.render("products/drawstring-bag", {data: data});
});

app.get("/productGallery/gift-set", function(req, res){
  var data = {product: "BUSINESS CARDS", image: "https://s3.us-east-2.amazonaws.com/midwestspray/spraymanv2.jpg", 
  paragraphOne: `Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, <strong>with</strong> the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.`,
  paragraphTwo: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphThree: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it.",
  paragraphFour: "Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, with the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.",
  paragraphFive: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphSix: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it."
  };
  res.render("products/gift-set", {data: data});
});

app.get("/productGallery/hats", function(req, res){
  var data = {product: "BUSINESS CARDS", image: "https://s3.us-east-2.amazonaws.com/midwestspray/spraymanv2.jpg", 
  paragraphOne: `Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, <strong>with</strong> the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.`,
  paragraphTwo: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphThree: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it.",
  paragraphFour: "Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, with the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.",
  paragraphFive: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphSix: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it."
  };
  res.render("products/hats", {data: data});
});

app.get("/productGallery/magnet-stickers", function(req, res){
  var data = {product: "BUSINESS CARDS", image: "https://s3.us-east-2.amazonaws.com/midwestspray/spraymanv2.jpg", 
  paragraphOne: `Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, <strong>with</strong> the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.`,
  paragraphTwo: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphThree: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it.",
  paragraphFour: "Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, with the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.",
  paragraphFive: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphSix: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it."
  };
  res.render("products/magnet-stickers", {data: data});
});

app.get("/productGallery/mugs", function(req, res){
  var data = {product: "BUSINESS CARDS", image: "https://s3.us-east-2.amazonaws.com/midwestspray/spraymanv2.jpg", 
  paragraphOne: `Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, <strong>with</strong> the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.`,
  paragraphTwo: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphThree: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it.",
  paragraphFour: "Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, with the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.",
  paragraphFive: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphSix: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it."
  };
  res.render("products/mugs", {data: data});
});

app.get("/productGallery/clothing-accessories", function(req, res){
  var data = {product: "BUSINESS CARDS", image: "https://s3.us-east-2.amazonaws.com/midwestspray/spraymanv2.jpg", 
  paragraphOne: `Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, <strong>with</strong> the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.`,
  paragraphTwo: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphThree: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it.",
  paragraphFour: "Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, with the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.",
  paragraphFive: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphSix: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it."
  };
  res.render("products/clothing-accessories", {data: data});
});








//services Pages
app.get("/serviceGallery/something", function(req, res){
  var data = {product: "SOMETHING", image: "https://s3.us-east-2.amazonaws.com/midwestspray/spraymanv2.jpg", 
  paragraphOne: `Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, <strong>with</strong> the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.`,
  paragraphTwo: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphThree: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it.",
  paragraphFour: "Lisa, vampires are make-believe, like elves, gremlins, and Eskimos. I'm going to the back seat of my car, with the woman I love, and I won't be back for ten minutes! …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.",
  paragraphFive: "Kids, kids. I'm not going to die. That only happens to bad people. Mrs. Krabappel and Principal Skinner were in the closet making babies and I saw one of the babies and then the baby looked at me. Fire can be our friend; whether it's toasting marshmallows or raining down on Charlie.",
  paragraphSix: "This is the greatest case of false advertising I've seen since I sued the movie \"The Never Ending Story.\" Shoplifting is a victimless crime.</strong> <em> Like punching someone in the dark.</em> No children have ever meddled with the Republican Party and lived to tell about it."
  };
  res.render("services/something", {data: data});
});





//Nodemailer
app.post('/send', function(req, res){
  let output = `
  <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
        <li> First Name: ${req.body.firstName}</li>
        <li> Last Name: ${req.body.lastName}</li>
        <li> Address: ${req.body.address}</li>
        <li> Phone Number: ${req.body.phoneNumber} </li>
        <li> City: ${req.body.city}</li>
        <li> State: ${req.body.state}</li>
        <li> Zip Code: ${req.body.zipCode}</li>
        <li> Email: ${req.body.email}</li>
        <li> Attached File 1: ${req.body.attachFile1}</li>
        <li> Attach FIle 2: ${req.body.attachFile2}</li>
        
    </ul>
    <h3> Message:</h3>
    <p> ${req.body.message}</p>
`;
console.log(req.body)
    ;
    



// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'mail.cincytechblog.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "midwestspray@cincytechblog.com", // generated ethereal user
            pass: "HAl0FreaK12" // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
});

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Nodemailer Contact" <midwestspray@cincytechblog.com></br> Embedded image: <img src="cid:batman"/>', // sender address
        to: 'midwestspray@cincytechblog.com', // list of receivers
        subject: 'New Request', // Subject line
        text: 'You have a new request', // plain text body
        html: output, // html body
    //     attachments: [{
    //     filename: 'batman.jpeg',
    //     content: fs.createReadStream(req.body.attachFile1.path),
    //     cid: 'batman' //same cid value as in the html img src
    // }]
        
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
req.flash('success', 'Thank you for your inquiry! We will contact you shortly!');        
res.redirect("contact");
    });


});
app.listen(process.env.PORT, process.env.IP, function(){
console.log("The app has started!");
});