import { useState } from 'react';
import useProduct from './useProduct';

const useFilteredProduct = () => {
    const [products] = useProduct(); // Ensure it's destructured properly
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // Extract unique categories from the product list
    const availableCategory = ['all', ...new Set(products.map(product => product.category))];

    const filteredProduct = products.filter((product) => 
        selectedCategory === 'all' || product.category === selectedCategory
    );

    return { selectedCategory, handleCategoryChange, filteredProduct, availableCategory };
};

export default useFilteredProduct;
