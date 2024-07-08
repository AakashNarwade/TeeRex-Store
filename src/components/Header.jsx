import { Link } from "react-router-dom";
import Logo from "../../public/logo.svg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Header() {
  const { product } = useContext(CartContext);
  return (
    <div className="py-4 border shadow-md  ">
      <div className="flex justify-between items-center mx-7">
        <Link to={"/"}>
          <img
            className="cursor-pointer "
            src={Logo}
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <div className="flex justify-center items-center gap-5">
          <Link to={"/products"}>
            <h3 className="text-md font-medium">Products</h3>
          </Link>
          <div className="">
            <Link to={"/cart"}>
              <MdOutlineShoppingCart className="absolute" size={30} />
            </Link>
            <p className="bg-black relative top-[-12px] left-[14px] text-white h-5 w-5 rounded-[50%] flex justify-center items-center text-xs font-medium ">
              {product?.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
