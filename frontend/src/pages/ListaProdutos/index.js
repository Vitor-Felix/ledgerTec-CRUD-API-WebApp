import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlusCircle, FiEdit, FiTrash2, FiList } from 'react-icons/fi';

// import api from '../../services/api'
import './styles.css'

// import logoImg from '../../assets/logo.svg'

export default function ListaProdutos() {

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

                <Link className="back-link" to="/categorias">
                    <FiList size={18} color="#e02041" />
                    Listar Categorias
                </Link>
            </header>

            <div className="pagina-titulo">
                <h1>Produtos cadastrados</h1>

                <Link className="back-link" to="/produtos/cadastro">
                    <FiPlusCircle size={18} color="#e02041" />
                    Cadastrar novo produto
                </Link>
            </div>

            <ul>
                <li>
                    <strong>Categoria</strong>
                    <p>PC-Desktop</p>

                    <strong>Descrição</strong>
                    <p>
                        Aqui se espera que a descrição seja um pouco
                        maior que só isso aqui, até onde vai essa frase?
                        Eita danado! 
                        Aqui se espera que a descrição seja um pouco
                        maior que só isso aqui, até onde vai essa frase?
                        Eita danado!

                        Aqui se espera que a descrição seja um pouco
                        maior que só isso aqui, até onde vai essa frase?
                        Eita danado!
                    </p>

                    {/* <strong>VALOR:</strong>
                    <p>120,00</p>    */}

                    <Link to="/produtos/atualizar/1">
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

                    <strong>Descrição</strong>
                    <p>
                        Aqui se espera que a descrição seja um pouco
                        maior que só isso aqui, até onde vai essa frase?
                        Eita danado! 
                        Aqui se espera que a descrição seja um pouco
                        maior que só isso aqui, até onde vai essa frase?
                        Eita danado!

                        Aqui se espera que a descrição seja um pouco
                        maior que só isso aqui, até onde vai essa frase?
                        Eita danado!
                    </p>

                    {/* <strong>VALOR:</strong>
                    <p>120,00</p>    */}

                    <Link to="/produtos/atualizar/2">
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