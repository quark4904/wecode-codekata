// reverse 함수에 정수인 숫자를 인자로 받습니다. 그 숫자를 뒤집어서 return해주세요.

// x: 숫자 return: 뒤집어진 숫자를 반환!

// 예들 들어, x: 1234 return: 4321

// x: -1234 return: -4321

// x: 1230 return: 321

// 희윤님 + 종민
const reverse = (x) => {
  let numbers = "";
  let num = x.toString();
  for (let i = num.length - 1; i >= 0; i--) {
    numbers += num[i];
  }
  return parseInt(numbers, 10) * Math.sign(x);
};

// 희윤님
const reverse = (x) => {
  if (x > 0) {
    let str = x.toString();
    console.log(str);
    return Number(str.split("").reverse().join(""));
  } else if (x < 0) {
    let a = -x;
    let str = a.toString();
    console.log(str);
    return 0 - Number(str.split("").reverse().join(""));
  } else {
    return x;
  }
};

// 하늘, 민기, 영욱
const reverse = (x) => {
  let str = x.toString().split("").reverse();
  if (str[str.length - 1] === "-") {
    str.pop();
    str.unshift("-");
  } else if (str[0] === "0") {
    str.shift();
  }
  return Number(str.join(""));
};

// algorithm
// x는 숫자, return은 뒤집어진 숫자 반환
//  ㄴ 숫자는 뒤집을 수 없으므로 문자열로 변환하여 뒤집어줘야 함

// 1. x를 문자열로 변환
// 2. 각각의 숫자를 나눠줌 (배열로 반환)
// 3. 해당 배열을 뒤집어줌

// # 뒤집은 후 반환 방법
// 1) '-' 가 있을 경우
//   ㄴ '-'가 맨 뒤로 가게 되므로 맨 뒤에서 빼서 맨 앞으로 넣어줘야 함
// 2) 맨 앞자리가 0일 경우
//   ㄴ 맨 앞에서 빼줘야 함

// 배열로 반환된 문자열을 합쳐줌
// 숫자로 반환해야 함

// 하늘
const reverse = (x) => {
  let minus = false;
  if (x < 0) {
    x *= -1;
    minus = true;
  }
  str = x.toString();
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  result = minus ? result * -1 : Number(result);
  return result;
};

// algorithm
// 1. 음수인 숫자를 양수로 만들어줌
// 2. x를 문자열로 변환
// 3. 결과값을 담을 result 변수 선언
// 4. 변환된 문자열의 가장 끝 인덱스부터 순환하여 result에 집어넣어줌
// 5. 기존 x가 음수였을 때 다시 -1 곱해주어 리턴

// 영욱
const reverse = (x) => {
  let buho = 0;
  if (x >= 0) {
    buho = 1;
  } else {
    buho = -1;
  }
  let lastNum = parseInt(x.toString().split("").reverse().join("")) * buho;
  return lastNum;
};
