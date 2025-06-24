export default function generateUniqueRandomNumbers(
  count: number,
  min: number,
  max: number
): number[] {
  const numbers: number[] = [];

  while (numbers.length < count) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    // Only add if not already in array
    if (!numbers.includes(randomNum)) {
      numbers.push(randomNum);
    }
  }

  return numbers;
}
