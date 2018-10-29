# This is project of Database management.
## Booking  online movie in cinema.

## Requirement
> [Nodejs](https://nodejs.org/en/) </br>
> [Mysql Server](https://dev.mysql.com/downloads/mysql/) </br>
> [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) </br>
## API
* User
    1. [localhost:8080/user/get/all/movie](localhost:8080/user/get/all/movie) method: GET
    2. [localhost:8080/user/get/all/movie/date](localhost:8080/user/get/all/movie/date) <br>
        Request:
        ```javascript
        body: {
            "id_movie": "1"
        }
        ```
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
        }]
        }
        ```
    3. [localhost:8080/user/get/all/date/time](localhost:8080/user/get/all/movie/date/time) method: POST
* Administrator
  * Item 2a
  * Item 2b



## How to run:
> ```npm install``` </br>
> ```npm start```