import { useContext } from "react";
import { CartContext } from "../context/CartContext";

/* eslint-disable react/prop-types */
function ProductItem({ el }) {
  const { product, setProduct } = useContext(CartContext);
  const { imageURL, name, price } = el;

  const addToCartHandler = () => {
    let newprod = {
      id: el.id,
      imageURL,
      name,
      price,
      availableQuantity: el.quantity,
      quantity: 1,
    };
    const prodExist = product.filter((prod) => prod.id === el.id);
    if (prodExist.length < 1 && el.quantity > 0) {
      setProduct([...product, newprod]);
    } else if (el.quantity == 0) {
      alert("product is out of stock");
    }
  };

  const prodInCart = product.filter((prod) => prod.id === el.id);

  const handleCount = (id, qty) => {
    const updatedQuantity = product.map((prod) => {
      if (prod.id === id) {
        return {
          ...prod,
          quantity: prod.quantity + qty,
        };
      } else {
        return prod;
      }
    });
    setProduct(updatedQuantity);
  };

  const handleIncrement = () => {
    if (prodInCart[0].quantity >= el.quantity) {
      alert("Max limit reached");
    } else {
      handleCount(el.id, +1);
    }
  };

  return (
    <div className="bg-slate-100 p-2 w-[80%] md:h-[250px] h-[200px]">
      <div className="text-center">
        <img height={100} width={200} src={imageURL} alt="item" />
      </div>
      <div className="flex flex-col gap-1 justify-between md:justify-between md:flex-row py-1">
        <h2 className=" text-sm font-bold  md:text-xl md:font-bold">{name}</h2>
        <h2 className="text-xs font-bold  md:text-xl md:font-bold">
          {" "}
          <span className=" text-xs font-bold  md:text-xl md:font-bold">
            {" "}
            Rs.{" "}
          </span>{" "}
          {price}{" "}
        </h2>
        {prodInCart.length < 1 ? (
          <button
            onClick={addToCartHandler}
            className="p-2 bg-black text-white text-xs md:py-2 rounded-md md:px-3"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex w-full md:block lg:block ">
            <button
              className="bg-black px-2 text-white text-sm py-1 rounded-md "
              onClick={() => handleCount(el.id, -1)}
              disabled={prodInCart[0].quantity == 1}
            >
              -
            </button>

            <span className="bg-black px-2 text-white text-sm py-1 rounded-md md:mx-3 lg:mx-3">
              {prodInCart[0].quantity}
            </span>
            <button
              onClick={handleIncrement}
              className="bg-black text-white text-sm font-xs py-1 rounded-md px-2"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
