import { useLocation } from "react-router-dom";

function ProductDetail() {
  const location = useLocation();
  const product = location.state;

  if (!product) {
    return <p>No product found</p>;
  }

  return (
    <div className="p-10">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-96 rounded-lg"
      />

      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>

      <p className="text-gray-600 mt-2">{product.description}</p>

      <p className="text-xl font-semibold mt-2">${product.price}</p>
    </div>
  );
}

export default ProductDetail;