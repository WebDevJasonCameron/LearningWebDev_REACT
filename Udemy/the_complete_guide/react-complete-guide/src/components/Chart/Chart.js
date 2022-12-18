import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (p) => {
	const dataPointValues = p.dataPoints.map((dataPoint) => dataPoint.value);
	const totalMaximum = Math.max(...dataPointValues);

	return (
		<div className="chart">
			{p.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaximum}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
