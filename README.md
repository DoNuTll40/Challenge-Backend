
## Prompt install package
```
npm i express cors dotenv nodemon bcryptjs jsonwebtoken
```
```
npm i prisma@latest
```
```
npm i @prisma/client
```

## Database
- MySQL

## Path and method

### Main path

|Method |Path | Response | Body | Params |
| --- | --- | --- | --- | --- |
| GET | http://localhost:8000/car | file data in mydatabase | no | no |
| POST | http://localhost:8000/car/add | crate record success | rec_regiscar, rec_brand, rec_model, rec_detail | no |
| UPDATE | http://localhost:8000/car/update/:id | update record success | rec_regiscar, rec_brand, rec_model, rec_detail | number id |
| DELETE | http://localhost:8000/car/delete/:id | delete record success | rec_regiscar, rec_brand, rec_model, rec_detail | number id |

Copyright 64CS125 Nuttawoot Chawna