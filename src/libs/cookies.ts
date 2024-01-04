import { cookies } from "next/headers";

export const getCookie = async (name: string) => {
	"use server";
	const cookie = await cookies().get(name)?.value;
	if (cookie) {
		return cookie;
	}
	return undefined;
};
