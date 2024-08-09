const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://th.bing.com/th/id/OIP.H2VSAEOvqv5lTFUERD9nXgHaJ4?pid=ImgDet&w=192&h=255&c=7&dpr=1.5",
    set: (v) =>
      v === ""
        ? "https://th.bing.com/th/id/OIP.H2VSAEOvqv5lTFUERD9nXgHaJ4?pid=ImgDet&w=192&h=255&c=7&dpr=1.5"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
