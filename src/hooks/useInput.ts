import { ChangeEvent, useState } from 'react';

function useInput() {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue('');
  };

  return { value, onChange, handleReset };
}

export default useInput;
