"use client";
import { DragEvent, useState } from "react";

export type ModelType<T, K extends keyof T> = {
	model: string;
};

const DragAndDrop = <T, K extends keyof T>({
	model
}: ModelType<T, K>): JSX.Element => {
	const [isOver, setIsOver] = useState(false);
	const [files, setFiles] = useState<File[]>([]);


	// Define the event handlers
	const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		setIsOver(true);
	};

	const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		setIsOver(false);
	};

	const handleDrop = async (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		setIsOver(false);

		// Fetch the files
		const droppedFiles = Array.from(event.dataTransfer.files);
		setFiles(droppedFiles);

		// Use FileReader to read file content
		droppedFiles.map((file) => {
			const data = new FormData();
			data.set(model, file);
			const res = fetch("http://localhost:3001/api/upload/nfe", {
				method: "POST",
				body: data,
			});		
		});
	};

	return (
		<div
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
			onDrop={handleDrop}
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "50px",
				width: "300px",
				border: "1px dotted",
				backgroundColor: isOver ? "lightgray" : "white",
			}}
		>
			Drag and drop some files here
		</div>
	);
}

export default DragAndDrop;
