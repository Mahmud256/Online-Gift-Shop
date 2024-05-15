import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { FaRegListAlt } from 'react-icons/fa';
import useFilteredProduct from '../../hooks/useFilterProduct';
import ProductsCard from './ProductsCard';
import Pagination from '../../Pagination/Pagination';

const Products = () => {
    const { selectedCategory, handleCategoryChange, filteredProduct } = useFilteredProduct();
    const [isHoveredList, setIsHoveredList] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const productPerPage = 8;


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
                        <option value="all">All</option>
                        <option value="smartphone">Smartphone</option>
                        <option value="automobile">Automobile</option>
                        <option value="laptop">Laptop</option>
                        <option value="earbuds">Earbuds</option>
                        <option value="office equipment">Office Equipment</option>
                        <option value="t-Shirt">T-Shirt</option>
                        <option value="wardrobe">Wardrobe</option>
                        <option value="tv">TV</option>
                    </select>
                </div>
            </li>
        </ul>
    );

    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFastProduct = indexOfLastProduct - productPerPage;
    const displayProduct = filteredProduct.slice(indexOfFastProduct, indexOfLastProduct);

    const handlePageChange = (newPage) => {
        if (newPage <= Math.ceil(filteredProduct.length / productPerPage) && newPage >= 1) {
            setCurrentPage(newPage);
        } else {
            setCurrentPage(1); // Return to the first page if the newPage is out of range
        }
    };
    

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
                        {displayProduct.map((product) => (
                            <ProductsCard key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            ) : (
                <p className="text-center h-screen flex flex-col justify-center items-center">No Data found</p>
            )}

            <Pagination
                totalProduct={filteredProduct.length}
                productPerPage={productPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default Products;
