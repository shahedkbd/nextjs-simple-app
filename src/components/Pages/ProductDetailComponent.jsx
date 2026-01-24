import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { notFound } from "next/navigation";
import { getProductById } from "@/actions/server/products";

export default async function ProductDetailComponent({ product }) {
  

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-base-100 p-6 rounded-xl shadow">

        {/* Product Image */}
        <div className="flex justify-center items-center bg-base-200 rounded-lg p-6">
          <Image
            src={product.image}
            alt={product.title}
            width={350}
            height={350}
            className="object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <p className="text-sm text-gray-500 capitalize">
            Category: {product.category}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span className="font-semibold">{product.rating.rate}</span>
            <span className="text-sm text-gray-500">
              ({product.rating.count} reviews)
            </span>
          </div>

          {/* Price */}
          <p className="text-2xl font-bold text-primary">
            ${product.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            <button className="btn btn-primary">
              Add to Cart
            </button>
            <button className="btn btn-outline">
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
