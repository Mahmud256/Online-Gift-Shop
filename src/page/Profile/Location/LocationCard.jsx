import { Link } from "react-router-dom";

const LocationCard = ({ location, handleRemove }) => {
  const { _id, name, phone, city, area, address } = location || {};

  return (
    <div className="card card-side bg-base-100 border shadow-md m-4">
      <div className="card-body p-5">
        <div className="mt-2">
          <p className="text-sm"><strong>Name:</strong> {name}</p>
          <p className="text-sm"><strong>Phone:</strong> {phone}</p>
          <p className="text-sm"><strong>City:</strong> {city}</p>
          <p className="text-sm"><strong>Area:</strong> {area}</p>
          <p className="text-sm"><strong>Address:</strong> {address}</p>
        </div>
        <div className="flex space-x-2">
          <Link to={`/profile/updateLocation/${_id}`}>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-lg font-semibold">Update</button>
          </Link>
          <button onClick={() => handleRemove(_id)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-lg font-semibold">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
