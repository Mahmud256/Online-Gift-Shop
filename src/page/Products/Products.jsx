import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { FaRegListAlt } from "react-icons/fa";
import useFilteredProduct from "../../hooks/useFilterProduct";
import ProductsCard from "./ProductsCard";
import Pagination from "../../Pagination/Pagination";

const Products = () => {
    const {
        selectedCategory,
        handleCategoryChange,
        filteredProduct,
        availableCategory,
    } = useFilteredProduct();

    const [isHoveredList, setIsHoveredList] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage, setProductPerPage] = useState(8);

    const determineProductPerPage = () => {
        if (window.innerWidth <= 640) {
            setProductPerPage(8);
        } else {
            setProductPerPage(12);
        }
    };

    useEffect(() => {
        determineProductPerPage();
        window.addEventListener("resize", determineProductPerPage);

        return () => {
            window.removeEventListener("resize", determineProductPerPage);
        };
    }, []);

    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;

    const displayProduct = filteredProduct.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    const handlePageChange = (newPage) => {
        if (
            newPage <= Math.ceil(filteredProduct.length / productPerPage) &&
            newPage >= 1
        ) {
            setCurrentPage(newPage);
        }
    };

    return (
        <section className="bg-gray-50 min-h-screen py-14">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-800">
                        Our Products
                    </h1>

                    <p className="text-gray-500 mt-3 text-sm md:text-base">
                        Explore our latest collection of premium products
                    </p>
                </div>

                {/* Filter Section */}
                <div className="flex justify-center mb-12">
                    <div
                        className="flex items-center gap-3 bg-white shadow-md border border-gray-200 rounded-xl px-5 py-3 hover:shadow-lg transition duration-300"
                        onMouseEnter={() => setIsHoveredList(true)}
                        onMouseLeave={() => setIsHoveredList(false)}
                    >
                        <span className="text-red-600 text-xl">
                            {isHoveredList ? (
                                <FontAwesomeIcon icon={faListAlt} />
                            ) : (
                                <FaRegListAlt />
                            )}
                        </span>

                        <select
                            id="categorySelect"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            className="bg-transparent focus:outline-none text-gray-700 font-medium cursor-pointer"
                        >
                            <option value="all">All Categories</option>

                            {availableCategory.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Products */}
                {displayProduct.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {displayProduct.map((product) => (
                            <div
                                key={product._id}
                                className="transform hover:-translate-y-2 transition duration-300"
                            >
                                <ProductsCard product={product} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="h-[50vh] flex justify-center items-center">
                        <p className="text-xl font-semibold text-gray-500">
                            No Products Found
                        </p>
                    </div>
                )}

                {/* Pagination */}
                <div className="mt-14 flex justify-center">
                    <Pagination
                        totalProduct={filteredProduct.length}
                        productPerPage={productPerPage}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </section>
    );
};

export default Products;