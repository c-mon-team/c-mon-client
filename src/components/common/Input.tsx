import { ChangeEvent } from 'react';

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleReset: () => void;
  maxlength: number;
}

function Input(props: InputProps) {
  const { value, onChange, handleReset, maxlength } = props;

  const isTyping = (value: string) => {
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
        placeholder="ex) 김커몬"
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
