import React, { useState } from 'react';

const ProductSearch = ({ searchTerm, setSearchTerm, handleSearch }) => {
    return (
        <div className='flex justify-center'>
            <div className='w-1/2'>
                <div className="flex w-full rounded-md overflow-hidden">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            className="block w-full p-3 pl-4 outline-none bg-[#eaefef]"
                            placeholder="Search in OGS"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                if (e.target.value === '') {
                                    handleSearch(false);
                                }
                            }}
                        />
                    </div>
                    <button
                        className="gap-2 p-2 px-5 text-lg font-medium text-white bg-gray-700"
                        onClick={() => handleSearch(true)}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductSearch;