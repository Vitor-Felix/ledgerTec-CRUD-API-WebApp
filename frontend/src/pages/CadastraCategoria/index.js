import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";

import api from "../../services/api";

export default function CadastraCategoria() {
    const [categoria, setCategoria] = useState("");

    async function handleCadastro(e) {
        e.preventDefault();

        const data = {
            categoria,
        };

        try {
            const response = await api.post("categorias", data);
            alert(`ID do seu produto cadastrado: ${response.data.categoriaId}`);

            //Resetando valores, sem recarregar a pagina
            setCategoria("");
        } catch (err) {
            alert(`Erro ao tentar cadastrar o produto: ${err}`);
        }
    }

    return (
        <div className="cadastro-produto-container">
            <div className="content">
                <section>
                    <h1>Cadastro de Categoria</h1>
                    <p>
                        Para cadastar uma nova categoria na plataforma, basta
                        selecionar escrever o nome da categoria e clicar em
                        Cadastrar.
                    </p>

                    <Link className="back-link" to="/categorias">
                        <FiArrowLeftCircle size={16} color="#e02041" />
                        Lista de Categorias
                    </Link>
                </section>

                <form onSubmit={handleCadastro}>
                    <input
                        placeholder="Escreva o nome da Categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    />

                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}
