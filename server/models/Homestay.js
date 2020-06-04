const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homestaySchema = mongoose.Schema(
  {
    host: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      maxlength: 50,
    },
    aboutHomestay: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: Number,
      default: 0,
    },
    pincode: {
      type: String,
    },
    aboutLocality: {
      type: String,
    },
    bedrooms: {
      type: Number,
      default: 1,
    },
    bathrooms: {
      type: Number,
      default: 1,
    },
    maxGuests: {
      type: Number,
      default: 0,
    },
    rate: {
      type: Number,
      default: 0,
    },
    hostImages: {
      type: Array,
      default: [],
    },
    roomImages: {
      type: Array,
      default: [],
    },
    localityImages: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

homestaySchema.index(
  {
    title: "text",
    aboutHomestay: "text",
  },
  {
    weights: {
      name: 5,
      description: 1,
    },
  }
);

const Homestay = mongoose.model("Homestay", homestaySchema);

module.exports = { Homestay };
