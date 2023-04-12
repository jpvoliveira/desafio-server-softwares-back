import express from 'express';
import mongoose from 'mongoose';
import Produto from './models/Produto.js';

const routes = express.Router();

routes.get('/produtos', async (req, res) => {
    try {
        const produtos = await Produto.find();
        res.json(produtos);
    } catch (err) {
    res.status(500).json({ error: err.message });
    }
});

routes.post('/produtos', async (req, res) => {
    try {
        const produto = new Produto(req.body);
        await produto.save();
        res.json(produto);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

routes.put('/produtos/:id', async (req, res) => {
    try {
        const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.json(produto);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

routes.delete('/produtos/:id', async (req, res) => {
    try {
      const produto = await Produto.findByIdAndDelete(req.params.id);
      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      res.json({ message: 'Produto removido com sucesso' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
});

export default routes;