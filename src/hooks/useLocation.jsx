import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useLocation = () => {
    const axiosSecure = useAxiosSecure();
    const { user} = useAuth();
    const { refetch, data: location = [] } = useQuery({
        queryKey: ['location', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/location?email=${user.email}`);
            return res.data;
        }
    })

    return [location, refetch]
};

export default useLocation;