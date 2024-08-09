const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// connection with database
const MONGO_URL = "mongodb://127.0.0.1:27017/UrbanNest";
main()
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", function (req, res) {
  res.send("I am adarsh");
});

// Index Route
app.get("/listings", async function (req, res) {
  const allListings = await Listing.find({});
  res.render("./listings/index.ejs", { allListings });
});

// Index Route
app.get("/listings", async function (req, res) {
  const allListings = await Listing.find({});
  res.render("./listings/index.ejs", { allListings });
});

//initial database connection
// app.get("/testListing", async function (req, res) {
//   let sampleListing = new Listing({
//     title: "My new Villa",
//     description: "By my beach",
//     price: 1200,
//     location: "calangute , Goa",
//     country: "India",
//   });

//   await sampleListing.save();
//   console.log("sample saved");
//   res.send("succesful testing");
// });

app.listen(8080, () => {
  console.log("server is listening");
});
