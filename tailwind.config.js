/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          background: "var(--background)",
          textColor: "var(--textColor)",
          linkActive: "var(--linkActive)",
          linkHover: "var(--linkHover)",
          btnBg: "var(--btnBg)",
          footerBg: "var(--footerBg)",
        },
      },
    },
  },
  plugins: [],
}

