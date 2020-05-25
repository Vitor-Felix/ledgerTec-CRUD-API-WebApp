import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';

import './styles.css';


export default function AtualizaCategoria() {
    return (
        <div className="cadastro-produto-container">
            <div className="content">
                <section>
                    <h1>Atualização de Categoria</h1>

                    <h2>Você está atualizando a categoria de id: <span>2000</span></h2>

                    <p>
                        Para atualizar um produto, basta selecionar uma nova categoria 
                        ou uma nova descrição para o seu produto e clicar em Atualizar. 
                    </p>

                    <Link className="back-link" to="/categorias">
                        <FiArrowLeftCircle size={16} color="#e02041" />
                        Lista de Categorias
                    </Link>
                </section>

                <form>
                    <input placeholder="Escreva um título para o Produto"/>

                    <button className="button" type="submit">Atualizar</button>
                </form>
            </div>
        </div>
    );
}