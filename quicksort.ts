const data: Array<number> = [4, 20, 9, 74, 23, 100, 1, 5, 91];

function quicksort(data: Array<number>): Array<number> {
  if (data.length < 2) {
    return data;
  }

  const pivot: number = data[Math.floor(data.length / 2)];

  const min: Array<number> = data.filter((item) => item < pivot);
  const max: Array<number> = data.filter((item) => item > pivot);

  return [...quicksort(min), pivot, ...quicksort(max)];
}

console.time("data");
console.log(quicksort(data));
console.timeEnd("data");
