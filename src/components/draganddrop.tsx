"use client";
import { DragEvent, useState } from "react";

export type ModelType<T, K extends keyof T> = {
	model: string;
	cookie?: Promise<string | undefined>;
	base_url?: string;
};

const DragAndDrop = <T, K extends keyof T>({
	model,
	cookie,
	base_url,
}: ModelType<T, K>): JSX.Element => {
	const [isOver, setIsOver] = useState(false);
	const [files, setFiles] = useState<File[]>([]);
	const [token, setToken] = useState<string | undefined>();

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
			const content = await cookie;
			const data = new FormData();
			data.set(model, file);
			const res = fetch(`${base_url}/api/nfe/upload`, {
				method: "POST",
				body: data,
				headers: {
					Authorization: `Bearer ${content}`,
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
			<a
				href="/pages/nfe/upload"
				className="py-2 px-6 rounded-lg text-shark-50 bg-shark-100 border-2 border-shark-100 dark:border-shark-600 dark:bg-shark-800 p-1"
			>
				Upload
			</a>
		</div>
	);
};

export default DragAndDrop;
