import express from 'express';
import Usuario from '../models/Usuario.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const nuevo = new Usuario(req.body);
        const guardado = await nuevo.save();
        res.status(201).json(guardado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const lista = await Usuario.find();
        res.status(200).json(lista);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const item = await Usuario.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'No encontrado' });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const actualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!actualizado) return res.status(404).json({ message: 'No encontrado' });
        res.status(200).json(actualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const eliminado = await Usuario.findByIdAndDelete(req.params.id);
        if (!eliminado) return res.status(404).json({ message: 'No encontrado' });
        res.status(200).json({ message: 'Eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
