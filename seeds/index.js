const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 300; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "64c98d50568e7bd693f20bf0",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      images: [
        {
          url: "https://res.cloudinary.com/dtacpzrbe/image/upload/v1691448039/YelpCamp/vgenrrpanwybhamea1hk.jpg",
          filename: "YelpCamp/vgenrrpanwybhamea1hk",
        },
        {
          url: "https://res.cloudinary.com/dtacpzrbe/image/upload/v1691448038/YelpCamp/qr1csnl0dodpwb8uag3z.jpg",
          filename: "YelpCamp/qr1csnl0dodpwb8uag3z",
        },
        {
          url: "https://res.cloudinary.com/dtacpzrbe/image/upload/v1691448039/YelpCamp/booly5pfgzllxmnuykeb.jpg",
          filename: "YelpCamp/booly5pfgzllxmnuykeb",
        },
      ],
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus nobis eligendi repellat. Veniam, perspiciatis. Quidem et totam soluta impedit, veritatis officiis voluptatum tempora odio laudantium temporibus itaque quos nostrum provident.",
      price,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
    });
    await camp.save();
  }
};

seedDB().then(() => {
  db.close();
});
