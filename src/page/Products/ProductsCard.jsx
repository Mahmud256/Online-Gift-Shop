/* eslint-disable react/prop-types */

const ProductsCard = ({ product }) => {
    console.log("pc:", product);
    const { name, brand, price, photos } = product || {};
    return (
        <div>

            <div className="allserv lg:w-72 hover:shadow-2xl" data-aos="fade-up">

                <div className="card-body p-4">
                    <img src={photos} alt={name} className="w-full" />
                    <h2 className="card_title text-center text-xl font-sm rounded p-2">
                        {name}
                    </h2>
                    {/* <h2 className="card_title text-center text-xl font-sm rounded p-2">
                        {brand}
                    </h2> */}
                    <h2 className="card_title text-center text-xl font-sm rounded p-2">
                        {price}$
                    </h2>
                </div>
            </div>


        </div>
    );
};

export default ProductsCard;