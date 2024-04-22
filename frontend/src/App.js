import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './components/home/HomePage';
import NosotrosPage from './components/nosotros/nosotros';
import BlogPage from './components/blog/BlogPage';
import ContactPage from './components/contact/ContactPage';
import LoginPage from './components/auth/LoginPage';
import LocationPage from './components/location/locationPage';
// Importa otros componentes de página si los tienes

const App = () => (
  <Router>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/nosotros" component={NosotrosPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/contacto" component={ContactPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/location" component={LocationPage} />
        {/* Asegúrate de incluir todas las rutas que necesitas aquí */}
      </Switch>
    </main>
    <Footer />
  </Router>
);

export default App;
