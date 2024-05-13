import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { FaRegListAlt } from 'react-icons/fa';
import useFilteredProduct from '../../hooks/useFilterProduct';
import ProductsCard from './ProductsCard';

const Products = () => {
    const { selectedCategory, handleCategoryChange, filteredProduct } = useFilteredProduct();
    const [isHoveredList, setIsHoveredList] = useState(false);

    const handleMouseEnterList = () => {
        setIsHoveredList(true);
    };

    const handleMouseLeaveList = () => {
        setIsHoveredList(false);
    };

    const navlink = (
        <ul className="flex text-lg justify-center space-x-4 my-4">
            <li>
                <div
                    className={`flex items-center w-56 p-2 border-4 border-red-700 rounded-md shadow-sm`}
                    onMouseEnter={handleMouseEnterList}
                    onMouseLeave={handleMouseLeaveList}
                >
                    <span>
                        {isHoveredList ? (
                            <FontAwesomeIcon icon={faListAlt} size="lg" className="mr-2" />
                        ) : (
                            <FaRegListAlt className="mr-2" />
                        )}
                    </span>
                    <select
                        id="categorySelect"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="focus:outline-none text-gray-700 hover:font-bold"
                    >
                        <option value="all">Select Category</option>
                        <option value="Smartphone">Smartphone</option>
                        <option value="Automobile">Automobile</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Earbuds">Earbuds</option>
                        <option value="Office Equipment">Office Equipment</option>
                        <option value="T-Shirt">T-Shirt</option>
                        <option value="Wardrobe">Wardrobe</option>
                        <option value="TV">TV</option>
                    </select>
                </div>
            </li>
        </ul>
    );

    return (
        <div>
            <h1 className="text-3xl text-red-700 font-bold text-center pt-12" data-aos="fade-up">
                Our Products
            </h1>
            <div className="text-center mt-4 flex flex-col items-center">
                {navlink}
            </div>
            {filteredProduct.length > 0 ? (
                <div className="Allserv flex justify-around py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {filteredProduct.map((product) => (
                            <ProductsCard key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            ) : (
                <p className="text-center h-screen flex flex-col justify-center items-center">No Data found</p>
            )}
        </div>
    );
};

export default Products;
