# assignment-rest-jwt

Installation:
1. npm i
2. sesuaikan file config/config.json dengan database anda, dan pastikan db berjalan
3. npx sequelize db:create
4. npx sequelize db:migrate
5. npx sequelize db:seed:all


Public Route:
- POST /sign-in          =======> untuk login
- POST /register         =======> untuk register (tetapi tidak bisa register sebagai role admin, hanya role user biasa)

Route for user (hanya role admin yang bisa akses):
- GET /users
- GET /users/:id
- POST /users            =======> untuk membuat user baru (bisa juga menambah admin yang lain)

Route TODO:
- GET /todos      (hanya menampilkan todos yang dibuat sendiri)
- GET /todos/:id   (hanya menampilkan todos yang dibuat sendiri)
- POST /todos
- PUT /todos/:id  (hanya user pemilik todo yang bisa edit)      ======> edit title, and description
- PATCH /todos/:id  (hanya user pemilik todo yang bisa edit)    ======> edit status
