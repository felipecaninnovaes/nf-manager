import { getCookie } from "@/libs/cookies";
import { redirect } from "next/navigation";

type EmpresaData = {
	nome: string;
	nome_fant: string;
	cnpj: string;
	rua: string;
	numero: string;
	bairro: string;
	cidade: string;
	estado: string;
	cep: string;
	telefone: string;
	email: string;
	regime_tributario: string;
};

async function cadastrar(formData: FormData) {
	"use server";
	const empresa: EmpresaData = {
		nome: formData.get("nome") as string,
		nome_fant: formData.get("nome_fant") as string,
		cnpj: formData.get("cnpj") as string,
		rua: formData.get("rua") as string,
		numero: formData.get("numero") as string,
		bairro: formData.get("bairro") as string,
		cidade: formData.get("cidade") as string,
		estado: formData.get("estado") as string,
		cep: formData.get("cep") as string,
		telefone: formData.get("telefone") as string,
		email: formData.get("email") as string,
		regime_tributario: formData.get("regime_tributario") as string,
	};
	const cookie = (await getCookie("Bearer")) || "";
	const iduser = (await getCookie("IdUser")) || "";
	await fetch(`${process.env.API_URL_LOCAL}/api/empresas/cadastrar`, {
		method: "POST",
		body: JSON.stringify(empresa),
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${cookie}`,
			"id-user": iduser,
		},

		cache: "no-cache",
	})
		.then((res) => {
			if (res.status === 201) {
				return res.json();
			}
			return res.json().then((err) => {
				throw new Error(err.message);
			});
		})
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
		});
}

export const empresa = { cadastrar };
