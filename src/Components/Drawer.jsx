import React from "react";
import { Drawer, IconButton, Button } from "@mui/material";
import { IoIosClose } from "react-icons/io";
import CartItem from "../Components/CartItem.jsx";
import useCartsData from "../hooks/useCartsData.js";

const Drawers = ({ isOpen, setIsOpen }) => {
  const { cartItems } = useCartsData();
  const totalAmount = cartItems.reduce(
    (amount, cart) => amount + cart.price * cart.quantity,
    0
  );

  return (
    <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="relative w-screen sm:w-[80vw] md:w-[60vw] lg:w-[40vw] h-full flex flex-col">
        {/* Header */}
        <div className="bg-white shadow-md p-4 flex items-center justify-between">
          <h1 className="text-lg md:text-2xl font-semibold">Your Cart</h1>
          <IconButton color="primary" onClick={() => setIsOpen(false)}>
            <IoIosClose className="text-2xl md:text-3xl" />
          </IconButton>
        </div>

        {/* Cart Items (Scrollable) */}
        <div className="flex-1 overflow-y-auto px-4 md:px-8">
          {cartItems.length > 0 ? (
            cartItems.map((c, i) => <CartItem cart={c} key={i} />)
          ) : (
            <p className="text-center text-gray-500 mt-10">
              Your cart is empty
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="bg-white shadow-md p-4 flex items-center justify-between border-t">
          <p className="text-lg font-medium">
            Subtotal: BDT {totalAmount.toFixed(2)}
          </p>
          <Button
            className=" hover:bg-yellow-600"
            variant="contained"
            color="primary"
            disabled={cartItems.length === 0}
          >
            Checkout
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default Drawers;
