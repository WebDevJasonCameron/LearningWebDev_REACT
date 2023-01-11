import React from "react";
import MyPar from "./myPar";

const DemoOutput = (p) => {
	console.log("demoOutput RUNNING");
	return <MyPar>{p.show ? "This is new!" : ""}</MyPar>;
};

export default DemoOutput;
