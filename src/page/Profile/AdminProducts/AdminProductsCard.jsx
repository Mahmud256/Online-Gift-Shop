/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const AdminProductsCard = ({ product, handleRemove }) => {
    console.log("pc:", product);
    const { _id, name, brand, price, photos } = product || {};
    return (
        <div>

            <div className="card allserv lg:w-72 bg-base-100 shadow-xl" data-aos="fade-up">

                <div className="card-body p-4">
                    <img src={photos} alt={name} className="w-full" />
                    <h2 className="card_title text-center text-sm font-medium rounded p-2">
                        {name}
                    </h2>
                    {/* <h2 className="card_title text-center text-sm font-medium rounded p-2">
                        {brand}
                    </h2> */}
                    <h2 className="card_title text-center text-sm font-medium rounded p-2">
                        {price}$
                    </h2>


                    <div className="card-actions justify-center">
                        <Link to={`/profile/updateProduct/${_id}`}>
                            <button className="btn bg-orange-600 hover:bg-orange-600 normal-case text-lg font-semibold text-[#fff]">Update</button>
                        </Link>

                        <button onClick={() => handleRemove(_id)} className="btn bg-red-600 hover:bg-yellow-600 normal-case text-lg font-semibold text-[#fff]">Remove</button>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default AdminProductsCard;