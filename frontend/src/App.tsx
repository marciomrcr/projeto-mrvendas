import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";

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
        <h1 className="text-primary py-3">MRVendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Sucesso %</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Sucesso %</h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h3 className="text-primary">Resumo por Consultor</h3>
        </div>
        <DataTableClient />
        <div className="py-3">
          <h3 className="text-primary">Resumo por Cliente</h3>
        </div>

        <DataTableConsultor />
      </div>
      <Footer />
    </> //fecha fragment
  );
}

export default App;
