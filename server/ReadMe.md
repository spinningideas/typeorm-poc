# TypeORM POC

The code in this repo demonstrates use of typeorm as an ORM using two tables with geography data sets. This example uses typescript and more advanced usage of building typescript into standard ES5 javascript hosting in traditional node.js express app

See https://typeorm.io/

## Get Started

To get started perform the following steps:

### 1) npm install

```npm install```

### 2) install PostGres 

https://www.postgresql.org/download/

### 3) Create PostGres database to use in this POC

After installing locally you should have database server with credentials and you next need to create empty database named "orm_poc"

### 4) Create database schema 


### 5) Populate database with data 


### 6) run the application

The application is written in typescript and compiled into javascript in a "dist" folder - the command below will compile the app and run it.

```npm run build```

### 7) exercise the application via postman

Download and install https://www.getpostman.com and then import the collection in the "postman" folder and run the requests to see api data and responses

npm install typeorm --save 

npm install reflect-metadata --save

npm install @types/node --save

Examples referenced

https://codeburst.io/typeorm-by-example-part-2-46946bf08233

https://medium.com/create-a-server-with-nodemon-express-typescript/create-a-server-with-nodemon-express-typescript-f7c88fb5ee71

https://stackoverflow.com/questions/40820195/creating-generic-repository-using-typeorm

