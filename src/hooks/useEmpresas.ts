import type { IEmpresaData } from "@/interfaces/empresas";
import { getCookie } from "@/libs/cookies";

export const useEmpresas = async (): Promise<IEmpresaData> => {
	"use server";
	const cookie = (await getCookie("Bearer")) || "";
	const iduser = (await getCookie("IdUser")) || "";
	const res: Response = await fetch(
		`${process.env.API_URL_REMOTE}/api/empresas/${iduser}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${cookie}`,
				"id-user": iduser,
			},
			cache: "no-cache",
		},
	);
	if (res.status === 200) {
		const data = await res.json().then(
			(data: IEmpresaData) => {
				return data as IEmpresaData;
			},
			() => Promise.resolve(),
		);
		return data as IEmpresaData;
	}
	return null as unknown as IEmpresaData;
};
