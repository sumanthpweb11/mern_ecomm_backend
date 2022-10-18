const mongoose = require("mongoose");
const Review = require("./ReviewModel");

const imageSchema = mongoose.Schema({
  path: { type: String, required: true },
});

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    count: {
      // product quantity
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    rating: {
      type: Number,
    },

    reviewsNumber: {
      type: Number,
    },

    sales: {
      type: Number,
      default: 0,
    },
    attrs: [
      { key: { type: String }, value: { type: String } },
      // will be array of objects
      // [{key:"color",value:"red"},{key:"size",value:"1TB"}]
    ],

    images: [imageSchema],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Review,
      },
    ],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

productSchema.index(
  { name: "text", description: "text" },
  { name: "TextIndex" }
);

productSchema.index({ "attrs.key": 1, "atrs.value": 1 });
module.exports = Product;
