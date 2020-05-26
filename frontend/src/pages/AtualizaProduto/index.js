import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

export default function AtualizaProduto() {
    const [categoriaId, setCategoriaId] = useState('');
    const [descricao, setDescricao] = useState('');
    /**
     * Também coloquei produtoId como um estado,
     * para poder limpar o Local Storage sem 
     * perder a variável, caso o usuário deseje editar
     * o mesmo produto da página novamente.
     */
    const [produtoId, setProdutoId] = useState('');

    const [categorias, setCategorias] = useState([]);

    /**
     * Quando tentei passar pelo estado desse jeito:
     * setCategoriaId(localStorage.getItem('categoriaId'));
     * o React parava de renderizar: 
     * Error: Too many re-renders, 
     * React limits the number of renders to prevent an infinite loop.
     * 
     * Depois preciso pesquisar se chamar muitos useStates seguidos,
     * mudando o estado muitas vezes seguidas, implica no erro. Ex.:
     * 
     * const produtoId = localStorage.getItem('produtoId');
     * setProdutoId(localStorage.getItem('produtoId'));
     */

    useEffect(() => {
        // Capturando os valores do produto, antes de atualizar.
        setCategoriaId(localStorage.getItem('categoriaId'));
        setDescricao(localStorage.getItem('descricao'));
        setProdutoId(localStorage.getItem('produtoId'));

        // Pegando todas as categorias, para que usuario excolha uma delas.
        api.get('categorias'
        ).then(response => {
            setCategorias(response.data.categorias);
        });

        // Apagando apenas keys trazidas para esta página.
        localStorage.removeItem('produtoId');
        localStorage.removeItem('descricao');
        localStorage.removeItem('categoriaId');
    }, []);

    async function handleUpdate(e) {
        e.preventDefault();

        const data = {
            categoriaId,
            descricao
        }

        try {
            await api.put(`produtos/${produtoId}`, data);
            alert(`Produto de ID=${produtoId} atualizado com sucesso!`);

        } catch (err) {
            alert(`Erro ao tentar cadastrar o produto: ${err}`);
        }
    }

    return (
        <div className="cadastro-produto-container">
            <div className="content">
                <section>
                    <h1>Atualização de Produto</h1>

                    <h2>Você está atualizando o produto de id: 
                        <span> {produtoId}</span>
                    </h2>

                    <p>
                        Para atualizar um produto, basta selecionar uma nova categoria 
                        ou uma nova descrição para o seu produto e clicar em Atualizar. 
                    </p>

                    <Link className="back-link" to="/produtos">
                        <FiArrowLeftCircle size={16} color="#e02041" />
                        Lista de Produtos
                    </Link>
                </section>

                <form onSubmit={handleUpdate}>
                     <select id="categorias" 
                            name="categoria"
                            value={categoriaId} 
                            onChange={e => setCategoriaId(parseInt(e.target.value))}
                            required
                            >

                        <option value="" disabled >Selecione uma Categoria</option>
                        {categorias.map(categoria =>(
                            <option key={categoria.id} 
                                    value={categoria.id}>

                                {categoria.categoria}
                            </option>
                        ))}
                    </select>
                    <textarea   name="descricao" 
                                id=""   
                                cols="30" 
                                rows="10"
                                value={descricao} 
                                onChange={e => setDescricao(e.target.value)}
                                defaultValue={descricao}>
                    </textarea>

                    <button className="button" type="submit">Atualizar</button>
                </form>
            </div>
        </div>
    );
}