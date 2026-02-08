// "use client";
// import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
// import { useParams } from "next/navigation";
// import useProductStore from "../store/useProductStore";
// import Skeleton from "react-loading-skeleton";
// import { CircularProgress, Typography, Box } from "@mui/material";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import ProductGallery from "../components/ProductGallery";
// import ProductAddToCart from "../components/ProductAddToCart";
// const YouTubeEmbed = lazy(() => import("../components/YoutubeEmbed"));
//
// const ProductDetails = () => {
//   const hasPushedRef = useRef(false);
//
//   const { fetchProductBySlug, product, loading, error, resetProduct } =
//     useProductStore();
//
//   const { slug } = useParams();
//
//   const [currentProductSlug, setCurrentProductSlug] = useState(null);
//
//   useEffect(() => {
//     if (slug !== currentProductSlug) {
//       // Reset product state and show loading
//       resetProduct(); // Clear previous product data
//       setCurrentProductSlug(slug);
//       fetchProductBySlug(slug);
//     }
//   }, [slug, currentProductSlug, fetchProductBySlug, resetProduct]);
//
//   const calculateDiscountPercentage = (
//     priceBeforeDiscount,
//     priceAfterDiscount,
//   ) => {
//     if (
//       !priceBeforeDiscount ||
//       !priceAfterDiscount ||
//       priceBeforeDiscount <= priceAfterDiscount
//     )
//       return 0;
//     const discountAmount = priceBeforeDiscount - priceAfterDiscount;
//     return Math.ceil((discountAmount / priceBeforeDiscount) * 100);
//   };
//
//   const discountPercentage =
//     product?.finalPrice && product?.finalDiscount
//       ? calculateDiscountPercentage(product.finalPrice, product.finalDiscount)
//       : 0;
//
//   // Function to sanitize/remove editor-specific tags like ql-ui
//   const cleanHtml = (html) => {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(html, "text/html");
//
//     // Remove Quill editor-only UI elements
//     doc.querySelectorAll(".ql-ui").forEach((el) => el.remove());
//
//     return doc.body.innerHTML;
//   };
//
//   // Data layer for View Content
//
//   useEffect(() => {
//     if (!product || hasPushedRef.current) return;
//
//     const price =
//       product.finalDiscount > 0 ? product.finalDiscount : product.finalPrice;
//
//     const discount =
//       product.finalDiscount > 0
//         ? product.finalPrice - product.finalDiscount
//         : 0;
//
//     window.dataLayer = window.dataLayer || [];
//     window.dataLayer.push({
//       event: "view_item",
//       ecommerce: {
//         currency: "BDT",
//         value: price,
//         items: [
//           {
//             item_id: product.productId,
//             item_name: product.name,
//             currency: "BDT",
//             discount,
//             item_variant: "Default",
//             price,
//             quantity: 1,
//           },
//         ],
//       },
//     });
//
//     hasPushedRef.current = true;
//   }, [product]);
//
//   if (loading || product?.slug !== slug) {
//     return (
//       <Box
//         display="flex"
//         flexDirection="column"
//         justifyContent="center"
//         alignItems="center"
//         minHeight="80vh"
//       >
//         <CircularProgress
//           thickness={4}
//           size={50}
//           sx={{ color: "emerald.500" }}
//         />
//         <Typography sx={{ mt: 2, color: "text.secondary", fontWeight: 500 }}>
//           অপেক্ষা করুন...
//         </Typography>
//       </Box>
//     ); // Loading message while new product data is being fetched
//   }
//
//   return (
//     <div className="xl:container xl:mx-auto p-3">
//       {error && (
//         <div className="text-red-500 flex items-center justify-center pt-40">
//           Error: {error}
//         </div>
//       )}
//
//       {product && (
//         <div>
//           <div className="md:grid md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-9 gap-8">
//             <div className="md:col-span-4 lg:col-span-6 xl:col-span-5 relative">
//               <ProductGallery
//                 images={product.images}
//                 discount={discountPercentage}
//                 productName={product.name}
//               />
//             </div>
//             <div className="flex flex-col gap-3 md:col-span-4 lg:col-span-3 xl:col-span-4 pt-4 md:pt-0">
//               <ProductAddToCart product={product} />
//
//               {/*Product Code*/}
//               {product.productCode && (
//                 <div>
//                   <strong>Product Code:</strong> {product.productCode}
//                 </div>
//               )}
//
//               {/*Short Description*/}
//               {product.shortDesc && <div>{product.shortDesc}</div>}
//             </div>
//           </div>
//
//           {/*YoutubeEmbed*/}
//           {product.videoUrl && (
//             <div className={"flex items-center justify-center pt-10 pb-10"}>
//               <Suspense
//                 fallback={
//                   <div className="w-full sm:w-[560px]">
//                     <div className="aspect-video">
//                       <Skeleton className="w-full h-full" />
//                     </div>
//                   </div>
//                 }
//               >
//                 <YouTubeEmbed url={product.videoUrl} className="max-w-3xl" />
//               </Suspense>
//             </div>
//           )}
//
//           <div className={"xl:w-3/4 mx-auto shadow mt-4"}>
//             {/*product Description*/}
//             {product.longDesc && (
//               <Accordion
//                 defaultExpanded
//                 style={{
//                   background: "transparent",
//                   boxShadow: "none",
//                   width: "100%",
//                 }}
//               >
//                 <AccordionSummary
//                   expandIcon={<ExpandMoreIcon />}
//                   aria-controls="panel1-content"
//                   id="panel1-header"
//                   className="p-2 flex items-center"
//                 >
//                   <Typography component="span">
//                     <div className="flex items-center gap-2">
//                       <span>Description</span>
//                     </div>
//                   </Typography>
//                 </AccordionSummary>
//                 <AccordionDetails style={{ minHeight: "20rem" }}>
//                   <div
//                     className="rendered-html"
//                     dangerouslySetInnerHTML={{
//                       __html: cleanHtml(product.longDesc),
//                     }}
//                   />
//                 </AccordionDetails>
//               </Accordion>
//             )}
//
//
//             {/*Shipping and Return*/}
//             {product.shippingReturn && (
//               <Accordion
//                 style={{
//                   background: "transparent",
//                   boxShadow: "none",
//                   width: "100%",
//                 }}
//               >
//                 <AccordionSummary
//                   expandIcon={<ExpandMoreIcon />}
//                   aria-controls="panel1-content"
//                   id="panel1-header"
//                   className="p-2 flex items-center"
//                 >
//                   <Typography component="span">
//                     <div className="flex items-center gap-2">
//                       <span>Shipping and Return</span>
//                     </div>
//                   </Typography>
//                 </AccordionSummary>
//                 <AccordionDetails style={{ minHeight: "20rem" }}>
//                   <div
//                     className="rendered-html"
//                     dangerouslySetInnerHTML={{
//                       __html: cleanHtml(product.shippingReturn),
//                     }}
//                   />
//                 </AccordionDetails>
//               </Accordion>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
//
// export default ProductDetails;

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
      <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 overflow-hidden">
        {/* Background Islamic Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="loading-pattern"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M50 0 L75 25 L50 50 L25 25 Z M50 50 L75 75 L50 100 L25 75 Z"
                  fill="none"
                  stroke="#059669"
                  strokeWidth="0.5"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="15"
                  fill="none"
                  stroke="#059669"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#loading-pattern)" />
          </svg>
        </div>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="80vh"
          className="relative z-10"
        >
          {/* Loading Animation */}
          <div className="relative mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-full flex items-center justify-center animate-float">
              <span className="text-5xl">🕌</span>
            </div>
            <div className="absolute inset-0 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          </div>

          <Typography
            className="text-emerald-900 font-semibold text-xl mb-2"
            sx={{ fontWeight: 600 }}
          >
            পণ্য লোড হচ্ছে...
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            অনুগ্রহ করে অপেক্ষা করুন
          </Typography>
        </Box>
      </div>
    );
  }

  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-amber-50 overflow-hidden">
      {/* Background Islamic Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="detail-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M50 0 L75 25 L50 50 L25 25 Z M50 50 L75 75 L50 100 L25 75 Z M0 25 L25 50 L0 75 L-25 50 Z M100 25 L125 50 L100 75 L75 50 Z"
                fill="none"
                stroke="#059669"
                strokeWidth="0.5"
              />
              <circle
                cx="50"
                cy="50"
                r="15"
                fill="none"
                stroke="#059669"
                strokeWidth="0.5"
              />
              <circle
                cx="50"
                cy="50"
                r="25"
                fill="none"
                stroke="#059669"
                strokeWidth="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#detail-pattern)" />
        </svg>
      </div>

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

      <div className="relative xl:container xl:mx-auto p-4 md:p-6 py-12">
        {error && (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative bg-red-50 border-2 border-red-200 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl">
                  ⚠️
                </div>
                <div>
                  <h3 className="font-bold text-red-800 text-lg mb-1">
                    কিছু সমস্যা হয়েছে
                  </h3>
                  <p className="text-red-600">{error}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {product && (
          <div className="space-y-8 ">
            {/* Main Product Section */}
            <div className="md:grid md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-9 gap-8 ">
              {/* Product Gallery */}
              <div className="md:col-span-4 lg:col-span-6 xl:col-span-5">
                <div className="relative bg-white rounded-2xl shadow-lg p-4 border-2 border-emerald-100/50 hover:border-amber-300/50 transition-all duration-500">
                  {/* Decorative corners */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-emerald-300/40 rounded-tl"></div>
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-emerald-300/40 rounded-tr"></div>
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-amber-300/40 rounded-bl"></div>
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-300/40 rounded-br"></div>

                  {/* Top Decorative Border */}
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-amber-400 to-emerald-400"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                  </div>

                  <ProductGallery
                    images={product.images}
                    discount={discountPercentage}
                    productName={product.name}
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="md:col-span-4 lg:col-span-3 xl:col-span-4 pt-4 md:pt-0">
                <div className="relative bg-white rounded-2xl shadow-lg p-6 border-2 border-emerald-100/50 h-full">
                  {/* Decorative corners */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-emerald-300/40 rounded-tl"></div>
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-emerald-300/40 rounded-tr"></div>
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-amber-300/40 rounded-bl"></div>
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-300/40 rounded-br"></div>

                  {/* Top Decorative Border */}
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-amber-400 to-emerald-400"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                  </div>

                  <div className="space-y-4">
                    <ProductAddToCart product={product} />

                    {/* Product Code */}
                    {product.productCode && (
                      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-xl border border-emerald-200/50">
                        <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 mb-1">পণ্য কোড</p>
                          <p className="font-bold text-emerald-900">
                            {product.productCode}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Short Description */}
                    {product.shortDesc && (
                      <div className="p-4 bg-gradient-to-br from-emerald-50/50 to-amber-50/50 rounded-xl border border-emerald-200/30">
                        <p className="text-gray-700 leading-relaxed">
                          {product.shortDesc}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* YouTube Video Section */}
            {product.videoUrl && (
              <div className="relative">
                <div className="max-w-4xl mx-auto">
                  {/* Section Header */}
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="w-12 h-px bg-gradient-to-r from-transparent to-emerald-400"></div>
                      <div className="w-2 h-2 rotate-45 bg-amber-500"></div>
                      <div className="w-16 h-px bg-gradient-to-r from-emerald-400 to-amber-400"></div>
                      <span className="text-3xl">📹</span>
                      <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-emerald-400"></div>
                      <div className="w-2 h-2 rotate-45 bg-amber-500"></div>
                      <div className="w-12 h-px bg-gradient-to-r from-emerald-400 to-transparent"></div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-emerald-900">
                      পণ্যের ভিডিও
                    </h3>
                  </div>

                  <div className="relative bg-white rounded-2xl shadow-xl p-4 border-2 border-emerald-200/50">
                    {/* Decorative corners */}
                    <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-emerald-300/40 rounded-tl"></div>
                    <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-emerald-300/40 rounded-tr"></div>
                    <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-amber-300/40 rounded-bl"></div>
                    <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-300/40 rounded-br"></div>

                    <Suspense
                      fallback={
                        <div className="w-full">
                          <div className="aspect-video">
                            <Skeleton className="w-full h-full rounded-xl" />
                          </div>
                        </div>
                      }
                    >
                      <YouTubeEmbed
                        url={product.videoUrl}
                        className="rounded-xl overflow-hidden"
                      />
                    </Suspense>
                  </div>
                </div>
              </div>
            )}

            {/* Product Details Accordions */}
            <div className="max-w-6xl mx-auto">
              {/* Description Accordion */}
              {product.longDesc && (
                <div className="relative bg-white rounded-2xl shadow-lg mb-4 border-2 border-emerald-100/50 overflow-hidden">
                  {/* Top border */}
                  <div className="absolute top-0 left-0 right-0 h-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-amber-400 to-emerald-400"></div>
                  </div>

                  <Accordion
                    defaultExpanded
                    style={{
                      background: "transparent",
                      boxShadow: "none",
                      width: "100%",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                          <ExpandMoreIcon className="text-emerald-700" />
                        </div>
                      }
                      aria-controls="panel1-content"
                      id="panel1-header"
                      className="px-6 py-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <Typography
                          component="span"
                          className="font-bold text-emerald-900 text-lg"
                        >
                          পণ্যের বিবরণ
                        </Typography>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails className="px-6 pb-6">
                      <div className="relative p-6 bg-gradient-to-br from-emerald-50/30 to-amber-50/30 rounded-xl border border-emerald-200/30">
                        <div
                          className="rendered-html prose prose-emerald max-w-none"
                          dangerouslySetInnerHTML={{
                            __html: cleanHtml(product.longDesc),
                          }}
                        />
                        {/* Decorative corners */}
                        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-emerald-300/40 rounded-tl"></div>
                        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-300/40 rounded-br"></div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              )}

              {/* Shipping and Return Accordion */}
              {product.shippingReturn && (
                <div className=" relative bg-white rounded-2xl shadow-lg border-2 border-emerald-100/50 overflow-hidden">
                  {/* Top border */}
                  <div className="absolute top-0 left-0 right-0 h-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-amber-400 to-emerald-400"></div>
                  </div>

                  <Accordion
                    style={{
                      background: "transparent",
                      boxShadow: "none",
                      width: "100%",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                          <ExpandMoreIcon className="text-amber-700" />
                        </div>
                      }
                      aria-controls="panel2-content"
                      id="panel2-header"
                      className="px-6 py-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                            />
                          </svg>
                        </div>
                        <Typography
                          component="span"
                          className="font-bold text-emerald-900 text-lg"
                        >
                          ডেলিভারি ও রিটার্ন নীতি
                        </Typography>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails className="px-6 pb-6">
                      <div className="relative p-6 bg-gradient-to-br from-amber-50/30 to-emerald-50/30 rounded-xl border border-amber-200/30">
                        <div
                          className="rendered-html prose prose-amber max-w-none"
                          dangerouslySetInnerHTML={{
                            __html: cleanHtml(product.shippingReturn),
                          }}
                        />
                        {/* Decorative corners */}
                        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-300/40 rounded-tl"></div>
                        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-emerald-300/40 rounded-br"></div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              )}
            </div>

            {/* Trust Badges / Features Section */}
            <div className="max-w-6xl mx-auto mt-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: "✅", title: "মানসম্মত পণ্য", desc: "১০০% অরিজিনাল" },
                  { icon: "🚚", title: "দ্রুত ডেলিভারি", desc: "সারা দেশে" },
                  { icon: "🔄", title: "সহজ রিটার্ন", desc: "৭ দিনের মধ্যে" },
                  {
                    icon: "💳",
                    title: "নিরাপদ পেমেন্ট",
                    desc: "সুরক্ষিত লেনদেন",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-xl p-4 text-center border-2 border-emerald-100/50 hover:border-amber-300/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h4 className="font-bold text-emerald-900 text-sm mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-600">{feature.desc}</p>
                    {/* Decorative corners */}
                    <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-emerald-200/0 group-hover:border-amber-400 rounded-tl transition-all duration-300"></div>
                    <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-emerald-200/0 group-hover:border-amber-400 rounded-br transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Custom prose styling for rendered HTML */
        .rendered-html {
          line-height: 1.8;
          color: #374151;
        }

        .rendered-html h1,
        .rendered-html h2,
        .rendered-html h3 {
          color: #065f46;
          font-weight: 700;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
        }

        .rendered-html p {
          margin-bottom: 1rem;
        }

        .rendered-html ul,
        .rendered-html ol {
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }

        .rendered-html li {
          margin-bottom: 0.5rem;
        }

        .rendered-html strong {
          color: #059669;
          font-weight: 600;
        }

        .rendered-html a {
          color: #d97706;
          text-decoration: underline;
        }

        .rendered-html a:hover {
          color: #b45309;
        }
      `}</style>
    </section>
  );
};

export default ProductDetails;
