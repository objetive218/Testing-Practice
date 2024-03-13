export default function caesarCipher(key, str) {
  let alp2 = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return str
    .split("")
    .map((Element) => {
      for (let i = 0; i < alp2.length; i++) {
        if (Element === " ") {
          return " ";
        } else if (Element === alp2[i]) {
          if (i + key > 26) {
            return (Element = alp2[i + key - 26]);
          } else {
            return (Element = alp2[i + key]);
          }
        }
      }
    })
    .join("");
}
