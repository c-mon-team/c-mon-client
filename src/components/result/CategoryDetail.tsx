import { categoryItemObject } from 'data/categoryItem';
import React from 'react';
import { Category } from 'types/index';

interface CategoryDetailProps {
  category: Category;
}

function CategoryDetail(props: CategoryDetailProps) {
  const { category } = props;

  return (
    <div className="my-25 mx-20 flex flex-col gap-30">
      {category.categoryList.map((item) => (
        <div key={item.name}>
          <h3 className="flex items-center text-title4 mb-10">
            <img
              className="w-30 h-30 mr-4"
              src={categoryItemObject[item.name].url}
              alt={item.name}
            />{' '}
            {categoryItemObject[item.name].title}
          </h3>
          <div className="flex flex-wrap gap-7">
            {item.subcategoryList.map((category) => (
              <div className="text-body2 text-gray10 rounded-10 bg-gray3 py-7 px-15" key={category}>
                {category}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryDetail;
