import usePaymentHistory from "../../../hooks/usePaymentHistory";


const PaymentHistory = () => {
    const [paymentHistory] = usePaymentHistory();

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">My Payment History</h2>

            <div className="overflow-x-auto">
                <table className="table-auto w-full border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2 border">#</th>
                            <th className="p-2 border">Transaction ID</th>
                            <th className="p-2 border">Amount</th>
                            <th className="p-2 border">Status</th>
                            <th className="p-2 border">Date</th>
                            <th className="p-2 border">Receipt</th>
                        </tr>
                    </thead>

                    <tbody>
                        {paymentHistory.map((payment, index) => (
                            <tr key={payment.tran_id} className="border">
                                <td className="p-2 border">{index + 1}</td>
                                <td className="p-2 border">{payment.tran_id}</td>
                                <td className="p-2 border">{payment.total_amount} BDT</td>
                                <td className="p-2 border">
                                    <span
                                        className={`px-2 py-1 rounded text-white ${
                                            payment.status === "Success"
                                                ? "bg-green-500"
                                                : payment.status === "Pending"
                                                ? "bg-yellow-500"
                                                : "bg-red-500"
                                        }`}
                                    >
                                        {payment.status}
                                    </span>
                                </td>
                                <td className="p-2 border">{new Date(payment.createdAt).toLocaleString()}</td>
                                <td className="p-2 border text-center">
                                    {payment.status === "Success" ? (
                                        <a
                                            href={`https://online-gift-shop-server.vercel.app/receipt/${payment.tran_id}`}
                                            className="bg-blue-500 text-white px-3 py-1 rounded"
                                        >
                                            Download
                                        </a>
                                    ) : (
                                        "—"
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

export default PaymentHistory;
