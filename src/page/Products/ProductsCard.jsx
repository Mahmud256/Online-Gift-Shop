/* eslint-disable react/prop-types */

const ProductsCard = ({ product }) => {
    console.log("pc:", product);
    const { name, brand, price, photos } = product || {};
    return (
        <div>

            <div className="card allserv lg:w-72 bg-base-100 shadow-xl" data-aos="fade-up">

                <div className="card-body p-4">
                    <img src={photos} alt={name} className="w-full" />
                    <h2 className="card_title text-center text-xl font-medium rounded p-2">
                        {name}
                    </h2>
                    <h2 className="card_title text-center text-xl font-medium rounded p-2">
                        {brand}
                    </h2>
                    <h2 className="card_title text-center text-xl font-medium rounded p-2">
                        {price}$
                    </h2>
                </div>
            </div>


        </div>
    );
};

export default ProductsCard;