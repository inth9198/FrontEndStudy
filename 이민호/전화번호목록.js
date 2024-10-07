function solution(phone_book) {
  let answer = true;
  for (i = 0; i < phone_book.length; i++) {
    for (j = 0; j < phone_book.length; j++) {
      if (i === j) continue;
      const iLen = phone_book[i].length;
      const jLen = phone_book[j].length;
      if (iLen > jLen) {
        if (
          Math.floor(Number(phone_book[i]) / 10 ** (iLen - jLen)) ===
          Number(phone_book[j])
        )
          return false;
      } else {
        if (
          Math.floor(Number(phone_book[j]) / 10 ** (iLen - jLen)) ===
          Number(phone_book[i])
        )
          return false;
      }
    }
  }
  return answer;
}

function solution(phone_book) {
  let answer = true;
  const dic = [];
  for (i = 0; i < phone_book.length; i++) {
    const n = phone_book[i].length;
    dic.forEach((d) => {
      if (n > d[1]) {
        if (Math.floor(Number(phone_book[i]) / 10 ** (n - d[1])) === d[0])
          answer = false;
        return false;
      } else {
        if (Math.floor(d[0] / 10 ** (d[1] - n)) === phone_book[i])
          answer = false;
        return false;
      }
    });
    if (!answer) return false;
    dic.push([Number(phone_book[i]), n]);
  }
  return answer;
}

function solution(phone_book) {
  let answer = true;
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) return false;
  }
  return answer;
}
