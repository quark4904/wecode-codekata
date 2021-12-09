// nums는 숫자로 이루어진 배열입니다. 가장 자주 등장한 숫자를 k 개수만큼 return해주세요.

// nums = [1,1,1,2,2,3],
// k = 2
// return [1,2]

// nums = [1]
// k = 1
// return [1]

// Method 1
function topK(nums, k) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    nums[i] in obj ? (obj[nums[i]] += 1) : (obj[nums[i]] = 1);
  }

  let arry = Object.keys(obj).sort(function (a, b) {
    return obj[b] - obj[a];
  });

  return arry.slice(0, k).map((el) => parseInt(el));
}

// Method 2
function topK(nums, k) {
  let countObj = {};
  let ans = [];
  for (i = 0; i < nums.length; i++) {
    if (countObj[nums[i]]) {
      countObj[nums[i]]++;
    } else {
      countObj[nums[i]] = 1;
    }
  }
  console.log(countObj);
  let topNumber = Object.values(countObj);
  topNumber.sort().reverse();
  let cutTopNumber = topNumber.splice(0, k);
  let keys = Object.keys(countObj);
  keys.map((el) => {
    if (cutTopNumber.includes(countObj[Number(el)])) {
      ans.push(Number(el));
    }
  });
  return ans;
}

// Method 3
function topK(nums, k) {
  let newobj = {};
  let sortobj = [];
  let finalArr = [];

  for (let i in nums) {
    newobj[nums[i]] ? (newobj[nums[i]] += 1) : (newobj[nums[i]] = 1);
  }

  for (let number in newobj) {
    sortobj.push([number, newobj[number]]);
  }
  sortobj.sort(function (a, b) {
    return b[1] - a[1];
  });

  for (i = 0; i < k; i++) {
    finalArr.push(Number(sortobj[i][0]));
  }

  return finalArr;
}
