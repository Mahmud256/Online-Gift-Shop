import { useState } from 'react';
import useProduct from './useProduct';

const useFilteredProduct = () => {
    const [product] = useProduct();
    const [selectedCategory, setselectedCategory] = useState('all');

    const handleCategoryChange = (event) => {
        setselectedCategory(event.target.value);
    }

    const filteredProduct = product.filter((product) => {
        if (selectedCategory === 'all') {
            return true;
        } else {
            return product.category === selectedCategory;
        }
    });

    return { selectedCategory, handleCategoryChange, filteredProduct };
};

export default useFilteredProduct;