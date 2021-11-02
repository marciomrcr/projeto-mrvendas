import Chart from "react-apexcharts";
const BarChart = () => {
  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };

  const mockData = {
    labels: {
      categories: ["Lobato", "Lucas", "Nara Almeida", "Onilza Souza"],
    },
    series: [
      {
        name: "% Sucesso",
        data: [43.6, 67.1, 51.6, 45.6],
      },
    ],
  };

  return (
    <Chart
      options={{ ...options, xaxis: mockData.labels }}
      series={mockData.series}
      type="bar"
      height="240"
    />
  );
};

export default BarChart;
