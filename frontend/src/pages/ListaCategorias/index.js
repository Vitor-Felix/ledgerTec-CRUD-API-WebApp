import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlusCircle, FiEdit, FiTrash2, FiList } from 'react-icons/fi';

import './styles.css'


export default function ListaCategorias() {

    function activateLasers() {
        if(window.confirm("Are you sure?")){
            alert('DELETADO!!!');
        }
        else{
            alert('ARREGÔ!')
        }
    }

    return(
        <div className="lista-produtos-container">
            <header>
                <span>Bem vindo(a)</span>

                <Link className="back-link" to="/produtos">
                    <FiList size={18} color="#e02041" />
                    Listar Produtos
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
                <li>
                    <strong>Categoria</strong>
                    <p>PC-Desktop</p>

                    <Link className="back-link" to="/categoria/produtos/:id">
                        <FiList size={18} color="#e02041" />
                        Listar todos os produtos desta categoria
                     </Link>

                    <Link to="/categorias/atualizar/1">
                        <button type="button" className="update" title="Atualizar produto">
                            <FiEdit size={20} color="a8a8b3" />
                        </button>
                    </Link>

                    <button type="button" className="delete" title="Deletar produto"
                            onClick={activateLasers}>
                        <FiTrash2 size={20} color="a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Categoria</strong>
                    <p>Smartphone</p>

                    <Link className="back-link" to="/categoria/produtos/:id">
                        <FiList size={18} color="#e02041" />
                        Listar todos os produtos desta categoria
                     </Link>
                     
                    <Link to="/categorias/atualizar/2">
                        <button type="button" className="update" title="Atualizar produto">
                            <FiEdit size={20} color="a8a8b3" />
                        </button>
                    </Link>

                    <button type="button" className="delete" title="Deletar produto"
                            onClick={activateLasers}>
                        <FiTrash2 size={20} color="a8a8b3" />
                    </button>
                </li>

            </ul>       
        </div>
    )
}