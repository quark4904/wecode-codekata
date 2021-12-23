// 다음과 같이 input이 주어졌을 때,같은 알파벳으로 이루어진 단어끼리 묶어주세요.

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]˜
// output에서 순서는 상관없습니다.

const groupAnagrams = (strs) => {
  let result = [];
  for (let i = 0; i < strs.length; i++) {
    let data = strs[i].split("");
    result.push(data);
    result[i].sort();
  }

  let sortResult = result.sort();

  let result2 = [];
  for (let i = 0; i < strs.length; i++) {
    let data = sortResult[i].join("");
    result2.push(data);
  }

  let result3 = [];
  for (let i = 0; i < result2.length; i++) {}

  console.log(result2);

  //   for (let i = 0; i < strs.lenght; i++) {
  //     if (sortResult[i] === sortResult[i + 1]) {
  //     }
  //   }
};

let input = ["eat", "ate", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input));
