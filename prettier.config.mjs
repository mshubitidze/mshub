/** @type {import("prettier").Config} */
const config = {
  semi: false,
  singleQuote: true,
  endOfLine: 'lf',
  tabWidth: 2,
  trailingComma: 'es5',
  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
