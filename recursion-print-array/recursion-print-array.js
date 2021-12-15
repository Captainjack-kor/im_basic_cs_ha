const printArray = function (arr) {
  // TODO
  //* 숫자 배열의 모든 숫자를 프린트합니다. 여기에서 반드시 재귀를 사용해야 합니다.
  //* [1, 2, ,[3, 4], 5] => 빈배열도 있음

  //arr = [1, 2, ,[3, 4], 5]
  //let result = [];
  for(let i=0; i<arr.length; i++){
    if(typeof arr[i]==='number'){
      console.log(arr[i]);
    }
    else if(Array.isArray(arr[i])){
      printArray(arr[i]);
    }
    else if(arr[i] === undefined){
      //result.push('');
      console.log('');
    }
    //result.push(arr[i]);
  }
  //
  //순서대로 배열의 모든 항목을 console.log() 해야 합니다.:
  //for(let i=0; i<result.length; i++){
    //return console.log(result);
  //}
};

module.exports = printArray;