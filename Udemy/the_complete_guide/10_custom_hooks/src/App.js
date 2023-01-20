import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
	const [tasks, setTasks] = useState([]);

	const transformTasks = (tasksObj) => {
		const loadedTasks = [];

		for (const taskKey in tasksObj) {
			loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
		}

		setTasks(loadedTasks);
	};

	useHttp(
		{
			url: "https://custom-hooks-react-tut-default-rtdb.firebaseio.com/tasks.json",
		},
		transformTasks
	);

	const fetchTasks = async (taskText) => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(
				"https://custom-hooks-react-tut-default-rtdb.firebaseio.com/tasks.json"
			);

			if (!response.ok) {
				throw new Error("404: Request failed!");
			}

			const data = await response.json();
		} catch (err) {
			setError(err.message || "Something went wrong!");
		}
		setIsLoading(false);
	};

	useEffect(() => {
		fetchTasks();
	}, []);

	const taskAddHandler = (task) => {
		setTasks((prevTasks) => prevTasks.concat(task));
	};

	return (
		<React.Fragment>
			<NewTask onAddTask={taskAddHandler} />
			<Tasks
				items={tasks}
				loading={isLoading}
				error={error}
				onFetch={fetchTasks}
			/>
		</React.Fragment>
	);
}

export default App;
