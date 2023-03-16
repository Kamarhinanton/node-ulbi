const path = require('path')

// console.log('Зклеїти', path.join(__dirname, 'first'))
// __dirname - поточна директорія
const fullPath = path.resolve('Абсолютний шлях')
console.log(fullPath)
// console.log('Parse', path.parse(fullPath))
// console.log('Розділювач', path.sep)
// console.log('Перевірка на абсолютний шлях', path.isAbsolute('first/second'))
// console.log('Назва файлу', path.basename(fullPath))
// console.log('Розширення', path.extname(fullPath))

//------------------
const siteURL = 'http://localhost:8080/users?id=5123'
const url = new URL(siteURL)
// console.log(url)
