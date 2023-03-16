const fs = require('fs')
const path = require('path')

//синхронний метод
// fs.mkdirSync(path.resolve(__dirname, 'dir'), {recursive: true})

//асинхронний метод
// console.log('start')
// fs.mkdir(path.resolve(__dirname, 'dir', 'dir1'), (err) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('Folder created')
// })
// console.log('end')

//видалення папки
// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//   if (err) {
//     throw err;
//   }
// })

//запис файлу (перезатирає)
// fs.writeFile(path.resolve(__dirname, 'text.txt'), 'start' ,(err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('File wrote')
//   //дозаписує
//   fs.appendFile(path.resolve(__dirname, 'text.txt'), 'add to the end' ,(err) => {
//     if (err) {
//       throw err;
//     }
//     console.log('File wrote')
//   })
// })

const writeFilesAsync = async (path, data) => {
  return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
    if (err) {
      return reject(err.message)
    }
    resolve()
  }))
}

const appendFilesAsync = async (path, data) => {
  return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
    if (err) {
      return reject(err.message)
    }
    resolve()
  }))
}

const readFilesAsync = async (path) => {
  return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf8'}, (err, data) => {
    if (err) {
      return reject(err.message)
    }
    resolve(data)
  }))
}

const removeFilesAsync = async (path) => {
  return new Promise((resolve, reject) => fs.rm(path, (err, data) => {
    if (err) {
      return reject(err.message)
    }
    resolve(data)
  }))
}

// writeFilesAsync(path.resolve(__dirname, 'test.txt'), 'data')
//   .then(() => appendFilesAsync(path.resolve(__dirname, 'test.txt'),'123'))
//   .then(() => appendFilesAsync(path.resolve(__dirname, 'test.txt'),'456'))
//   .then(() => appendFilesAsync(path.resolve(__dirname, 'test.txt'),'789'))
//   .then(() => readFilesAsync(path.resolve(__dirname, 'test.txt')))
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// removeFilesAsync(path.resolve(__dirname, 'test.txt'))
//   .then(() => console.log('file was removed'))
const text = process.env.TEXT || '';

writeFilesAsync(path.resolve(__dirname, 'text.txt'), text)
  .then(() => readFilesAsync(path.resolve(__dirname, 'text.txt')))
  .then(data => data.split(' ').length)
  .then(count => writeFilesAsync(path.resolve(__dirname, 'count.txt'), `Кількість слів ${count}`))
  .then(()=> removeFilesAsync(path.resolve(__dirname, 'text.txt')))




