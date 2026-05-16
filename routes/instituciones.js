import express from 'express';
import Institucion from '../models/Institucion.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Instituciones
 *   description: Gestión de instituciones receptoras
 */

/**
 * @swagger
 * /instituciones:
 *   post:
 *     summary: Crear una institución
 *     tags: [Instituciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Institucion'
 *     responses:
 *       201:
 *         description: Institución creada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Institucion'
 *       400:
 *         description: Datos inválidos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/', async (req, res) => {
    try {
        const nuevo = new Institucion(req.body);
        const guardado = await nuevo.save();
        res.status(201).json(guardado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

/**
 * @swagger
 * /instituciones:
 *   get:
 *     summary: Listar todas las instituciones
 *     tags: [Instituciones]
 *     responses:
 *       200:
 *         description: Lista de instituciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Institucion'
 */
router.get('/', async (req, res) => {
    try {
        const lista = await Institucion.find();
        res.status(200).json(lista);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * @swagger
 * /instituciones/{id}:
 *   get:
 *     summary: Obtener una institución por ID
 *     tags: [Instituciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Institución encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Institucion'
 *       404:
 *         description: No encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/:id', async (req, res) => {
    try {
        const item = await Institucion.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'No encontrado' });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * @swagger
 * /instituciones/{id}:
 *   put:
 *     summary: Actualizar una institución
 *     tags: [Instituciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Institucion'
 *     responses:
 *       200:
 *         description: Institución actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Institucion'
 *       404:
 *         description: No encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.put('/:id', async (req, res) => {
    try {
        const actualizado = await Institucion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!actualizado) return res.status(404).json({ message: 'No encontrado' });
        res.status(200).json(actualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

/**
 * @swagger
 * /instituciones/{id}:
 *   delete:
 *     summary: Eliminar una institución
 *     tags: [Instituciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Eliminada exitosamente
 *       404:
 *         description: No encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.delete('/:id', async (req, res) => {
    try {
        const eliminado = await Institucion.findByIdAndDelete(req.params.id);
        if (!eliminado) return res.status(404).json({ message: 'No encontrado' });
        res.status(200).json({ message: 'Eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
