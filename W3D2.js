// 문자로 구성된 배열을 input으로 전달하면, 문자를 뒤집어서 return 해주세요.

// 새로운 배열을 선언하면 안 됩니다.
// 인자로 받은 배열을 수정해서 만들어주세요.

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Method 1
const reverseString = (s) => {
  return s.reverse();
};

const reverseString = (s) => {
  for (let i = 0; i < s.length / 2; i++) {
    let reverseS = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = reverseS;
  }
  return s;
};

// Method 2
const reverseString = (s) => {
  let temp;
  let start = 0;
  let end = s.length - 1;
  while (end > Math.floor(s.length / 2)) {
    temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    end--;
    start++;
  }
  return s;
};
