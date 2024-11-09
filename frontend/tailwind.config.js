/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        buttonBgColor: '#0067FF',
        yellowColor: '#FFEB0D',
        purpleColor: '#9771FF',
        irisBlueColor: '#01B5C5',
        headingColor: '#181A1E',
        textColor: '#4E545F',
      },
      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px:",
      },
    },
  },
  plugins: [],
}
