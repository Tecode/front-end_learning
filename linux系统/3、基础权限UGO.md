# 基础权限UGO

chmod -R(目录文件全部授权) 对象（u/g/o/a） 赋值符（+/-/=） 权限类型（r/w/x） 文件目录

```shell
drwxrwxr-x 3 xm   xm     19 6月  29 22:02 logs
-rw-r--r-- 1 root root  759 11月 22 22:29 menu.txt

- rw-[u]r--[g]r--[o] 1[链接] root[属主] root[属组]  759[大小] 11月 22 22:29 menu.txt
```

### 赋予其他用户读写权限

```shell
-rw-r--r-- 1 root root  759 11月 22 22:29 menu.txt

chmod o=rw menu.txt
chmod o+rw menu.txt

-rw-r--rw- 1 root root  759 11月 22 22:29 menu.txt
```

### 收回其他用户所有权限
```shell
-rw-r--rw- 1 root root  759 11月 22 22:29 menu.txt

chmod o=--- menu.txt
chmod o-rwx menu.txt

-rw-r----- 1 root root  759 11月 22 22:29 menu.txt
```

### 用户组其他用户授权权限

```shell
-rwxr--r-- 1 root   root        67 11月 23 21:49 hello.sh

chmod ug+x,o+w hello.sh

-rwxr-xrw- 1 root   root        67 11月 23 21:49 hello.sh
```