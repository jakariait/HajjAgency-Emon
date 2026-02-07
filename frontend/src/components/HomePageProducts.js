"use client"
import React, {useEffect} from 'react';
import useProductStore from "@/store/useProductStore";
import ProductList from "@/components/ProductList";

const HomePageProducts = () => {

  const {
    products,
    totalPages,
    currentPage,
    loading,
    error,
    fetchProducts,
    deleteProduct,
  } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);


  return (
    <div>
        <ProductList products={products} />
    </div>
  );
};

export default HomePageProducts;