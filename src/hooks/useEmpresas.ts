import { getCookie } from "@/libs/cookies";
import { IEmpresas } from "@/interfaces/empresas";

export const useEmpresas = async (): Promise<IEmpresas[]> => {
	"use server";
	const cookie = (await getCookie("Bearer")) || "";
	const iduser = (await getCookie("IdUser")) || "";
	const res: Response = await fetch(`${process.env.API_URL_REMOTE}/api/empresas/${iduser}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${cookie}`,
			"id-user": iduser,
		},
		cache: "no-cache",
	});
	if (res.status === 200) {
		const data = await res.json().then(
			(data: IEmpresas[]) => {
				return data as IEmpresas[];
			},
			() => Promise.resolve(),
		);
		return data as IEmpresas[];
	}
	return [] as IEmpresas[];
};
