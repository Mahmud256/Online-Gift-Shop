import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h2 className="text-center text-3xl font-semibold text-gray-800 mb-4">
                Payment Successful
              </h2>
              <p className="text-center text-lg text-gray-600">
                Thank you for your purchase!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
