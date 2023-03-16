const os = require('os');
const cluster = require('cluster');
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());

// if(cluster.isMaster){
//   for(let i = 0; i < os.cpus().length - 2; i++){
//     cluster.fork()
//   }
//   cluster.on('exit', (worker) => {
//     console.log(`Воркер с pid = ${process.pid} вмер`)
//     cluster.fork()
//   })
// } else {
//   console.log(`Воркер с pid = ${process.pid} ще працює`)
//   setInterval(()=> {
//     console.log(`Воркер с pid = ${process.pid} ще працює`)
//
//   }, 5000)
// }