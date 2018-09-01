let mysql = require('mysql')
const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env

const mysqlCfg = {
  host: MYSQL_HOST || 'localhost',
  port: MYSQL_PORT || '3306',
  user: MYSQL_USER || 'root',
  password: MYSQL_PASSWORD || 'YOUR_PASSWORD',
  database: MYSQL_DATABASE || 'YOUR_DATABASE',
  connectionLimit: 50 // default 10
}

let pool = mysql.createPool(mysqlCfg)

let query = function(sql, params, callback) {
  try {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err)
        return callback(true)
      }

      // 커넥션을 풀에 반환
      connection.release()

      connection.query(sql, params, (err, result) => {
        if (err) {
          console.error('db error17:' + err)
          return callback(true)
        }
        callback(false, result)
      })
    })
  } catch (err) {
    console.error('db error24:' + err)
    return callback(true)
  }
}

module.exports.query = query
