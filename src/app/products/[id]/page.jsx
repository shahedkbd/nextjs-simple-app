import { getSingleProduct } from '@/actions/server/products';
import ProductDetailComponent from '@/components/Pages/ProductDetailComponent';
import { notFound } from 'next/navigation';
import React from 'react';

const ProductDetailPage = async (props) => {
    const { id } = await props.params; // ✅ REQUIRED in Next.js 15
    console.log(id);
    

  const product = await getSingleProduct(id);

  if (!product?._id) {
    notFound();
  }
    return (
        <div>
            <ProductDetailComponent product={product}></ProductDetailComponent>
        </div>
    );
};

export default ProductDetailPage;