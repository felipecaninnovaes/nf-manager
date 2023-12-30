/** @format */
import DragDrop from "@/components/DragAndDrop";
import React from "react";

export default function ProfilePage() {
	return (
		<div>
			{/* Botao de voltar */}
			<a className="" href="/pages/nfe">
				Voltar
			</a>
			<DragDrop model="nfe" />
		</div>
	);
}
