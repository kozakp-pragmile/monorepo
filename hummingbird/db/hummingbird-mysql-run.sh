docker run -d \
  --name hu-mysql \
  --platform linux/x86_64 \
  -p 3307:3306 \
  -e MYSQL_RANDOM_ROOT_PASSWORD=yes \
  -e MYSQL_USER=hummingbird-user \
  -e MYSQL_PASSWORD=Q1w2e3r4! \
  -e MYSQL_DATABASE=hummingbird-db \
  mysql:5.7
