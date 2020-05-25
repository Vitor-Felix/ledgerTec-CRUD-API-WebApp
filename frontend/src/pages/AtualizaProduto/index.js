import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';

import './styles.css';


export default function AtualizaProduto() {
    return (
        <div className="cadastro-produto-container">
            <div className="content">
                <section>
                    <h1>Atualização de Produto</h1>

                    <h2>Você está atualizando o produto de id: <span>1</span></h2>

                    <p>
                        Para atualizar um produto, basta selecionar uma nova categoria 
                        ou uma nova descrição para o seu produto e clicar em Atualizar. 
                    </p>

                    <Link className="back-link" to="/produtos">
                        <FiArrowLeftCircle size={16} color="#e02041" />
                        Lista de Produtos
                    </Link>
                </section>

                <form>
                    <select id="categorias" name="categoria">
                        <option value="" disabled selected >Selecione uma Categoria</option>
                        <option value="1">Notebook</option>
                        <option value="2">Smartphone</option>
                        <option value="3">PC-Desktop</option>
                        <option value="4">Caixa de Som</option>
                        <option value="4">Mouse</option>
                    </select>
                    {/* <input placeholder="Escreva um título para o Produto"/> */}
                    <textarea placeholder="Escreva uma descrição para o produto" 
                    name="descricao" id="" cols="30" rows="10"></textarea>

                    <button className="button" type="submit">Atualizar</button>
                </form>
            </div>
        </div>
    );
}