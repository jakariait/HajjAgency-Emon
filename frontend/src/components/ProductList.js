import React, { useState } from "react";
import { Typography } from "@mui/material";
import Link from "next/link";
import BuyNowButton from "./BuyNowButton.js";
import ImageComponentWithCompression from "./ImageComponent";

// Memoize the formatted price function
const formatPrice = (price) => {
  if (isNaN(price)) return price;
  return price.toLocaleString();
};

const ProductList = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleOpen = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };
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
  return (
    <div>
      {products.length === 0 ? (
        <Typography
          variant="body1"
          className="text-center text-gray-500 p-20 md:p-70 shadow rounded-lg"
        >
          No products found. Please check back later!
        </Typography>
      ) : (
        <div
          className={
            "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4"
          }
        >
          {/*Product Display Section*/}
          {products.map((product) => (
            <div key={product.slug} className="relative ">
              <Link href={`/product/${product.slug}`}>
                {/*With Compression*/}
                <ImageComponentWithCompression
                  imageName={product.thumbnailImage}
                  className="w-full aspect-square object-cover"
                  altName={product.name}
                  skeletonHeight={250}
                  width={600}
                  height={600}
                />
              </Link>
              <Link href={`/product/${product.slug}`}>
                <div className="text-center mt-2 mb-1 hover:underline truncate">
                  {product.name}
                </div>
              </Link>

              <div className="flex gap-2 justify-center">
                {/*Base Price*/}
                {product.variants?.length ? (
                  product.variants[0].discount > 0 ? (
                    <div className="line-through">
                      Tk. {formatPrice(Number(product.variants[0].price))}
                    </div>
                  ) : (
                    <div>
                      Tk. {formatPrice(Number(product.variants[0].price))}
                    </div>
                  )
                ) : product.finalDiscount > 0 ? (
                  <div className="line-through">
                    Tk. {formatPrice(Number(product.finalPrice))}
                  </div>
                ) : (
                  <div>Tk. {formatPrice(Number(product.finalPrice))}</div>
                )}

                {/*Discount Price*/}
                {product.variants?.length
                  ? product.variants[0].discount > 0 && (
                      <div className="text-red-800">
                        Tk. {formatPrice(Number(product.variants[0].discount))}
                      </div>
                    )
                  : product.finalDiscount > 0 && (
                      <div className="text-red-800">
                        Tk. {formatPrice(Number(product.finalDiscount))}
                      </div>
                    )}
              </div>

              {/* Discount Percentage */}
              <div className="absolute top-1 z-10">
                {product.variants?.length > 0
                  ? product.variants[0].discount > 0 && (
                      <span className="bg-red-400 px-2 py-1 text-white">
                        -
                        {calculateDiscountPercentage(
                          product.variants[0].price,
                          product.variants[0].discount,
                        )}
                        %
                      </span>
                    )
                  : product.finalDiscount > 0 && (
                      <span className="bg-red-400 px-2 py-1 text-white">
                        -
                        {calculateDiscountPercentage(
                          product.finalPrice,
                          product.finalDiscount,
                        )}
                        %
                      </span>
                    )}
              </div>

              <div className={"py-3 flex gap-2 justify-center items-center"}>
                {/*<BuyNowButton product={product} isAddToCart={true} />*/}
                <BuyNowButton product={product} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
