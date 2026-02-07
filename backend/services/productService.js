const ProductModel = require("../models/ProductModel");
const slugify = require("slugify");
const fs = require("fs").promises; // Use promises version of fs

const UPLOAD_DIR = "uploads/"; // Define the upload directory

// Helper function to delete a file
const deleteFile = async (filePath) => {
  try {
    await fs.unlink(filePath);
    console.log(`Successfully deleted file: ${filePath}`);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(`File not found, skipping deletion: ${filePath}`);
    } else {
      console.error(`Error deleting file ${filePath}:`, error);
      // Depending on requirements, you might want to throw the error
      // throw error;
    }
  }
};

const ProductService = {
  createProduct: async (productData, files) => {
    try {
      if (files && files.thumbnailImage) {
        productData.thumbnailImage = files.thumbnailImage[0].filename;
      }
      if (files && files.images) {
        productData.images = files.images.map((file) => file.filename);
      }
      const newProduct = new ProductModel(productData);
      await newProduct.save();
      return newProduct;
    } catch (error) {
      throw new Error("Error creating product: " + error.message);
    }
  },

  getAllProducts: async (filters) => {
    try {
      const { page = 1, limit = 10, search = "" } = filters;
      const skip = (page - 1) * limit;

let query = {};
      if (search) {
        query.name = { $regex: search, $options: "i" }; // Case-insensitive search
      }

      const products = await ProductModel.find(query)
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 }); // Sort by newest first

      const totalProducts = await ProductModel.countDocuments(query);
      const totalPages = Math.ceil(totalProducts / limit);

      return {
        products,
        totalProducts,
        totalPages,
        currentPage: page,
      };
    } catch (error) {
      throw new Error("Error fetching products: " + error.message);
    }
  },

  getProductById: async (id) => {
    try {
      const product = await ProductModel.findById(id);
      if (!product) {
        throw new Error("Product not found");
      }
      return product;
    } catch (error) {
      throw new Error("Error fetching product by ID: " + error.message);
    }
  },

  getProductBySlug: async (slug) => {
    try {
      const product = await ProductModel.findOne({ slug });
      if (!product) {
        throw new Error("Product not found");
      }
      return product;
    } catch (error) {
      throw new Error("Error fetching product by slug: " + error.message);
    }
  },

  updateProduct: async (id, productData, files) => {
    try {
      // Find the existing product to compare images
      const existingProduct = await ProductModel.findById(id);
      if (!existingProduct) {
        throw new Error("Product not found");
      }

      // Handle thumbnail image
      if (files && files.thumbnailImage) {
        // Delete old thumbnail if it exists
        if (existingProduct.thumbnailImage) {
          await deleteFile(UPLOAD_DIR + existingProduct.thumbnailImage);
        }
        productData.thumbnailImage = files.thumbnailImage[0].filename;
      } else if (productData.removeThumbnailImage === "true") {
        // If the frontend explicitly sent a signal to remove the thumbnail
        if (existingProduct.thumbnailImage) {
          await deleteFile(UPLOAD_DIR + existingProduct.thumbnailImage);
        }
        productData.thumbnailImage = null;
      }

      // Handle multiple images
      let updatedImages = existingProduct.images || [];

      // Remove images marked for deletion
      if (productData.imagesToDelete && productData.imagesToDelete.length > 0) {
        const imagesToDeleteSet = new Set(productData.imagesToDelete);
        for (const imageFilename of imagesToDeleteSet) {
          await deleteFile(UPLOAD_DIR + imageFilename);
        }
        updatedImages = updatedImages.filter(
          (image) => !imagesToDeleteSet.has(image),
        );
      }

      // Add new images
      if (files && files.images) {
        const newImagePaths = files.images.map((file) => file.filename);
        updatedImages = [...updatedImages, ...newImagePaths];
      }

      productData.images = updatedImages;

      const updatedProduct = await ProductModel.findByIdAndUpdate(
        id,
        productData,
        { new: true, runValidators: true }, // runValidators to ensure schema validations are applied
      );
      if (!updatedProduct) {
        throw new Error("Product not found");
      }
      return updatedProduct;
    } catch (error) {
      throw new Error("Error updating product: " + error.message);
    }
  },

  deleteProduct: async (id) => {
    try {
      const productToDelete = await ProductModel.findById(id);
      if (!productToDelete) {
        throw new Error("Product not found");
      }

      // Delete thumbnail image
      if (productToDelete.thumbnailImage) {
        await deleteFile(UPLOAD_DIR + productToDelete.thumbnailImage);
      }

      // Delete other images
      if (productToDelete.images && productToDelete.images.length > 0) {
        for (const imageFilename of productToDelete.images) {
          await deleteFile(UPLOAD_DIR + imageFilename);
        }
      }

      const deletedProduct = await ProductModel.findByIdAndDelete(id);
      // No need to check !deletedProduct here as we already checked productToDelete
      return deletedProduct;
    } catch (error) {
      throw new Error("Error deleting product: " + error.message);
    }
  },
};

module.exports = ProductService;
