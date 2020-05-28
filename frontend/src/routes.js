import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";

import AtualizaProduto from "./pages/AtualizaProduto";
import AtualizaCategoria from "./pages/AtualizaCategoria";

import CadastraCategoria from "./pages/CadastraCategoria";
import CadastraProduto from "./pages/CadastraProduto";

import ListaProdutos from "./pages/ListaProdutos";
import ListaCategorias from "./pages/ListaCategorias";

import ListaProdutosCategoria from "./pages/ListaProdutosCategoria";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />

                <Route path="/categorias" exact component={ListaCategorias} />
                <Route path="/produtos" exact component={ListaProdutos} />

                <Route path="/produtos/atualizar" component={AtualizaProduto} />
                <Route
                    path="/categorias/atualizar"
                    component={AtualizaCategoria}
                />

                <Route
                    path="/categorias/cadastro"
                    component={CadastraCategoria}
                />
                <Route path="/produtos/cadastro" component={CadastraProduto} />

                <Route
                    path="/categoria/:id/produtos"
                    component={ListaProdutosCategoria}
                />
            </Switch>
        </BrowserRouter>
    );
}
