const { DataTypes } = require("sequelize");

const dbConnection = require("../config/db");

// creación de tabla Post de DB --> llamamos a nuestra DB
const Post = dbConnection.define("Post", {
  // creamos las columnas de tabla Post
  title: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
});

// export acceso a tabla Post
module.exports = Post;