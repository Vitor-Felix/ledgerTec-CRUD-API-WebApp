import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPlusCircle, FiEdit, FiTrash2, FiList } from 'react-icons/fi';

import api from '../../services/api'
import './styles.css'


export default function ListaCategorias() {
    const [categorias, setCategorias] = useState([]);

    const history = useHistory();

    useEffect(() => {

        api.get('categorias'
        ).then(response => {
            setCategorias(response.data.categorias);
        })
    }, []);

    async function handleUpdate(categoria){
        localStorage.setItem('categoriaId', categoria.id);
        localStorage.setItem('categoria', categoria.categoria);

        history.push('/categorias/atualizar/')
    }

    async function handleDelete(id) {
        if(window.confirm("Are you sure?")){
            alert('DELETADO!!!');
        }
        else{
            alert('ARREGÔ!')
        }
        // if(window.confirm(`Tem certeza que deseja apagar o produto ${id}?`)){
        //     try{
        //         await api.delete(`produtos/${id}`);
    
        //         setProdutos(produtos.filter(produto => produto.id !== id));
        //     } catch(err) {
        //         alert(`Erro ao deletar caso: ${err}`)
        //     }
        // }
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
                {categorias.map(categoria => (
                    <li>
                    <strong>Categoria</strong>
                    <h2 className="nome-categoria">{categoria.categoria}</h2>

                    <Link className="back-link" to="/categoria/produtos/:id">
                        <FiList size={18} color="#e02041" />
                        Listar produtos desta categoria
                    </Link>

                    <button type="button" 
                            className="update" 
                            title="Atualizar produto"
                            onClick={() => handleUpdate(categoria)}>

                        <FiEdit size={20} color="a8a8b3" />
                    </button>

                    <button type="button" 
                            className="delete" 
                            title="Deletar produto"
                            onClick={() => handleDelete(categoria.id)}>

                        <FiTrash2 size={20} color="a8a8b3" />
                    </button>
                </li>
                ))}
            </ul>       
        </div>
    )
}