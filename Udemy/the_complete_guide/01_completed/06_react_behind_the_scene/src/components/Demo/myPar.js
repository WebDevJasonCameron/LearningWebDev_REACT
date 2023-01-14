import React from "react";

const MyPar = (p) => {
	console.log("MyPar RUNNING");
	return <p>{p.children}</p>;
};

export default MyPar;
