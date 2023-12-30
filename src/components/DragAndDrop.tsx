"use client";
import { DragEvent, useState } from "react";

export type ModelType<T, K extends keyof T> = {
	model: string;
	children: React.ReactNode;
};

const DragAndDrop = <T, K extends keyof T>({
	model,
	children
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
	<div className="">

		<div
		onDragOver={handleDragOver}
		onDragLeave={handleDragLeave}
		onDrop={handleDrop}
		className="w-96 h-96 border-2 border-dashed border-shark-800 dark:border-shark-300 rounded-md flex flex-col justify-center items-center"
		>
			Araste e solte os xmls aqui
		</div>
		<a href="/pages/nfe/upload" className="py-2 px-6 rounded-lg text-shark-50 bg-shark-100 border-2 border-shark-100 dark:border-shark-600 dark:bg-shark-800 p-1">Upload</a>
	</div>
		
	);
}

export default DragAndDrop;
