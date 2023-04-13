import React from "react";
import BarChart from './BarChart'
import LineChart from './LineChart'
import PieChart from './PieChart'
import RadarChart from './RadarChart'

const Select = () => {
  const [selectValue, setSelectValue] = React.useState("");
  const onChange = (event) => {
    const value = event.target.value;
    setSelectValue(value);
  };

  return (
    <div>
      <h1>Select Graph Style to View</h1>
      <h2>Red = 12, Blue = 19, Yellow = 3, Green = 5, Purple = 2, Orange = 3</h2>
      <select onChange={onChange}>
        <option defaultValue>
          Select Graph
        </option>
        <option value="BarChart">Bar Chart</option>
        <option value="LineChart">Line Chart</option>
        <option value="PieChart">Pie Chart</option>
        <option value="RadarChart">Radar Chart</option>
      </select>
      {(selectValue==="BarChart") && <BarChart />}
      {(selectValue==="LineChart") && <LineChart />}
      {(selectValue==="PieChart") && <PieChart />}
      {(selectValue==="RadarChart") && <RadarChart />}
    </div>
  );
};
export default Select;