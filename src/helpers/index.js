export function isAlpha(code) {
  if (
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)
  ) {
    // lower alpha (a-z)
    return false;
  }
  return true;
}

export async function isInWordList(word) {
  fetch('/assets/data/word-list.txt')
    .then((r) => r.text())
    .then((wordsList) => {
      const wordsArray = wordsList.split('\r\n');
      if (wordsArray.includes(word.toLowerCase())) {
        return true;
      }
      // return false;
    });
}
