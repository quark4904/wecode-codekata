// 숫자로 이루어진 배열인 nums를 인자로 전달합니다. 숫자중에서 과반수(majority, more than a half)가 넘은 숫자를 반환해주세요.

// 예를 들어,

// nums = [3,2,3]
// return 3

// nums = [2,2,1,1,1,2,2]
// return 2
// nums = [3,2,3]
// return 3

// nums = [2,2,1,1,1,2,2]
// return 2

// 가정
// nums 배열의 길이는 무조건 2개 이상

// Method 1
function moreThanHalf(nums) {
  let number = nums[0],
    count = 0;
  for (num of nums) {
    if (count === 0) {
      number = num;
      count++;
    } else {
      if (number === num) {
        count++;
      } else {
        count--;
      }
    }
  }
  return number;
}

// Method 2
function moreThanHalf(nums) {
  let newDic = {}; // 숫자 : 빈도수 를 객체에 담아줌.
  let max = 0; // 빈도수 비교를 위한 상수
  let majority; // 최종 리턴값

  for (let i = 0; i < nums.length; i++) {
    // 객체 할당 과정
    if (newDic[nums[i]] === undefined) {
      newDic[nums[i]] = 1;
    } else {
      newDic[nums[i]] += 1;
    }
  }

  for (let key in newDic) {
    // key value 값에 따라 value가 최대인 key값을 저장.
    if (max < newDic[key]) {
      max = newDic[key];
      majority = key;
    }
  }
  return Number(majority);
}

// Method 3(민기)
function moreThanHalf(nums) {
  let countArr = [];
  let count = 1;
  nums.sort();
  for (i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    if (nums[i] === nums[i + 1]) {
      count++;
    } else {
      countArr.push(count);
      count = 1;
    }
  }
  let maxCount = Math.max(...countArr);

  return nums[maxCount - 1];
}
