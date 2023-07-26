## sentry私有化部署

```sh
wget https://github.com/getsentry/onpremise/archive/refs/tags/23.7.0.tar.gz
tar -zxvf 23.7.0.tar.gz
cd onpremise-23.7.0
./install.sh

docker compose up -d
# 创建管理员
docker compose run --rm web createuser
```

## 停止所有运行的容器

```sh
docker stop $(docker ps -q)
docker run -it ubuntu bash
```