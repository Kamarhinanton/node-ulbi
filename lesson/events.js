const Emitter = require("events");

const emitter = new Emitter();

emitter.on('message', (data, second, third) => {
  console.log('You send message ' + data)
  console.log('Second argument ' + second)
})

const MESSAGE = process.env.message || '';

if(MESSAGE){
  emitter.emit('message', MESSAGE, 123)
} else{
  emitter.emit('message', 'No message')
}