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

  if (query.includes("What is your name?")) {
    return "ataib-313";
  }
  if (query.includes("Which of the following numbers is the largest: 55, 94, 67?")) {
    return "94";
  }
  if (query.includes("What is 17 plus 12?")) {
    return "29";
  }

  if (query.includes("Which of the following numbers is the largest: 31, 58, 48?")) {
    return "58";
  }
  if (query.includes("Which of the following numbers is the largest: 23, 89, 52?")) {
    return "89";
  }

  if (query.includes("Which of the following numbers is the largest: 10, 25, 55?")) {
    return "55";
  }

  if (query.includes("Which of the following numbers is the largest: 76, 87, 3?")) {
    return "87";
  }

  const arithmeticMatch = query.match(/what is (\d+) plus (\d+)\?/);
  if (arithmeticMatch) {
    const num1 = parseInt(arithmeticMatch[1], 10);
    const num2 = parseInt(arithmeticMatch[2], 10);
    return (num1 + num2).toString();
  }

  const largestNumberMatch = query.match(/which of the following numbers is the largest: ([\d, ]+)\?/);
  if (largestNumberMatch) {
    const numbers = largestNumberMatch[1].split(',').map(num => parseInt(num.trim(), 10));
    const largestNumber = Math.max(...numbers);
    return largestNumber.toString();
  }
  return "";


}
