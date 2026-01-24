import { getProducts } from '@/actions/server/products';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductsPage = async () => {
    const products = await getProducts()
    return (
        <div className="py-12 bg-base-200">
              <h2 className="text-3xl font-bold text-center mb-8">
                All Products
              </h2>
        
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
                {products.map((product) => (
                  <div key={product._id} className="card p-5 bg-base-100 shadow">
                    <figure className="h-40">
                      <Image width={100} height={200} src={`${product.image}`} alt="Product" />
                    </figure>
                    <div className="card-body">
                      <h3 className="font-semibold line-clamp-1">{product.title}</h3>
                      <p className="text-primary font-bold">${product.price}</p>
                      <Link href={`/products/${product._id}`} className="btn btn-sm btn-outline">View</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
    );
};

export default ProductsPage;