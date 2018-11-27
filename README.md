# :stuck_out_tongue_winking_eye: This is project of Database management.

:+1: This PR looks great <br>

## :blush: Booking online movie in cinema.

![alt text](https://s3-ap-southeast-1.amazonaws.com/dbms-photo-movies/gitui.jpeg)

## :blush: Demo.

> [Client](https://bookingpicker.firebaseapp.com/) <br>
 > [Verify](https://verifybookingorder.firebaseapp.com/)

[![Build Status](https://vscode.visualstudio.com/_apis/public/build/definitions/a4cdce18-a05c-4bb8-9476-5d07e63bfd76/1/badge?branchName=master)](https://aka.ms/vscode-builds)

## :smiley: Requirement

> [Nodejs](https://nodejs.org/en/) </br>
 > [Mysql Server](https://dev.mysql.com/downloads/mysql/) </br>
 > [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) </br>
 > [PostMan TestAPI](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=vi)

## How to run:

### Config MySQL server

```javascript
// Create a file in /server/src/mysql/config.js
{
  const config = {
    host: "yourHostName",
    port: 3306,
    user: "yourUser",
    password: "yourPassWord",
    database: "yourDatabaseName",
    multipleStatements: true
  };

  const accessKey = "xxxxxxxxxxxxxxxxxx";
  const secretKey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  const Bucket = "??????";
  const ACL = "public-read-write";
  const ContentType = "image/jpg";

  module.exports = {
    config,
    accessKey,
    secretKey,
    Bucket,
    ACL,
    ContentType
  };
}
```

### Config Server && Client

```
1. Open a terminal
    $ git clone https://github.com/lequangsang97/mysql-crud-nodejs.git
    $ cd mysql-crud-nodejs && code .
    $ cd server && npm install nodemon
    $ npm install
    $ npm run dev:start

2. Open another terminal
    $ cd client && npm install
    $ npm start

```

## Node Host: [http://localhost:8080](http://localhost:8080)<br>

## React Host: [http://localhost:3000](http://localhost:3000)<br>

## :ok_hand: API

- User
  - [x] POST: [http://localhost:8080/user/create/account](http://localhost:8080/user/create/account) <br>
        Request:
    ```javascript
    {
        "name": "Nguyen Phuoc Thanh",
        "email": "thanhnguyen@gmail.com",
        "password": "pass",
        "sdt": "11111"
    }
    ```
    Response:
    ```javascript
    {
        "name": "Nguyen Phuoc Thanh",
        "email": "thanhnguyen@gmail.com",
        "sdt": "11111"
    }
    ```
  - [x] POST: [http://localhost:8080/user/login](http://localhost:8080/user/login) <br>
        Request:
    ```javascript
    {
        "email": "thanhnguyen@gmail.com",
        "password": "pass",
    }
    ```
    Response:
    ```javascript
    {
        "id_user": 35,
        "name": "Nguyen Phuoc Thanh",
        "email": "thanhnguyen@gmail.com",
        "role": "user",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjozMywibmFtZSI6IkxlIFF1YW5nIFNhbmciLCJlbWFpbCI6InNhbmcubGVxdWFuZ0BnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTU0MTA0NTIwMH0.0b_pHp5e49SVP-Mod8SVr0oRzizPKcpSy07yaCgTbn4"
    }
    ```
  - [x] GET: [http://localhost:8080/user/get/all/movie](http://localhost:8080/user/get/all/movie) <br>
    ```javascript
    {
        "instaces": 6,
        "movies": [
            {
                "id_movie": 1,
                "title": "Bad Times At The El Royale",
                "director": "Bridges",
                "released": 2018,
                "length": 110,
                "price": 120,
                "image": "https://lottecinemavn.com/Lotte/files/44/4427ab16-6b3e-45c8-9dee-58c8ad84304b.png"
            }
        ]
    }
    ```
  - [x] GET: [http://localhost:8080/user/get/date/:id_movie](http://localhost:8080/user/get/date/1) <br>
    > Ex: http://localhost:8080/user/get/date/1<br>
    > Response:
    ```javascript
    {
        "instaces": 3,
        "dates": [
            {
                "id_date": 1,
                "date": 19
            },
            {
                "id_date": 2,
                "date": 20
            }
        ]
    }
    ```
  - [x] GET: [http://localhost:8080/user/get/time/:id_movie/:id_date](http://localhost:8080/user/get/time/1/2) <br>
    > Ex: http://localhost:8080/user/get/time/1/1 <br>
    > Response:
    ```javascript
    {
        "instaces": 1,
        "times": [
            {
                "id_time": 1,
                "time": 1140
            }
        ]
    }
    ```
  - [x] GET: [http://localhost:8080/user/get/seated/:id_movie/:id_date/:id_time](http://localhost:8080//user/get/seated/1/2/1) <br>
    > Ex: http://localhost:8080/user/get/time/1/1/2 <br>
    > Response:
    ```javascript
    {
        "max_numRow": 4,
        "max_numCol": 4,
        "instaces": 0,
        "seated": []
    }
    ```
  - [x] POST: [http://localhost:8080/user/booking](http://localhost:8080/user/booking) <br>
        Request:
    ```javascript
    body: {
        "id_movie": "1",
        "id_date": "1",
        "id_time": "1",
        "id_seat": "1",
    }
    ```
    Response:
    ```javascript
    {
        "order": {
            "id_order": 3,
            "name": "tran cong an",
            "title": "Bad Times At The El Royale",
            "date": 19,
            "time": 1140,
            "id_seat": 1
        }
    }
    ```
  - [x] GET: [http://localhost:8080/user/get/all/order](http://localhost:8080/user/get/all/order) <br>
        Request:
        Response:
    ```javascript
    {
        "instance": 1,
        "order": [
            {
                "id_order": 8,
                "title": "Bad Times At The El Royale",
                "date": 19,
                "time": 1140,
                "price": 120,
                "id_seat": 2
            }
        ]
    }
    ```
  - [x] POST: [http://localhost:8080/user/delete/order](http://localhost:8080/user/delete/order) <br>
        Request:
    ```javascript
    body: {
        "id_user": "35",
    }
    ```
    Response:
    ```javascript
    {
        "statusCode": 200,
        "results": {
            "fieldCount": 0,
            "affectedRows": 1,
            "insertId": 0,
            "serverStatus": 2,
            "warningCount": 0,
            "message": "",
            "protocol41": true,
            "changedRows": 0
        }
    }
    ```
  - [x] POST: [http://localhost:8080/user/update/seat](http://localhost:8080/user/update/seat) <br>
        Request:
    ```javascript
    body: {
        "id_order": "2",
        "id_newSeat" : "3"
    }
    ```
    Response:
    ```javascript
    {
        "statusCode": 200,
        "results": {
            "fieldCount": 0,
            "affectedRows": 1,
            "insertId": 0,
            "serverStatus": 2,
            "warningCount": 0,
            "message": "",
            "protocol41": true,
            "changedRows": 0
        }
    }
    ```
  - [x] GET: [http://localhost:8080/logout](http://localhost:8080/logout) <br><br>
- Administrator
  - [x] POST: [http://localhost:8080/admin/add/movie](http://localhost:8080/admin/add/movie) <br>
        Request:
    ```javascript
    body: {
        "title": "Oh Joy, Coming Soon",
        "director": "Joy jobs",
        "released": 2016,
        "length": 85,
        "price": 90,
        "imageUrl": "https://lottecinemavn.com/Lotte/files/85/85c6c0b3-a951-4802-9f94-d7b4819ca493.jpg",
        "data": [{
            "date": 20,
            "time": [1020, 1140]
        }]
    }
    ```
    Response:
    ```javascript
    {
        "query": {
            "title": "Jonny English",
            "director": "Joy jobs",
            "released": 2016,
            "length": 126,
            "price": 100,
            "data": [
                {
                    "date": 20,
                    "time": [
                        1020,
                        1140
                    ]
                }
            ]
        }
    }
    ```
  - [x] GET: [http://localhost:8080/admin/get/all/order/:date](http://localhost:8080/admin/get/all/order/21) <br>
    ```javascript
    {
        "instance": 1,
        "order": [
            {
                "id_order": 2,
                "name": "tran cong an",
                "title": "Bad Times At The El Royale",
                "date": 21,
                "time": 1140,
                "price": 120,
                "id_seat": 3
            }
        ]
    }
    ```
  * Item 2b
    // le quang sang
