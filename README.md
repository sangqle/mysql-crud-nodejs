# This is project of Database management.
## Booking  online movie in cinema.

## Requirement
> [Nodejs](https://nodejs.org/en/) </br>
> [Mysql Server](https://dev.mysql.com/downloads/mysql/) </br>
> [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) </br>
## API
* User
    * [http://localhost:8080/user/create/account](http://localhost:8080/user/create/account) <br>
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
    * [http://localhost:8080/user/login](http://localhost:8080/user/login) <br>
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
            "email": "thanhnguyen@gmail.com"
        }
        ```
    * [http://localhost:8080/user/get/all/movie](http://localhost:8080/user/get/all/movie) <br>
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
    * [http://localhost:8080/user/get/all/movie/date](http://localhost:8080/user/get/all/movie/date) <br>
        Request:
        ```javascript
        body: {
            "id_movie": "1"
        }
        ```
        Response:
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
    * [http://localhost:8080/user/get/all/date/time](http://localhost:8080/user/get/all/movie/date/time) <br>
        Request:
        ```javascript
        body: {
            "id_movie": "1",
            "id_date": "1"
        }
        ```
        Response:
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
    * [http://localhost:8080/user/get/all/date/time/seated](http://localhost:8080/user/get/all/movie/date/time/seated) <br>
        Request:
        ```javascript
        body: {
            "id_movie": "1",
            "id_date": "1",
            "id_time": "1"
        }
        ```
        Response:
        ```javascript
        {
            "max_numRow": 4,
            "max_numCol": 4,
            "instaces": 0,
            "seated": []
        }
        ```
    * [http://localhost:8080/user/get/all/date/time/seat/booking](http://localhost:8080/user/get/all/movie/date/time/seat/booking) <br>
        Request:
        ```javascript
        body: {
            "id_movie": "1",
            "id_date": "1",
            "id_time": "1",
            "id_seat": "1",
            "id_user": "33"
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
    * [http://localhost:8080/user/get/all/order](http://localhost:8080/user/get/all/order) <br>
        Request:
        ```javascript
        body: {
            "id_user": "35"
        }
        ```
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
    * [http://localhost:8080/user/delete/order](http://localhost:8080/user/delete/order) <br>
        Request:
        ```javascript
        body: {
            "id_user": "35",
            "id_order" : "8"
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
    * [http://localhost:8080/user/update/seat](http://localhost:8080/user/update/seat) <br>
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
    * [http://localhost:8080/logout](http://localhost:8080/logout) <br>    
* Administrator
    * [http://localhost:8080/admin/add/movie](http://localhost:8080/admin/add/movie) <br>
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
    * [http://localhost:8080/admin/get/all/order/:date](http://localhost:8080/admin/get/all/order/21) <br>
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
  * Item 2b



## How to run:
> ```npm install``` </br>
> ```npm start```