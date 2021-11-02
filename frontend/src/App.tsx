import DataTableClient from "components/DataTableClient";
import DataTableConsultor from "components/DataTableConsultor";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import React from "react";

function App() {
  return (
    //abre fragment
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">MRVendas</h1>
        <div>Resumo por Consultor</div>
        <DataTableClient />
        <div>Resumo por Cliente</div>
        <DataTableConsultor />
      </div>
      <Footer />
    </> //fecha fragment
  );
}

export default App;
