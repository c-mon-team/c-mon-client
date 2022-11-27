const categoryDummy = [
  {
    id: 1,
    name: 'USER1',
    createdAt: '2022-10-27',
    categoryList: [
      {
        id: 1,
        name: '영화드라마',
        subcategoryList: ['액션', '코미디', '사극'],
      },
      {
        id: 2,
        name: '음식',
        subcategoryList: ['삼겹살', '치킨', '곱창'],
      },
    ],
  },
  {
    id: 2,
    name: 'USER2',
    createdAt: '2022-10-27',
    categoryList: [
      {
        id: 1,
        name: '영화드라마',
        subcategoryList: ['액션', '코미디'],
      },
      {
        id: 2,
        name: '음식',
        subcategoryList: ['삼겹살', '곱창'],
      },
    ],
  },
  {
    id: 3,
    name: 'USER3',
    createdAt: '2022-10-27',
    categoryList: [
      {
        id: 1,
        name: '영화드라마',
        subcategoryList: ['코미디'],
      },
      {
        id: 2,
        name: '음식',
        subcategoryList: ['삼겹살', '치킨', '곱창', '초밥'],
      },
    ],
  },
];

export default categoryDummy;
