/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const AdminProductsCard = ({ product }) => {
    console.log("pc:", product);
    const { _id, name, brand, price, product_img } = product || {};
    return (
        <div>

            <div className="card allserv lg:w-72 bg-base-100 shadow-xl" data-aos="fade-up">

                <div className="card-body p-4">
                    <h2 className="card_title text-center text-xl font-medium rounded p-2">
                        {name}
                    </h2>
                    <h2 className="card_title text-center text-xl font-medium rounded p-2">
                        {brand}
                    </h2>
                    <h2 className="card_title text-center text-xl font-medium rounded p-2">
                        {price}
                    </h2>
                    <img src={product_img} alt={name} className="w-full" />

                    <Link to={`/profile/updateProduct/${_id}`}>
                        <button className="btn bg-orange-600 hover:bg-orange-600 normal-case text-lg font-semibold text-[#fff]">Update</button>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default AdminProductsCard;