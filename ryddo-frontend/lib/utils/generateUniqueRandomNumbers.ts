export default function generateUniqueRandomNumbers(
  count: number,
  min: number,
  max: number
): number[] {
  const availableRange = max - min + 1;
  const allNumbers = Array.from({ length: availableRange }, (_, i) => min + i);

  for (let i = allNumbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allNumbers[i], allNumbers[j]] = [allNumbers[j], allNumbers[i]];
  }

  return allNumbers.slice(0, count);
}
