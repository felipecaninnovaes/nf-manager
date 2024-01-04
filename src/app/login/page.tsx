import Head from "next/head";
import { AuthActions } from "@/contexts/AuthContext";
import Button from "@/components/button";

type SignInData = {
	email: string;
	password: string;
};

export default async function Login() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-shark-50 dark:bg-shark-950 py-12 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>Home</title>
			</Head>

			<div className="max-w-sm w-full space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-shark-900 dark:text-shark-100">
						Sign in to your account
					</h2>
				</div>
				<form className="mt-8 space-y-6" action={await AuthActions.login}>
					<input type="hidden" name="remember" defaultValue="true" />
					<div className="rounded-md shadow-sm space-y-2">
						<div>
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-shark-300 dark:border-shark-700 placeholder-shark-500 dark:placeholder-shark-400 bg-shark-700 text-shark-900 dark:text-shark-200 rounded-t-md focus:outline-none focus:ring-shark-500 focus:border-shark-500 focus:z-10 sm:text-sm"
								placeholder="Email address"
							/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-shark-300 dark:border-shark-700 placeholder-shark-500 dark:placeholder-shark-400 bg-shark-700 text-shark-900 dark:text-shark-200 rounded-t-md focus:outline-none focus:ring-shark-500 focus:border-shark-500 focus:z-10 sm:text-sm"
								placeholder="Password"
							/>
						</div>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input
								id="remember_me"
								name="remember_me"
								type="checkbox"
								className="h-4 w-4 text-shark-600  focus:ring-shark-500 border-shark-300 rounded"
							/>
							<label
								htmlFor="remember_me"
								className="ml-2 block text-sm text-shark-900 dark:text-shark-100"
							>
								Remember me
							</label>
						</div>

						<div className="text-sm">
							<a
								href="/"
								className="font-medium text-shark-600 hover:text-shark-500 dark:text-shark-200 dark:hover:text-shark-300"
							>
								Forgot your password?
							</a>
						</div>
					</div>

					<div>
						<Button
							type="submit"
							variant="solid"
							size="md"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
						>
							Sign in
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
