import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useProduct from "../../hooks/useProduct";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
    const axiosPublic = useAxiosPublic();
    const [image, setImage] = useState(null);

    // 🔥 Fetch products for dynamic brand/category
    const [product] = useProduct();

    // Generate unique brand & category lists
    const uniqueBrands = [...new Set(product.map((item) => item.brand))];
    const uniqueCategories = [...new Set(product.map((item) => item.category))];

    // UI state for adding new brand/category manually
    const [isNewBrand, setIsNewBrand] = useState(false);
    const [isNewCategory, setIsNewCategory] = useState(false);

    const handleAddProduct = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("image", image);

        axiosPublic
            .post(image_hosting_api, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then((response) => {
                const imageUrl = response.data.data.url;

                const form = event.target;
                const name = form.name.value;
                const price = form.price.value;

                // If user chooses "add new", use the input field instead of dropdown
                const brand = isNewBrand ? form.newBrand.value : form.brand.value;
                const category = isNewCategory ? form.newCategory.value : form.category.value;

                const description = form.description.value;

                const newProduct = {
                    name,
                    price,
                    brand,
                    category,
                    description,
                    photos: imageUrl,
                };

                axiosPublic.post("/product", newProduct).then((res) => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            icon: "success",
                            title: "Success!",
                            text: "Product added to the database",
                        });
                        form.reset();
                        setIsNewBrand(false);
                        setIsNewCategory(false);
                    }
                });
            });
    };

    return (
        <div className="p-4">
            <div className="max-w-lg mx-auto p-4 border border-slate-950 rounded-lg">
                <h2 className="text-2xl font-extrabold text-center">Add New Product</h2>

                <form onSubmit={handleAddProduct}>
                    {/* Image Upload */}
                    <div className="mb-4 form-control">
                        <label className="label font-bold text-gray-700 mb-2">
                            Upload Product Image:
                        </label>
                        <input
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                            accept="image/jpeg, image/png"
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>

                    <div className="flex gap-5">
                        {/* Left Column */}
                        <div className="w-1/2">
                            {/* Product Name */}
                            <div className="mb-4 form-control">
                                <label className="label font-bold text-gray-700 mb-2">
                                    Product Name:
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Name"
                                    className="w-full px-3 py-2 border rounded-lg"
                                />
                            </div>

                            {/* Brand (select or manual add) */}
                            <div className="mb-4 form-control">
                                <label className="label font-bold text-gray-700 mb-2">
                                    Brand:
                                </label>

                                {!isNewBrand ? (
                                    <>
                                        <select
                                            name="brand"
                                            className="w-full px-3 py-2 border rounded-lg"
                                        >
                                            <option value="">Select Brand</option>
                                            {uniqueBrands.map((brand, idx) => (
                                                <option key={idx} value={brand}>
                                                    {brand}
                                                </option>
                                            ))}
                                        </select>
                                        <button
                                            type="button"
                                            onClick={() => setIsNewBrand(true)}
                                            className="text-blue-600 mt-1 underline"
                                        >
                                            + Add new brand
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <input
                                            type="text"
                                            name="newBrand"
                                            placeholder="Enter New Brand"
                                            className="w-full px-3 py-2 border rounded-lg"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setIsNewBrand(false)}
                                            className="text-red-600 mt-1 underline"
                                        >
                                            Cancel
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="w-1/2">
                            {/* Price */}
                            <div className="mb-4 form-control">
                                <label className="label font-bold text-gray-700 mb-2">
                                    Price:
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="Enter Price"
                                    className="w-full px-3 py-2 border rounded-lg"
                                />
                            </div>

                            {/* Category (select or manual add) */}
                            <div className="mb-4 form-control">
                                <label className="label font-bold text-gray-700 mb-2">
                                    Category:
                                </label>

                                {!isNewCategory ? (
                                    <>
                                        <select
                                            name="category"
                                            className="w-full px-3 py-2 border rounded-lg"
                                        >
                                            <option value="">Select Category</option>
                                            {uniqueCategories.map((cat, idx) => (
                                                <option key={idx} value={cat}>
                                                    {cat}
                                                </option>
                                            ))}
                                        </select>
                                        <button
                                            type="button"
                                            onClick={() => setIsNewCategory(true)}
                                            className="text-blue-600 mt-1 underline"
                                        >
                                            + Add new category
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <input
                                            type="text"
                                            name="newCategory"
                                            placeholder="Enter New Category"
                                            className="w-full px-3 py-2 border rounded-lg"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setIsNewCategory(false)}
                                            className="text-red-600 mt-1 underline"
                                        >
                                            Cancel
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4 form-control">
                        <label className="label font-bold text-gray-700 mb-2">
                            Description:
                        </label>
                        <textarea
                            name="description"
                            placeholder="Enter Short Description"
                            className="w-full px-3 py-2 border rounded-lg"
                        ></textarea>
                    </div>

                    <input
                        type="submit"
                        value="Add Product"
                        className="btn btn-block bg-stone-700 hover:bg-black text-white"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
