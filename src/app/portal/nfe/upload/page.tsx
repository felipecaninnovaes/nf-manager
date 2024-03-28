/** @format */
import DragDrop from "@/components/draganddrop";
import { getCookie } from "@/libs/cookies";
import React from "react";

export default async function ProfilePage() {
	const cookie = (await getCookie("Bearer")) || "";
	const iduser = (await getCookie("IdUser")) || "";
	const base_url = process.env.API_URL_LOCAL;
	return (
		<div>
			<DragDrop
				model="nfe"
				cookie={cookie}
				base_url={base_url}
				iduser={iduser}
			/>
		</div>
	);
}
