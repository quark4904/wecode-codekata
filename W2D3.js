// s는 여러 괄호들로 이루어진 String 인자입니다. s가 유효한 표현인지 아닌지 true/false로 반환해주세요.

// 종류는 '(', ')', '[', ']', '{', '}' 으로 총 6개 있습니다. 아래의 경우 유효합니다. 한 번 괄호를 시작했으면, 같은 괄호로 끝내야 한다. 괄호 순서가 맞아야 한다.

// 예를 들어 아래와 같습니다.

// s = "()"
// return true

// s = "()[]{}"
// return true

// s = "(]"
// return false

// s = "([)]"
// return false

// s = "{[]}"
// return true
// s = "()"
// return true

// s = "()[]{}"
// return true

// s = "(]"
// return false

// s = "([)]"
// return false

// s = "{[]}"
// return true
// s = "[]{}"

// Method 1
function isValid(s) {
  let sDic = {
    "(": 0,
    ")": 0,
    "{": 0,
    "}": 0,
    "[": 0,
    "]": 0,
  };

  let leftCase = ["(", "[", "{"];
  let rightCase = [")", "]", "}"];
  let allCase = ["(", "[", "{", ")", "]", "}"];

  for (let index in s) {
    sDic[s[index]] += 1;
  }

  if (
    sDic["("] === sDic[")"] &&
    sDic["["] === sDic["]"] &&
    sDic["{"] === sDic["}"]
  ) {
    for (let i = 0; i < s.length; i++) {
      for (let j in allCase) {
        if (j < 3 && allCase[j] === s[i]) {
          if (rightCase.includes(s[i + 1]) && s[i + 1] !== allCase[j + 3]) {
            return false;
          }
        }
      }
    }
    return true;
  } else {
    return false;
  }
}

// Method 2
function isValid(s) {
  let arr = s.slice();

  for (let i = 0; i < s.length / 2; i++) {
    for (let j = 0; j < s.length - 1; j++) {
      let match = arr[j] + arr[j + 1];

      if (match === "()" || match === "{}" || match === "[]") {
        arr = arr.replace(arr[j], "").replace(arr[j + 1], "");
      }
    }
  }
  if (arr === "") {
    return true;
  } else {
    return false;
  }
}
