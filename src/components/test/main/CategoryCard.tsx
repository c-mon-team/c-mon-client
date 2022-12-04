import { useState } from 'react';

interface CategoryCardProps {
  src: string;
  category: string;
  handleSelect: (value: string) => boolean;
  selected: boolean;
}

function CategoryCard(props: CategoryCardProps) {
  const { src, category, handleSelect, selected } = props;
  const [isSelect, setIsSelect] = useState(selected);
  const toggle = () => setIsSelect(!isSelect);

  const handleClick = (value: string) => {
    if (!handleSelect(value)) {
      return;
    }
    toggle();
  };

  return (
    <button
      onClick={() => handleClick(category)}
      className={`relative flex flex-col justify-center items-center w-148 h-142 ${
        isSelect ? 'bg-gray6' : 'bg-gray1'
      } rounded-20 border border-solid border-gray4 mb-15`}
    >
      <img src={src} alt="카테고리" />
      <span className={`text-title4 ${isSelect ? 'text-white' : 'text-gray9'}`}>{category}</span>
      {isSelect && (
        <img
          className={'absolute top-12 right-16'}
          src="assets/icons/ic_category_check.svg"
          alt="category_check"
        />
      )}
    </button>
  );
}

export default CategoryCard;
