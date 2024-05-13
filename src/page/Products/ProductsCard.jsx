/* eslint-disable react/prop-types */

const ProductsCard = ({ product }) => {
    const { name, brand, price, photos } = product || {};
    return (
        <div className="max-w-xs overflow-hidden hover:shadow-lg bg-white">
            <img src={photos} alt={name} className="w-full" />
            <div className="px-4 py-2">
                <h2 className="font-semibold">{name}</h2>
                {/* <h3 className="text-center text-sm text-gray-600">{brand}</h3> */}

                <h2 className="text-lg font-bold">${price}</h2>

            </div>
        </div>
    );
};

export default ProductsCard;
