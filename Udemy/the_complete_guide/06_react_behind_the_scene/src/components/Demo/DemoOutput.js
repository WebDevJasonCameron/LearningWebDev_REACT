import React from "react";

const DemoOutput = (p) => {
	console.log("demoOutput RUNNING");
	return <p>{p.show ? "This is new!" : ""}</p>;
};

export default DemoOutput;
