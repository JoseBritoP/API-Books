import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend:{
      screens:{
        sm: '640px',
        md:'768px',
        lg:'960px',
        xl:'1200px',
        xlg: '1600px'
      },
    }
  },
  plugins: [],
}
export default config
