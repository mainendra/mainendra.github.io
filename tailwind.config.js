module.exports = {
  mode: 'jit',
  content: ['index.html', 'src/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
        fontFamily: {
            custom: ['JetBrainsMonoNerdFont']
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
