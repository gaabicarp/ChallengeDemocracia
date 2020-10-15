const request = require('request')

//llamo a la funcion getPost y devuelvo en un json su contenido.
function getPublicacionesUsers(req, res) {
  fetchPost()
        .then(posts => {
            res.json(posts)
        })
        .catch(err => {
            console.log(err)
            res.status(500).end()
        })
}

function getInfoUsers(req, res) {
  // console.log(req.body.userId, 'as')
  fetchInfoUsers(req.body.userId)
        .then(user => {
            console.log(user)
            res.json({userInfo : user})
        })
        .catch(err => {
            console.log(err)
            res.status(500).end()
        })
}


//traigo los usuarios de la api pedida
function fetchPost () {
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

function fetchInfoUsers(userId){
  return new Promise(function(resolve,reject){
    request({
      url: `https://jsonplaceholder.typicode.com/users/${userId}`,
      json: true
    }, function(error, response, body){
      if (!error && response.statusCode === 200){
        resolve(body)
      } else {
        reject(error || response.statusCode)
      }
    })
  })
} 


module.exports = { getPublicacionesUsers, getInfoUsers }