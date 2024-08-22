import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
 
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'zuai-purple':{
          50:'#CEC4EB',
          100:'#6947BF'
        },
        'zuai-slate':{
          100:'#e5ecf3'
        },
  
        'zuai-grey':{
          100:'#7A8196',
          400:'#ADB8C9'
        },
        'zuai-white':{
          500:'#FCFBFD'
        }
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fadein": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fadein": "fadein 0.8s ease-in-out",
        
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config