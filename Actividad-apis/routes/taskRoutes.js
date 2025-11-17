const express = require('express');
const router = express.Router();
const controller = require('../controllers/taskController');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Gestión de tareas
 */

/**
 * @swagger
 * /tasks:
 *   get:
 *     tags: [Tasks]
 *     summary: Obtener todas las tareas
 */
router.get("/", controller.getAll);

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     tags: [Tasks]
 *     summary: Obtener tarea por ID
 */
router.get("/:id", controller.getById);

/**
 * @swagger
 * /tasks:
 *   post:
 *     tags: [Tasks]
 *     summary: Crear una tarea
 */
router.post("/", controller.create);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     tags: [Tasks]
 *     summary: Actualizar tarea por ID
 */
router.put("/:id", controller.update);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     tags: [Tasks]
 *     summary: Eliminar tarea por ID
 */
router.delete("/:id", controller.delete);

module.exports = router;

