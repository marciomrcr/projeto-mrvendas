import DataTable from "components/DataTable";
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
        <DataTable />
      </div>
      <Footer />
    </> //fecha fragment
  );
}

export default App;
