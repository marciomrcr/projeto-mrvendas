const DataTableClient = () => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Propostas Emitidas</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lucena</td>
            <td>03</td>
            <td>01</td>
            <td>50.000.00</td>
          </tr>
          <tr>
            <td>Log Comercial</td>
            <td>04</td>
            <td>02</td>
            <td>50.000.00</td>
          </tr>
          <tr>
            <td>Transglobal</td>
            <td>03</td>
            <td>03</td>
            <td>50.000.00</td>
          </tr>
          <tr>
            <td>RS Engenharia</td>
            <td>01</td>
            <td>01</td>
            <td>50.000.00</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Totalizadores</th>
            <th>11</th>
            <th>07</th>
            <th>200.000,00</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};
export default DataTableClient;
