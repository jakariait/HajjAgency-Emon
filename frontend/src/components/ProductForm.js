"use client";

import React, { useRef, useState, useEffect, lazy, Suspense } from "react";
import { useRouter, usePathname, useParams } from "next/navigation";
import AuthAdminStore from "../store/AuthAdminStore";
import useProductStore from "../store/useProductStore";
const Editor = lazy(() =>
  import("primereact/editor").then((module) => ({ default: module.Editor })),
);
import {
  Box,
  Typography,
  FormHelperText,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

import axios from "axios";
import Skeleton from "react-loading-skeleton";

const ProductForm = ({ isEdit: isEditMode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const id = params.slug;

  const product = useProductStore((state) => state.product);
  const fetchProductById = useProductStore((state) => state.fetchProductById);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const { token } = AuthAdminStore();

  // Form state
  const [name, setName] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [longDesc, setLongDesc] = useState("");
  const [shippingReturn, setShippingReturn] = useState("");
  const [productCode, setProductCode] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [finalPrice, setFinalPrice] = useState("");
  const [finalDiscount, setFinalDiscount] = useState("");
  const [finalStock, setFinalStock] = useState("");
  const [isActive, setIsActive] = useState("");
  const [existingImages, setExistingImages] = useState([]);
  const [imagesToDelete, setImagesToDelete] = useState([]);

  // UI state
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [errors, setErrors] = useState({});

  const fileInputRef = useRef(null);
  const imagesInputRef = useRef(null);

  const imageUrl = `${apiUrl.replace("/api", "")}/uploads`;

  useEffect(() => {
    if (isEditMode && id) {
      fetchProductById(id);
    }
  }, [id, isEditMode, fetchProductById]);

  useEffect(() => {
    if (isEditMode && product) {
      setName(product.name || "");
      setShortDesc(product.shortDesc || "");
      setLongDesc(product.longDesc || "");
      setShippingReturn(product.shippingReturn || "");
      setProductCode(product.productCode || "");
      setIsActive(String(product.isActive));
      setVideoUrl(product.videoUrl || "");
      setFinalPrice(product.finalPrice || "");
      setFinalDiscount(product.finalDiscount || "");
      setFinalStock(product.finalStock || "");
      setExistingImages(product.images || []);

      if (product.thumbnailImage) {
        setImagePreview(`${imageUrl}/${product.thumbnailImage}`);
      }
    }
  }, [product, isEditMode, apiUrl]);

  const handleMultipleImagesChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => file);
    const newPreviews = files.map((file) => URL.createObjectURL(file));

    setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    setImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const handleRemoveNewImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setImagePreviews((prevPreviews) => {
      URL.revokeObjectURL(prevPreviews[index]);
      return prevPreviews.filter((_, i) => i !== index);
    });

    if (imagesInputRef.current && selectedImages.length === 1) {
      imagesInputRef.current.value = "";
    }
  };

  const handleRemoveExistingImage = (indexToRemove) => {
    setExistingImages((prev) => {
      const imageToRemove = prev[indexToRemove];
      setImagesToDelete((prevDelete) => [...prevDelete, imageToRemove]);
      return prev.filter((_, i) => i !== indexToRemove);
    });
  };

  const handleRemoveAllNewImages = () => {
    imagePreviews.forEach((url) => URL.revokeObjectURL(url));
    setSelectedImages([]);
    setImagePreviews([]);
    if (imagesInputRef.current) {
      imagesInputRef.current.value = "";
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setThumbnailImage(file);
      setImagePreview(imageUrl);
    }
  };

  const handleRemoveThumbnail = () => {
    setThumbnailImage(null);
    setImagePreview("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleFinalPriceChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 0) value = 0;
    setFinalPrice(value);
  };

  const handleDiscountChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 0) value = 0;
    setFinalDiscount(value);
  };

  const handleFinalStockChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 0) value = 0;
    setFinalStock(value);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    let validationErrors = {};
    if (!name.trim()) validationErrors.name = "Product name is required.";
    if (!finalPrice) validationErrors.finalPrice = "Price is required.";
    if (!finalStock) validationErrors.finalStock = "Stock is required.";

    if (isEditMode) {
      // In edit mode, if product had a thumbnail, and it's not removed, it's fine.
      // If thumbnailImage is null and product.thumbnailImage is also null, then it's missing.
      if (!thumbnailImage && !product.thumbnailImage) {
        validationErrors.thumbnailImage = "Thumbnail image is required.";
      }
    } else {
      // In add mode, thumbnail must be a new file
      if (!(thumbnailImage instanceof File)) {
        validationErrors.thumbnailImage = "Thumbnail image is required.";
      }
    }

    if (existingImages.length + selectedImages.length === 0) {
      validationErrors.images = "At least one image is required.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("shortDesc", shortDesc);
    formData.append("longDesc", longDesc);
    formData.append("shippingReturn", shippingReturn);
    formData.append("productCode", productCode);
    formData.append("videoUrl", videoUrl);
    formData.append("finalPrice", finalPrice);
    formData.append("finalDiscount", finalDiscount);
    formData.append("finalStock", finalStock);
    formData.append("isActive", isActive === "true"); // Ensure boolean value

    if (thumbnailImage instanceof File) {
      formData.append("thumbnailImage", thumbnailImage);
    } else if (isEditMode && product.thumbnailImage && !thumbnailImage) {
      // If in edit mode, and there was an existing thumbnail but it was removed
      // explicitly send a signal to remove it on the backend, or handle based on backend
      // For now, if thumbnailImage is null, it means it was removed by user, and we don't append it
      // If it's a string, it means it's an existing image not touched
      if (typeof product.thumbnailImage === "string" && !imagePreview) {
        // This means the user removed the existing thumbnail
        formData.append("removeThumbnailImage", "true");
      }
    }

    if (isEditMode) {
      // Append images marked for deletion
      imagesToDelete.forEach((imagePath) => {
        formData.append("imagesToDelete", imagePath);
      });
    }

    selectedImages.forEach((image) => {
      if (image instanceof File) {
        formData.append("images", image);
      }
    });

    try {
      if (isEditMode) {
        await axios.patch(`${apiUrl}/products/${id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        setSnackbarMessage("Product updated successfully!");
        setImagesToDelete([]); // Clear imagesToDelete after successful update
      } else {
        await axios.post(`${apiUrl}/products`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSnackbarMessage("Product created successfully!");
        setName("");
        setShortDesc("");
        setLongDesc("");
        setShippingReturn("");
        setProductCode("");
        setVideoUrl("");
        setFinalPrice("");
        setFinalDiscount("");
        setFinalStock("");
        setIsActive("true");
        setThumbnailImage(null);
        setImagePreview("");
        setSelectedImages([]);
        setImagePreviews([]);
        if (fileInputRef.current) fileInputRef.current.value = "";
        if (imagesInputRef.current) imagesInputRef.current.value = "";
      }

      setSnackbarSeverity("success");
      setSnackbarOpen(true);

      setTimeout(() => {
        router.push("/admin/dashboard/view-products"); // Redirect to products listing page
      }, 3000);
    } catch (error) {
      setSnackbarMessage(
        isEditMode ? "Failed to update product." : "Failed to create product.",
      );
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      if (error.response && error.response.data) {
        // If the backend sends specific error messages
        setErrors(
          error.response.data.errors || {
            general: error.response.data.message,
          },
        );
      } else {
        console.error("An unexpected error occurred:", error);
        setErrors({ general: "An unexpected error occurred." });
      }
    }
  };

  if (isEditMode && !product) {
    return (
      <div>
        <Skeleton height={40} width={300} />
        <div className={"grid grid-cols-12 gap-8"}>
          <div className={"col-span-8"}>
            <Skeleton height={400} />
            <Skeleton height={200} className="mt-4" />
          </div>
          <div className={"col-span-4"}>
            <Skeleton height={250} />
            <Skeleton height={300} className="mt-4" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={"shadow rounded-lg p-3"}>
      <h1 className="border-l-4 primaryBorderColor primaryTextColor mb-6 pl-2 text-lg font-semibold">
        {isEditMode ? "Update Product" : "Add New Product"}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className={"md:grid grid-cols-12 gap-8 p-3"}>
          <div className={"col-span-8"}>
            <TextField
              label="Product Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              margin="normal"
            />
            <TextField
              label="Short Description"
              fullWidth
              value={shortDesc}
              onChange={(e) => setShortDesc(e.target.value)}
              margin="normal"
              multiline
              rows={3}
            />
            <h1 className={"py-3 pl-1"}>Long Description</h1>
            <Suspense fallback={<Skeleton height={260} />}>
              <Editor
                value={longDesc}
                onTextChange={(e) => setLongDesc(e.htmlValue)}
                style={{ height: "260px" }}
              />
            </Suspense>

            <div>
              <h1 className={"py-3 pl-1"}>Shipping and Return</h1>
              <Suspense fallback={<Skeleton height={260} />}>
                <Editor
                  value={shippingReturn}
                  onTextChange={(e) => setShippingReturn(e.htmlValue)}
                  style={{ height: "260px" }}
                />
              </Suspense>
            </div>
            <Box mb={2}>
              <TextField
                label="Video URL"
                fullWidth
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                margin="normal"
              />
            </Box>
          </div>
          <div className={"col-span-4"}>
            <Box mb={2}>
              <Typography>
                Product Thumbnail Image{" "}
                <span style={{ color: "red", fontSize: "18px" }}>*</span>
              </Typography>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "inline-block" }}
                id="thumbnail-upload"
                name="thumbnailImage"
                ref={fileInputRef}
                required={!isEditMode}
              />
              <label
                htmlFor="thumbnail-upload"
                style={{
                  display: "block",
                  height: "210px",
                  marginTop: "10px",
                  border: "2px solid #aaa",
                  cursor: "pointer",
                  textAlign: "center",
                  position: "relative",
                  backgroundImage: imagePreview
                    ? `url(${imagePreview})`
                    : "none",
                  backgroundColor: imagePreview ? "transparent" : "#f0f0f0",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  color: imagePreview ? "transparent" : "#000",
                }}
              >
                {imagePreview ? (
                  <>
                    <Typography
                      variant="body2"
                      sx={{
                        position: "absolute",
                        bottom: "10px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      Image Selected
                    </Typography>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        padding: "5px 10px",
                        fontSize: "12px",
                        zIndex: 10,
                      }}
                      onClick={handleRemoveThumbnail}
                    >
                      Remove
                    </Button>
                  </>
                ) : (
                  <Typography
                    variant="body2"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    Click to upload an image
                  </Typography>
                )}
              </label>
              {errors.thumbnailImage && (
                <FormHelperText error>{errors.thumbnailImage}</FormHelperText>
              )}
            </Box>

            <TextField
              label="Price (In BDT)"
              type="number"
              fullWidth
              value={finalPrice}
              onChange={handleFinalPriceChange}
              margin="normal"
              required
            />
            <TextField
              label="Discount Price"
              type="number"
              fullWidth
              value={finalDiscount}
              onChange={handleDiscountChange}
              margin="normal"
            />
            <TextField
              label="Stock"
              type="number"
              fullWidth
              value={finalStock}
              onChange={handleFinalStockChange}
              required
              margin="normal"
            />

            <TextField
              label="Product Code"
              fullWidth
              value={productCode}
              onChange={(e) => setProductCode(e.target.value)}
              margin="normal"
            />
          </div>
        </div>

        <div className={"shadow rounded-lg p-3 mt-3"}>
          <Box mb={2}>
            <Typography>
              Product Images{" "}
              <span style={{ color: "red", fontSize: "18px" }}>*</span>
            </Typography>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleMultipleImagesChange}
              style={{ display: "block" }}
              id="multi-image-upload"
              name="images"
              ref={imagesInputRef}
              required={!isEditMode && selectedImages.length === 0}
            />
            <label
              htmlFor="multi-image-upload"
              style={{
                marginTop: "10px",
                border: "2px solid #aaa",
                cursor: "pointer",
                textAlign: "center",
                position: "relative",
                backgroundColor:
                  existingImages.length + selectedImages.length > 0
                    ? "transparent"
                    : "#f0f0f0",
                overflow: "hidden",
                padding: "10px",
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "150px",
              }}
            >
              {existingImages.length > 0 || selectedImages.length > 0 ? (
                <>
                  {selectedImages.length > 0 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveAllNewImages();
                      }}
                      type="button"
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        background: "red",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        padding: "5px",
                        fontSize: "12px",
                        cursor: "pointer",
                      }}
                    >
                      {isEditMode ? "Remove New Images" : "Remove All"}
                    </button>
                  )}
                  <div
                    className={
                      "flex gap-5 flex-wrap mt-7 justify-center items-center"
                    }
                  >
                    {isEditMode &&
                      existingImages.map((image, index) => (
                        <div
                          key={`existing-${index}`}
                          style={{
                            width: "150px",
                            height: "150px",
                            marginTop: "5px",
                            backgroundImage: `url(${imageUrl}/${image})`,
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            borderRadius: "5px",
                            position: "relative",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveExistingImage(index);
                            }}
                            type="button"
                            style={{
                              position: "absolute",
                              top: "-5px",
                              right: "-5px",
                              background: "red",
                              color: "white",
                              border: "none",
                              borderRadius: "50%",
                              width: "20px",
                              height: "20px",
                              cursor: "pointer",
                            }}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    {imagePreviews.map((image, index) => (
                      <div
                        key={`new-${index}`}
                        style={{
                          width: "150px",
                          height: "150px",
                          marginTop: "5px",
                          backgroundImage: `url(${image})`,
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          borderRadius: "5px",
                          position: "relative",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveNewImage(index);
                          }}
                          type="button"
                          style={{
                            position: "absolute",
                            top: "-5px",
                            right: "-5px",
                            background: "red",
                            color: "white",
                            border: "none",
                            borderRadius: "50%",
                            width: "20px",
                            height: "20px",
                            cursor: "pointer",
                          }}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <Typography
                  variant="body2"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  Click to upload images
                </Typography>
              )}
            </label>
            {errors.images && (
              <FormHelperText error>{errors.images}</FormHelperText>
            )}
          </Box>
        </div>

        <div className={"flex justify-center items-center m-8"}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            className="mt-4"
          >
            {isEditMode ? "Update Product" : "Add Product"}
          </Button>
        </div>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity={snackbarSeverity}
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </form>
    </div>
  );
};

export default ProductForm;
