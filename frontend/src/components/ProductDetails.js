"use client";
import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import { useParams } from "next/navigation";
import useProductStore from "../store/useProductStore";
import Skeleton from "react-loading-skeleton";
import { CircularProgress, Typography, Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import ProductGallery from "../components/ProductGallery";
import ProductAddToCart from "../components/ProductAddToCart";
const YouTubeEmbed = lazy(() => import("../components/YoutubeEmbed"));

const ProductDetails = () => {
  const hasPushedRef = useRef(false);

  const { fetchProductBySlug, product, loading, error, resetProduct } =
    useProductStore();

  const { slug } = useParams();

  const [currentProductSlug, setCurrentProductSlug] = useState(null);

  useEffect(() => {
    if (slug !== currentProductSlug) {
      // Reset product state and show loading
      resetProduct(); // Clear previous product data
      setCurrentProductSlug(slug);
      fetchProductBySlug(slug);
    }
  }, [slug, currentProductSlug, fetchProductBySlug, resetProduct]);

  const calculateDiscountPercentage = (
    priceBeforeDiscount,
    priceAfterDiscount,
  ) => {
    if (
      !priceBeforeDiscount ||
      !priceAfterDiscount ||
      priceBeforeDiscount <= priceAfterDiscount
    )
      return 0;
    const discountAmount = priceBeforeDiscount - priceAfterDiscount;
    return Math.ceil((discountAmount / priceBeforeDiscount) * 100);
  };

  const discountPercentage =
    product?.finalPrice && product?.finalDiscount
      ? calculateDiscountPercentage(product.finalPrice, product.finalDiscount)
      : 0;

  // Function to sanitize/remove editor-specific tags like ql-ui
  const cleanHtml = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Remove Quill editor-only UI elements
    doc.querySelectorAll(".ql-ui").forEach((el) => el.remove());

    return doc.body.innerHTML;
  };

  // Data layer for View Content

  useEffect(() => {
    if (!product || hasPushedRef.current) return;

    const price =
      product.finalDiscount > 0 ? product.finalDiscount : product.finalPrice;

    const discount =
      product.finalDiscount > 0
        ? product.finalPrice - product.finalDiscount
        : 0;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "view_item",
      ecommerce: {
        currency: "BDT",
        value: price,
        items: [
          {
            item_id: product.productId,
            item_name: product.name,
            currency: "BDT",
            discount,
            item_variant: "Default",
            price,
            quantity: 1,
          },
        ],
      },
    });

    hasPushedRef.current = true;
  }, [product]);

  if (loading || product?.slug !== slug) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <CircularProgress
          thickness={4}
          size={50}
          sx={{ color: "emerald.500" }}
        />
        <Typography sx={{ mt: 2, color: "text.secondary", fontWeight: 500 }}>
          অপেক্ষা করুন...
        </Typography>
      </Box>
    ); // Loading message while new product data is being fetched
  }

  return (
    <div className="xl:container xl:mx-auto p-3">
      {error && (
        <div className="text-red-500 flex items-center justify-center pt-40">
          Error: {error}
        </div>
      )}

      {product && (
        <div>
          <div className="md:grid md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-9 gap-8">
            <div className="md:col-span-4 lg:col-span-6 xl:col-span-5 relative">
              <ProductGallery
                images={product.images}
                discount={discountPercentage}
                productName={product.name}
              />
            </div>
            <div className="flex flex-col gap-3 md:col-span-4 lg:col-span-3 xl:col-span-4 pt-4 md:pt-0">
              <ProductAddToCart product={product} />

              {/*Product Code*/}
              {product.productCode && (
                <div>
                  <strong>Product Code:</strong> {product.productCode}
                </div>
              )}

              {/*Short Description*/}
              {product.shortDesc && <div>{product.shortDesc}</div>}
            </div>
          </div>

          {/*YoutubeEmbed*/}
          {product.videoUrl && (
            <div className={"flex items-center justify-center pt-10 pb-10"}>
              <Suspense
                fallback={
                  <div className="w-full sm:w-[560px]">
                    <div className="aspect-video">
                      <Skeleton className="w-full h-full" />
                    </div>
                  </div>
                }
              >
                <YouTubeEmbed url={product.videoUrl} className="max-w-3xl" />
              </Suspense>
            </div>
          )}

          <div className={"xl:w-3/4 mx-auto shadow mt-4"}>
            {/*product Description*/}
            {product.longDesc && (
              <Accordion
                defaultExpanded
                style={{
                  background: "transparent",
                  boxShadow: "none",
                  width: "100%",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className="p-2 flex items-center"
                >
                  <Typography component="span">
                    <div className="flex items-center gap-2">
                      <span>Description</span>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ minHeight: "20rem" }}>
                  <div
                    className="rendered-html"
                    dangerouslySetInnerHTML={{
                      __html: cleanHtml(product.longDesc),
                    }}
                  />
                </AccordionDetails>
              </Accordion>
            )}


            {/*Shipping and Return*/}
            {product.shippingReturn && (
              <Accordion
                style={{
                  background: "transparent",
                  boxShadow: "none",
                  width: "100%",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className="p-2 flex items-center"
                >
                  <Typography component="span">
                    <div className="flex items-center gap-2">
                      <span>Shipping and Return</span>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ minHeight: "20rem" }}>
                  <div
                    className="rendered-html"
                    dangerouslySetInnerHTML={{
                      __html: cleanHtml(product.shippingReturn),
                    }}
                  />
                </AccordionDetails>
              </Accordion>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
