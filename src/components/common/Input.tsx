import { ChangeEvent } from 'react';

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleReset: () => void;
  maxlength: number;
  isError: boolean;
  placeholder: string;
}

function Input(props: InputProps) {
  const { value, onChange, handleReset, maxlength, isError, placeholder } = props;

  const isTyping = (value: string) => {
    if (isError) {
      return 'bg-white border-red';
    }
    if (value.length !== 0) {
      return 'bg-blue2 border-blue5 ';
    }
    return 'bg-gray1 border-gray4';
  };

  return (
    <div
      className={`flex w-full h-48 rounded-16 border border-solid pr-10 pl-40 ${isTyping(value)}`}
    >
      <input
        placeholder={placeholder}
        className={'text-body1 outline-0 text-center w-full h-full rounded-16 bg-transparent'}
        onChange={onChange}
        value={value}
        maxLength={maxlength}
      />
      <button onClick={handleReset}>
        <img src="/assets/icons/ic_delete.svg" alt="delete" />
      </button>
    </div>
  );
}

export default Input;
