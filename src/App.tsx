import React from 'react';
import './App.scss';
import { Header } from './components/header/header';
import { CentralPageView } from './components/central-page-view/central-page-view';
import { Footer } from './components/footer/footer';

const App = () => (
  <div className="application">
    <Header />
    <CentralPageView />
    <Footer />
  </div>
);

export default App;
