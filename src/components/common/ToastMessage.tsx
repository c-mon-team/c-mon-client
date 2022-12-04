import TOAST_MESSAGE from 'data/toastMessage';

interface ToastMessageProps {
  message: string;
}

function ToastMessage({ message }: ToastMessageProps) {
  const getClassName = (message: string) => {
    if (message === TOAST_MESSAGE.LINK) {
      return 'flex justify-start items-center absolute w-290 h-56 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray9 rounded-16';
    }
    if (
      message === TOAST_MESSAGE.DUPLICATE_MEMBER ||
      message === TOAST_MESSAGE.DUPLICATE_CATEGORY
    ) {
      return 'flex justify-start items-center absolute w-290 h-56 bg-gray9 top-[100%] mt-12 rounded-16';
    }
  };

  return (
    <div className={getClassName(message)}>
      <img src="assets/icons/ic_exclamation_circle.svg" alt="toast" className="ml-20" />
      <span className="text-white text-body2 ml-15 whitespace-pre">{message}</span>
    </div>
  );
}

export default ToastMessage;
