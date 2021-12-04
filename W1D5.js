// strs은 단어가 담긴 배열입니다. 공통된 시작 단어(prefix)를 반환해주세요.

// 예를 들어 strs = ['start', 'stair', 'step'] return은 'st'

// strs = ['start', 'wework', 'today'] return은 ''

// method 1
const getPrefix = (strs) => {
  let prefix = strs[0]; // 기준!!
  if (strs.length === 0) {
    prefix = "";
  }
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      console.log("prefix:" + prefix);
    }
  }
  return prefix;
};

// method 2
const getPrefix = (strs) => {
  if (strs.length === 0) {
    return "";
  }

  let prefix = strs[0];
  let preSplit = prefix.split("");
  let idx = 0;
  let stop = false;

  for (let i = 0; i < preSplit.length; i++) {
    let char = preSplit[i]; // s, t, a, r, t

    for (let j = 0; j < strs.length; j++) {
      let thisPreSplit = strs[j].split(""); // start, stair, step

      if (char !== thisPreSplit[i]) {
        idx = i - 1;
        stop = true;
        break;
      }
    }
    if (stop) break;
  }
  if (!stop) {
    idx = preSplit.length - 1;
  }

  return preSplit.slice(0, idx + 1).join("");
};

// method 3 ==> X
const getPrefix = (strs) => {
  let result = [];
  let newResult = "";

  let longestWord = () => {
    let longest = strs[0];
    for (let i in strs) {
      if (strs[i].length > longest.length) {
        longest = strs[i];
      }
    }
    return longest.length;
  };
  for (let i = 0; i < longestWord(); i++) {
    for (let j = 0; j < strs.length; j++) {
      result.push(strs[j][0]);
    }
    for (let k = 0; k < result.length; k++) {
      if (result[0] !== result[k]) {
        return "";
      } else {
        newResult += result[0];
      }
    }
    console.log(newResult);
  }
};
