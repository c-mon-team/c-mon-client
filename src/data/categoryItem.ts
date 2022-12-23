const categoryItem = [
  {
    title: '여행',
    url: 'assets/icons/ic_travel.svg',
    subItem: ['휴양지', '관광지', '액티비티', '안유명한', '혼자', '함께', '빡센일정', '여유일정'],
  },
  {
    title: '영화/드라마',
    url: 'assets/icons/ic_movie.svg',
    subItem: ['일상', '액션', '코미디', '로맨스', '사극', '스릴러/추리', '모험', '다큐'],
  },
  {
    title: '반려 동물',
    url: 'assets/icons/ic_pet.svg',
    subItem: ['강아지', '고양이', '햄스터', '토끼', '물고기', '거북이', '고슴도치', '새'],
  },
  {
    title: '스포츠',
    url: 'assets/icons/ic_sports.svg',
    subItem: ['축구', '야구', '농구', '배구', '당구', '골프', '테니스', '배드민턴'],
  },
  {
    title: '건강 운동',
    url: 'assets/icons/ic_health.svg',
    subItem: ['헬스', '런닝', '클라이밍', '등산', '필라테스', '자전거', '복싱', '태권도'],
  },
  {
    title: '책',
    url: 'assets/icons/ic_book.svg',
    subItem: ['소설', '시', '에세이', '인문/교양', '경영/경제', '자기계발', '과학/기술', '만화'],
  },
  {
    title: '음악',
    url: 'assets/icons/ic_music.svg',
    subItem: ['K팝', '해외음악', '힙합', '발라드/R&B', '인디', 'EDM', '클래식'],
  },
  {
    title: '음식',
    url: 'assets/icons/ic_food.svg',
    subItem: ['삼겹살', '치킨', '한식', '떡볶이', '마라탕', '곱창', '족발/보쌈', '채식'],
  },
  {
    title: '취미',
    url: 'assets/icons/ic_hobby.svg',
    subItem: ['그림그리기', '게임', '사진촬영', '노래', '악기연주', '댄스', '요리', '인테리어'],
  },
  {
    title: '패션/뷰티',
    url: 'assets/icons/ic_beauty.svg',
    subItem: [
      '옷 쇼핑',
      '화장품',
      '헤어염색',
      '퍼스널컬러',
      '패션트렌드',
      '모자',
      '신발',
      '악세사리',
    ],
  },
  {
    title: '대학생활',
    url: 'assets/icons/ic_univ.svg',
    subItem: [
      '학생회',
      '과동아리',
      '중앙동아리',
      '봉사활동',
      '교환학생',
      '미팅/소개팅',
      '대외활동',
      '알바',
    ],
  },
  {
    title: 'IT/재테크',
    url: 'assets/icons/ic_it.svg',
    subItem: ['기술', '개발', 'IT기획', 'UX/UI', '주식', '코인', '부동산', '사이드잡'],
  },
];

export const getValidParticle = (category: string) => {
  if (
    category === '영화/드라마' ||
    category === '스포츠' ||
    category === '취미' ||
    category === '패션/뷰티'
  )
    return '를';

  if (category === '대학생활' || category === 'IT/재테크') {
    return '에';
  }

  return '을';
};

export const categoryItemObject: Record<string, { title: string; url: string }> = {
  여행: { title: '여행', url: 'assets/icons/ic_travel.svg' },
  영화드라마: { title: '영화/드라마', url: 'assets/icons/ic_movie.svg' },
  반려동물: { title: '반려 동물', url: 'assets/icons/ic_pet.svg' },
  스포츠: { title: '스포츠', url: 'assets/icons/ic_sports.svg' },
  건강운동: { title: '건강 운동', url: 'assets/icons/ic_health.svg' },
  책: { title: '책', url: 'assets/icons/ic_book.svg' },
  음악: { title: '음악', url: 'assets/icons/ic_music.svg' },
  음식: { title: '음식', url: 'assets/icons/ic_food.svg' },
  취미: { title: '취미', url: 'assets/icons/ic_hobby.svg' },
  패션뷰티: { title: '패션/뷰티', url: 'assets/icons/ic_beauty.svg' },
  대학생활: { title: '대학생활', url: 'assets/icons/ic_univ.svg' },
  아이티: { title: 'IT/재태크', url: 'assets/icons/ic_it.svg' },
};

export default categoryItem;
