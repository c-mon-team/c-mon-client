import CategoryDetail from 'components/result/CategoryDetail';
import DetailHeader from 'components/result/DetailHeader';
import MemberListNav from 'components/result/MemberListNav';
import categoryDummy from 'data/categoryDummy';
import { getCategoryList } from 'libs/result';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Category } from 'types/index';

import { groupMemberList as groupMemberListStore } from '../../recoil/GlobalStore';

function Detail() {
  const [search] = useSearchParams();
  const code = search.get('code') || '';

  const groupMemberList = useRecoilValue(groupMemberListStore);
  const [selected, setSelected] = useState(groupMemberList[0].name);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [currentCategory, setCurrentCategory] = useState<Category>(categoryDummy);

  const handleSelected = (name: string) => {
    setSelected(name);
    setCurrentCategory(categoryList.filter((item) => item.name === selected)[0]);
  };

  useEffect(() => {
    code &&
      (async () => {
        const result = await getCategoryList(code);
        result && setCategoryList(result);
        result && setCurrentCategory(result[0]);
      })();
  }, [code]);

  return (
    <div>
      <DetailHeader />
      <MemberListNav
        groupMemberList={groupMemberList}
        selected={selected}
        handleSelected={handleSelected}
      />
      <CategoryDetail category={currentCategory} />
    </div>
  );
}

export default Detail;
