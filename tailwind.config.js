module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      fontFamily: {
        "open-sans": ["var(--font-open-sans)", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
