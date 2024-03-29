const { Pool } = require("pg")
// Coloca aquí tus credenciales

const connectionData2 = {
  user: process.env.USER_DB2,
  host: process.env.HOST2,
  database: process.env.DATABASE2,
  password: process.env.PASSWORD_DB2,
  port: process.env.PORT2,
  idleTimeoutMillis: 1000, // close idle clients after 1 second
  connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
  allowExitOnIdle: true,
}

const dbConnect = async () => {
  try {
      const connectionData = {
        user: process.env.USER_DB,
        host: process.env.HOST,
        database: process.env.DATABASE,
        password: process.env.PASSWORD_DB,
        port: process.env.PORT,
        connectionTimeoutMillis: 0,
        idleTimeoutMillis: 1000, // close idle clients after 1 second
        connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
        allowExitOnIdle: true,
        min: 1,
        max: 3,
      }
      //const client = new Client(connectionData)
      //return client

      pool = await new Pool(connectionData)
      return pool
  } catch (error) {
     return error
  }
  
}

const dbConnect2 = async () => {
  try {
      const connectionData = {
        user: process.env.USER_DB2,
        host: process.env.HOST2,
        database: process.env.DATABASE2,
        password: process.env.PASSWORD_DB2,
        port: process.env.PORT2,
        idleTimeoutMillis: 1000, // close idle clients after 1 second
        connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
        allowExitOnIdle: true,
        min: 1,
        max: 3,
      }
      //const client = new Client(connectionData)
      //return client

      pool = await new Pool(connectionData)
      return pool
  } catch (error) {
     return error
  }
  
}

const dbConnect3 = async () => {
  try {
      const connectionData = {
        user: process.env.USER_DB3,
        host: process.env.HOST3,
        database: process.env.DATABASE3,
        password: process.env.PASSWORD_DB3,
        port: process.env.PORT3,
        idleTimeoutMillis: 1000, // close idle clients after 1 second
        connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
        allowExitOnIdle: true,
        min: 1,
        max: 3,
      }
      //const client = new Client(connectionData)
      //return client

      pool = await new Pool(connectionData)
      return pool
  } catch (error) {
     return error
  }

  
}



module.exports = { dbConnect, dbConnect2, dbConnect3, connectionData2 };