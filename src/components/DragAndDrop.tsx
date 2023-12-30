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
			const res = fetch("http://10.15.1.203:3001/api/nfe/upload", {
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
			className="w-96 h-96 border-2 border-dashed border-zinc-800 dark:border-zinc-300 rounded-md flex flex-col justify-center items-center"
		>
			Araste e solte os xmls aqui
		</div>
	);
}

export default DragAndDrop;
