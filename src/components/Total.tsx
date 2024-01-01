"use client";

import { Nfe } from "@/interfaces/nfe";
import React from "react";

type TotalProps<T> = {
	data: Nfe[];
};
const Total = <T, K extends keyof T>({ data }: TotalProps<T>): JSX.Element => {
	let total = 0.0;
	data.map((item) => {
		total += Number(item.nftotal);
	}, 0);

	return (
		<div className="p-2 text-right">
			<h1>Total: R$ {total}</h1>
		</div>
	);
};

export default Total;
