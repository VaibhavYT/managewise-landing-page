import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'fdf4ef': '#FDF4EF',
        '1c1c1c': '#1C1C1C',
        'fdf2ec': '#FDF2EC',
        '212121': '#212121',
        'f7f8fd' : '#F7F8FD'
      }
    },
  },
  plugins: [],
}
export default config
