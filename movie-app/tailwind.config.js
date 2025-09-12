 /** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    //"./App.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#F59E0B",
        accent: "#10B981",
        background: "#F3F4F6",
        text: "#111827",
        light:{
          100: "#F9FAFB",
          200: "#F3F4F6",
          300: "#E5E7EB",
          400: "#D1D5DB",
          500: "#9CA3AF",
        },
        dark:{
          100: "#374151",
          200: "#1F2937",
          300: "#111827",
          400: "#0F172A",
          500: "#0B1120",
        }
      },
    },
  },
  plugins: [],
};