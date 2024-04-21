import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './components/home/HomePage';
import LoginPage from './components/auth/LoginPage';
import BlogPage from './components/blog/BlogPage';
// Importar otros componentes

const App = () => {
    return ( <
        Router >
        <
        Header / >
        <
        Switch >
        <
        Route path = "/"
        exact component = { HomePage }
        /> <
        Route path = "/login"
        component = { LoginPage }
        /> <
        Route path = "/blog"
        component = { BlogPage }
        /> { /* Definir otras rutas */ } <
        /Switch> <
        Footer / >
        <
        /Router>
    );
};

export default App;