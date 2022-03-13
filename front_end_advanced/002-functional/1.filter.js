// 实现filter函数
function filter(list, func) {
  let newList = [];
  for (let index = 0; index < list.length; index++) {
    if (func(list[index])) {
      newList.push(list[index]);
    }
  }
  return newList;
}

// 实现every函数
function every(list, func) {
  let result = true;
  for (let index = 0; index < list.length; index++) {
    if (!func(list[index])) {
      result = false;
      break;
    }
  }
  return result;
}

const arrList = [4, 5, 7, 8];
console.log(filter(arrList, (value) => value % 2 == 0));
console.log(every(arrList, (value) => value < 0));
