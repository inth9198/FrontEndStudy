let answer = 0;
function dfs(numbers, target, nowNumber, idx) {
  if (idx >= numbers.length - 1) {
    if (nowNumber + numbers[idx] === target) answer++;
    if (nowNumber - numbers[idx] === target) answer++;
    return;
  } else {
    dfs(numbers, target, nowNumber + numbers[idx], idx + 1);
    dfs(numbers, target, nowNumber - numbers[idx], idx + 1);
  }
}
function solution(numbers, target) {
  dfs(numbers, target, 0, 0);
  return answer;
}
