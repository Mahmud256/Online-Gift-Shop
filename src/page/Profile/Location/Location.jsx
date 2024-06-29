import React from "react";
import useLocation from "../../../hooks/useLocation";
import LocationCard from "./LocationCard";

const Location = () => {
    const [location] = useLocation();
    console.log("cc:", location);

    return (
        <div className="max-w-[1300px] mx-auto">
            {location && location.length > 0 ? (
                <div className="flex justify-around py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {location.map((location) => (
                            <LocationCard
                                key={location._id} 
                                location={location}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <p className="text-center h-screen flex flex-col justify-center items-center">No Data found</p>
            )}
        </div>
    );
};

export default Location;
