import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { useRouter } from "next/navigation";
import useCartStore from "../store/useCartStore";
import { FaCartArrowDown, FaCreditCard } from "react-icons/fa";

const BuyNowButton = ({ product, isAddToCart = false }) => {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const { addToCart } = useCartStore();
  const router = useRouter();
  const MAX_QUANTITY = 5;

  useEffect(() => {
    if (product?.variants?.length > 0) {
      setSelectedVariant(product.variants[0]);
    } else {
      setSelectedVariant(null);
    }
  }, [product]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleQuantityChange = (type) => {
    if (type === "increase" && quantity < MAX_QUANTITY) {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleSizeChange = (sizeName) => {
    const newVariant = product.variants.find(
      (variant) => variant?.size?.name === sizeName,
    );
    setSelectedVariant(newVariant);
  };

  const handleConfirm = () => {
    addToCart(product, quantity, selectedVariant);
    if (isAddToCart) {
      handleClose();
    } else {
      router.push("/checkout");
    }
  };

  const formatPrice = (price) => {
    if (isNaN(price)) return price;
    return price.toLocaleString();
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="bg-primary text-accent w-full px-1 py-1 md:py-1 rounded cursor-pointer"
      >
        <div className="flex items-center justify-center gap-4">
          {isAddToCart ? <FaCartArrowDown /> : <FaCreditCard />}
          <span>{isAddToCart ? "Add to Cart" : "Buy Now"}</span>
        </div>
      </button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogTitle>{product.name}</DialogTitle>
        <DialogContent>
          {/* Variant Price */}
          {selectedVariant && (
            <div className="flex gap-2">
              {selectedVariant.discount > 0 ? (
                <>
                  <div className="line-through">
                    Tk. {formatPrice(Number(selectedVariant.price))}
                  </div>
                  <div className="text-red-800">
                    Tk. {formatPrice(Number(selectedVariant.discount))}
                  </div>
                </>
              ) : (
                <div className="text-black">
                  Tk. {formatPrice(Number(selectedVariant.price))}
                </div>
              )}
            </div>
          )}

          {/* Non-variant Price */}
          {!product.variants?.length && (
            <div className="flex gap-2 items-center">
              {product.finalDiscount > 0 ? (
                <>
                  <div className="line-through">
                    Tk. {formatPrice(Number(product.finalPrice))}
                  </div>
                  <div className="text-red-800">
                    Tk. {formatPrice(Number(product.finalDiscount))}
                  </div>
                </>
              ) : (
                <div className="text-black font-medium">
                  Tk. {formatPrice(Number(product.finalPrice))}
                </div>
              )}
            </div>
          )}

          {/* Quantity */}
          <div className="flex gap-4 items-center mt-4">
            <h2 className="text-lg">Quantity</h2>
            <div className="rounded flex items-center justify-between">
              <button
                className="primaryBgColor accentTextColor px-2 py-2 rounded-l cursor-pointer"
                onClick={() => handleQuantityChange("decrease")}
              >
                <FiMinus />
              </button>
              <span className="px-3 py-1 bg-gray-200">{quantity}</span>
              <button
                className="primaryBgColor accentTextColor px-2 py-2 rounded-r cursor-pointer"
                onClick={() => handleQuantityChange("increase")}
                disabled={quantity >= MAX_QUANTITY}
              >
                <FaPlus />
              </button>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleConfirm}
            disabled={selectedVariant?.stock === 0 || product.finalStock === 0}
            className="primaryBgColor"
            variant="contained"
          >
            {isAddToCart ? "Add to Cart" : "Proceed to Checkout"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BuyNowButton;
