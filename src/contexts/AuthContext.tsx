import { createContext, ReactNode, useEffect, useState } from "react";

import { setCookie } from "nookies";

type User = {
	name: string;
	email: string;
	avatar_url: string;
};

type SignInData = {
	email: string;
	password: string;
};

type AuthContextType = {
	isAuthenticated: boolean;
	//   user: User;
	//   signIn: (data: SignInData) => Promise<void>
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
	const isAuthenticated = false;

	async function signIn({ email, password }: SignInData) {
		fetch("http://localhost:3000/api/user/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password }),
		})
			.then((res) => {
				if (res.ok) {
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
		// setCookie(undefined, "nextauth.token", token, {
		// 	maxAge: 60 * 60 * 1, // 1 hour

		// });
	}

	return (
		<AuthContext.Provider value={{ isAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
}

// import { createContext, useEffect, useState } from "react";
// import { setCookie, parseCookies } from 'nookies'
// import Router from 'next/router'

// import { recoverUserInformation, signInRequest } from "../services/auth";
// import { api } from "../services/api";

// type User = {
//   name: string;
//   email: string;
//   avatar_url: string;
// }

// type SignInData = {
//   email: string;
//   password: string;
// }

// type AuthContextType = {
//   isAuthenticated: boolean;
//   user: User;
//   signIn: (data: SignInData) => Promise<void>
// }

// export const AuthContext = createContext({} as AuthContextType)

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null)

//   const isAuthenticated = !!user;

//   useEffect(() => {
//     const { 'nextauth.token': token } = parseCookies()

//     if (token) {
//       recoverUserInformation().then(response => {
//         setUser(response.user)
//       })
//     }
//   }, [])

//   async function signIn({ email, password }: SignInData) {
//     const { token, user } = await signInRequest({
//       email,
//       password,
//     })

//     setCookie(undefined, 'nextauth.token', token, {
//       maxAge: 60 * 60 * 1, // 1 hour
//     })

//     api.defaults.headers.Authorization = `Bearer ${token}`;

//     setUser(user)

//     Router.push('/dashboard');
//   }

//   return (
//     <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }
