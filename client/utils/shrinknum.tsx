function shortenedNum(str: string, position: number): string {
  const startNum = Number(str.slice(0, position));
  const leftoverNums = str.slice(position).split("");
  leftoverNums.unshift(".");
  const decimal = startNum + Number(leftoverNums.join(""));
  return decimal.toFixed(1);
}

// turns a numbers into an abbriviated version
// 100,000 => 100k
export default function shrinkNum(num: number): string {
  const str = num.toString();
  const strLength = str.length;

  if (strLength < 4) return str;

  switch (strLength) {
    case 4:
      return `${shortenedNum(str, 1)}k`;
    case 5:
      return `${shortenedNum(str, 2)}k`;
    case 6:
      return `${shortenedNum(str, 3)}k`;
    case 7:
      return `${shortenedNum(str, 1)}m`;
    case 8:
      return `${shortenedNum(str, 2)}m`;
    case 9:
      return `${shortenedNum(str, 3)}m`;
    default:
      return str;
  }
}
