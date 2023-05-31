docker run -d \
  --name bmp-mysql \
  --platform linux/x86_64 \
  -p 3308:3306 \
  -e MYSQL_RANDOM_ROOT_PASSWORD=yes \
  -e MYSQL_USER=bmp-user \
  -e MYSQL_PASSWORD=Q1w2e3r4! \
  -e MYSQL_DATABASE=bmp-db \
  mysql:5.7
