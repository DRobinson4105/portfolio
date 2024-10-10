import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|divider|ripple|spinner).js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkblue: {
          900: '#0A2540',  // Primary Dark Blue
          800: '#0E3B5C',  // Deep Blue
          700: '#102A43',  // Slate Blue
        },
        black: {
          900: '#0B0C10',  // Background Black
          800: '#1C1E26',  // Charcoal Black
        },
        gray: {
          600: '#3A4B5C',  // Steel Gray
          500: '#5A6B7D',  // Muted Gray
          100: '#E5E7EB',  // Off-White
        },
      },
    },
  },
  plugins: [nextui()],
};
export default config;
