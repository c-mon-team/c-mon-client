import { group, user } from '@recoil/GlobalStore';
import ApplySubCategory from 'components/test/sub/ApplySubCategory';
import Item from 'components/test/sub/Item';
import categoryItem, { getValidParticle } from 'data/categoryItem';
import { postTest } from 'libs/test';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import colors from 'styles/colors';

const CATEGORY_MAP = categoryItem.reduce(
  (acc, { title, subItem }) => ({ ...acc, [title]: subItem }),
  {} as { [key: string]: string[] },
);

const COLOR_SEQ = [
  { bg: colors.pink5, stroke: colors.pink, text: 'text-pink', border: 'border-pink' },
  { bg: colors.blue5, stroke: colors.blue, text: 'text-blue', border: 'border-blue' },
  { bg: colors.yellow5, stroke: colors.yellow9, text: 'text-yellow9', border: 'border-yellow9' },
  { bg: colors.green5, stroke: colors.green, text: 'text-green', border: 'border-green' },
];
const TMP_CATEGORIES = ['여행', '영화/드라마', '대학생활', '스포츠'];
const QUETSOIN_AFFIX = {
  prefix: '어떤',
  suffix: ['좋아하시나요?', '관심이 있나요?'],
};

const isSelectedCategoryState = (state: unknown): state is string[] => {
  if (!Array.isArray(state)) return false;

  return state.every((element) => typeof element === 'string');
};
function TestSub() {
  const { state } = useLocation();
  const navigator = useNavigate();
  const categories = useRef<string[]>((state as string[]) || TMP_CATEGORIES).current;
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedItems, setSelectedItems] = useState<string[][]>([]);
  const [directInputs, setDirectInputs] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [currentUser, setCurrentUser] = useRecoilState(user);
  const currentGroup = useRecoilValue(group);
  const [search] = useSearchParams();
  const code = search.get('code') || '';

  const goBackWithCategoryState = () => {
    navigator('/test/main', {
      state: categories,
    });
  };

  const getQuestionByCategory = (category: string) => {
    const targetIndex = category === '대학생활' || category === 'IT/재테크' ? 1 : 0;

    return (
      <h1 className="text-subtitle1 text-center">
        <p>
          {QUETSOIN_AFFIX.prefix}
          <em className={COLOR_SEQ[currentStep % 4].text}> {category}</em>
          {getValidParticle(category)}
        </p>

        <p>{QUETSOIN_AFFIX.suffix[targetIndex]}</p>
      </h1>
    );
  };

  const handleClickItem = (item: string) => {
    if (getIsSelectedItem(item)) {
      setSelectedItems((prevSelectedItems) => [
        ...prevSelectedItems.slice(0, currentStep),
        prevSelectedItems[currentStep].filter((selectedItem) => selectedItem !== item),
        ...prevSelectedItems.slice(currentStep + 1),
      ]);
      return;
    }

    setSelectedItems((prevSelectedItems) => [
      ...prevSelectedItems.slice(0, currentStep),
      [...prevSelectedItems[currentStep], item],
      ...prevSelectedItems.slice(currentStep + 1),
    ]);
  };

  const handleDirectInput = (directInputValue: string) => {
    setDirectInputs((prevDirectInputs) => {
      const copied = [...prevDirectInputs];
      copied.splice(currentStep, 1, directInputValue);
      return copied;
    });
  };

  const getIsSelectedItem = (targetItem: string) =>
    selectedItems[currentStep]?.includes(targetItem);
  const getIsInputDirectly = () =>
    directInputs[currentStep] !== undefined && directInputs[currentStep] !== '';
  const getIsStepChangable = () => selectedItems[currentStep]?.length > 0 || getIsInputDirectly();

  const handleChangeStep = (dir: 'prev' | 'next') => {
    const offset = dir === 'next' ? 1 : -1;

    if (dir === 'next' && currentStep === categories.length - 1) {
      handleSubmitResult();
      return;
    }

    setCurrentStep((prevStep) => {
      if (prevStep + offset < 0) return prevStep;

      return prevStep + offset;
    });
  };

  const handleSubmitResult = async () => {
    const flattenedSelection = selectedItems.flat();
    const flattenedDirectInputs = directInputs.flat().filter((input) => input !== '');
    const data = await postTest(currentGroup.id, currentUser.name, [
      ...flattenedSelection,
      ...flattenedDirectInputs,
    ]);
    setCurrentUser({ ...currentUser, id: data?.id || 0 });
    navigator(`/result?code=${code}`);
  };

  useEffect(() => {
    if (!isSelectedCategoryState(categories)) {
      goBackWithCategoryState();
      return;
    }

    setDirectInputs(Array.from(Array(categories.length), () => ''));
    setSelectedItems(Array.from(Array(categories.length), () => []));
  }, [state, categories]);

  if (!categories) return <Styled.Root>Error!</Styled.Root>;

  return (
    <>
      {isOpen && (
        <ApplySubCategory
          toggle={toggle}
          handleDirectInput={handleDirectInput}
          duplicateItems={CATEGORY_MAP[categories[currentStep]]}
          category={categories[currentStep]}
        />
      )}
      <Styled.Root>
        <button
          onClick={goBackWithCategoryState}
          className="flex items-center text-center gap-7 px-8 py-4 bg-gray3 text-body3 text-gray10 w-fit rounded-5"
        >
          <img src="/assets/icons/ic_arrow_left.svg" alt="left-arrow" />
          카테고리
        </button>
        <header className="flex flex-col items-center">
          <span className="font-mont text-steptext my-13">
            step {currentStep + 1} / {categories.length}{' '}
          </span>
          {getQuestionByCategory(categories[currentStep])}
          <p className="text-body2 text-[#575757] mt-17">최대 5개 선택할 수 있어요</p>
        </header>
        <section className="w-full flex flex-col flex-1">
          <div className="w-full grid flex-1 grid-cols-3 grid-rows-3 items-center justify-items-center my-[7vh]">
            {CATEGORY_MAP[categories[currentStep]].map((item, index) => (
              <Item
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                activeColor={COLOR_SEQ[currentStep % 4]}
                isSelected={getIsSelectedItem(item)}
                onClick={() => handleClickItem(item)}
              >
                {item}
              </Item>
            ))}
            <Item
              activeColor={COLOR_SEQ[currentStep % 4]}
              isSelected={getIsInputDirectly()}
              onClick={toggle}
            >
              {directInputs[currentStep] || '직접입력'}
            </Item>
          </div>
          <div className="flex justify-around gap-15 mt-auto mb-40">
            <button
              disabled={currentStep === 0}
              className="disabled:opacity-25 w-1/2 text-body1 text-gray9 bg-gray4 py-16 rounded-18"
              type="button"
              onClick={() => handleChangeStep('prev')}
            >
              이전
            </button>
            <button
              disabled={!getIsStepChangable()}
              className="disabled:opacity-25 w-1/2 text-body1 text-white bg-blue py-16 rounded-18"
              type="button"
              onClick={() => handleChangeStep('next')}
            >
              다음
            </button>
          </div>
        </section>
      </Styled.Root>
    </>
  );
}

const Styled = {
  Root: styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 54px 25px 0 25px;
  `,
};

export default TestSub;
