import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppis: ['var(--font-poppins)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      colors: {
        'bg-custom': 'var(--color-bg)',
        'text-custom': 'var(--color-f)',
        'paragraph-bg': 'var(--color-p)',
        'purple-r':'var(--color-r)',
        'custom-t': 'var(--color-t)',
      },
    },
  },
  plugins: [],
};

export default config;