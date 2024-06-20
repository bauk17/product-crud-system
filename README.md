# Electron-React Application

This is a FullStack system, made for peoples who want to control yourself stock of items/produts. You can add whatever you want on it. Everything has a name, type, size, price and a description. Made with Electron + React + NodeJs + MYSQL

## Environment variables

To run this project, you must have to add the following variables to your .env file: 


`PORT`

`MYSQL_DB`

`MYSQL_USER`

`MYSQL_PASSWORD`

`MYSQL_PORT`


## API Documentation

#### Return all the items from database

```http
  GET /get-products
```

#### Return a specific item from database

```http
  GET /get-product/${id}
```

| Parameter   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | Id from the item you want to get |


#### Create a new item on database

```http
  POST /new-product
```
| Parameter   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title` / `type` / `price` / `gender(i will change it)` / `description`  | `str` | You must send it from "Content-type ": application/x-www-form-urlencoded


#### Create a new item on database

```http
  PUT /product/${id}
```

| Parameter   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title` / `type` / `price` / `gender(i will change it)` / `description`  | `str` | You must send it from "Content-type ": application/x-www-form-urlencoded

```http
  DELETE /product/${id}
```

| Parameter   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | Id from the item you want to remove from database |





## Getting on it

Install product-electron

```bash
cd frontend
  npm install
cd backend
    npm install
``

cd frontend/src/react-/ use npm start to run the 'html' for Electron (you need to do that before inicializate the electron interface) // You can also deploy the react to have a better experience

cd frontend/dist/electron-interface Setup 1.0.0, install it to get the Electron App interface

cd backend/server.exe, open it to run the server


## Roadmap

- Make a better UX/UI Interface
