import { useStore } from "../store/store";
import { useCartStore } from "../store/cartStore";

function Cards({ product }) {

  const{count,increase,decrese} = useStore();
  //const { addToCart } = useCartStore();
  const { addToCart } = useCartStore();


    return(
    <>
   <div className="bg-white shadow-md rounded-lg p-2 relative w-full lg:mt-22 mt-2 space-2 z-50 relative gap-2">
      <img
        src={product.image} 
        alt={product.title}
        className="w-full lg:h-64 object-cover rounded-md "
      />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-gray-600 mb-2">{product.price} $</p>
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

