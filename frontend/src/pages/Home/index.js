import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import categoriasImg from "../../assets/listaCategorias_mda.png";

export default function Home() {
    return (
        <div className="home-container">
            <section>
                <h1>Cadastrador de Produtos</h1>

                <p>
                    <ul>
                        <li>
                            Ao listar todos os produtos, em cada produto existe
                            um botão para atualizar e excluir o produto.
                        </li>
                        <li>
                            Nesta mesma tela ao lado do título, pode-se
                            cadastrar um novo produto.
                        </li>
                        <li>
                            Na barra superior, pode-se listar todas as
                            categorias.
                        </li>
                        <li>
                            Cada categoria possui um botão, para listar apenas
                            os produtos pertencentes a esta categoria.
                        </li>
                    </ul>
                </p>

                <Link className="back-link" to="/produtos">
                    <button className="button">Listar todos os Produtos</button>
                </Link>
            </section>
            <img src={categoriasImg} alt="exemplo de pagina" />
        </div>
    );
}
