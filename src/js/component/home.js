import React from "react";
import { Todo } from "./todo";

export function Home() {
	return (
		<div className="text center mt-5">
			<h1>Tareas</h1>
			<div className="row">
				<div className="col-md-3"></div>
				<div className="col-md-6">
					<Todo />
				</div>
				<div className="col-md-3"></div>
			</div>
		</div>
	);
}
