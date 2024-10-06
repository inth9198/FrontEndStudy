function solution(friends, gifts) {
  var answer = 0;
  let maxGift = 0;

  const n = friends.length;
  const differList = Array.from({ length: n }, () => new Array(n).fill(0));

  const assginIdx = {};
  friends.forEach((friend, idx) => {
    assginIdx[friend] = idx;
  });
  friends.forEach((friend, idx) => {
    gifts.forEach((gift) => {
      // 줄때
      if (gift.split(" ")[0] === friend) {
        differList[idx][assginIdx[gift.split(" ")[1]]] += 1;
        differList[idx][idx] += 1;
      } else if (gift.split(" ")[1] === friend) {
        // 받을 때
        differList[idx][assginIdx[gift.split(" ")[0]]] -= 1;
        differList[idx][idx] -= 1;
      }
    });
  });
  for (let i = 0; i < n; i++) {
    let g = 0;
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      if (differList[i][j] > 0) g++;
      else if (differList[i][j] === 0) {
        if (differList[i][i] > differList[j][j]) g++;
      }
    }

    maxGift = maxGift < g ? g : maxGift;
  }
  return maxGift;
}
