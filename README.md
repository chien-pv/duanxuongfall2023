# Guide
1. Clode dự án về và tiến hành cài đặt các thư viện bằng lênh:
`npm i`
2. Chỉnh sử file config db trong mục config/config.json:
   chỉ cần thay đổi:
   "username": "root",
   "password": "password",
   thành thông tin của mysql trên máy mình.
3. Tạo db bằng lệnh:
   `npx sequelize-cli db:migrate`
4. Tạo các table bằng lệnh:
   `npx sequelize-cli db:migrate`
   Tham khảo thêm: https://sequelize.org/docs/v6/other-topics/migrations/#installing-the-cli
5. chạy dự án bằng lệnh: `npm start`
