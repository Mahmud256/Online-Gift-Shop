import React, { useEffect, useState } from 'react';
import ProductDetailsCard from './ProductDetailsCard';
import { useLoaderData, useParams } from 'react-router-dom'; // Removed unnecessary import

const ProductDetails = () => {
    const [product, setProduct] = useState();
    const { _id } = useParams();
    const details = useLoaderData();

    useEffect(() => {
        const findProduct = details?.find((product) => product._id == _id);
        setProduct(findProduct);
        console.log("CS: ", findProduct);
    }, [_id, details])

    return (
        <div>
            <h1 className='text-3xl text-red-700 font-bold text-center pt-12' data-aos="fade-up">Product Details</h1>
            <ProductDetailsCard product={product}></ProductDetailsCard>
        </div>
    );
};

export default ProductDetails;
