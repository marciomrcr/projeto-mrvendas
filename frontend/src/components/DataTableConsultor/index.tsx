const DataTableConsultor = () => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Consultor</th>
            <th>Propostas Emitidas</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lobato</td>
            <td>34</td>
            <td>25</td>
            <td>50.000.00</td>
          </tr>
          <tr>
            <td>Lucas</td>
            <td>34</td>
            <td>25</td>
            <td>50.000.00</td>
          </tr>
          <tr>
            <td>Nara Almeida</td>
            <td>34</td>
            <td>25</td>
            <td>50.000.00</td>
          </tr>
          <tr>
            <td>Onilza Souza</td>
            <td>34</td>
            <td>25</td>
            <td>50.000.00</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Totalizadores</th>
            <th>136</th>
            <th>100</th>
            <th>200.000,00</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};
export default DataTableConsultor;
