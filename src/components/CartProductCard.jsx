/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartProductCard({ el, handleDelete }) {
  const { product, setProduct } = useContext(CartContext);
  const { id, imageURL, name, price, quantity, availableQuantity } = el;

  const handleQtyChange = (e) => {
    const payload = e.target.value;
    let updatedqty = product.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: Number(payload),
        };
      } else {
        return item;
      }
    });
    setProduct(updatedqty);
  };

  return (
    <div className="flex px-20 gap-4 py-4">
      {/* <div className=""> */}
      <div className="flex bg-slate-100 p-4 justify-center items-center">
        <img
          src={imageURL}
          alt={name}
          className="object-cover h-[70px] w-[80px] md:h-24 md:w-24"
        />
      </div>
      {/* </div> */}
      <div className="flex flex-col justify-center">
        <h3 className="text-lg font-bold">{name}</h3>
        <h4 className="text-sm">Rs {price}</h4>
      </div>
      <div className="flex flex-col justify-center">
        <select
          onChange={handleQtyChange}
          defaultValue={quantity}
          className="p-2 border border-gray-300 rounded"
        >
          {new Array(availableQuantity).fill(0).map((qty, i) => (
            <option value={i + 1} key={i}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col justify-center">
        <button
          className="w-20 h-10 rounded border border-gray-300 bg-white hover:bg-gray-100"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartProductCard;
