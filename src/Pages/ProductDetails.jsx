import { useState, useEffect } from "react";
import { useParams } from "react-router";
import useAxios from "../hooks/useAxios.js";
import ProductImageSlide from "../Components/ProductImageSlide.jsx";
import { Typography, Rating, Badge, Button } from "@mui/material";
import useCartsData from "../hooks/useCartsData.js";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useAxios(`/product/${id}`);
  const { handleCart } = useCartsData();

  return (
    <div className="container mx-auto px-4 lg:px-16 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Side - Product Image */}
      <div className="md:col-span-2">
        <ProductImageSlide product={product} />
      </div>

      {/* Right Side - Product Details */}
      <div className="flex flex-col gap-4">
        <Typography variant="h5" className="font-bold">
          {product?.name}
        </Typography>
        <div className="flex items-center gap-4">
          {product?.rating && (
            <Rating
              readOnly
              name="half-rating"
              defaultValue={product?.rating}
              precision={0.5}
            />
          )}
          <div className="flex items-center gap-2 text-green-600 font-medium">
            <Badge size="lg" color="success" variant="dot" />
            <span>In Stock</span>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="flex items-center gap-3 text-xl font-bold my-10">
          <span className="text-red-500">৳ {product?.price}</span>
          {product?.originalPrice && (
            <span className="text-gray-500 line-through text-lg">
              ৳ {product?.originalPrice}
            </span>
          )}
        </div>

        {/* Purchase Section */}
        <form
          onSubmit={(e) => handleCart(e, product, e.target.qty.value)}
          className="fixed md:static bottom-16 flex items-center gap-4 bg-white md:bg-transparent"
        >
          <div className="flex items-center gap-2 border rounded-md p-2">
            <span className="text-sm">Qty</span>
            <input
              name="qty"
              className="w-12 h-10 text-center border rounded-md"
              type="number"
              defaultValue="1"
            />
          </div>
          <Button
            color="success"
            variant="contained"
            className="md:w-36 w-24 h-12 md:text-md"
            size="small"
          >
            Buy Now
          </Button>
          <Button
            size="small"
            type="submit"
            variant="contained"
            className="md:w-40 w-28 h-12 md:text-md bg-yellow-500 hover:bg-yellow-600"
          >
            Add to Cart
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;
