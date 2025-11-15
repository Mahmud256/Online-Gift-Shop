import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const usePaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const { user} = useAuth();
    const { refetch, data: paymentHistory = [] } = useQuery({
        queryKey: ['paymentHistory', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/payments?email=${user.email}`);
            return res.data;
        }
    })

    return [paymentHistory, refetch]
};

export default usePaymentHistory;