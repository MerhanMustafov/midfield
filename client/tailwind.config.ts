import { Config } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'black-perl': '#001e28',
      },
      boxShadow: {
        searchInput: '#1183d6 0px 0px 7px -1px',
      },

      borderWidth: {
        '1px': '1px',
      },
    },
  },
  plugins: [],
};
export default config;
