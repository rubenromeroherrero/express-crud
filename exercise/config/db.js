const { Sequelize } = require("sequelize");

// acceso a las variables de entorno 
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST} = process.env;

// creamos nuestra base de datos 
const dbConnection = new Sequelize( DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  // loggin:false
});

// permite acceder a la base de datos y permite crear las tablas (PROMESA)
dbConnection.sync().then(() => console.log("All models loaded"));

module.exports = dbConnection;