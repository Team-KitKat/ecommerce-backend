import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  _id: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: false
  },
  offrePrice: {
    type: Number,
    required: false
  },
  qty: {
    type: Number,
    required: false
  },
  category: {
    type: String,
    required: false
  },
})

const ProductItem = mongoose.model('product', ProductSchema)
export default ProductItem;
