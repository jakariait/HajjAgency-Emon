const mongoose = require("mongoose");
const CounterModel = require("./CounterModel");
const slugify = require("slugify");

const productSchema = new mongoose.Schema(
  {
    productId: { type: Number, unique: true, index: true }, // Auto-incremented
    name: { type: String, trim: true, required: true },
    slug: { type: String, trim: true, unique: true }, // Auto-generated
    shortDesc: { type: String, trim: true },
    longDesc: { type: String, trim: true },
    shippingReturn: { type: String, trim: true },
    productCode: { type: String, trim: true },
    videoUrl: { type: String, trim: true },
    thumbnailImage: { type: String, trim: true, required: true },
    images: [{ type: String, trim: true, required: true }],

    finalPrice: {
      type: Number,
      min: 0,
      required: true,
      validate: {
        validator: function (value) {
          return value >= 0; // Ensure the value is greater than or equal to 0
        },
        message: "Price cannot be negative",
      },
    },

    finalDiscount: {
      type: Number,

      min: 0,
      validate: {
        validator: function (value) {
          return value >= 0; // Ensure the value is greater than or equal to 0
        },
        message: "Discount cannot be negative",
      },
    },

    finalStock: {
      type: Number,
      min: 0,
      required: true,
      validate: {
        validator: function (value) {
          return value >= 0; // Ensure the value is greater than or equal to 0
        },
        message: "Stock cannot be negative",
      },
    },

  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

// Auto-increment productId before validation
productSchema.pre("validate", async function (next) {
  if (!this.productId) {
    try {
      const counter = await CounterModel.findOneAndUpdate(
        { name: "productId" },
        { $inc: { value: 1 } },
        { new: true, upsert: true },
      );
      this.productId = counter.value;
    } catch (err) {
      return next(err);
    }
  }

  // Generate slug when name changes
  if (this.isModified("name") || this.isNew) {
    this.slug = `${slugify(this.name, { lower: true })}-${this.productId}`;
  }

  next();
});

// Indexing for faster queries
productSchema.index({ name: 1, slug: 1 });
productSchema.index({ category: 1 });
productSchema.index({ name: "text" });


const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
