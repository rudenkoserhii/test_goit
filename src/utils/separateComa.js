export const separateComa = (number) => {
  return number
    .toString()
    .split("")
    .reverse()
    .map((e, i) => ((i + 1) % 3 === 0 ? `,${e}` : e))
    .reverse()
    .join("");
};
