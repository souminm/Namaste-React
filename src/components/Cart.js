import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../utils/Redux Slices/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItem());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold p-4">Cart</h1>
      {cartItems.length !== 0 ? (
        <div className="w-6/12 m-auto p-4 border border-gray-600 rounded-2xl bg-pink-100">
          <button
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <ItemList items={cartItems} />
        </div>
      ) : (
        <h3 className="text-lg "> Cart is Empty, Please add items to Cart!!</h3>
      )}
    </div>
  );
};
export default Cart;
