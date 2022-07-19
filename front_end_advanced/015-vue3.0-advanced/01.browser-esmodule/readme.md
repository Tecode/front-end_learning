现代浏览器都支持ES Module（IE不支持）
通过下面的方式加载模块
<script type="module" src="./modules/index.js"></script>

支持模块的script默认延迟加载
类似于script标签设置defer
在文档解析完成后，触发DOMContentLoaded事件前解析