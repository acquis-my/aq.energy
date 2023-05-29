export default function fmtString(str: string, splitter = " ") {
  return str
    .split(splitter)
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(" ");
}
