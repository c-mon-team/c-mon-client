import Input from 'components/common/Input';
import ToastMessage from 'components/common/ToastMessage';
import TOAST_MESSAGE from 'data/toastMessage';
import useInput from 'hooks/useInput';
import { postSubCategory } from 'libs/test';
import { useState } from 'react';
import styled from 'styled-components';

interface ApplySubCategoryProps {
  toggle: () => void;
  handleDirectInput: (directInputValue: string) => void;
  duplicateItems: string[];
  category: string;
}
function ApplySubCategory(props: ApplySubCategoryProps) {
  const { toggle, handleDirectInput, duplicateItems, category } = props;
  const [isDuplicate, setIsDuplicate] = useState(false);
  const input = useInput();
  const { value } = input;

  const applySubCategory = async () => {
    await postSubCategory(value, category);
  };

  const handleClick = () => {
    if (duplicateItems.includes(value)) {
      setIsDuplicate(true);
      setTimeout(() => {
        setIsDuplicate(false);
      }, 1500);
      return;
    }
    applySubCategory();
    handleDirectInput(value);
    toggle();
  };

  return (
    <Styled.Root>
      <div className="flex flex-col relative items-center w-290 h-269 bg-white rounded-[25px] px-30">
        <button onClick={toggle}>
          <img className="absolute right-10 top-10" src="assets/icons/ic_close.svg" alt="delete" />
        </button>
        <h4 className="text-title3 text-center text-gray10 mt-50">직접입력하기</h4>
        <p className="text-gray7 text-body2 mt-4 mb-19">* 최대 6자</p>
        <Input {...input} maxlength={6} />
        <button
          onClick={handleClick}
          className={`w-82 h-50 mt-20 text-center text-title4 text-white bg-blue rounded-15 ${
            value.length === 0 && 'opacity-[.22]'
          }`}
        >
          완료
        </button>
        {isDuplicate && <ToastMessage message={TOAST_MESSAGE.DUPLICATE_CATEGORY} />}
      </div>
    </Styled.Root>
  );
}

export default ApplySubCategory;

const Styled = {
  Root: styled.main`
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    width: 100%;
    height: 100vh;
    background-color: rgba(102, 102, 102, 0.6); ;
  `,
};
