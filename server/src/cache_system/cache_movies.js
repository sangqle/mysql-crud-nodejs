let movies = [];

let date = {
  id_movie: 1,
  data: {
    instaces: 3,
    dates: [
      {
        id_date: 1,
        date: 19
      },
      {
        id_date: 2,
        date: 20
      },
      {
        id_date: 3,
        date: 21
      }
    ]
  }
};
let date_of_movies = []; // cache date for movies

/*{
    id_movie: 1,
    id_date: 2,
    times: [12, 19, 20]
}
*/

let time_of_movies = []; // cache time for date by movies/.

module.exports = { movies, date_of_movies, time_of_movies };
