// Modal.jsx
const Modal = ({ visible, onClose, children }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 font-semibold text-right w-full dark:text-black  "
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
