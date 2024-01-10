import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "./libs/cookies";

export const config = {
	matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};

const publicRoutes = ["/login"];

export async function middleware(req: NextRequest) {
	if (publicRoutes.includes(req.nextUrl.pathname)) {
		return NextResponse.next();
	}

	if (req.nextUrl.pathname === "/") {
		return NextResponse.redirect(new URL("/portal/dashboard", req.url));
	}

	if (req.nextUrl.pathname === "/portal") {
		return NextResponse.redirect(new URL("/portal/dashboard", req.url));
	}

	const token = await cookies().get("Bearer");
	const iduser = (await getCookie("IdUser")) || "";

	if (!token) {
		return NextResponse.redirect(new URL("/login", req.url));
	}

	const response = await fetch(
		`${process.env.API_URL_REMOTE}/api/user/token/\$${token.value}\$${iduser}`,
		{
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			cache: "no-cache",
		},
	);

	if (response.status === 401) {
		return NextResponse.redirect(new URL("/login", req.url));
	}
	return NextResponse.next();
}
