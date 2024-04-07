const saludo = process.env.NOMBRE || 'usuario'
const web = process.env.WEB
console.log('hola ' + saludo + ', estas conectado a ' + web)
