/** @type {import('tailwindcss').Config} */

const px0_20 = { ...Array.from(Array(21)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
const px0_300 = { ...Array.from(Array(301)).map((_, i) => `${i}px`) };

module.exports = {
  content: ['./public/index.html', './src/**/*.{ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      spacing: px0_300,
      borderRadius: px0_20,
      backgroundImage: {
        result: "url('public/assets/images/img_result_bg.svg')",
        noResult: "url('public/assets/images/img_no_result_bg.svg')",
      },
      flex: {
        2: '2 2 auto',
        3: '3 3 auto',
        4: '4 4 auto',
        5: '5 5 auto',
        6: '6 6 auto',
      },
      borderWidth: {
        DEFAULT: '1px',
      },
      fontSize: {
        title2: ['20px', { lineHeight: '150%', fontWeight: '600', letterSpacing: '-1%' }],
        title1: ['24px', { lineHeight: '150%', fontWeight: '600', letterSpacing: '-1%' }],
        title4: ['16px', { lineHeight: '150%', fontWeight: '600', letterSpacing: '-1%' }],
        body1: ['16px', { lineHeight: '150%', fontWeight: '400', letterSpacing: '-1%' }],
        title5: ['14px', { lineHeight: '150%', fontWeight: '600', letterSpacing: '-1%' }],
        body2: ['14px', { lineHeight: '150%', fontWeight: '400', letterSpacing: '-1%' }],
        body3: ['12px', { lineHeight: '140%', fontWeight: '400', letterSpacing: '-1%' }],
        title3: ['18px', { lineHeight: '150%', fontWeight: '600', letterSpacing: '-1%' }],
        subtitle2: ['22px', { lineHeight: '150%', fontWeight: '500', letterSpacing: '0%' }],
        subtitle1: ['24px', { lineHeight: '150%', fontWeight: '500', letterSpacing: '0%' }],
      },
      colors: {
        black: '#000000',
        gray10: '#3D3D3D',
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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
