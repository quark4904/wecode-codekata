// 양수로 이루어진 m x n 그리드를 인자로 드립니다. 상단 왼쪽에서 시작하여, 하단 오른쪽까지 가는 길의 요소를 다 더했을 때, 가장 작은 합을 찾아서 return 해주세요.

// 한 지점에서 우측이나 아래로만 이동할 수 있습니다.

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]

// Output: 7
// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]

// Output: 7
// 설명: 1→3→1→1→1 의 합이 제일 작음

// 진행중
const minPathSum = (grid) => {
  // m x n 그리드 일때의 이동 경로 길이 계산
  const gridRow = grid[0].length;
  const gridColumn = grid.length;
  const moveLength = 4 + (gridRow - 3) + (gridColumn - 3);
  let result = grid[0][0];
  let sum = grid[0][0];

  // for (let i = 0; i < moveLength+1; i++) {
  //   if (grid[i][i + 1] > grid[i + 1][i]) {
  //     sum += grid[i + 1][i];
  //   } else if (grid[i + 1][i] > grid[i][i + 1]) {
  //     sum += grid[i][i + 1];
  //   } console.log(sum)
  // }

  for (let i = 0; i < moveLength + 1; i++) {
    if (grid[0][1] > grid[1][0]) {
      sum += grid[1][0];
      grid[i].shift();
      console.log("아래쪽이 작을 때: ", sum);
    } else if (grid[1][0] > grid[0][1]) {
      sum += grid[0][1];
      for (let j = 0; j < grid.length; j++) {
        grid[j].shift();
      }
      console.log("오른쪽이 작을 때: ", sum);
    }
  }
  return sum;
};

// Method 2
const minPathSum = (grid) => {
  // 첫번째 row, column은 각 인자의 line을 이미 지나왔다고 가정후 더해 놓는다.
  for (let i = 1; i < grid.length; i++) {
    // 첫번째 column
    grid[i][0] += grid[i - 1][0];
    console.log("첫번째 for");
    console.log(grid);
  }
  for (let i = 1; i < grid[0].length; i++) {
    // 첫번째 low
    grid[0][i] += grid[0][i - 1];
    console.log("두번쨰 for");
    console.log(grid);
  }
  // 위 반복문 후에 문제의 Input 예시는 다음과 같이 변경된다.
  // [1,4,5]
  // [2,7,6]
  // [6,8,7]

  for (let i = 1; i < grid.length; i++) {
    // column level
    for (let j = 1; j < grid[0].length; j++) {
      // low level
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
      console.log("세번째 for");
      console.log(grid);
    }
  }
  //대상 인자의 위 혹은 왼쪽 값중 작은 값을 더해줌

  return grid[grid.length - 1][grid[0].length - 1];
};

minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]);
