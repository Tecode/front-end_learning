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

[root@localhost tmp]# setfacl -m o::r-- ./files.txt 
[root@localhost tmp]# getfacl ./files.txt 
# file: files.txt
# owner: root
# group: root
user::rw-
user:xm:rwx
group::r--
mask::rwx
other::r--
```

## 删除ACL权限`-x`

```shell
[root@localhost tmp]# getfacl ./files.txt 
# file: files.txt
# owner: root
# group: root
user::rw-
group::r--
mask::r--
other::r--

[root@localhost tmp]# setfacl -m u:haoxuan:rwx ./files.txt 
[root@localhost tmp]# getfacl ./files.txt 
# file: files.txt
# owner: root
# group: root
user::rw-
user:haoxuan:rwx
group::r--
mask::rwx
other::r--

[root@localhost tmp]# setfacl -x u:haoxuan ./files.txt 
[root@localhost tmp]# getfacl ./files.txt 
# file: files.txt
# owner: root
# group: root
user::rw-
group::r--
mask::r--
other::r--

[root@localhost tmp]# 

```

## 清除所有ACL信息`-b`

```shell
[root@localhost tmp]# setfacl -b ./files.txt 
[root@localhost tmp]# getfacl ./files.txt 
# file: files.txt
# owner: root
# group: root
user::rw-
group::r--
other::r--

```

```shell
[root@localhost tmp]# setfacl --help
setfacl 2.2.53 -- set file access control lists
Usage: setfacl [-bkndRLP] { -m|-M|-x|-X ... } file ...
  -m, --modify=acl        modify the current ACL(s) of file(s)
  -M, --modify-file=file  read ACL entries to modify from file
  -x, --remove=acl        remove entries from the ACL(s) of file(s)
  -X, --remove-file=file  read ACL entries to remove from file
  -b, --remove-all        remove all extended ACL entries
  -k, --remove-default    remove the default ACL
      --set=acl           set the ACL of file(s), replacing the current ACL
      --set-file=file     read ACL entries to set from file
      --mask              do recalculate the effective rights mask
  -n, --no-mask           don't recalculate the effective rights mask
  -d, --default           operations apply to the default ACL
  -R, --recursive         recurse into subdirectories
  -L, --logical           logical walk, follow symbolic links
  -P, --physical          physical walk, do not follow symbolic links
      --restore=file      restore ACLs (inverse of `getfacl -R')
      --test              test mode (ACLs are not modified)
  -v, --version           print version and exit
  -h, --help              this help text

```