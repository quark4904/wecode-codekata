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
  let firstNum = grid[0][0];

  for (let i = 0; i < moveLength; i++) {
    if (grid[i][i + 1] > grid[i + 1][i]) {
      firstNum += grid[i + 1][i];
      console.log(firstNum);
    } else if (grid[i + 1][i] > grid[i][i + 1]) {
      firstNum += grid[i][i + 1];
    }
  }
};

console.log(
  minPathSum([
    [1, 3, 1, 4],
    [1, 5, 1, 4],
    [4, 2, 1, 4],
    [1, 5, 1, 4],
    [4, 2, 1, 4],
  ])
);
