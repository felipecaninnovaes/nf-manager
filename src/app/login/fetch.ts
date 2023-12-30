"use server"

import { setCookie } from "nookies";
import { useState } from "react";

type SignInData = {
	email: string;
	password: string;
};

type User = {
    fistname: string;
    email: string;
    token: string;
}

export default async function handleServerSingIn({ email, password }: SignInData) {
    await fetch("http://10.15.1.203:3001/api/user/login", {
			method: "POST",
			body: JSON.stringify({ email, password }),
			headers: { "Content-Type": "application/json" },
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
				setCookie(undefined, "nextauth.token", data.token, {
					maxAge: 60 * 60 * 1, // 1 hour
				});
				console.log(data.token);
			})
			.catch((err) => {
				console.log(err);
			});
}