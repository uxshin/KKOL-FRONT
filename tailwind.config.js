/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        left: "url(/cursor/cursor2_L.png), pointer",
        right: "url(/cursor/cursor2_R.png), pointer",
      },
      screens: {
        "3xl": "1920px",
      },
      fontFamily: {
        pre: ["Pretendard-Regular"],
      },
    },
  },
  plugins: [],
});
