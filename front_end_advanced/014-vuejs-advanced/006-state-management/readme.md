<h1 align="center">husky</h1>


## Taro 版本 [开发文档](https://taro-docs.jd.com/taro/docs/README)

## 插件

> day.js https://dayjs.gitee.io/docs/zh-CN/parse/parse



```
yarn global add @tarojs/cli@2.2.15
yarn eslint src --ext .vue
```

## 步骤(

husky要单独安装一下不然不会生效)

```
yarn
yarn add husky@4.3.8 --save-dev
```

## 快速创建新页面
```
Taro create --name [页面名称]
```

## H5开发

```
npm run dev:h5        #开发版本
npm run build:h5   #发布版本
```

## 微信小程序开发

```
npm run dev:weapp             #开发版本
npm run build:weapp  #发布版本
```

## 语法检查

```
npm run lint
```

## 判断环境
```
Taro.getEnv() != ENV_TYPE.WEB

    WEAPP = 'WEAPP',
    WEB = 'WEB',
    RN = 'RN',
    SWAN = 'SWAN',
    ALIPAY = 'ALIPAY',
    TT = 'TT',
    QQ = 'QQ',
    JD = 'JD'
```

## 日志系统

```
const logger = Taro.getRealtimeLogManager()
logger.info({str: 'hello world'}, 'info log', 100, [1, 2, 3])
logger.error({str: 'hello world'}, 'error log', 100, [1, 2, 3])
logger.warn({str: 'hello world'}, 'warn log', 100, [1, 2, 3])
```

## 头像上传

```
setValue('baseUrl', res.tempFilePaths[0])
      Taro.navigateTo({
        url: '/moduleB/cropper/cropper',
        events: {
          onUploadSuccess: (url: string) => {
            console.log(url, '图片地址')
          },
        }
      })
```

## 安全区兼容问题

```css
padding-bottom: constant(safe-area-inset-bottom);
padding-bottom: env(safe-area-inset-bottom);
```
## 数据埋点

```typescript
@inject('dataAnalytics')
@observer

...

this.props.dataAnalytics.insertEvent({
 eventPage: 'page/index/index',
 eventType: 'APP_IN',
 extendInfo: { 'name': '首页' }
})

或

import dataAnalytics from '@/stores/data_analytics'

...

dataAnalytics.insertEvent({
 eventPage: 'page/index/index',
 eventType: 'APP_IN',
 extendInfo: { 'name': '首页' }
})

```

# 微信小程序暗黑模式适配

https://developers.weixin.qq.com/miniprogram/dev/framework/ability/darkmode.html#%E7%9B%B8%E5%85%B3%E9%85%8D%E7%BD%AE