// Jest的钩子函数
const data = { name: 'haoxuan' }
let user = null

// 每个测试用例运行测试之前
beforeEach(() => {
    console.log('测试运行之前')
    user = Object.assign({}, data)
});

// 每个测试用例运行测试之后
beforeEach(() => {
    console.log('测试运行之后')
});

// 测试用例运行测试之前
beforeAll(() => {
    console.log('测试运行之前,z只运行一次')
});

test('jest hook001', () => {
    user.name = 'xm'
    expect(user.name).toBe('xm')
 })

 test('jest hook002', () => {
    user.name = 'jiejie'
    expect(user.name).toBe('jiejie')
})

// beforeEach先执行全局的，再执行内部 after先结束内部的再结束全局的
// Applies to all tests in this file
// beforeEach(() => {
//     return initializeCityDatabase();
//   });
  
//   test('city database has Vienna', () => {
//     expect(isCity('Vienna')).toBeTruthy();
//   });
  
//   test('city database has San Juan', () => {
//     expect(isCity('San Juan')).toBeTruthy();
//   });
  
//   describe('matching cities to foods', () => {
//     // Applies only to tests in this describe block
//     beforeEach(() => {
//       return initializeFoodDatabase();
//     });
  
//     test('Vienna <3 veal', () => {
//       expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
//     });
  
//     test('San Juan <3 plantains', () => {
//       expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
//     });
//   });