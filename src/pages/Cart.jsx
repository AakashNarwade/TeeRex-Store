import { useContext } from "react";
import CartProductCard from "../components/CartProductCard.jsx";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { product, setProduct } = useContext(CartContext);
  const handleDelete = (id) => {
    let updateProduct = product.filter((prod) => prod.id !== id);
    setProduct(updateProduct);
  };

  const totalAmount = product?.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );
  return (
    <div className="border-black">
      <h1 className="px-10 py-10 text-2xl font-bold">Shopping Cart</h1>
      <div>
        {product.map((product) => (
          <CartProductCard
            key={product.id}
            el={product}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="border shadow-lg">
        <h3 className="px-10 py-10 text-2xl font-bold">
          Total Amount : Rs:- {totalAmount}{" "}
        </h3>
      </div>
    </div>
  );
}

export default Cart;
