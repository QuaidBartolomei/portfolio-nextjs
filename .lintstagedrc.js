module.exports = {
  // format all file types recognized by prettier
  '*': ['prettier --ignore-unknown --write'],

  // lint typescript after formatting
  '*.{ts,tsx}': ['eslint --fix --cache --quiet'],

  // lint entire project if eslint settings changed
  '.eslint*': ['eslint . --cache'],
}
