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
// error page
// app.get("", function(req,res){
//   res.render("404");
// });

const tag = {tagLine: "Ready for a quote? send us a message and we will get back to you with a quote as soon as we can!"};

//products pages
app.get("/productGallery/accessories", function(req, res){
  var data = {product: "ACCESSORIES", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/Accessories-min.jpg"};
  
  res.render("products/accessories", {data: data ,tag: tag});
});

app.get("/productGallery/apparel", function(req, res){
  var data = {product: "APPAREL", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/apparel-min.jpg", 
  };
  res.render("products/apparel", {data: data ,tag: tag});
});

app.get("/productGallery/brochures", function(req, res){
  var data = {product: "BROCHURES", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/brochures.jpg", 
  };
  res.render("products/brochures", {data: data ,tag: tag});
});

app.get("/productGallery/business-cards", function(req, res){
  var data = {product: "BUSINESS CARDS", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/business-cards-min.jpg", 

  };
  res.render("products/business-cards", {data: data ,tag: tag});
});

app.get("/productGallery/calendars", function(req, res){
  var data = {product: "CALENDARS", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/MAGNET-HOUSE_group_a-min.jpg", 
  };
  res.render("products/calendars", {data: data ,tag: tag});
});

app.get("/productGallery/clothing-accessories", function(req, res){
  var data = {product: "CLOTHING ACCESSORIES", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/uncompressed+files/Scarf.jpg", 
  };
  res.render("products/clothing-accessories", {data: data ,tag: tag});
});

app.get("/productGallery/bags", function(req, res){
  var data = {product: "BAGS", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/backpacks-min.jpg", 
  };
  res.render("products/bags", {data: data ,tag: tag});
});

app.get("/productGallery/gift-set", function(req, res){
  var data = {product: "GIFT SET", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/gift+set-min.jpg"
  };
  res.render("products/gift-set", {data: data ,tag: tag});
});

app.get("/productGallery/hats", function(req, res){
  var data = {product: "HATS", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/Hat-min.jpg"
  };
  res.render("products/hats", {data: data ,tag: tag});
});

app.get("/productGallery/magnets-stickers", function(req, res){
  var data = {product: "MAGNETS & STICKERS", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/Magnet-Sticker-min.jpg", 
  };
  res.render("products/magnets-stickers", {data: data ,tag: tag});
});

app.get("/productGallery/mugs", function(req, res){
  var data = {product: "MUGS", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/Ceramic+Mug-min.jpg", 
  };
  res.render("products/mugs", {data: data ,tag: tag});
});

app.get("/productGallery/notebooks", function(req, res){
  var data = {product: "NOTEBOOKS", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/notebooks-min.jpg", 
  };
  res.render("products/notebooks", {data: data ,tag: tag});
});

app.get("/productGallery/office-supplies", function(req, res){
  var data = {product: "OFFICE SUPPLIES", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/Mouse+Pad-min.jpg",
  };
  res.render("products/office-supplies", {data: data ,tag: tag});
});

app.get("/productGallery/outdoor-leisure", function(req, res){
  var data = {product: "OUTDOOR LEISURE", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/Outdoor+%26+Leisure-min.jpg", 
  };
  res.render("products/outdoor-leisure", {data: data ,tag: tag});
});

app.get("/productGallery/pens", function(req, res){
  var data = {product: "PENS", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/Pen-min.jpg", 
  };
  res.render("products/pens", {data: data ,tag: tag});
});

app.get("/productGallery/special-packaging", function(req, res){
  var data = {product: "SPECIAL PACKAGING", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/uncompressed+files/Special+Packaging.jpg", 
  };
  res.render("products/special-packaging", {data: data ,tag: tag});
});

app.get("/productGallery/sunglasses", function(req, res){
  var data = {product: "SUNGLASSES", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/Sunglasses-min.jpg", 
  };
  res.render("products/sunglasses", {data: data ,tag: tag});
});


app.get("/productGallery/toys", function(req, res){
  var data = {product: "TOYS", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/spinner-min.jpg", 
  };
  res.render("products/toys", {data: data ,tag: tag});
});

app.get("/productGallery/tumblers", function(req, res){
  var data = {product: "TUMBLERS", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/5790_ROSEGOLD_Silkscreen-min.jpg", 
  };
  res.render("products/tumblers", {data: data ,tag: tag});
});

app.get("/productGallery/usb-flashdrive", function(req, res){
  var data = {product: "USB FLASHDRIVES", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/USB+Flashdrive-min.jpg", 
  };
  res.render("products/usb-flashdrive", {data: data ,tag: tag});
});










//services Pages
app.get("/serviceGallery/ad-design", function(req, res){
  var data = {product: "AD DESIGN", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/services+min/Optimized-ad-design-min.jpg", 
  };
  res.render("services/ad-design", {data: data ,tag: tag});
});


app.get("/serviceGallery/brand-identity", function(req, res){
  var data = {product: "BRAND IDENTITY", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/services+min/brand+identity-min.jpg", 
  };
  res.render("services/brand-identity", {data: data ,tag: tag});
});

app.get("/serviceGallery/commercial-printing", function(req, res){
  var data = {product: "COMMERCIAL PRINTING", image: "https://s3.us-east-2.amazonaws.com/midwestspray/APS/digital-printing.jpg", 
  };
  res.render("services/commercial-printing", {data: data ,tag: tag});
});

app.get("/serviceGallery/copies", function(req, res){
  var data = {product: "COPIES", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/services+min/image-from-rawpixel-id-393470-jpeg-min.jpg", 
  };
  res.render("services/copies", {data: data ,tag: tag});
});


app.get("/serviceGallery/digital-printing", function(req, res){
  var data = {product: "DIGITAL PRINTING", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/digital-printing-min.jpg", 
  };
  res.render("services/digital-printing", {data: data ,tag: tag});
});


app.get("/serviceGallery/direct-mail", function(req, res){
  var data = {product: "DIRECT MAIL", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/services+min/image-from-rawpixel-id-531776-jpeg-min.jpg", 
  };
  res.render("services/direct-mail", {data: data ,tag: tag});
});


app.get("/serviceGallery/embossing", function(req, res){
  var data = {product: "EMBOSSING", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/embossing-min.jpg", 
  };
  res.render("services/embossing", {data: data ,tag: tag});
});


app.get("/serviceGallery/finishing", function(req, res){
  var data = {product: "FINISHING", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/finishing.jpg", 
  };
  res.render("services/finishing", {data: data ,tag: tag});
});


app.get("/serviceGallery/foil-stamping", function(req, res){
  var data = {product: "FOIL STAMPING", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/foil-stamping-min.jpg", 
  };
  res.render("services/foil-stamping", {data: data ,tag: tag});
});


app.get("/serviceGallery/folding", function(req, res){
  var data = {product: "FOLDING", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/folding-min.jpg", 
  };
  res.render("services/folding", {data: data ,tag: tag});
});


app.get("/serviceGallery/graphic-design", function(req, res){
  var data = {product: "GRAPHIC DESIGN", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/services+min/Optimized-apple-computer-design-326501-min.jpg", 
  };
  res.render("services/graphic-design", {data: data ,tag: tag});
});


app.get("/serviceGallery/infographics", function(req, res){
  var data = {product: "INFOGRAPHICS", image:"https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/services+min/image-from-rawpixel-id-44401-jpeg-min.jpg", 
  };
  res.render("services/infographics", {data: data ,tag: tag});
});


app.get("/serviceGallery/large-format-printing", function(req, res){
  var data = {product: "LARGE FORMAT", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/large-format-printing-min.jpg", 
  };
  res.render("services/large-format-printing", {data: data ,tag: tag});
});


app.get("/serviceGallery/laser-engraving", function(req, res){
  var data = {product: "LASER ENGRAVING", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/services+min/laser-engraving-min.jpg", 
  };
  res.render("services/laser-engraving", {data: data ,tag: tag});
});


app.get("/serviceGallery/lead-generation", function(req, res){
  var data = {product: "LEAD GENERATION", image:"https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/services+min/image-from-rawpixel-id-344411-jpeg-min.jpg", 
  };
  res.render("services/lead-generation", {data: data ,tag: tag});
});



app.get("/serviceGallery/logo-design", function(req, res){
  var data = {product: "LOGO DESIGN", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/services+min/image-from-rawpixel-id-389101-jpeg-min.jpg", 
  };
  res.render("services/logo-design", {data: data ,tag: tag});
});


app.get("/serviceGallery/photo-enlargement", function(req, res){
  var data = {product: "PHOTO ENLARGEMENT", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/services+min/alone-art-art-gallery-748778-min.jpg", 
  };
  res.render("services/photo-enlargement", {data: data ,tag: tag});
});


app.get("/serviceGallery/scanning", function(req, res){
  var data = {product: "SCANNING", image: "https://s3.us-east-2.amazonaws.com/advancedprintsolutionsmedia/scanning-min.jpg", 
  };
  res.render("services/scanning", {data: data ,tag: tag});
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
            user: "mail@advancedprintsolutions.net", // generated ethereal user
            pass: "Bengals2020" // generated ethereal password
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