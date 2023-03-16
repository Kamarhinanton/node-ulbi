const http = require('http');
const PORT = process.env.PORT || 8000;
const EventEmitter = require('events');

const emitter = new EventEmitter();


class Router {
  constructor() {
    this.endpoints = {}
  }

  request(method = 'GET', path, handler) {
    if (!this.endpoints[path]) {
      this.endpoints[path] = {}
    }

    const endpoint = this.endpoints[path]

    if(endpoint[method]) {
      throw new Error(`[${method}] за адресою ${path} вже існує`)
    }

    endpoint[method] = handler
    emitter.on(`[${path}]:[${method}]`, (req, res) => {
      handler(req, res)
    })
  }

  get(path, handler){
    this.request('GET', path, handler)
  }
  post(path, handler){
    this.request('POST', path, handler)
  }
  put(path, handler){
    this.request('PUT', path, handler)
  }
  delete(path, handler){
    this.request('DELETE', path, handler)
  }
}

const router = new Router();

router.get('/users', (req,res)=>{
  res.end('YOU SEND REQUEST TO /USERS')
})

router.get('/posts', (req,res)=>{
  res.end('YOU SEND REQUEST TO /POSTS')
})


const server = http.createServer((req, res) => {
  // res.writeHead(200, {
  //   'Content-type': 'text/html; charset=utf-8'
  // })
  // res.writeHead(200, {
  //   'Content-type': 'application/json;'
  // })
  // if (req.url === '/users') {
  //   return res.end(JSON.stringify([
  //     {id: 1, name: 'Anton'}
  //   ]))
  // }
  // if (req.url === '/posts') {
  //   return res.end('POSTS')
  // }
  // res.end(req.url)
  const emitted = emitter.emit(`[${req.url}]:[${req.method}]`, req, res)
  if(!emitted){
    res.end()
  }
})

server.listen(PORT, () => console.log(`Server started on port ${PORT}`))