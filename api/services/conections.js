import mysql from 'mysql/promise'

const Conection = await mysql.createConection({
        host: 'localhost',
        password: '1234',
        user:'root',
        database:'user'
        
})

export {Conection}