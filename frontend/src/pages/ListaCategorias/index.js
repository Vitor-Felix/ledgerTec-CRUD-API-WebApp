import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPlusCircle, FiEdit, FiList } from "react-icons/fi";

import api from "../../services/api";
import "./styles.css";

export default function ListaCategorias() {
    const [categorias, setCategorias] = useState([]);

    const history = useHistory();

    useEffect(() => {
        api.get("categorias").then((response) => {
            setCategorias(response.data.categorias);
        });
    }, []);

    async function handleListProdutosCategoria(categoria) {
        localStorage.setItem("categoriaId", categoria.id);
        localStorage.setItem("categoria", categoria.categoria);

        history.push(`/categoria/${categoria.id}/produtos`);
    }

    async function handleUpdate(categoria) {
        localStorage.setItem("categoriaId", categoria.id);
        localStorage.setItem("categoria", categoria.categoria);

        history.push("/categorias/atualizar/");
    }
    /**
     * No último dia para enviar o trabalho, percebi que se uma categoria
     * for apagada, acarretará em uma série de erros em seus Produtos
     * dependentes. Como solução super rápida, escondi o botão de excluir.
     */
    // async function handleDelete(categoria) {
    //     if(window.confirm(`Deseja remover a categoria ${categoria.categoria}?`)){
    //         try{
    //             await api.delete(`categorias/${categoria.id}`);

    //             setCategorias(categorias.filter(ctgr => ctgr.id !== categoria.id));
    //         } catch(err) {
    //             alert(`Erro ao deletar caso: ${err}`)
    //         }
    //     }
    // }

    return (
        <div className="lista-produtos-container">
            <header>
                <span>Bem vindo(a)</span>

                <Link className="back-link" to="/produtos">
                    <FiList size={18} color="#e02041" />
                    Listar todos os Produtos
                </Link>
            </header>

            <div className="pagina-titulo">
                <h1>Categorias cadastradas</h1>

                <Link className="back-link" to="/categorias/cadastro">
                    <FiPlusCircle size={18} color="#e02041" />
                    Cadastrar nova categoria
                </Link>
            </div>

            <ul>
                {categorias.map((categoria) => (
                    <li key={categoria.id}>
                        <strong>Categoria</strong>
                        <h2 className="nome-categoria">
                            {categoria.categoria}
                        </h2>

                        <button
                            type="button"
                            className="lista-produtos-categoria"
                            onClick={() =>
                                handleListProdutosCategoria(categoria)
                            }
                        >
                            <span>
                                <FiList
                                    size={18}
                                    color="#e02041"
                                    className="filist"
                                />
                            </span>
                            Listar produtos desta categoria
                        </button>

                        <button
                            type="button"
                            className="delete"
                            title="Atualizar produto"
                            onClick={() => handleUpdate(categoria)}
                        >
                            <FiEdit size={20} color="a8a8b3" />
                        </button>

                        {/* <button type="button" 
                            className="delete" 
                            title="Deletar produto"
                            onClick={() => handleDelete(categoria)}>

                        <FiTrash2 size={20} color="a8a8b3" />
                    </button> */}
                    </li>
                ))}
            </ul>
        </div>
    );
}
