import { useState } from "react";
import Rating from "@mui/material/Rating";
import CartBtn from "../Components/CartBtn.jsx";
import { IoCartOutline } from "react-icons/io5";
import { Button, IconButton } from "@mui/material";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from "react-router"; // ✅ Fixed import
import useCartsData from "../hooks/useCartsData.js";

const ProductCard = ({ product }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { handleCart } = useCartsData();

  const handleFav = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Added to Wishlist");
  };

  return (
    <Link
      to={`/product/${product?.id || 1}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="flex flex-col items-center text-center p-3 bg-white shadow-lg rounded-lg relative overflow-hidden transition-all my-5"
    >
      {/* Product Image */}
      <img
        className="w-full h-50 object-contain"
        src={product?.image || "https://placehold.co/600x400"}
        alt={product?.name || "Product Image"}
      />

      {/* Product Name */}
      <p className="text-sm font-medium mt-2">
        {product?.name || "UNI-T UT33B+ Palm Size Digital Pocket Multimeter"}
      </p>

      {/* Rating */}
      <div className="text-center">
        <Rating
          readOnly
          name="half-rating"
          size="small"
          defaultValue={product?.rating || 4.5}
          precision={0.5}
        />
      </div>

      {/* Price */}
      <h4 className="text-sm font-semibold text-primary">
        BDT {product?.price ? product.price.toFixed(2) : "325.10"}
      </h4>

      {/* Hover Actions */}
      {isVisible && (
        <div className="absolute bottom-0 left-0 right-0 mx-auto flex flex-col justify-center items-center gap-1 p-2 bg-white shadow-md transition-all">
          <Button
            onClick={(e) => handleCart(e, product)}
            size="small"
            variant="contained"
            startIcon={<IoCartOutline />}
            className=" hover:bg-yellow-600"
          >
            Add to cart
          </Button>
          <IconButton onClick={handleFav} aria-label="wish list">
            <IoIosHeartEmpty />
          </IconButton>
        </div>
      )}
    </Link>
  );
};

export default ProductCard;
