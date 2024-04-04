import Chart from "react-apexcharts";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

const SalesChart = ({ operatorName }) => {
  const chartoptions = {
    series: [
      {
        name: "Spend",
        data: [0, 31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Test",
        data: [0, 11, 32, 45, 32, 34, 52, 41],
      },
      {
        name: "Revenue",
        data: [0, 11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 3,
      },

      stroke: {
        curve: "smooth",
        width: 2,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Aug",
        ],
      },
    },
  };
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">{operatorName}</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Yearly Sales Report
        </CardSubtitle>
        <Chart
          type="area"
          width="100%"
          height="250"
          options={chartoptions.options}
          series={chartoptions.series}
        ></Chart>
      </CardBody>
    </Card>
  );
};

export default SalesChart;
