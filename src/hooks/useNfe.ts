import type { INfe } from "@/interfaces/nfe";
import { getCookie } from "@/libs/cookies";

type cnpjcpf = {
	cnpjcpf: string;
};

export const useNfe = async (): Promise<INfe[]> => {
	"use server";
	const cookie = (await getCookie("Bearer")) || "";
	const iduser = (await getCookie("IdUser")) || "";
	const res: Response = await fetch(
		`${process.env.API_URL_REMOTE}/api/nfe/${iduser}`,
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
			(data: INfe[]) => {
				return data as INfe[];
			},
			() => Promise.resolve(),
		);
		return data as INfe[];
	}
	return [] as INfe[];
};
