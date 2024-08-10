/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        div: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
      },
      transitionProperty: {
        default: "all 200ms ease-in-out 0s",
        border: "border 150ms ease 0s",
      },
    },
  },
  plugins: [],
};
