import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Chart, registerables } from "chart.js";
import Card from "../../common_components/Card";
import HumidityChart from "./HumidityChart";

Chart.register(...registerables);

ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement);

const Humidity = () => {
  
  return (
    <>
      {/* 현재토양습도 */}
      

      {/* 하루 습도 그래프 */}
      <Card>
        <HumidityChart />
      </Card>
    </>
  );
};

export default Humidity;
