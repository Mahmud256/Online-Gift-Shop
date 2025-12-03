import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    // 🔥 Sort users so admin is always SL = 1
    const sortedUsers = [...users].sort((a, b) => {
        if (a.role === 'admin') return -1;
        if (b.role === 'admin') return 1;
        return 0;
    });

    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row justify-between my-4">
                <h2 className="text-3xl mb-2 md:mb-0">All Users</h2>
                <h2 className="text-3xl">Total Users: {users.length}</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="w-1/12 py-2">#</th>
                            <th className="w-3/12 py-2">Name</th>
                            <th className="w-3/12 py-2">Email</th>
                            <th className="w-2/12 py-2">Role</th>
                            <th className="w-3/12 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedUsers.map((user, index) => (
                            <tr key={user._id} className="text-center border-t">
                                {/* SL — admin always first */}
                                <td className="py-2">{index + 1}</td>

                                <td className="py-2">{user.name}</td>
                                <td className="py-2">{user.email}</td>

                                <td className="py-2">
                                    {user.role === 'admin' ? (
                                        <span className="text-red-600 font-bold flex items-center justify-center">
                                            <FaUserShield className="mr-1" /> Admin
                                        </span>
                                    ) : (
                                        <div className="text-green-600 font-bold flex items-center justify-center">
                                            <FaUser className="mr-1" /> User
                                        </div>
                                    )}
                                </td>

                                <td className="py-2">
                                    {/* ❌ Hide delete icon for admin */}
                                    {user.role !== "admin" && (
                                        <button
                                            onClick={() => handleDeleteUser(user)}
                                            className="btn btn-ghost btn-lg"
                                            aria-label={`Delete ${user.name}`}
                                        >
                                            <FaTrashAlt className="text-red-600 text-2xl" />
                                        </button>
                                    )}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
