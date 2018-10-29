# This is project of Database management.
## Booking  online movie in cinema.

## Requirement
> [Nodejs](https://nodejs.org/en/) </br>
> [Mysql Server](https://dev.mysql.com/downloads/mysql/) </br>
> [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) </br>
## API
* User
    * [localhost:8080/user/get/all/movie/date](localhost:8080/user/get/all/movie) <br>
        Response:
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
                },
                {
                    "id_movie": 2,
                    "title": "VeNom",
                    "director": "Tom Hardy",
                    "released": 2018,
                    "length": 126,
                    "price": 100,
                    "image": "https://lottecinemavn.com/Lotte/files/43/43a08870-459f-48e5-8cad-c8342755aa4c.jpg"
                }
            ]
        }
        ```
    * [localhost:8080/user/get/all/date/time](localhost:8080/user/get/all/movie/date/time) <br>
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
                },
                {
                    "id_date": 3,
                    "date": 21
                }
            ]
        }
        ```
    * [localhost:8080/user/get/all/date/time](localhost:8080/user/get/all/movie/date/time) <br>
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
    * [localhost:8080/user/get/all/date/time/seat](localhost:8080/user/get/all/movie/date/time/seat) <br>
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
    * [localhost:8080/user/get/all/date/time/seat/booking](localhost:8080/user/get/all/movie/date/time/seat/booking) <br>
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
* Administrator
  * Item 2a
  * Item 2b



## How to run:
> ```npm install``` </br>
> ```npm start```