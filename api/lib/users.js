const request = require('request')

//llamo a la funcion getPost y devuelvo en un json su contenido.
function getPublicacionesUsers(req, res) {
    getPosts()
        .then(posts => {
            res.json(posts)
        })
        .catch(err => {
            console.log(err)
            res.status(500).end()
        })
}


//traigo los usuarios de la api pedida
function getPosts () {
    return new Promise(function (resolve, reject) {
      request({
        url: `https://jsonplaceholder.typicode.com/posts`,
        json: true
      }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          //filtro los usuarios con userId = 6
          body = body.filter(res=>{
              return res.userId === 6
          })
          //Corto el array y agarro solo los primeros 4
          body = body.splice(0,4);
          resolve(body)
        } else {
          reject(error || response.statusCode)
        }
      })
    })
  }


module.exports = { getPublicacionesUsers }