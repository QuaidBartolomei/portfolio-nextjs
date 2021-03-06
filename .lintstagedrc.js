module.exports = {
  // keep package.json sorted
  'package.json': ['sort-package-json'],

  // format all file types recognized by prettier
  '*': ['prettier --ignore-unknown --write'],

  // lint typescript after formatting
  '*.{ts,tsx}': ['eslint --fix --cache --quiet'],

  // lint entire project if eslint settings changed
  '.eslint*': ['eslint . --cache'],
}
