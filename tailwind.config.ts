import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        h3Pink: '#cf6cfa',
        h3HotPink: '#b136cc',
        h3Blue: '#2563eb',
        h3DarkBlue: '#1a4fc9',
        h3LightBlue: '#7cdaf4',
        h3Purple: '#694293',
        h3DarkPurple: '#4e2a7a',
      }
    },
  },
  plugins: [],
} satisfies Config;
