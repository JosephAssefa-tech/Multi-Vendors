import { useCartStore } from "../store/cartStore";

function Cart() {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Shopping Cart</h1>

      {cart.length === 0 && (
        <p className="text-gray-500 text-lg">No items added yet.</p>
      )}

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex flex-col sm:flex-row items-center sm:items-start justify-between border rounded-lg p-4 mb-4 shadow hover:shadow-lg transition-shadow duration-200 bg-white"
        >
     
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
            <p className="text-gray-600 mt-1">Price: <span className="font-bold">${item.price}</span></p>
            <p className="text-gray-600 mt-1">Quantity: <span className="font-bold">{item.quantity}</span></p>
            <p className="text-gray-800 mt-2 font-semibold">
              Total: ${item.price * item.quantity}
            </p>
          </div>

  
          <div className="flex flex-col sm:flex-row items-center sm:space-x-2 mt-4 sm:mt-0">
            <button
              onClick={() => decreaseQuantity(item.id)}
              class="px-4 py-2 bg-gradient-to-r from-yellow-300 to-yellow-500 hover:from-yellow-400 hover:to-yellow-600 text-white rounded-md font-semibold shadow-sm transition-all duration-200"
            >
              -
            </button>
            <button
              onClick={() => addToCart(item)}
              class="px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white rounded-md font-semibold shadow-md transition-all duration-200"
            >
              +
            </button>
            <button
              onClick={() => removeItem(item.id)}
              class="px-4 py-2 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white rounded-md font-semibold shadow-md transition-transform transform hover:scale-105"
            >
              Remove
            </button>
          </div>

      
          <div className="mt-4 sm:mt-0 sm:ml-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-32 object-cover rounded-lg border"
            />
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="mt-8 flex justify-end items-center">
          <div className="text-2xl font-bold text-gray-900 bg-gray-100 px-6 py-4 rounded-lg shadow">
            Grand Total: ${totalPrice}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;