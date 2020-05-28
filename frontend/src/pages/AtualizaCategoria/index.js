import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';


export default function AtualizaCategoria() {
    const [categoriaOld, setCategoriaOld] = useState([]);
    const [categoriaNome, setCategoriaNome] = useState(localStorage.getItem('categoria'));

    const categoriaId = localStorage.getItem('categoriaId');

    
    useEffect(() => {

        // Aqui estou pegando a categoria por seu id
        api.get(`categorias/${categoriaId}`
        ).then(response => {
            setCategoriaOld(response.data.categoria);
        });

    }, [categoriaId]);


    async function handleUpdate(e) {
        e.preventDefault();

        const categoria = categoriaNome;
        const data = {
            categoriaId,
            categoria
        }

        try {
            await api.put(`categorias/${categoriaId}`, data);
            alert(`Categoria atualizada com sucesso!`);

            setCategoriaOld({'categoria': categoria});

            /**
             * Caso a página seja recarregada, o localStorage
             * vai retornar o último valor atualizado e 
             * renderizar no campo do input
             */
            localStorage.setItem('categoria', categoria);
        } catch (err) {
            alert(`Erro ao tentar cadastrar o produto: ${err}`);
        }
    }

    
    return (
        <div className="atualiza-categoria-container">
            <div className="content">
                <section>
                    <h1>Atualização de Categoria</h1>

                    <h2>
                        Você está atualizando a categoria 
                        <span> {categoriaOld.categoria}</span>
                    </h2>

                    <p>
                        Para atualizar um produto, basta selecionar uma nova categoria 
                        ou uma nova descrição para o seu produto e clicar em Atualizar. 
                    </p>

                    <Link className="back-link" to="/categorias">
                        <FiArrowLeftCircle size={16} color="#e02041" />
                        Lista de Categorias
                    </Link>
                </section>

                <form onSubmit={handleUpdate}>
                    <input  placeholder="Escreva um nome para a Categoria"
                            value={categoriaNome} 
                            onChange={e => setCategoriaNome(e.target.value)}
                    />

                    <button className="button" type="submit">Atualizar</button>
                </form>
            </div>
        </div>
    );
}