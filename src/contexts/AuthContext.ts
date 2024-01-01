import { redirect } from "next/navigation";
import { cookies } from "next/headers";

type SignInData = {
	email: string;
	password: string;
};

type User = {
	fistname: string;
	email: string;
	token: string;
};

// async function handleServerSingIn({
// 	email,
// 	password,
// }: SignInData) {
// 	await fetch(`${process.env.API_URL_LOCAL}/api/user/login`, {
// 		method: "POST",
// 		body: JSON.stringify({ email, password }),
// 		headers: { "Content-Type": "application/json" },
// 		cache: "no-cache",
// 	})
// 		.then((res) => {
// 			if (res.ok) {
// 				return res.json();
// 			}
// 			return res.json().then((err) => {
// 				throw new Error(err.message);
// 			});
// 		})
// 		.then((data: User) => {
// 			cookies().set({
// 				name: "Bearer",
// 				value: data.token,
// 				expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 1),
// 				path: "/",
// 				sameSite: "strict",
// 			});

// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// 		redirect("/dashboard");
// }

async function login(formData: FormData) {
	'use server';
  
	const email = formData.get('email') as string;
	const password = formData.get('password') as string;
	await fetch(`${process.env.API_URL_LOCAL}/api/user/login`, {
		method: "POST",
		body: JSON.stringify({ email, password }),
		headers: { "Content-Type": "application/json" },
		cache: "no-cache",
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
			return res.json().then((err) => {
				throw new Error(err.message);
			});
		})
		.then((data: User) => {
			cookies().set({
				name: "Bearer",
				value: data.token,
				expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 1),
				path: "/",
				sameSite: "strict",
			});

		})
		.catch((err) => {
			console.log(err);
		});
		redirect("/dashboard");
}

export const AuthActions = {
	login,
  };