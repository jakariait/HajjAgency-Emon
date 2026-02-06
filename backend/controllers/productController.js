const ProductService = require("../services/productService");

const ProductController = {
  createProduct: async (req, res) => {
    try {
      const newProduct = await ProductService.createProduct(
        req.body,
        req.files,
      );
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const { products, totalProducts, totalPages, currentPage } =
        await ProductService.getAllProducts(req.query);
      res.status(200).json({ products, totalProducts, totalPages, currentPage });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getProductById: async (req, res) => {
    try {
      const product = await ProductService.getProductById(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  getProductBySlug: async (req, res) => {
    try {
      const product = await ProductService.getProductBySlug(req.params.slug);
      res.status(200).json(product);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const updatedProduct = await ProductService.updateProduct(
        req.params.id,
        req.body,
        req.files,
      );
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const deletedProduct = await ProductService.deleteProduct(req.params.id);
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};

module.exports = ProductController;
