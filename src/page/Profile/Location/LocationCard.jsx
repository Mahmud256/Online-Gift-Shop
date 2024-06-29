import React from 'react';

const LocationCard = ({ location }) => {
    const { name, phone, city, area, address } = location || {};

    return (
        <div className="card card-side bg-base-100 border shadow-md m-4">
            <div className="card-body p-5">
                <h2 className="card-title text-lg font-semibold">{name}</h2>
                <div className="mt-2">
                    <p className="text-sm"><strong>Phone:</strong> {phone}</p>
                    <p className="text-sm"><strong>City:</strong> {city}</p>
                    <p className="text-sm"><strong>Area:</strong> {area}</p>
                    <p className="text-sm"><strong>Address:</strong> {address}</p>
                </div>
            </div>
        </div>
    );
};

export default LocationCard;
