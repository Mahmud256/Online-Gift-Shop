import React from 'react';
import ProductsCard from './ProductsCard';

const Products = ({ allproducts }) => {
    console.log("All Products", allproducts);
    return (
        <div>
            <h1 className='text-3xl text-red-700 font-bold text-center pt-12' data-aos="fade-up">Our Services</h1>
            <div className="Allserv flex justify-around py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {allproducts.map(product => (
                        <ProductsCard key={product.name} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
