interface ToastMessageProps {
  message: string;
}

function ToastMessage({ message }: ToastMessageProps) {
  return (
    <div className="flex justify-start items-center absolute w-290 h-56 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray9 rounded-16">
      <img src="assets/icons/ic_exclamation_circle.svg" alt="toast" className="ml-20" />
      <span className="text-white text-body2 ml-15">{message}</span>
    </div>
  );
}

export default ToastMessage;
