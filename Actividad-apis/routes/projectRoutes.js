const express = require('express');
const router = express.Router();
const controller = require('../controllers/projectController');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Projects
 *   description: Gestión de proyectos
 */

/**
 * @swagger
 * /projects:
 *   get:
 *     tags: [Projects]
 *     summary: Obtener todos los proyectos
 */
router.get("/", controller.getAll);

/**
 * @swagger
 * /projects/{id}:
 *   get:
 *     tags: [Projects]
 *     summary: Obtener proyecto por ID
 */
router.get("/:id", controller.getById);

/**
 * @swagger
 * /projects:
 *   post:
 *     tags: [Projects]
 *     summary: Crear un proyecto
 */
router.post("/", controller.create);

/**
 * @swagger
 * /projects/{id}:
 *   put:
 *     tags: [Projects]
 *     summary: Actualizar proyecto por ID
 */
router.put("/:id", controller.update);

/**
 * @swagger
 * /projects/{id}:
 *   delete:
 *     tags: [Projects]
 *     summary: Eliminar proyecto por ID
 */
router.delete("/:id", controller.delete);

module.exports = router;

