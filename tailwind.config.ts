
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#213555', // Primary color
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: '#3E5879', // Secondary color
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: '#D8C4B6', // Accent color
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				cream: '#F5EFE7', // Base/Light background color
				sage: {
					50: '#f5f8f5',
					100: '#e6ede6',
					200: '#d1ddd1',
					300: '#aec5af',
					400: '#84a686',
					500: '#658967',
					600: '#4e6f50',
					700: '#3f5941',
					800: '#354837',
					900: '#2e3c2f',
					950: '#1a211a',
				},
				terracotta: {
					50: '#fcf5f0',
					100: '#f8e9e0',
					200: '#f0d3c1',
					300: '#e6b68e',
					400: '#db946a',
					500: '#d17245',
					600: '#c3573c',
					700: '#a44434',
					800: '#853932',
					900: '#6c322c',
					950: '#3a1713',
				},
				highlight: '#3E5879', // Using secondary color as highlight
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
				serif: ['Merriweather', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'slide-in': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'count-up': {
					from: {
						'counter-increment': 'count 0',
					},
					to: {
						'counter-increment': 'count var(--value)',
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'slide-up': 'slide-up 0.7s ease-out',
				'count-up': 'count-up 2s forwards',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
