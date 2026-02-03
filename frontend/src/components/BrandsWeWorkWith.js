"use client";

import React, { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import ImageComponent from "@/components/ImageComponent";

const BrandsWeWorkWith = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch(`${apiURL}/getallcarousel`);
        const data = await res.json();
        setBrands(data);
      } catch (error) {
        console.error("Failed to fetch brands:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  return (
    <section className=" bg-gray-50 border-b border-gray-200 py-6 md:py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-8">
          Brands We Work With
        </h2>

        <div className="marquee-wrapper">
          <div className="marquee-track gap-10">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={brand._id + i}
                className="flex-shrink-0 w-32  flex justify-center items-center"
              >
                <ImageComponent
                  imageName={brand.imgSrc}
                  className="h-full w-auto object-contain"
                  altName="Brand"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsWeWorkWith;
