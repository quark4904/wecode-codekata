// 양수 N을 이진법으로 바꿨을 때, 연속으로 이어지는 0의 갯수가 가장 큰 값을 return해 주세요.

// 이어지는 0은 1과 1사이에 있는 것을 의미합니다.
// 1과 1사이에 있는 0을 binary gap 이라고 하겠습니다.
// input: 9
// output: 2
// input: 9
// output: 2
// 설명: 9의 이진수는 1001 입니다. 1과 1사이에 있는 0은 2 이므로, 2를 return

// input: 529
// output: 4
// input: 529
// output: 4
// 설명: 529의 이진수는 1000010001 입니다. binary gap은 4와 3 두개가 있습니다. 이 중 큰 값은 4이므로 4를 return

// input: 20
// output: 1
// input: 20
// output: 1
// 설명: 20의 이진수는 10100 입니다. 1과 1사이에 있는 연속된 0의 수는 1 뿐입니다. (뒤에 있는 0은 1사이에 있는 것이 아니므로)

// input: 15
// output: 0
// input: 15
// output: 0
// 설명: 15의 이진수는 1111 입니다. binary gap이 없으므로 0을 return

// input: 32
// output: 0
// input: 32
// output: 0
// 설명: 32의 이진수는 100000 입니다. binary gap이 없으므로 0을 return

const solution = (N) => {
  // 10진수를 2진수로 반환 후, 각각의 숫자를 배열 안에 나눈다.
  let binary = N.toString(2).split("");

  // count는 연속되는 0의 갯수를, result는 가장 큰 값을 가지는 변수이다.
  let count = 0;
  let result = 0;

  for (let i = 0; i < binary.length; i++) {
    // binary[i]가 0인 경우, count의 갯수를 증가시킨다.
    if (binary[i] === "0") {
      count += 1;
    } else if (binary[i] === "1") {
      // 1인 경우, count를 멈추고 result 값에 복사한다. 그리고 count 변수의 값을 다시 0으로 만든다.
      if (count > result) {
        result = count;
      }
      count = 0;
    }
  }

  return result;
};
