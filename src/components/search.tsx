"use client";
import React, { Children } from "react";
import Button from "@/components/button";
import { cn } from "@/libs/utils";

type SearchProps<T> = {
	children?: React.ReactNode;
	className?: string;
} & React.ComponentProps<"input">;
const Search = <T, K extends keyof T>({
	children,
	className,
	...props
}: SearchProps<T>): JSX.Element => {
	return (
		<div className="w-full h-auto p-2 text-right">
			<div className="flex flex-row gap-2">
				<input
					className={cn(
						className,
						"appearance-none rounded-none relative block w-full px-4 py-2  border-2 text-shark-950 dark:text-shark-100 border-shark-300 dark:border-shark-700 placeholder-shark-400 dark:placeholder-shark-100 bg-shark-50 dark:bg-shark-800 rounded-t-md focus:outline-none focus:ring-shark-500 focus:border-shark-500 focus:z-10 sm:text-sm",
					)}
					type="text"
					placeholder="Pesquisa..."
					{...props}
				/>
				<div className="py-2">{children}</div>
			</div>
		</div>
	);
};

export default Search;
