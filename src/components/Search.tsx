"use client";
import React, { Children } from "react";
import Button from "./Buttons";

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
				<Button
					type="button" variant="outline" color="primary" size="md"			
				>
					Pesquisar
				</Button>
				{children}
			</div>
		</div>
	);
};

export default Search;
