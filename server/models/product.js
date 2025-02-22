const mongoose = require('mongoose');
const uniqueSlug = require('unique-slug');
const shortid = require('shortid');
const { Schema } = mongoose;

// Product Schema
const ProductSchema = new Schema({
  sku: {
    type: String
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  slug: {
    type: String,
    unique: true
  },
  imageUrl: {
    type: String
  },
  imageKey: {
    type: String
  },
  description: {
    type: String,
    trim: true
  },
  quantity: {
    type: Number
  },
  price: {
    type: Number
  },
  taxable: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
    default: null
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

ProductSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('name')) {
    let slug = uniqueSlug(this.name);
    const existingProduct = await mongoose.models.Product.findOne({ slug });

    if (existingProduct) {
      slug = `${slug}-${shortid.generate()}`;
    }

    this.slug = slug;
  } next();
});

module.exports = mongoose.model('Product', ProductSchema);