import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';


export default function Home() {
    return (
        <div className="lista-links">
            <h2>Lista de links</h2>
            <ul>
                <li>
                    <Link className="back-link" to="/categorias/cadastro">
                        <FiArrowRightCircle size={18} color="#e02041" />
                        Cadastrar nova Categoria [X]
                    </Link>
                </li>
                <li>
                    <Link className="back-link" to="/produtos/cadastro">
                        <FiArrowRightCircle size={18} color="#e02041" />
                        Cadastrar novo Produto [X]
                    </Link>
                </li>
                <li>
                    <Link className="back-link" to="/categorias/">
                        <FiArrowRightCircle size={18} color="#e02041" />
                        Listar todas as Categorias [X]
                    </Link>
                    <ul>
                        <li>Aqui se encotra o método para editar Categoria [X]</li>
                        <li>Aqui se encotra o método para excluir Categoria [X]</li>
                        <li>Aqui se encotra o método para listar Produtos por Categoria [X]</li>
                    </ul>
                </li>
                <li>
                    <Link className="back-link" to="/produtos/">
                        <FiArrowRightCircle size={18} color="#e02041" />
                        Listar todos os Produtos [X]
                    </Link>
                    <ul>
                        <li>Aqui se encotra o método para editar Produto [X]</li>
                        <li>Aqui se encotra o método para excluir Produto [X]</li>
                    </ul>
                </li>
            </ul>
        </div>    
    );
}