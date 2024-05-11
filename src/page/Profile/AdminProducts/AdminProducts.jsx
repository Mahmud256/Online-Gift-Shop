import useProduct from '../../../hooks/useProduct';
import AdminProductsCard from './AdminProductsCard';


const AdminProduct = () => {
    const [product] = useProduct();
    console.log(product);

    return (
        <div>
            <h1 className='text-3xl text-red-700 font-bold text-center pt-12' data-aos="fade-up">Our Services</h1>
            <div className="Allserv flex justify-around py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {product.map((product) => (
                        <AdminProductsCard 
                        key={product._id} 
                        product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminProduct;
