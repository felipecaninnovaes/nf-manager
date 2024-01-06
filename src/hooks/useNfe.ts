import { getCookie } from "@/libs/cookies";
import { INfe } from "@/interfaces/nfe";

type cnpjcpf = {
	cnpjcpf: string;
};

export const useNfe = async (): Promise<INfe[]> => {
	"use server";
	const cookie = (await getCookie("Bearer")) || "";
	const res: Response = await fetch(`${process.env.API_URL_REMOTE}/api/nfe`, {
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
		(data: INfe[]) => {
			return data as INfe[];
		},
		() => Promise.resolve(),
	);
	return data as INfe[];
};
