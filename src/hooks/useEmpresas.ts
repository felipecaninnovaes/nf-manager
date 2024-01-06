import { getCookie } from "@/libs/cookies";
import { IEmpresas } from "@/interfaces/empresas";

export const useEmpresas = async (): Promise<IEmpresas[]> => {
	"use server";
	const cookie = (await getCookie("Bearer")) || "";
	const res: Response = await fetch(`${process.env.API_URL_REMOTE}/api/empresas`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${cookie}`,
		},
		cache: "no-cache",
	});
	if (res.ok) {
		const data = await res.json();
		return data;
	}

	const data = await res.json().then(
		(data: IEmpresas[]) => {
			return data as IEmpresas[];
		},
		() => Promise.resolve(),
	);
	return data as IEmpresas[];
};
