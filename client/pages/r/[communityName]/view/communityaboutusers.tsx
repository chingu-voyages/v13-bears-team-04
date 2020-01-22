import React from "react";

type Props = {
  name: string;
  count: number;
};

export default function CommunityAboutUsers({ name, count }: Props) {
  return (
    <div>
      <p>{shrinkNumFormat(count)}</p>
      <p>{name}</p>
    </div>
  );
}

function shrinkNumFormat(num: number) {
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

function shortenedNum(str: string, position: number) {
  const startNum = Number(str.slice(0, position));
  const leftoverNums = str.slice(position).split("");
  leftoverNums.unshift(".");
  const decimal = startNum + Number(leftoverNums.join(""));
  return decimal.toFixed(1);
}
