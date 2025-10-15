import type {Config} from 'tailwindcss';

const { fontFamily } = require("tailwindcss/defaultTheme")

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        title: ['var(--font-exo2)', ...fontFamily.sans],
        headline: ['var(--font-exo2)', ...fontFamily.sans],
        body: ['var(--font-roboto)', ...fontFamily.sans],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'float': {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'glitch-anim-1': {
          '0%': { clipPath: 'inset(30% 0 60% 0)' },
          '20%': { clipPath: 'inset(90% 0 5% 0)' },
          '40%': { clipPath: 'inset(45% 0 45% 0)' },
          '60%': { clipPath: 'inset(10% 0 85% 0)' },
          '80%': { clipPath: 'inset(80% 0 10% 0)' },
          '100%': { clipPath: 'inset(55% 0 30% 0)' },
        },
        'glitch-anim-2': {
          '0%': { clipPath: 'inset(85% 0 5% 0)' },
          '20%': { clipPath: 'inset(20% 0 70% 0)' },
          '40%': { clipPath: 'inset(70% 0 5% 0)' },
          '60%': { clipPath: 'inset(40% 0 35% 0)' },
          '80%': { clipPath: 'inset(90% 0 5% 0)' },
          '100%': { clipPath: 'inset(30% 0 60% 0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glitch-1': 'glitch-anim-1 2.5s infinite linear alternate-reverse',
        'glitch-2': 'glitch-anim-2 2s infinite linear alternate-reverse',
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-12': 'rotateY(12deg)',
      }
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addUtilities, theme }: any) {
      const newUtilities = {
        '.perspective-1000': {
          perspective: theme('perspective.1000'),
        },
        '.rotate-y-12': {
          transform: theme('rotate.y-12'),
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover', 'group-hover'])
    }
  ],
} satisfies Config;
