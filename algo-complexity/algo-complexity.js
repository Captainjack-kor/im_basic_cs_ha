/*
  사실 테스트 케이스만 보면, 즉시 답을 알 수 있는 그런 문제입니다. 그렇기 때문에 설명을 꼭 주석으로 달아주세요. 그래야 이 문제가 의미가 있습니다.
  예를 들어 다음과 같이 작성할 수 있습니다.
    - 이 함수는 (1____)의 시간 복잡도를 가지고 있습니다, 왜냐하면, (2____)번째 라인의 코드는 (3____)를 의미하기 때문입니다.

  1. Big-O 표기법 또는, 선형/로그 등으로 표시
  2. 코드 라인 범위를 적어주세요
  3. 구현의 특성을 설명하세요
*/

const TimeComplexity = {
  FIX_ME: 'wrong answer',
  CONSTANT: 'constant',
  LOGARITHMIC: 'logarithmic',
  LINEAR: 'linear',
  QUADRATIC: 'quadratic',
  EXPONENTIAL: 'exponential'
};
exports.TimeComplexity = TimeComplexity;

// 문제 1: 주어진 배열에 있는 값의 제곱을 더합니다.

/*
 * 복잡도: 이 함수는 LINEAR(O(n))의 시간 복잡도를 가지고 있습니다. 30번째 라인의 코드에서 array의 인자값이 커질때마다 걸리는 시간도 같이 커지기때문입니다.
 */

exports.sumSquaresTimeComplexity = TimeComplexity.LINEAR; // TODO: FIX_ME에 답을 적어주세요

let sumSquares = function (array) {
  return array.reduce(function(memo, val) {
    return memo + (Math.pow(val, 2));
  });
};


// 문제 2: 주어진 숫자의 n번째 거듭제곱을 계산합니다.

/*
 * 복잡도: 이 함수는 LOGARITHMIC(O(log))의 시간 복잡도를 가지고있습니다. 43번째에 함수의 인자로 들어오는 base와 exponent를 이용하여
 * 각각의 경우를 홀수일 때와 짝수일 때로 나눠서 계산하기 때문입니다. 
 */
exports.nthPowerTimeComplexity = TimeComplexity.LOGARITHMIC; // TODO: FIX_ME에 답을 적어주세요

let nthPower = function (base, exponent) {
  // Base case:
  if (exponent === 0) {
    return 1;
  // If exponent is odd
  } else if (exponent % 2 !== 0) {
    return base * nthPower(base, exponent - 1);
  // If exponent is even
  } else {
    return nthPower(base * base, exponent / 2);
  }
};


// Problem 3: n라운드의 가위바위보 게임을 위한 모든 경우의 수를 생성합니다.

/*
 * 복잡도: 이 함수는 EXPONENTIAL(O(2^n))의 시간 복잡도를 가지고있습니다. 66번째 인자값으로 들어온 rounds에 의해서 함수가 한번 실행될 때마다 나오는 결과값을 76번 째 줄에서
 * 다시 재귀적으로 호출하고 또 재귀안에서 재귀 호출이 이루어 지기 때문에 찾는 과정을 rounds의 각각의 인자 값을 모두 경우의 수를 호출하는 경우로 해석할 수 있기때문입니다.
 */
exports.rockPaperScissorsTimeComplexity = TimeComplexity.EXPONENTIAL; // TODO: FIX_ME에 답을 적어주세요

let rockPaperScissors = function (rounds) {
  let sequences = [];
  let plays = ['rock', 'paper', 'scissors'];

  let generate = function (sequence, round) {
    // Base case:
    if (round === rounds) {
      sequences.push(sequence);
    } else {
      plays.forEach(function(play) {
        generate(sequence.concat(play), round + 1);
      });
    }
  };

  generate([], 0);
  return sequences;
};
