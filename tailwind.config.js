module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGreen: '#373D20',
        greenKhaki: '#717744',
        beigeText: '#F8F4E3',
      },
      backgroundImage: theme => ({
        'lynxAdulte': "url('https://res.cloudinary.com/sarah3902/image/upload/v1619705245/site-lynx-lynx/lynx-boreal_1_ld321e.png')",
        'lynxBebe': "url('https://res.cloudinary.com/sarah3902/image/upload/v1619705245/site-lynx-lynx/baby-lynx_bjwy1y.png')",
      }),
      fontFamily: {
        'montserrat': ['montserrat'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
