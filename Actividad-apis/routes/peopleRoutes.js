const express = require('express');
const router = express.Router();
const controller = require('../controllers/peopleController');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: People
 *   description: Gestión de personas
 */

/**
 * @swagger
 * /people:
 *   get:
 *     tags: [People]
 *     summary: Obtener todas las personas
 *     responses:
 *       200:
 *         description: Lista de personas
 */
router.get("/", controller.getAll);

/**
 * @swagger
 * /people/{id}:
 *   get:
 *     tags: [People]
 *     summary: Obtener persona por ID
 *     parameters:
 *       - in: path
 *         name: id
 *     responses:
 *       200:
 *         description: Persona encontrada
 */
router.get("/:id", controller.getById);

/**
 * @swagger
 * /people:
 *   post:
 *     tags: [People]
 *     summary: Crear una persona
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       200:
 *         description: Persona creada
 */
router.post("/", controller.create);

/**
 * @swagger
 * /people/{id}:
 *   put:
 *     tags: [People]
 *     summary: Actualizar una persona por ID
 */
router.put("/:id", controller.update);

/**
 * @swagger
 * /people/{id}:
 *   delete:
 *     tags: [People]
 *     summary: Eliminar persona por ID
 */
router.delete("/:id", controller.delete);

module.exports = router;

