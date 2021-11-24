# 4、基础权限ACL

ACL是UGO补充

命令
setfacl -m g:xm:rwx 文件名 设置文件访问控制 对象：对象名：权限

## `getfacl`查看权限组

```shell
[root@localhost tmp]# 
[root@localhost tmp]# getfacl ./files.txt 
# file: files.txt
# owner: root
# group: root
user::rw-
group::r--
other::r--
```

## `setfacl`设置权限组

```shell
[root@localhost tmp]# setfacl -m u:xm:rwx ./files.txt 
[root@localhost tmp]# getfacl ./files.txt 
# file: files.txt
# owner: root
# group: root
user::rw-
user:xm:rwx
group::r--
mask::rwx
other::r--

# +是附加权限
[root@localhost tmp]# ls -l ./files.txt 
-rw-rwxr--+ 1 root root 1850 Nov 24 23:46 ./files.txt

```