import express from 'express';
import Danacion from '../models/Danacion.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Danaciones
 *   description: Gestión de donaciones realizadas
 */

/**
 * @swagger
 * /danaciones:
 *   post:
 *     summary: Registrar una donación
 *     tags: [Danaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Danacion'
 *     responses:
 *       201:
 *         description: Donación registrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Danacion'
 *       400:
 *         description: Datos inválidos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/', async (req, res) => {
    try {
        const nuevo = new Danacion(req.body);
        const guardado = await nuevo.save();
        res.status(201).json(guardado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

/**
 * @swagger
 * /danaciones:
 *   get:
 *     summary: Listar todas las donaciones
 *     tags: [Danaciones]
 *     responses:
 *       200:
 *         description: Lista de donaciones con donador y útil populados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Danacion'
 */
router.get('/', async (req, res) => {
    try {
        const lista = await Danacion.find().populate('donadorId').populate('utilId');
        res.status(200).json(lista);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * @swagger
 * /danaciones/{id}:
 *   get:
 *     summary: Obtener una donación por ID
 *     tags: [Danaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Donación encontrada con datos populados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Danacion'
 *       404:
 *         description: No encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/:id', async (req, res) => {
    try {
        const item = await Danacion.findById(req.params.id).populate('donadorId').populate('utilId');
        if (!item) return res.status(404).json({ message: 'No encontrado' });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * @swagger
 * /danaciones/{id}:
 *   put:
 *     summary: Actualizar una donación
 *     tags: [Danaciones]
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
 *             $ref: '#/components/schemas/Danacion'
 *     responses:
 *       200:
 *         description: Donación actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Danacion'
 *       404:
 *         description: No encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.put('/:id', async (req, res) => {
    try {
        const actualizado = await Danacion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!actualizado) return res.status(404).json({ message: 'No encontrado' });
        res.status(200).json(actualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

/**
 * @swagger
 * /danaciones/{id}:
 *   delete:
 *     summary: Eliminar una donación
 *     tags: [Danaciones]
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
        const eliminado = await Danacion.findByIdAndDelete(req.params.id);
        if (!eliminado) return res.status(404).json({ message: 'No encontrado' });
        res.status(200).json({ message: 'Eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
