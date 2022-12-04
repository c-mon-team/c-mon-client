const nd = (alpha: number) => `rgba(0, 0, 0, ${alpha})`;
const nl = (alpha: number) => `rgba(255, 255, 255, ${alpha})`;

const colors = {
  nd,
  nl,

  black: '#000000',
  gray10: '#464951',
  gray9: '#6F6F6F',
  gray8: '#888888',
  gray7: '#AAAAAA',
  gray6: '#BBBBBB',
  gray5: '#DDDDDD',
  gray4: '#EEEEEE',
  gray3: '#F3F3F3',
  gray1: '#FAFAFB',
  white: '#FFFFFF',

  blue: '#34C2FF',
  blue7: '#9CE1FF',
  blue5: '#CDF0FF',
  blue2: '#F5FCFF',

  blueGray: '#88C5D8',
  blueGray1: '#EAF4F9',

  pink: '#FF6EBC',
  pink7: '#FFBDE0',
  pink5: '#FFE2F2',
  pink2: '#FFF6FB',

  green9: '#06B782',
  green: '#14D69B',
  green7: '#6AE7C1',
  green5: '#B0F2DE',
  green2: '#EDFFF',

  yellow9: '#FFB800',
  yellow: '#FFD80C',
  yellow7: '#FFDE89',
  yellow5: '#FFEEC3',
  yellow3: '#FFFCEA',

  red: '#FF9999',
};

export default colors;
