const express = require("express");
const multer = require("multer");
const path = require("path");

const contactController = require("../controllers/ContactController");
const AdminController = require("../controllers/AdminController");
const FaqController = require("../controllers/FaqController");
const ResultController = require("../controllers/ResultController");
const videoLinkController = require("../controllers/VideoLinkController");
const PackageController = require("../controllers/PackageController");
const TestimonialController = require("../controllers/TestimonialController");

// Admin
const { adminProtect } = require("../middlewares/authAdminMiddleware");
const { authenticateToken } = require("../middlewares/authenticateToken");

require("dotenv").config();

const router = express.Router();

// Set Up Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"), // Ensure files are saved in the 'uploads' folder
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)), // Naming files uniquely
});

const upload = multer({ storage }).fields([
  {
    name: "PrimaryLogo",
    maxCount: 1,
  },
  {
    name: "SecondaryLogo",
    maxCount: 1,
  },
  {
    name: "Favicon",
    maxCount: 1,
  },
  {
    name: "imgSrc",
    maxCount: 20,
  },
  {
    name: "categoryIcon",
    maxCount: 1,
  },
  {
    name: "categoryBanner",
    maxCount: 1,
  },
  {
    name: "thumbnailImage",
    maxCount: 1,
  },
  {
    name: "images",
  },
  {
    name: "userImage",
    maxCount: 1,
  },
]);

// Serve images from the 'uploads' folder as static files
router.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes for Contact Us Form
router.post("/contacts", contactController.createContact);
router.get("/contacts", adminProtect, contactController.getAllContacts);
router.get("/contacts/:id", adminProtect, contactController.getContactById);
router.put("/contacts/:id", adminProtect, contactController.updateContact);
router.delete("/contacts/:id", adminProtect, contactController.deleteContact);

// Admin Login route
router.post("/admin/login", AdminController.loginAdmin);
router.get("/admin/me", authenticateToken, AdminController.getLoggedInAdmin);

// CRUD routes for Admin User
router.post("/admin/create", adminProtect, AdminController.createAdmin);
router.get("/admin/getall", adminProtect, AdminController.getAllAdmins);
router.get("/admin/:id", adminProtect, AdminController.getAdminById);
router.put("/admin/:id", adminProtect, AdminController.updateAdmin);
router.delete("/admin/:id", adminProtect, AdminController.deleteAdmin);

// FAQ's Routes
router.get("/faq", FaqController.getAllFAQs);
router.get("/faq/:id", FaqController.getSingleFAQ);
router.patch("/faq/:id", adminProtect, FaqController.updateFAQ);
router.delete("/faq/:id", adminProtect, FaqController.deleteFAQ);
router.post("/faq", adminProtect, FaqController.createFAQ);

//  Routes for Results
router.post(
  "/createresults",
  upload,
  adminProtect,
  ResultController.createCarousel,
);
router.get("/getallresults", ResultController.getAllCarousel);

router.delete(
  "/deletebyidresults/:id",
  adminProtect,
  ResultController.deleteByIdCarousel,
);

// Routes for Video Links
router.post("/video-links", adminProtect, videoLinkController.createVideoLink);
router.get("/video-links", videoLinkController.getAllVideoLinks);
router.get("/video-links/:id", videoLinkController.getVideoLinkById);
router.patch(
  "/video-links/:id",
  adminProtect,
  videoLinkController.updateVideoLink,
);
router.delete(
  "/video-links/:id",
  adminProtect,
  videoLinkController.deleteVideoLink,
);

// Routes for Packages
router.post("/packages", adminProtect, PackageController.createPackage);
router.get("/packages", PackageController.getAllPackages);
router.get("/packages/:id", PackageController.getPackageById);
router.patch("/packages/:id", adminProtect, PackageController.updatePackage);
router.delete("/packages/:id", adminProtect, PackageController.deletePackage);

// Routes for Testimonials
router.post(
  "/testimonials",
  adminProtect,
  TestimonialController.createTestimonial,
);
router.get("/testimonials", TestimonialController.getAllTestimonials);
router.get("/testimonials/:id", TestimonialController.getTestimonialById);
router.patch(
  "/testimonials/:id",
  adminProtect,
  TestimonialController.updateTestimonial,
);
router.delete(
  "/testimonials/:id",
  adminProtect,
  TestimonialController.deleteTestimonial,
);

module.exports = router;
