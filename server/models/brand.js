const mongoose = require('mongoose');
const uniqueSlug = require('unique-slug');
const shortid = require('shortid');
const { Schema } = mongoose;

// Brand Schema
const BrandSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  slug: {
    type: String,
    unique: true
  },
  image: {
    data: Buffer,
    contentType: String
  },
  description: {
    type: String,
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  merchant: {
    type: Schema.Types.ObjectId,
    ref: 'Merchant',
    default: null
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

BrandSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('name')) {
    let slug = uniqueSlug(this.name);
    const existingBrand = await mongoose.models.Brand.findOne({ slug });

    if (existingBrand) {
      slug = `${slug}-${shortid.generate()}`;
    }

    this.slug = slug;
  }
  next();
});

module.exports = mongoose.model('Brand', BrandSchema);