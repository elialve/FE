require("./models/User");
require("./models/Track");
require("./models/Agency");
require("./models/Tour");
require("./models/Excursion");
const express = require("express");
const upload = require("express-fileupload");
const path = require('path');
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const agencyRoutes = require("./routes/agencyRoutes");
const excursionRoutes = require("./routes/excursionRoutes");
const tourRoutes = require("./routes/tourRoutes");
const bodyParser = require("body-parser");
const requireAuth = require("./middlewares/requireAuth");

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(upload())


/*
app.use(authRoutes);
app.use(agencyRoutes);
app.use(tourRoutes);
app.use(excursionRoutes);
app.use(trackRoutes);

const mongoUri =
  "mongodb+srv://admin:admin@cluster0-mtycc.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});

mongoose.connection.on("Error", err => {
  console.error("Error connecting to mongo", err);
});




app.post("/auth", requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});
*/


app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, '..', 'public\\index.html'));
});

app.post("/upload",(req, res) => {
  if(req.files) {
    console.log(req.files);
    var file = req.files.file;
    var buf = Buffer.from(file.data);
    var temp = buf.toString('utf8');
    console.log(temp);
    var jsonObj = JSON.parse(temp);
    console.log(jsonObj['Project Name']);
    res.redirect('/');

  }
});


app.listen(3000, () => {
  console.log("Listening on 3000");
});
