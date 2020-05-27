import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPlusCircle, FiEdit, FiTrash2, FiList } from 'react-icons/fi';

import api from '../../services/api'
import './styles.css'


export default function ListaProdutosCategoria() {
    const [produtos, setProdutos] = useState([]);

    const categoria = localStorage.getItem('categoria');
    const categoriaId = localStorage.getItem('categoriaId');

    const history = useHistory();

    useEffect(() => {
        
        api.get(`categoria/${categoriaId}/produtos`
        ).then(response => {
            setProdutos(response.data.produtos);
        });
        

        // localStorage.removeItem('categoria');
        // localStorage.removeItem('categoriaId');
    }, [categoriaId]);

    async function handleUpdate(produto){
        localStorage.setItem('produtoId', produto.id);
        localStorage.setItem('descricao', produto.descricao);
        localStorage.setItem('categoriaId', produto.categoria.id);

        history.push('/produtos/atualizar/')
    }

    async function handleDelete(id) {
        if(window.confirm(`Tem certeza que deseja apagar o produto ${id}?`)){
            try{
                await api.delete(`produtos/${id}`);
    
                setProdutos(produtos.filter(produto => produto.id !== id));
            } catch(err) {
                alert(`Erro ao deletar caso: ${err}`)
            }
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
              <h1>Produtos cadastrados na categoria {categoria} </h1>

                <Link className="back-link" to="/produtos/cadastro">
                    <FiPlusCircle size={18} color="#e02041" />
                    Cadastrar novo produto
                </Link>
            </div>

            {/* Exibindo mensagem caso não existam produtos */}
            {produtos.length === 0 &&
                <h2>
                    Não existem produtos cadastrados para esta Categoria.
                </h2>
            }

            <ul>
                {produtos.map(produto => (
                    <li key={produto.id}>
                        <strong>Categoria</strong>
                        <p>{(produto.categoria.categoria)}</p>

                        <strong>Descrição</strong>
                        <p>{produto.descricao}</p>

                        <button type="button" 
                                className="update" 
                                title="Atualizar produto"
                                onClick={() => handleUpdate(produto)} >

                            <FiEdit size={20} color="a8a8b3" />
                        </button>

                        <button type="button" 
                                className="delete" 
                                title="Deletar produto"
                                onClick={() => handleDelete(produto.id)} >
                                    
                            <FiTrash2 size={20} color="a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>       
        </div>
    )
}