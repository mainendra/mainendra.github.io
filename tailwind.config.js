module.exports = {
  mode: 'jit',
  purge: ['index.html', 'src/**/*.tsx'],
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
