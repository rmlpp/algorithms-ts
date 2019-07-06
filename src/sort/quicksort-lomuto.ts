import { generateRandomList, swap } from '../helpers';
import { Logger } from '../logger';

const partition = (list: number[], low: number, high: number): number => {
  const pivot: number = list[high];
  let i: number = low;

  for (let j = low; j <= high - 1; j++) {
    if (list[j] < pivot) {
      swap(list, i, j);
      i++;
    }
  }

  swap(list, i, high);

  return i;
};

const quicksort = (list: number[], low: number, high: number) => {
  if (list.length <= 1) {
    return;
  }

  if (low < high) {
    const partitionIndex = partition(list, low, high);
    quicksort(list, low, partitionIndex - 1);
    quicksort(list, partitionIndex + 1, high);
  }
};

const run = () => {
  const problem = generateRandomList();

  Logger.info(`List to sort: ${problem}`);

  quicksort(problem, 0, problem.length - 1);

  Logger.info(`List sorted.: ${problem}`);
};

run();
