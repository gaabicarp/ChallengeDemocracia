const request = require('request')

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

function getPosts () {
    return new Promise(function (resolve, reject) {
      request({
        url: `https://jsonplaceholder.typicode.com/posts`,
        json: true
      }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          body = body.filter(res=>{
              return res.userId === 6
          })
          body = body.splice(0,4);
          console.log(body)
          // let jsonBody = JSON.parse(body.replace('])}while(1);</x>', ''))
          resolve(body)
        } else {
          reject(error || response.statusCode)
        }
      })
    })
  }


module.exports = { getPublicacionesUsers }