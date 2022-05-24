服务器需要开启history支持

Express配置

```
app.use(history())
```

Nginx配置

```bash
location / {
  root  html;
  index index.html index.htm;
  try_file $uri/ /index.html;
}
```