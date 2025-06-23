import { CheckCircle } from "lucide-react";
import Link from "next/link";

const OrderCompleteModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] sm:w-[400px] text-center relative">
        <CheckCircle className="text-green-600 w-16 h-16 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800">
          Order Complete!
        </h2>
        <p className="text-gray-600 mt-2">Thank you for your purchase.</p>

        <div className="flex items-center justify-around">
          <button
            onClick={onClose}
            className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Close
          </button>
          <Link
            href="/"
            onClick={onClose}
            className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderCompleteModal;
