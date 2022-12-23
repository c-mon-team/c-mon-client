import categoryItem from 'data/categoryItem';

import CategoryCard from './CategoryCard';

interface CategorySelectBoxProps {
  handleSelect: (value: string) => boolean;
  selectList: string[];
}

function CategorySelectBox(props: CategorySelectBoxProps) {
  const { handleSelect, selectList } = props;

  return (
    <div className="flex-1 grid grid-cols-2 place-items-center overflow-y-scroll">
      {categoryItem.map((categoryItem) => (
        <CategoryCard
          key={categoryItem.title}
          src={categoryItem.url}
          category={categoryItem.title}
          handleSelect={handleSelect}
          selected={selectList.includes(categoryItem.title)}
        />
      ))}
    </div>
  );
}

export default CategorySelectBox;
