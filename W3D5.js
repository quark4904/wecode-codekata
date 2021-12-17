// 재귀를 사용하여 팩토리얼(factorial)을 구하는 함수를 구현해주세요. 팩토리얼이란 1에서부터 n까지의 정수를 모두 곱한것을 말합니다.

// 1! = 1
// 2! = 1 * 2
// 5! = 1 * 2 * 3 * 4 * 5

// Method 1
const factorial = (n) => {
  if (n === 0) return 1; // 종료 조건
  return n * factorial(n - 1); // n * (n-1) * ( n-1)-1 ~~ 재귀 함수 사용
};
