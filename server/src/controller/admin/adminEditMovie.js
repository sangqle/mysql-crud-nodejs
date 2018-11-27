const {
    pool
  } = require("../../mysql/connect");
  
  exports.adminEditMovie = (req, res) => {

    if (req.user.role !== "admin")
      return res.send({
        message: "You do not have a permission. Please try login as Admin"
      });
    const idMovie = req.params.idMovie;
    console.log(idMovie);
    //let sql = `call getOneMovie(${idMovie})`;
    let sql = `select * from movies where id_movie = ${idMovie}`
    try {
      pool.query(sql, (error, results, feilds) => {
        if (error) return res.status(400).send({
          error
        });
  
        let movie = results[0];
        
        res.status(200).send({
          movie: movie
        });
      });
    } catch (error) {
      if (error) return res.status(400).send({
        error
      });
    }
  };