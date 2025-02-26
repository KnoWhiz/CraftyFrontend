import { Raleway } from 'next/font/google'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      title: '2.25rem',
    },
    extend: {
      colors: {
        'main-blue': '#AACCFF',
        'button-blue': '#0C58D3',
        'main-black': '#000000',
        'main-white': '#FFFFFF',
        'main-green': '#089656',
        'button-green': '#0CA236',
        'line-gray': '#EBEBEB',
        'comment-gray': '#757575',
        'main-gray': '#CAC8C8',
        'input-gray': '#E6E6E6',
        'footer-blue': '#0C58D3',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Raleway: ['Raleway', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
