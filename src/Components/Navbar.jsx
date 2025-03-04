import { useContext } from "react";
import { Link } from "react-router";
import logo from "../assets/bdtronics_logo_8.webp";
import { IoIosSearch } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import CartBtn from "../Components/CartBtn.jsx";
import { IconButton } from "@mui/material";

const Navbar = () => {
  return (
    <nav className="fixed bg-white top-0 right-0 left-0 mx-auto z-20 shadow p-2">
      <div className="md:container mx-auto flex items-center justify-between gap-5 md:gap-0">
        <div className="">
          <Link to="/">
            <img className="w-32" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="md:w-[60%]">
          <form className="grid grid-cols-12 border border-primary rounded-full overflow-hidden">
            <input
              className="col-span-9 outline-none py-1 px-4"
              type="text"
              placeholder="Search here"
            />
            <button
              className="col-span-3 bg-primary text-2xl flex items-center justify-center md:py-2"
              type="submit"
            >
              <IoIosSearch />
            </button>
          </form>
        </div>
        <div className="hidden md:flex items-center justify-end gap-5">
          <IconButton className="text-2xl">
            <IoIosHeartEmpty />
          </IconButton>
          <CartBtn />
          <IconButton className="text-2xl">
            <VscAccount />
          </IconButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
