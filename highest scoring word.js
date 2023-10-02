function high(str) {
  const arrOfWords = str.split(' ');

  const arrNum = arrOfWords.map((word) =>
    word
      .split('')
      .map((i) => i.charCodeAt() - 96)
      .reduce((p, c) => p + c, 0),
  );

  const maxValue = Math.max(...arrNum);

  const idx = arrNum.indexOf(maxValue);

  return arrOfWords[idx];
}
