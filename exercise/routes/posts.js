// requerimos libreria express y la Ruta
var express = require('express');
var router = express.Router();
// acceso a nuestra tabla Post DB
const Post = require("../models/Post");

// creacion de endpoints

// endpoint --> all posts
router.get("/all", async(req, res) => {
 const posts = await Post.findAll();
 res.send(posts);
});

// endpoint --> x post
router.get("/:id", async(req, res) => {
  const { id } = req.params;
  const foundUser = await Post.findByPk(+id);
  res.send(foundUser);
});

// endpoint --> editar x parte post
router.patch("/content?", async(req, res) => {
  const {id} = req.params;
  // cogemos el valor del content que vamos a cambiar, del body (postman o front)
  const { content } = req.body;
  // update = actualizar -> la primera posición es lo que vamos a modificar, y la segunda posición el elemento a modificar
  const affectedPost = await User.update({ content }, { where: { id } });
  affectedRows
    ? res.send(`THe number of rows affected is ${affectedPost}`)
    : res.send("None row was affected");
})

// endpoint --> editar all post
router.put("/:id", async(req, res) => {
  const { id } = req.params;
  const editPost = await Post.update(req.body, {where: {id}});
  editPost
  ? res.send (`The row affected is ${editPost}`)
  : res.send ("Now rows affected");
});

// endpoint--> creacion de post
router.post("/insert", async (req, res) => {
  // estamos haciendo un INSERT en la tabla User --> es un método de sequelize
  const createdPost = await Post.create(req.body);
  res.send(createdPost.toJSON());
  // res.sendStatus(201); --> en este caso lo suyo sólo sería enviar una confirmación de que se ha registrado, no le pasaríamos el usuario al front
});

// endpoint --> eliminar post
router.delete("/:id", async(req, res) => {
  const { id } = req.params;
  // destrucción en id dado
  const destroyPost = await Post.destroy({where: {id}});
  // ternaria para analizar si encontramos id y accion borrado
  destroyPost 
  ? res.send (`The row deleted is ${destroyPost}`)
  : res.send ("Now rows deleted");
});


module.exports = router;