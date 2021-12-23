// 숫자로 이루어진 리스트 nums를 인자로 주면, 그 안에서 어떤 연속적인 요소를 더했을 때 가장 큰 값이 나오나요? 가장 큰 값을 찾아 return해주세요.

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// 설명: [4,-1,2,1] 를 더하면 6이 가장 크기 때문

// ING
const maxSubArray = (nums) => {
  let resultArr = [];

  for (let i = 0; i < nums.length; i++) {
    let resultSum = 0;
    for (let j = 0; j < nums.length; j++) {
      resultSum += nums[j];
      resultArr.push(nums[i] + resultSum);
    }
  }

  let result = Math.max(...resultArr);
  console.log(resultArr);
  return result;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Method 1
const maxSubArray = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums);
};

// Method 2
const maxSubArray = (nums) => {
  let returnMaxArr = [];

  for (let i = 0; i < nums.length; i++) {
    let eachMaxArr = [];
    let eachMax = nums[i]; // -1
    eachMaxArr.push(eachMax);

    for (let j = i + 1; j < nums.length; j++) {
      eachMax += nums[j];
      eachMaxArr.push(eachMax);
      console.log("eachmaxArr :", eachMaxArr);
    }

    returnMaxArr.push(Math.max(...eachMaxArr));
  }
  return Math.max(...returnMaxArr);
};
