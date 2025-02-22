const mongoose = require('mongoose');
const uniqueSlug = require('unique-slug');
const shortid = require('shortid');
const { Schema } = mongoose;

// Category Schema
const CategorySchema = new Schema({
  _id: {
    type: Schema.ObjectId,
    auto: true
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
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

CategorySchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('name')) {
    let slug = uniqueSlug(this.name);
    const existingCategory = await mongoose.models.Category.findOne({ slug });

    if (existingCategory) {
      slug = `${slug}-${shortid.generate()}`;
    }

    this.slug = slug;
  }
  next();
});

module.exports = mongoose.model('Category', CategorySchema);