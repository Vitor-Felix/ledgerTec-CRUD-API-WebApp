import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';

import './styles.css';


export default function CadastraCategoria() {
    return (
        <div className="cadastro-produto-container">
            <div className="content">
                <section>

                    <h1>Cadastro de Categoria</h1>
                    <p>
                        Para cadastar uma nova categoria na plataforma,
                        basta selecionar escrever o nome da categoria e
                        clicar em Cadastrar.
                    </p>

                    <Link className="back-link" to="/categorias">
                        <FiArrowLeftCircle size={16} color="#e02041" />
                        Lista de Categorias
                    </Link>
                </section>

                <form>
                    <input placeholder="Escreva o nome da Categoria"/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}