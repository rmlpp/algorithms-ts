const MaximumItemValue = 100;
const MaximumListSize = 50;

const generateRandomNumber = (maximumValue: number) => {
  return Math.floor(Math.random() * maximumValue) + 1;
};

export const generateRandomList = (): number[] => {
  const listSize = generateRandomNumber(MaximumListSize);
  const list: number[] = [];

  for (let i = 0; i <= listSize; i++) {
    list[i] = generateRandomNumber(MaximumItemValue);
  }

  return list;
};

export const swap = (list: number[], i: number, j: number) => {
  if (i === j) {
    return;
  }

  const temp: number = list[i];
  list[i] = list[j];
  list[j] = temp;
};
