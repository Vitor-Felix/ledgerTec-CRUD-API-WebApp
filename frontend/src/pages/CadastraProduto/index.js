import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';


export default function CadastraProduto() {
    const [categoriaId, setCategoriaId] = useState('');
    const [descricao, setDescricao] = useState('');

    // Para renderizar as categorias no section do HTML
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {

        api.get('categorias'
        ).then(response => {
            setCategorias(response.data.categorias);
        })
    }, []);

    async function handleCadastro(e) {
        e.preventDefault();

        const data = {
            categoriaId,
            descricao
        }

        try {
            const response = await api.post('produtos', data);
            alert(`ID do seu produto cadastrado: ${response.data.produtoId}`);

            //Resetando valores, sem recarregar a pagina
            setCategoriaId('');
            setDescricao('');
        } catch (err) {
            alert(`Erro ao tentar cadastrar o produto: ${err}`);
        }
    }
        

    return (
        <div className="cadastro-produto-container">
            <div className="content">
                <section>

                    <h1>Cadastro de Produto</h1>
                    <p>
                        Para cadastrar um novo produto na plataforma,
                        basta selecionar uma categoria, escrever uma 
                        descrição para o seu produto e clicar em Cadastrar. 
                    </p>

                    <Link className="back-link" to="/produtos">
                        <FiArrowLeftCircle size={16} color="#e02041" />
                        Lista de Produtos
                    </Link>
                </section>

                <form onSubmit={handleCadastro}>

                    <select id="categorias" 
                            name="categoria"
                            value={categoriaId} 
                            onChange={e => setCategoriaId(parseInt(e.target.value))}
                            required
                            >
                        
                        <option value="" disabled>Selecione uma Categoria</option>
                        {categorias.map(categoria =>(
                            <option key={categoria.id} 
                                    value={categoria.id}>

                                {categoria.categoria}
                            </option>
                        ))}
                    </select>

                    <textarea 
                        placeholder="Escreva uma descrição para o produto" 
                        name="descricao" 
                        id="" 
                        cols="30" 
                        rows="10"
                        value={descricao} 
                        onChange={e => setDescricao(e.target.value)}>
                    </textarea>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}