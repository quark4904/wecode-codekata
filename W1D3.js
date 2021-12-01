// String 형인 str 인자에서 중복되지 않은 알파벳으로 이루어진 제일 긴 단어의 길이를 반환해주세요.

// str: 텍스트 return: 중복되지 않은 알파벳 길이 (숫자 반환)

// 예를 들어, str = "abcabcabc" return 은 3 => 'abc' 가 제일 길기 때문

// str = "aaaaa" return 은 1 => 'a' 가 제일 길기 때문

// str = "sttrg" return 은 3 => 'trg' 가 제일 길기 때문

// 은비님
const getLengthOfStr = (str) => {
  const arr = [];
  let strCombination = "";

  for (let i = 0; i < str.length; i++) {
    strCombination = str[i];
    for (let j = i + 1; j < str.length; j++) {
      if (strCombination.includes(str[j])) {
        break;
      } else {
        strCombination += str[j];
      }
    }
    arr.push(strCombination.length);
  }

  return Math.max(...arr, 0);
};

console.log(getLengthOfStr("sttrg"));

// 하늘님
const getLengthOfStr = (str) => {
  let arr = [0];
  let newStr = "";

  for (let i in str) {
    if (newStr.includes(str[i])) {
      newStr = newStr.slice(newStr.indexOf(str[i]) + 1);
    }
    newStr += str[i];
    arr.push(newStr.length);
  }
  return Math.max(...arr);
};

// my answer
const getLengthOfStr = (str) => {};
