"use client";
import React from "react";
import { IEmpresas } from "@/interfaces/empresas";

type SelectEmpresasProps<T> = {
	className?: string;
	empresas: IEmpresas[];
} & React.ComponentProps<"select">;

interface IOptions {
	value: string;
	label: string;
}

type SelectProps<T> = {
	className?: string;
	options: IOptions[];
} & React.ComponentProps<"select">;

export const SelectEmpresas = <T, K extends keyof T>({
	className,
	empresas,
	...props
}: SelectEmpresasProps<T>): JSX.Element => {
	return (
		<div className="w-full h-auto p-2 text-right">
			<div className="flex flex-row gap-2">
				<select
					className="appearance-none rounded-none relative block w-full px-4 py-2  border-2 text-shark-950 dark:text-shark-100 border-shark-300 dark:border-shark-700 placeholder-shark-400 dark:placeholder-shark-100 bg-shark-50 dark:bg-shark-800 rounded-t-md focus:outline-none focus:ring-shark-500 focus:border-shark-500 focus:z-10 sm:text-sm"
					{...props}
				>
					<option value="selecione">SELECIONE UMA EMPRESA</option>
					{empresas?.map((item, index) => {
						return (
							<option key={index + 1} value={item.cnpj}>
								{item.nome}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
};

export const Select = <T, K extends keyof T>({
	className,
	options,
	...props
}: SelectProps<T>): JSX.Element => {
	return (
		<div className="w-full h-auto p-2 text-right">
			<div className="flex flex-row gap-2">
				<select
					className="appearance-none rounded-none relative block w-full px-4 py-2  border-2 text-shark-950 dark:text-shark-100 border-shark-300 dark:border-shark-700 placeholder-shark-400 dark:placeholder-shark-100 bg-shark-50 dark:bg-shark-800 rounded-t-md focus:outline-none focus:ring-shark-500 focus:border-shark-500 focus:z-10 sm:text-sm"
					{...props}
				>
					{options?.map((item, index) => {
						return (
							<option key={index + 1} value={item.value}>
								{item.label}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
};
