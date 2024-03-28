"use server";

import { getCookie } from "@/libs/cookies";

export async function deleteInDB(id: string, tableName: string) {
	const cookie = (await getCookie("Bearer")) || "";
	await fetch(`${process.env.API_URL_REMOTE}/api/${tableName}/delete/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${cookie}`,
		},
		cache: "no-cache",
	});
}
