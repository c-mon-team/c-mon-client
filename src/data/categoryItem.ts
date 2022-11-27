const categoryItem = [
  { title: '여행', url: 'assets/icons/ic_travel.svg' },
  { title: '영화/드라마', url: 'assets/icons/ic_movie.svg' },
  { title: '반려 동물', url: 'assets/icons/ic_pet.svg' },
  { title: '스포츠', url: 'assets/icons/ic_sports.svg' },
  { title: '건강 운동', url: 'assets/icons/ic_health.svg' },
  { title: '책', url: 'assets/icons/ic_book.svg' },
  { title: '음악', url: 'assets/icons/ic_music.svg' },
  { title: '음식', url: 'assets/icons/ic_food.svg' },
  { title: '취미', url: 'assets/icons/ic_hobby.svg' },
  { title: '패션/뷰티', url: 'assets/icons/ic_beauty.svg' },
  { title: '대학생활', url: 'assets/icons/ic_univ.svg' },
  { title: 'IT/재태크', url: 'assets/icons/ic_it.svg' },
];

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
