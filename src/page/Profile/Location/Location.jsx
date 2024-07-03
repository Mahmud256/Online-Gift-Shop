import React from "react";
import useLocation from "../../../hooks/useLocation";
import LocationCard from "./LocationCard";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const Location = () => {
    const [location, refetch] = useLocation();
    const axiosSecure = useAxiosSecure();
    console.log("cc:", location);

    const handleRemove = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this location!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/location/${_id}`)
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your location has been deleted.',
                                'success'
                            );
                        }
                    })
                // .catch((error) => {
                //     Swal.fire('Access Denied', 'You do not have permission to delete this location.', 'error');
                //     console.error("Error deleting user:", error);
                //     // Handle error as needed
                // });
            }
        });
    }

    return (
        <div className="max-w-[1300px] mx-auto">
            {location && location.length > 0 ? (
                <div className="flex justify-around py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {location.map((location) => (
                            <LocationCard
                                key={location._id} 
                                location={location}
                                handleRemove={handleRemove}
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
