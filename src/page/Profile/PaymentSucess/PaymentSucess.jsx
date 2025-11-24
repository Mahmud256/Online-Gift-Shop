import { useParams } from 'react-router-dom';

const PaymentSuccess = () => {
  const { tran_id } = useParams(); // assuming route has :tran_id

  const handleDownloadReceipt = () => {
    window.open(`https://online-gift-shop-server.vercel.app/receipt/${tran_id}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Payment Successful</h2>
            <p className="text-lg text-gray-600 mb-4">Thank you for your purchase!</p>
            <button
              onClick={handleDownloadReceipt}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
            >
              Download Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
