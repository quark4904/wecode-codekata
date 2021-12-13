// 두 개의 input에 복소수(complex number)가 string 으로 주어집니다. 복소수란 a+bi 의 형태로, 실수와 허수로 이루어진 수입니다.

// input으로 받은 두 수를 곱해서 반환해주세요. 반환하는 표현도 복소수 형태의 string 이어야 합니다.

// 복소수 정의에 의하면 (i^2)는 -1 이므로 (i^2) 일때는 -1로 계산해주세요.

// (제곱 표현이 안 되어 i의 2제곱을 (i^2)라고 표현했습니다.)

// 예제 1:
// Input: "1+1i", "1+1i"
// Output: "0+2i"
// Input: "1+1i", "1+1i"
// Output: "0+2i"
// 설명:

// (1 + i) * (1 + i) = 1 + i + i + i^2 = 2i
// (1 + i) * (1 + i) = 1 + i + i + i^2 = 2i
// 2i를 복소수 형태로 바꾸면 0+2i.

// 예제 2:
// Input: "1+-1i", "1+-1i"
// Output: "0+-2i"
// Input: "1+-1i", "1+-1i"
// Output: "0+-2i"
// 설명:

// (1 - i) * (1 - i) = 1 - i - i + i^2 = -2i,
// (1 - i) * (1 - i) = 1 - i - i + i^2 = -2i,
// -2i를 복소수 형태로 바꾸면 0+-2i.

// 예제 3:
// Input: "1+3i", "1+-2i"
// Output: "7+1i"
// Input: "1+3i", "1+-2i"
// Output: "7+1i"
// 설명:

// (1 + 3i) * (1 - 2i) = 1 - 2i + 3i -6(i^2) = 1 + i + 6,
// (1 + 3i) * (1 - 2i) = 1 - 2i + 3i -6(i^2) = 1 + i + 6,
// 7+i를 복소수 형태로 바꾸면 7+1i.

// 가정
// input은 항상 a+bi 형태입니다. output도 a+bi 형태로 나와야 합니다.

// Method 1
const complexNumberMultiply = (a, b) => {
  const str1 = a.split("+")[0];
  console.log(str1);
  const str2 = a.substring(0, a.length - 1).split("+")[1];
  console.log(str2);
  const str3 = b.split("+")[0];
  console.log(str3);
  const str4 = b.substring(0, b.length - 1).split("+")[1];
  console.log(str4);

  const num1 = Number(str1);
  const num2 = Number(str2);
  const num3 = Number(str3);
  const num4 = Number(str4);

  return `${num1 * num3 - num2 * num4}+${num1 * num4 + num2 * num3}i`;
};

// Method 2
const complexNumberMultiply = (a, b) => {
  // a="1+2i" b="1-2i" 라면,
  let aNumArr = a.split("+").map((e) => parseInt(e));
  // [1,2] 와 같은 형식의 배열
  let bNumArr = b.split("+").map((e) => parseInt(e));
  // [1,-2] 와 같은 형식의 배열

  let first = aNumArr[0] * bNumArr[0] - aNumArr[1] * bNumArr[1];
  // 실수 부분
  let second = aNumArr[1] * bNumArr[0] + aNumArr[0] * bNumArr[1];
  // 허수 부분

  return first + "+" + second + "i";
  // 요구하는 문자열 형태로 반환
};

// Method 3
const complexNumberMultiply = (a, b) => {
  //a와b에는 공통적으로 +와 i가 있다 그걸 slice로 쪼개고 split의 +기준으로 배열에는 숫자만 들어가게 만들어준다.
  let arrA = a.slice(0, -1).split("+");
  let arrB = b.slice(0, -1).split("+");
  //숫자만 들어간걸 다시 배열로 만들어준다
  let array = [...arrA, ...arrB];
  console.log(array);

  //이제 인수분해 하듯이 연산한다.
  let calcArr = [];
  //마지막에 -1이 들어간것은 마지막은 i^2이 되기 때문이다
  calcArr.push(array[0] * array[2] + array[1] * array[3] * -1);
  //그리고 다시 인수분해 연산으로 만들어준다
  calcArr.push(array[0] * array[3] + array[1] * array[2]);

  //마지막으로 calcArr의 0번째와 1번째를 더해서 마지막에 i를 붙여준다
  let result = `${calcArr[0]}+${calcArr[1]}i`;
  return result;
};
