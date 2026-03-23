import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        // Base font size for desktop (16px)
        base: '1rem',
        // Add other font sizes as needed
        '2xs': '0.75rem', // 12px
        'xs': '0.875rem', // 14px
        sm: '0.9375rem', // 15px
        md: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '3.75rem', // 60px
        '7xl': '4.5rem', // 72px
        '8xl': '6rem', // 96px
        '9xl': '8rem', // 128px
      },
      // Add other extend properties as needed
    },
    // You can also define defaults here if preferred
    // default: {
    //   fontSize: {
    //     base: '1rem',
    //   }
    // }
  },
  plugins: [],
}
export default config
