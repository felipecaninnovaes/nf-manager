import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const config = {
	matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};

const publicRoutes = ["/login"];

export async function middleware(req: NextRequest) {
	if (publicRoutes.includes(req.nextUrl.pathname)) {
		return NextResponse.next();
	}

	const token = await cookies().get("Bearer");

	if (!token) {
		return NextResponse.redirect(new URL("/login", req.url));
	}
	const response = await fetch(
		`${process.env.API_URL_LOCAL}/api/user/token/${token.value}`,
		{
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	);
	if (response.status === 401) {
		return NextResponse.redirect(new URL("/login", req.url));
	}

	return NextResponse.next();
}