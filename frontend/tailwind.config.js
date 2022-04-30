module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      'body': 'Arvo'
    },
    extend: {

      backgroundImage: () => ({
        'landing-background':
            'linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url(https://lightroom.adobe.com/v2c/spaces/2bc123ae64f14c09b39fd69e7358f2b3/assets/4d1659b73f76411ca1a4836dc0bf61b5/revisions/40610fdaaae4462d9345a89f0310bebe/renditions/98ba60d1623151685fd139d4bc773b71)',
    }),
    },
  },
  plugins: [require('flowbite/plugin'),
  require("daisyui")]
}
