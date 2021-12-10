// 인자인 height는 숫자로 이루어진 배열입니다. 그래프로 생각한다면 y축의 값이고, 높이 값을 갖고 있습니다.
// 아래의 그래프라면 height 배열은 [1, 8, 6, 2, 5, 4, 8, 3, 7] 입니다.
// 저 그래프에 물을 담는다고 생각하고, 물을 담을 수 있는 가장 넓은 면적의 값을 반환해주세요.

// 가정
// 배열의 길이는 2이상입니다.
// https://storage.googleapis.com/replit/images/1555380144403_97221ca23fbb92beaae5b6c800ceb5c8.pn

// Method 1
function getMaxArea(height) {
  let result = [];
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      if (height[i] < height[j]) {
        result.push(height[i] * (j - i));
      } else {
        result.push(height[j] * (j - i));
      }
    }
    console.log(result);
  }
  return Math.max(...result);
}

// 민기
function getMaxArea(height) {
  let arr = [];
  for (i = 0; i < height.length; i++) {
    for (j = 0; j < height.length; j++) {
      if (i !== j) {
        if (height[i] > height[j]) {
          arr.push(height[j] * Math.abs(i - j));
        } else {
          arr.push(height[i] * Math.abs(i - j));
        }
      }
    }
  }
  console.log(arr);
  arr.sort(function (a, b) {
    return b - a;
  });
  console.log(arr);
  return arr[0];
}

// 하늘 1
function getMaxArea(height) {
  let arr = [];

  for (let i = 0; i < height.length; i++) {
    for (let j = height.length - 1; j > i; j--) {
      arr.push(Math.min(height[i], height[j]) * (j - i));
    }
  }
  arr.sort(function (a, b) {
    return b - a;
  });
  return arr.shift();
}

// 하늘 2
function getMaxArea(height) {
  let size = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      size = Math.max(Math.min(height[i], height[j]) * (j - i), size);
    }
  }
  return size;
}
