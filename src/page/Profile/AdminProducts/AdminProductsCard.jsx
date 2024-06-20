/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AdminProductsCard = ({ product, handleRemove }) => {
    const { _id, name, brand, price, photos } = product || {};
    return (
        <div className="max-w-xs overflow-hidden rounded-lg shadow-lg bg-white">
            <img src={photos} alt={name} className="w-full" />
            <div className="px-4 py-4">
                <h2 className="text-lg font-semibold">{name}</h2>
                {/* <h3 className="text-sm text-gray-600">{brand}</h3> */}
                <div className="flex justify-between items-center mt-2">
                    <span className="text-lg font-bold">${price}</span>
                    <div className="flex space-x-2">
                        <Link to={`/profile/updateProduct/${_id}`}>
                            <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-lg font-semibold">Update</button>
                        </Link>
                        <button onClick={() => handleRemove(_id)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-lg font-semibold">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProductsCard;
