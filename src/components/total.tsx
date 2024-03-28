"use client";

import type { INfe } from "@/interfaces/nfe";
import { formatarCnpj } from "@/libs/utils";
import React from "react";

type TotalProps<T> = {
	data: INfe[];
};
const Total = <T, K extends keyof T>({ data }: TotalProps<T>): JSX.Element => {
	let total = 0.0;
	data.map((item) => {
		total += Number(item.nfe_nftotal);
	}, 0);
	const totalformat = Number(total).toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
	return (
		<div className="p-2 text-right">
			<h1>Total: {totalformat}</h1>
		</div>
	);
};

export default Total;
