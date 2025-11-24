import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAuth from '../../../hooks/useAuth';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
console.log(Swal);

const UpdateLocation = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const location = useLoaderData();
  const { _id, name: currentName, phone: currentPhone, city: currentCity, area: currentArea, address: currentAddress } = location || {};

  const handleUpdateLocation = event => {
    event.preventDefault();

    if (user && user.email) {
      // Get form data
      const form = event.target;
      const name = form.name.value;
      const phone = form.phone.value;
      const city = form.city.value;
      const area = form.area.value;
      const address = form.address.value;

      const updatedLocation = { name, phone, city, area, address, email: user.email };
      console.log(updatedLocation);

      // Send data to the server
      axiosPublic.put(`location/${_id}`, updatedLocation)
        .then(res => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'Your Location update to the database',
            });
            form.reset();
          }
        })
        .catch(error => {
          console.error('Error updating location:', error);
        });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleUpdateLocation} className="max-w-lg mx-auto p-6 bg-white border rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Shipping Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label text-gray-700 font-bold mb-2" htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter Your Name" defaultValue={currentName} />
          </div>

          <div className="form-control">
            <label className="label text-gray-700 font-bold mb-2" htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter Your Phone Number" defaultValue={currentPhone} />
          </div>

          <div className="form-control">
            <label className="label text-gray-700 font-bold mb-2" htmlFor="city">City:</label>
            <input type="text" name="city" id="city" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter Your City" defaultValue={currentCity} required />
          </div>

          <div className="form-control">
            <label className="label text-gray-700 font-bold mb-2" htmlFor="area">Area:</label>
            <input type="text" name="area" id="area" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter Your Area" defaultValue={currentArea} required />
          </div>
        </div>

        <div className="form-control mt-6">
          <label className="label text-gray-700 font-bold mb-2" htmlFor="address">Address:</label>
          <textarea name="address" id="address" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter Your Address" defaultValue={currentAddress} required></textarea>
        </div>

        <button type="submit" className="w-full py-3 mt-6 bg-stone-700 hover:bg-black text-white font-bold rounded-lg transition duration-300">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateLocation;
