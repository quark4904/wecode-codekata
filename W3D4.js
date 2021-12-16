// 주어진 숫자 배열에서, 0을 배열의 마지막쪽으로 이동시켜주세요. 원래 있던 숫자의 순서는 바꾸지 말아주세요.

// (새로운 배열을 생성해서는 안 됩니다.)

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Method 1
const moveZeroes = (nums) => {
  return nums.filter((e) => e !== 0).concat(nums.filter((e) => e === 0));
};
// filter : 주어진 함수의 조건을 통과하는 모든 요소를 모아 새로운 배열로 반환
// 위 풀이에서는 주어진 배열(nums)의 값 중 0이 아닌 값을 모아 새로운 배열로 반환

// concat : 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환
// 위 플이에서는 주어진 배열(nums)의 값 중 0인 값을 filter 메소드를 통해 전달 받아서
// nums 배열뒤에 합쳐서 반환

// 즉, filter 메소드를 사용하여 주어진 배열의 값 중 0이 아닌 값이 반환된 새로운 배열에
// 기존 배열의 0인 값을 반환한 배열을 추가

// Method 2

const moveZeroes = (nums) => {
  return nums.sort((a, b) => (a === 0) - (b === 0));
};

// sort : 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환

// compareFunction(a, b)은 요소 a와 b의 특정 쌍이 두 개의 인수로 주어질 때
// 항상 동일한 값을 반환해야합니다. 일치하지 않는 결과가 반환되면 정렬 순서는 정의되지 않습니다.

// Method 3
const moveZeroes = (nums) => {
  let num = 0;
  // 주어진 배열에 있는 0의 갯수 파악
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      num += 1;
    }
  }
  // 주어진 배열에 있는 0 제거
  for (let i = 0; i < num; i++) {
    let remove = nums.indexOf(0);
    nums.splice(remove, 1);
  }
  // 파악된 0의 갯수 만큼 배열 뒤쪽에 추가
  for (let i = 0; i < num; j++) {
    nums.push(0);
  }
  return nums;
};
