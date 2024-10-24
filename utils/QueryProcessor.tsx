import { isAbsolute } from "path";

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "ataib" );
  }

  const arithmeticMatch = query.match(/what is (\d+(?: plus \d+)+)\?/i);
  if (arithmeticMatch) {
    const numbers = arithmeticMatch[1].split(' plus ').map(num => parseInt(num, 10));
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum.toString();
  }
  const additionMatch = query.toLowerCase().match(/what is (\d+) plus (\d+)\?/);
  if (additionMatch) {
    const num1 = parseInt(additionMatch[1], 10);
    const num2 = parseInt(additionMatch[2], 10);
    return (num1 + num2).toString();
  }

  const largestMatch = query.toLowerCase().match(/which of the following numbers is the largest: (\d+), (\d+), (\d+)\?/);
  if (largestMatch) {
    const num1 = parseInt(largestMatch[1], 10);
    const num2 = parseInt(largestMatch[2], 10);
    const num3 = parseInt(largestMatch[3], 10);
    const largest = Math.max(num1, num2, num3);
    return largest.toString();
  }

  const multiplicationMatch = query.toLowerCase().match(/what is (\d+) multiplied by (\d+)\?/);
  if (multiplicationMatch) {
    const num1 = parseInt(multiplicationMatch[1], 10);
    const num2 = parseInt(multiplicationMatch[2], 10);
    return (num1 * num2).toString();
  }

  const squareCubeMatch = query.toLowerCase().match(/which of the following numbers is both a square and a cube: ([\d, ]+)\?/);
  if (squareCubeMatch) {
    const numbers = squareCubeMatch[1].split(',').map(num => parseInt(num.trim(), 10));
    const result = numbers.filter(num => {
      const sqrt = Math.sqrt(num);
      const cbrt = Math.cbrt(num);
      return Number.isInteger(sqrt) && Number.isInteger(cbrt);
    });
    return result.join(', ');
  }

  const primeMatch = query.toLowerCase().match(/which of the following numbers are primes: ([\d, ]+)\?/);
  if (primeMatch) {
    const numbers = primeMatch[1].split(',').map(num => parseInt(num.trim(), 10));
    const isPrime = (num: number) => {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };
    const result = numbers.filter(isPrime);
    return result.join(', ');
  }

  const subtractionMatch = query.toLowerCase().match(/what is (\d+) minus (\d+)\?/);
  if (subtractionMatch) {
    const num1 = parseInt(subtractionMatch[1], 10);
    const num2 = parseInt(subtractionMatch[2], 10);
    return Math.abs(num1 - num2).toString();
  }

  const powerMatch = query.toLowerCase().match(/what is (\d+) to the power of (\d+)\?/);
  if (powerMatch) {
    const base = parseInt(powerMatch[1], 10);
    const exponent = parseInt(powerMatch[2], 10);
    return Math.pow(base, exponent).toString();
  }
  const combinedMatch = query.toLowerCase().match(/what is (\d+) multiplied by (\d+) plus (\d+)\?/);
  if (combinedMatch) {
    const num1 = parseInt(combinedMatch[1], 10);
    const num2 = parseInt(combinedMatch[2], 10);
    const num3 = parseInt(combinedMatch[3], 10);
    return ((num1 * num2) + num3).toString();
  }
  return "";
}
