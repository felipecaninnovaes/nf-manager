"use client";
import React from "react";

type SearchProps<T> = {
	data: string;
};
const Search = <T, K extends keyof T>({ data }: SearchProps<T>): JSX.Element => {
	return (
		<div className="p-2 text-right">
			<div className="flex flex-row gap-2 pb-2 border-b-2 border-zinc-200 dark:border-zinc-600">
				<input
					className="rounded-sm bg-zinc-100 dark:bg-zinc-800 p-1"
					type="text"
					placeholder="Search..."
				/>
				<button
					type="button"
					className="rounded-sm bg-zinc-100 border-2 border-zinc-100 dark:border-zinc-600 dark:bg-zinc-800 p-1 "
				>
					Search
				</button>
			</div>
		</div>
	);
};

export default Search;
