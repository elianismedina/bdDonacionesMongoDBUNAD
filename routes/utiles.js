import express from 'express';
import Util from '../models/Util.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Utiles
 *   description: Gestión de artículos donables
 */

/**
 * @swagger
 * /utiles:
 *   post:
 *     summary: Crear un útil
 *     tags: [Utiles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Util'
 *     responses:
 *       201:
 *         description: Útil creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Util'
 *       400:
 *         description: Datos inválidos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/', async (req, res) => {
    try {
        const nuevo = new Util(req.body);
        const guardado = await nuevo.save();
        res.status(201).json(guardado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

/**
 * @swagger
 * /utiles:
 *   get:
 *     summary: Listar todos los útiles
 *     tags: [Utiles]
 *     responses:
 *       200:
 *         description: Lista de útiles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Util'
 */
router.get('/', async (req, res) => {
    try {
        const lista = await Util.find();
        res.status(200).json(lista);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * @swagger
 * /utiles/{id}:
 *   get:
 *     summary: Obtener un útil por ID
 *     tags: [Utiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Útil encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Util'
 *       404:
 *         description: No encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/:id', async (req, res) => {
    try {
        const item = await Util.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'No encontrado' });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * @swagger
 * /utiles/{id}:
 *   put:
 *     summary: Actualizar un útil
 *     tags: [Utiles]
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
 *             $ref: '#/components/schemas/Util'
 *     responses:
 *       200:
 *         description: Útil actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Util'
 *       404:
 *         description: No encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.put('/:id', async (req, res) => {
    try {
        const actualizado = await Util.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!actualizado) return res.status(404).json({ message: 'No encontrado' });
        res.status(200).json(actualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

/**
 * @swagger
 * /utiles/{id}:
 *   delete:
 *     summary: Eliminar un útil
 *     tags: [Utiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Eliminado exitosamente
 *       404:
 *         description: No encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.delete('/:id', async (req, res) => {
    try {
        const eliminado = await Util.findByIdAndDelete(req.params.id);
        if (!eliminado) return res.status(404).json({ message: 'No encontrado' });
        res.status(200).json({ message: 'Eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
