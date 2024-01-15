"use client";
import { DragEvent, useState } from "react";

export type ModelType<T, K extends keyof T> = {
	model: string;
	cookie: string;
	iduser: string;
	base_url?: string;
};

const DragAndDrop = <T, K extends keyof T>({
	model,
	cookie,
	iduser,
	base_url,
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
		droppedFiles.map(async (file) => {
			const cookies = await cookie;
			const idusers = await iduser;
			const data = new FormData();
			data.set(model, file);
			const res = fetch(`${base_url}/api/nfe/upload`, {
				method: "POST",
				body: data,
				headers: {
					Authorization: `Bearer ${cookies}`,
					"id-user": idusers,
				},
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
		</div>
	);
};

export default DragAndDrop;
