import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import LocationPage from './components/LocationPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/nosotros" component={AboutUsPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/contacto" component={ContactPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/ubicacion" component={LocationPage} />
      </Switch>
    </Router>
  );
};

export default App;
