const moveZeroes = (nums) => {
  return nums.filter((e) => e !== 0).concat(nums.filter((e) => e === 0));
};
