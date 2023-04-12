import mongoose from "mongoose";

const Produto = mongoose.model('Produto', {
    codigo: Number,
    descricao: String,
    preco: String,
    data_cadastro: String,
})

export default Produto;