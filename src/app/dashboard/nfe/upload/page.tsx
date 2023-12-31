/** @format */
import DragDrop from "@/components/DragAndDrop";
import { getCookie } from "@/contexts/Cookie";
import { NextApiRequest, NextApiResponse } from "next";
import React from "react";

export default async function ProfilePage() {
	const cookie = getCookie("Bearer") || "";
	const base_url = process.env.API_URL_LOCAL;
	return (
		<div>
			<DragDrop model="nfe" cookie={cookie} base_url={base_url}/>
		</div>
	);
}


