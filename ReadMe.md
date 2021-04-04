# TypeORM POC

The code in this repo demonstrates use of [typeorm](https://typeorm.io/) as an ORM using two tables with geography data sets. This example uses typescript and contains use of ts-node to build typescript and run this code in standard ES5 javascript hosted in a traditional node.js express app

See https://typeorm.io/ and notes below for more info

## Get Started

To get started perform the following steps:

### 1) install PostGres 

https://www.postgresql.org/download/

### 2) Create PostGres database to use in this POC along with user that has permissions to modify and access the database

- After installing locally you should have database server 
- Create an empty database named "typeorm_poc"
- Create a create an account named "typeorm_poc_user" in your postgres database server with full permissions to the database named "typeorm_poc" using the password in ormconfig.ts (or change it in that file to match what you provided when you create the account)

Here are sql scripts to run:

```
CREATE DATABASE typeorm_poc_db;

CREATE ROLE typeorm_poc_user LOGIN PASSWORD 'the_secure_password_from_ormconfig.ts';

GRANT CONNECT ON DATABASE typeorm_poc_db TO typeorm_poc_user;
  
GRANT ALL PRIVILEGES ON DATABASE typeorm_poc_db TO typeorm_poc_user;

```

### 3) Change directory into "server" folder and run npm install

```cd server```

```npm install```

### 4) Create database schema 

Run npm script "dev" which will do this via logic in app.ts or you can run migrations manually

 ```npm run dev```

OR

 ```ts-node ./node_modules/typeorm/cli "migration:run" "-f" "./ormconfig.ts"```

### 5) Populate database with data 

There is logic in the app.ts file that will seed the two tables with data if the data is not already there.

Data will be populated if it does not exist via:

```npm run dev```

### 6) Run the application in development mode

The application is written in typescript and relies on tables and data that is created during app startup and running the npm command:

```npm run dev```

When you run this command the express node server will start and listen on port 6001

### 6) Build the application for deployment

The application is written in typescript and compiled into javascript in a "dist" folder - the command below will compile the app and run it.

```npm run build```

### 7) exercise the application via postman

Download and install https://www.getpostman.com and then import the collection in the "postman" folder and run the requests to see api data and responses

The requests are pointed to http://localhost:6001 as a base url.

## Examples Referenced

### Step By Step Example

- https://codeburst.io/typeorm-by-example-part-2-46946bf08233

### Repositories using TypeORM

- https://stackoverflow.com/questions/40820195/
creating-generic-repository-using-typeorm

- https://octolinker-demo.now.sh/typeorm/typeorm/issues/4959

### TypeORM Migrations

- https://github.com/typeorm/typeorm/blob/master/docs/migrations.md

- https://typeorm.io/#/migrations

- https://wanago.io/2019/01/28/typeorm-migrations-postgres/

### TypeORM Data Seeding

- https://github.com/w3tecch/typeorm-seeding

- https://stackoverflow.com/questions/51198817/typeorm-how-to-seed-database
