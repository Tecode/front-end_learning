```sh
st299^&50f0_ox1^-q&49d_3l9j@umz1v+6!^smhg0n16^9(r5
```
docker run -it --rm -e SENTRY_SECRET_KEY='st299^&50f0_ox1^-q&49d_3l9j@umz1v+6!^smhg0n16^9(r5' --link sentry-postgres:postgres --link sentry-redis:redis sentry upgrade
docker run -d -p 8080:8080 --name my-sentry -e SENTRY_SECRET_KEY='st299^&50f0_ox1^-q&49d_3l9j@umz1v+6!^smhg0n16^9(r5' --link sentry-redis:redis --link sentry-postgres:postgres --restart=always sentry

f2fb8f07484f6c79d5742e83e78924fbdb7c654d48ff63f01f93de4c52fdedef

docker run -d --name sentry-cron -e SENTRY_SECRET_KEY='f2fb8f07484f6c79d5742e83e78924fbdb7c654d48ff63f01f93de4c52fdedef' --link sentry-postgres:postgres --link sentry-redis:redis sentry run cron

docker run -d --name sentry-worker-1 -e SENTRY_SECRET_KEY='f2fb8f07484f6c79d5742e83e78924fbdb7c654d48ff63f01f93de4c52fdedef' --link sentry-postgres:postgres --link sentry-redis:redis sentry run worker
docker run -d -p 9000:9000 --name sentry-haoxuan -e SENTRY_SECRET_KEY='f2fb8f07484f6c79d5742e83e78924fbdb7c654d48ff63f01f93de4c52fdedef' --link sentry-redis:redis --link sentry-postgres:postgres --restart=always sentry

http://47.108.210.200:9000/auth/login/