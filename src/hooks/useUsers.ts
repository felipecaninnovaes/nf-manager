import { getCookie } from "@/libs/cookies";
import { IUsers } from "@/interfaces/users";

type cnpjcpf = {
	cnpjcpf: string;
};

export const useUser = async (): Promise<IUsers[]> => {
	"use server";
	const cookie = (await getCookie("Bearer")) || "";
	const iduser = (await getCookie("IdUser")) || "";
	const res: Response = await fetch(`${process.env.API_URL_REMOTE}/api/user`, {
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
			(data: IUsers[]) => {
				return data as IUsers[];
			},
			() => Promise.resolve(),
		);
		return data as IUsers[];
	}
	return [] as IUsers[];
};
