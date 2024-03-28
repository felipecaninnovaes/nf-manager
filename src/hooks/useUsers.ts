import { IUsers, type IUsersData } from "@/interfaces/users";
import { getCookie } from "@/libs/cookies";

type cnpjcpf = {
	cnpjcpf: string;
};

export const useUser = async (): Promise<IUsersData> => {
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
			(data: IUsersData) => {
				return data as IUsersData;
			},
			() => Promise.resolve(),
		);
		return data as IUsersData;
	}
	return null as unknown as IUsersData;
};
