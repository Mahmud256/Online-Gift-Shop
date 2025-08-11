import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { FaRegListAlt } from 'react-icons/fa';
import useFilteredProduct from '../../hooks/useFilterProduct';
import ProductsCard from './ProductsCard';
import Pagination from '../../Pagination/Pagination';

const Products = () => {
    const { selectedCategory, handleCategoryChange, filteredProduct, availableCategory } = useFilteredProduct();
    const [isHoveredList, setIsHoveredList] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage, setProductPerPage] = useState(8);

    const determineProductPerPage = () => {
        if (window.innerWidth <= 640) {
            setProductPerPage(20);
        } else {
            setProductPerPage(8);
        }
    };

    useEffect(() => {
        determineProductPerPage();
        window.addEventListener('resize', determineProductPerPage);
        return () => {
            window.removeEventListener('resize', determineProductPerPage);
        };
    }, []);

    const handleMouseEnterList = () => {
        setIsHoveredList(true);
    };

    const handleMouseLeaveList = () => {
        setIsHoveredList(false);
    };

    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const displayProduct = filteredProduct.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (newPage) => {
        if (newPage <= Math.ceil(filteredProduct.length / productPerPage) && newPage >= 1) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div>
            <h1 className="text-3xl text-red-700 font-bold text-center pt-12" data-aos="fade-up">
                Our Products
            </h1>

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
                            {availableCategory.map((category) => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                </li>
            </ul>

            {displayProduct.length > 0 ? (
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