import React from "react";
import "./ChartBar.css";

const ChartBar = (p) => {
	let barFillHeight = "0%";

	if (p.max > 0) {
		barFillHeight = Math.round((p.value / p.maxValue) * 100) + "%";
	}

	return (
		<div className="chart-bar">
			<div className="chart-bar__inner">
				<div
					className="chart-bar__fill"
					style={{ height: barFillHeight }}
				></div>
			</div>
			<div className="chart-bar__label">{p.label}</div>
		</div>
	);
};

export default ChartBar;
