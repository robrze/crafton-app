import React from "react";
import "./App.scss";
import { Header } from "./components/header/header";
import { CentralPageView } from './components/central-page-view/central-page-view';

const App = () => (
  <div className="application">
    <Header />
    <CentralPageView />
  </div>
);

export default App;
