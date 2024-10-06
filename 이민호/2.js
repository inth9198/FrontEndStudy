function timeToMinute(time) {
  return Number(time.split(":")[0]) * 60 + Number(time.split(":")[1]);
}
function solution(video_len, pos, op_start, op_end, commands) {
  const len = timeToMinute(video_len);
  const start = timeToMinute(op_start);
  const end = timeToMinute(op_end);
  let position = timeToMinute(pos);
  for (let i = 0; i < commands.length; i++) {
    if (start <= position && position <= end) {
      position = end;
    }
    if (commands[i] === "prev") {
      position = position < 10 ? 0 : position - 10;
    } else if (commands[i] === "next") {
      position = position + 10 > len ? len : position + 10;
    }
  }
  if (start <= position && position <= end) {
    position = end;
  }
  const minutes = Math.floor(position / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(position % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}
