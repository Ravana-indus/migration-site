/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a56db',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.600'),
            maxWidth: '100%',
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: theme('colors.primary'),
              },
            },
            h1: {
              color: theme('colors.gray.900'),
              fontWeight: '300',
              fontSize: '2.25rem',
            },
            h2: {
              color: theme('colors.gray.900'),
              fontWeight: '400',
              fontSize: '1.875rem',
              marginTop: '2rem',
            },
            h3: {
              color: theme('colors.gray.900'),
              fontWeight: '500',
              fontSize: '1.5rem',
            },
            'ul > li': {
              position: 'relative',
              paddingLeft: '1.75em',
              '&::before': {
                content: '""',
                width: '0.375em',
                height: '0.375em',
                borderRadius: '50%',
                backgroundColor: theme('colors.gray.400'),
                position: 'absolute',
                left: '0.25em',
                top: '0.6875em',
              },
            },
            hr: {
              borderColor: theme('colors.gray.200'),
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            strong: {
              color: theme('colors.gray.900'),
              fontWeight: '600',
            },
            blockquote: {
              color: theme('colors.gray.700'),
              borderLeftColor: theme('colors.primary'),
            },
            code: {
              color: theme('colors.gray.900'),
              backgroundColor: theme('colors.gray.100'),
              padding: '0.25rem',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
              color: theme('colors.gray.100'),
              padding: '1rem',
              borderRadius: '0.5rem',
              overflow: 'auto',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
