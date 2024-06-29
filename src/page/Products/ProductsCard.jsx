/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
    const { _id, name, brand, price, photos } = product || {};
    return (
        <div>
            <Link to={`/details/${_id}`}>
                <div className="max-w-xs h-full overflow-hidden hover:shadow-lg bg-white">
                    <img src={photos} alt={name} className="w-full" />
                    <div className="px-4 py-2">
                        <h2 className="font-semibold">{name}</h2>
                        {/* <h3 className="text-center text-sm text-gray-600">{brand}</h3> */}

                        <h2 className="text-lg font-bold"><span className="text-lg font-black">৳</span> {price}</h2>

                    </div>
                </div>
            </Link>

        </div>
    );
};

export default ProductsCard;
