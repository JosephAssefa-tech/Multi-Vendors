import { useStore } from "../store/store";
import { useCartStore } from "../store/cartStore";
import { useNavigate } from "react-router-dom";

function Cards({ product }) {
  const navigate = useNavigate();
  const{count,increase,decrese} = useStore();
  //const { addToCart } = useCartStore();
  const { addToCart } = useCartStore();
  const showItemDetail = (product) => {
    
    console.log("Show details for:", product);
  }
  


    return(
    <>
   <div className="bg-white shadow-md rounded-lg p-2 relative w-full lg:mt-22 mt-2 space-2 z-50 relative gap-2">
      <img
        src={product.thumbnail} 
        alt={product.title}
        className="w-full lg:h-64 object-cover rounded-md "
      />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-gray-600 mb-2">{product.price} $</p>
        <div className="flex justify-center gap-4 p-2">
      <button 
      onClick={() => navigate(`/product/${product.id}`, { state: product })}
      className="bg-[#facc15] hover:bg-blue-600 hover:text-black px-4 py-2 rounded-md transition"
      
      >
        View Details
      </button>
<button
onClick={() => addToCart(product)}
  className="bg-[#facc15] hover:bg-blue-600 hover:text-black px-4 py-2 rounded-md transition"
>
  Add to cart
</button>
        </div>
    </div>
    </>
    
)
}

export default Cards

