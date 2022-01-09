const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use('/api', router)
server.use(middlewares)
server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running on :3000')
})

