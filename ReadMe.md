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

After installing locally you should have database server and you need to enable credentials from Database.ts with access empty database named "orm_poc_typeorm"

### 4) Create database schema 

Run npm script "dev" which will do this via logic in app.ts or you can run migrations manually

 ```ts-node ./node_modules/typeorm/cli "migration:run" "-f" "./ormconfig.ts"```

### 5) Populate database with data 

There is logic in the app.ts file that will seed the two tables with data.

Data will be populated if it does not exist via:

```npm run dev```

### 6) Run the application in development mode

The application is written in typescript and compiled into javascript in a "dist" folder - the command below will compile the app and run it.

```npm run dev```

### 6) Build the application for deployment

The application is written in typescript and compiled into javascript in a "dist" folder - the command below will compile the app and run it.

```npm run build```

### 7) exercise the application via postman

Download and install https://www.getpostman.com and then import the collection in the "postman" folder and run the requests to see api data and responses

## Examples Referenced

### Step By Step Example

- https://codeburst.io/typeorm-by-example-part-2-46946bf08233

### Repositories using TypeORM

- https://stackoverflow.com/questions/40820195/creating-generic-repository-using-typeorm

### TypeORM Migrations

- https://github.com/typeorm/typeorm/blob/master/docs/migrations.md

- https://typeorm.io/#/migrations

- https://wanago.io/2019/01/28/typeorm-migrations-postgres/

### TypeORM Data Seeding

- https://github.com/w3tecch/typeorm-seeding

- https://stackoverflow.com/questions/51198817/typeorm-how-to-seed-database
