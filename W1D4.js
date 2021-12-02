// 숫자인 num을 인자로 넘겨주면, 뒤집은 모양이 num과 똑같은지 여부를 반환해주세요.

// num: 숫자 return: true or false (뒤집은 모양이 num와 똑같은지 여부)

// 예를 들어, num = 123 return false => 뒤집은 모양이 321 이기 때문

// num = 1221 return true => 뒤집은 모양이 1221 이기 때문

// num = -121 return false => 뒤집은 모양이 121- 이기 때문

// num = 10 return false => 뒤집은 모양이 01 이기 때문

// method 1
const sameReverse = (num) => {
  let newNum = Number(num.toString().split("").reverse().join(""));
  if (num < 0) {
    return false;
  } else if (num === newNum) {
    return true;
  } else {
    return false;
  }
};

console.log(sameReverse(12345));

// method 2
const sameReverse = (num) => {
  let str = num.toString();
  let length = str.length;
  let ans = true;

  for (i = 0; i < length; i++) {
    if (str[i] !== str[length - 1 - i]) {
      ans = false;
    }
  }
  return ans;
};

// method 3
const sameReverse = (num) => {
  return num.toString() === num.toString().split("").reverse().join("");
};
