// prices는 배열이며, 각 요소는 매일의 주식 가격입니다. 만약 한 번만 거래할 수 있다면 = 사고 팔 수 있다면, 제일 큰 이익은 얼마일까요?

// Input: [7,1,5,3,6,4]
// Output: 5

// 설명: 2일(가격=1)에 샀다가 5일(가격=6)에 사는 것이 6-1이라 제일 큰 수익 7-1=6 은 안 되는거 아시죠? 먼저 사야 팔 수 있습니다.

// Input: [7,6,4,3,1]
// Output: 0

// 설명: 여기서는 매일 가격이 낮아지기 때문에 거래가 없습니다. 그래서 0

const maxProfit = (prices) => {
  let num = 0;
  let numMax = Math.max(...prices); // 배열에서 최고값
  let numMin = Math.min(...prices); // 배열에서 최소값
  let maxIndex = prices.indexOf(numMax); // 최고값의 index

  if (maxIndex === 0) {
    // 최고값의 index = 0 이면, 배열 첫번째 값 삭제 후 다시 최고값과 index 찾음
    prices.shift();
    numMax = Math.max(...prices);
    maxIndex = prices.indexOf(numMax);
  }

  let minIndex = prices.indexOf(numMin); // 최소값의 index

  if (maxIndex > minIndex) {
    // index 값 비교(최고값의 index가 최소값의 index보다 뒤에 있으면 뺄셈)
    num = numMax - numMin;
    return num;
  } else {
    return num;
  }
};

let num = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(num));
