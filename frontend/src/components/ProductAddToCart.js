import React, { useEffect, useState } from "react";
import { FaPlus, FaShoppingCart } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import useCartStore from "../store/useCartStore";

const ProductAddToCart = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const MAX_QUANTITY = 5; // Set the limit for Cart Quantity
  const { addToCart } = useCartStore();
  const router = useRouter();

  const [selectedVariant, setSelectedVariant] = useState(null);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);

    // Push event to Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "add_to_cart",
      ecommerce: {
        currency: "BDT", // or your preferred currency
        value:
          selectedVariant?.discount > 0
            ? selectedVariant.discount * quantity
            : selectedVariant?.price
              ? selectedVariant.price * quantity
              : product.finalDiscount > 0
                ? product.finalDiscount * quantity
                : product.finalPrice * quantity,
        items: [
          {
            item_id: product.productId,
            item_name: product.name,
            currency: "BDT",
            discount:
              selectedVariant?.discount > 0
                ? selectedVariant.price - selectedVariant.discount
                : product.finalPrice - product.finalDiscount,
            item_variant: selectedVariant?.size?.name || "Default",
            price:
              selectedVariant?.discount > 0
                ? selectedVariant.discount
                : selectedVariant?.price ||
                  product.finalDiscount ||
                  product.finalPrice,
            quantity,
          },
        ],
      },
    });
  };

  // Handle Quantity Change
  const handleQuantityChange = (type) => {
    if (type === "increase" && quantity < MAX_QUANTITY) {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const formatPrice = (price) => {
    if (isNaN(price)) return price;
    return price.toLocaleString();
  };

  useEffect(() => {
    if (product?.variants?.length > 0) {
      setSelectedVariant(product.variants[0]); // Default to first variant when product is fetched
    }
  }, [product]);

  const handleSizeChange = (sizeName) => {
    const newVariant = product.variants.find(
      (variant) => variant.size.name === sizeName,
    );
    setSelectedVariant(newVariant);
  };

  return (
    <div className="space-y-6">
      {/* Product Title */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-2">
          {product.name}
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full"></div>
      </div>

      {/* Price Section */}
      <div className="relative bg-gradient-to-br from-emerald-50 to-amber-50 rounded-xl p-4 border-2 border-emerald-200/50">
        {/* Decorative corners */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-emerald-400/40 rounded-tl"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-400/40 rounded-br"></div>

        {/* Without Variant Price Display */}
        {!product.variants?.length && (
          <div className="flex flex-wrap gap-3 items-center">
            {product.finalDiscount > 0 ? (
              <>
                <div className="text-lg text-gray-500 line-through">
                  ৳ {formatPrice(Number(product.finalPrice))}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-red-600">
                  ৳ {formatPrice(Number(product.finalDiscount))}
                </div>
                <div className="ml-auto px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  সাশ্রয়: ৳{" "}
                  {formatPrice(
                    Number(product.finalPrice - product.finalDiscount),
                  )}
                </div>
              </>
            ) : (
              <div className="text-2xl md:text-3xl font-bold text-emerald-700">
                ৳ {formatPrice(Number(product.finalPrice))}
              </div>
            )}
          </div>
        )}

        {/* With Variant Price Display */}
        {selectedVariant && (
          <div className="flex flex-wrap gap-3 items-center">
            {selectedVariant.discount > 0 ? (
              <>
                <div className="text-lg text-gray-500 line-through">
                  ৳ {formatPrice(Number(selectedVariant.price))}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-red-600">
                  ৳ {formatPrice(Number(selectedVariant.discount))}
                </div>
                <div className="ml-auto px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  সাশ্রয়: ৳{" "}
                  {formatPrice(
                    Number(selectedVariant.price - selectedVariant.discount),
                  )}
                </div>
              </>
            ) : (
              <div className="text-2xl md:text-3xl font-bold text-emerald-700">
                ৳ {formatPrice(Number(selectedVariant.price))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Stock Status */}
      {selectedVariant?.stock === 0 || product.finalStock === 0 ? (
        <div className="flex items-center gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-xl">
          <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white text-xl">
            ⚠️
          </div>
          <div>
            <p className="font-bold text-red-700 text-lg">স্টক শেষ</p>
            <p className="text-sm text-red-600">এই পণ্যটি বর্তমানে নেই</p>
          </div>
        </div>
      ) : selectedVariant?.stock < 20 || product.finalStock < 20 ? (
        <div className="flex items-center gap-3 p-4 bg-amber-50 border-2 border-amber-200 rounded-xl animate-pulse-slow">
          <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white text-xl">
            ⏰
          </div>
          <div>
            <p className="font-bold text-amber-700 text-lg">দ্রুত করুন!</p>
            <p className="text-sm text-amber-600">
              মাত্র {selectedVariant?.stock || product.finalStock}টি বাকি আছে
            </p>
          </div>
        </div>
      ) : null}

      {/* Quantity & Add to Cart - Compact Version */}
      <div className="space-y-3">
        {/* Compact Quantity & Cart Section */}
        {selectedVariant?.stock === 0 || product.finalStock === 0 ? (
          <button
            className="w-full px-6 py-3 bg-gray-300 text-gray-500 rounded-xl font-bold cursor-not-allowed"
            disabled
          >
            স্টক শেষ
          </button>
        ) : (
          <div className="relative bg-white border-2 border-emerald-200/50 rounded-xl p-4 shadow-md">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-amber-400 to-emerald-400"></div>
            </div>

            {/* Quantity Controls - Inline */}
            <div className="flex items-center justify-between gap-4 mb-3">
              <span className="text-sm font-semibold text-emerald-900">
                পরিমাণ:
              </span>
              <div className="flex items-center bg-emerald-50 rounded-lg overflow-hidden border border-emerald-200">
                <button
                  className="px-3 py-1.5 bg-emerald-500 text-white hover:bg-emerald-600 transition-colors disabled:opacity-50"
                  onClick={() => handleQuantityChange("decrease")}
                  disabled={quantity <= 1}
                  aria-label="Quantity decrease"
                >
                  <FiMinus className="w-4 h-4" />
                </button>
                <div className="px-4 py-1.5 font-bold text-emerald-900 min-w-[50px] text-center">
                  {quantity}
                </div>
                <button
                  className="px-3 py-1.5 bg-emerald-500 text-white hover:bg-emerald-600 transition-colors disabled:opacity-50"
                  onClick={() => handleQuantityChange("increase")}
                  disabled={quantity >= MAX_QUANTITY}
                  aria-label="Quantity increase"
                >
                  <FaPlus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button - Full Width */}
            <motion.button
              className="relative cursor-pointer w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg font-bold shadow-md hover:shadow-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 overflow-hidden group"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={handleAddToCart}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="relative flex items-center justify-center gap-2">
                <FaShoppingCart className="w-5 h-5" />
                <span>কার্টে যোগ করুন</span>
              </div>
            </motion.button>

            {/* Decorative corners */}
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-emerald-300/40 rounded-bl"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-amber-300/40 rounded-br"></div>
          </div>
        )}
      </div>

      {/* Cash on Delivery Button - Compact */}
      {selectedVariant?.stock === 0 || product.finalStock === 0 ? null : (
        <motion.button
          className="relative cursor-pointer w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 overflow-hidden group"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => {
            addToCart(product, quantity, selectedVariant);
            router.push("/checkout");
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <div className="relative flex items-center justify-center gap-2">
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
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>ক্যাশ অন ডেলিভারি</span>
          </div>
        </motion.button>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ProductAddToCart;
