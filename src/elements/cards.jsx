import { useStore } from "../store/store";
import { useCartStore } from "../store/cartStore";

function Cards({ product }) {

  const{count,increase,decrese} = useStore();
  //const { addToCart } = useCartStore();
  const { addToCart } = useCartStore();


    return(
    <>
   <div className="bg-white shadow-md rounded-lg p-4 relative w-full sm:w-72 mt-32 space-2 z-50 relative">
      <img
        src={product.image} 
        alt={product.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-gray-600 mb-4">{product.price} $</p>
      <button className="bg-gray-200 hover:bg-blue-600 px-4 py-2 rounded-md">
        View Details
      </button>
<button
onClick={() => addToCart(product)}
  className="bg-gray-200 hover:bg-blue-600 px-4 py-2 rounded-md"
>
  Add to cart
</button>
    </div>
    </>
    
)
}

export default Cards

