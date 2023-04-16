### 测试

- 单元测试：验证独立单元是否正常工作
- 集成测试：验证多个单元协同工作
- 端到端测试：从用户角度以机器的方式在真实浏览器环境验证应用交互
- 快照测试：验证程序UI变化

### 单元测试框架

- Jest 推荐
- Mocha 灵活

### 集成测试

测试速度较慢，出错不容易定位问题

### 端到端测试

- Cypress
- Nightwatch
- Webdriver
- Playeright

### 测试金子塔

单元测试 - 集成测试 - UI测试

### 测试开发方式

- TDD：测试驱动开发，先测试后实现功能，前端开发应用中更适合开发纯函数库比如Lodash、Vue、React等；
- BDD：行为驱动开发，先实现给你再开发，BDD核心目的是为了解决TDD模式下和实际功能需求不一致而诞生；（Cucumber）https://cucumber.io/

```sh
Feature: Greeting

  Scenario: Say hello
    When the greeter says hello
    Then I should have heard "hello"
```

- 轻量的BDD方案已集成测试为主的开发方案

- 需求分析
- 编写集成测试用例
- 运行测试
- 代码实现使测试通过
- 重构优化
- 增加功能重复上述代码