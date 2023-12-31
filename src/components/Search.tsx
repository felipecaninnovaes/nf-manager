"use client";
import React, { Children } from "react";

type SearchProps<T> = {
	data: string;
	children: React.ReactNode;
};
const Search = <T, K extends keyof T>({ data, children }: SearchProps<T>): JSX.Element => {
	return (
		<div className="p-2 text-right">
			<div className="flex flex-row gap-2 pb-2 border-b-2 border-shark-200 dark:border-shark-600">
				<input
					className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-shark-300 dark:border-shark-700 placeholder-shark-400 dark:placeholderbg-shark-700 bg-shark-50 dark:bg-shark-800 text-shark-900 rounded-t-md focus:outline-none focus:ring-shark-500 focus:border-shark-500 focus:z-10 sm:text-sm"
					type="text"
					placeholder="Pesquisa..."
				/>
				<button
					type="button"
					className="group relative w-auto flex justify-center py-2 px-6 text-sm font-medium rounded-lg text-shark-800 dark:text-shark-100 bg-shark-50 border-2 border-shark-300 dark:border-shark-600 dark:bg-shark-800 p-1 hover:bg-shark-200 dark:hover:bg-shark-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-shark-500"
				>
					Pesquisar
				</button>
				{children}
			</div>
		</div>
	);
};

export default Search;
