"use client";
import { IconType } from "react-icons";
import { cn } from "@/libs/utils";

type ButtonProps = {
	children?: React.ReactNode;
	type?: "submit" | "button" | "reset";
	variant?: "solid" | "outline" | "ghost";
	color?: "primary" | "secondary" | "danger" | "success" | "warning";
};

export default function Button({
	children,
	color = "primary",
	type = "button",
	variant = "solid",
}: ButtonProps) {
	const defaultButtonClasses =
		"flex items-center gap-2 text-md rounded-lg focus:outline-none px-4 py-2 transition ease-in-out duration-150";

	const variants = {
		solid: {
			primary:
				"text-shark-800 dark:text-shark-100 bg-shark-50 dark:bg-shark-800 hover:bg-shark-200 dark:hover:bg-shark-900 focus:ring-2 focus:ring-offset-2 focus:ring-shark-500",
			secondary:
				"bg-jordy-blue-500 dark:bg-jordy-blue-700 text-jordy-blue-950 dark:text-jordy-blue-100 hover:bg-jordy-blue-600 dark:hover:bg-jordy-blue-800",
			danger:
				"bg-shiraz-500 dark:bg-shiraz-700 text-shiraz-950 dark:text-shiraz-100 hover:bg-shiraz-600 dark:hover:bg-shiraz-800",
			success:
				"bg-eucalyptus-500 dark:bg-eucalyptus-700 text-eucalyptus-950 dark:text-eucalyptus-100 hover:bg-eucalyptus-600 dark:hover:bg-eucalyptus-800",
			warning:
				"bg-fuel-yellow-500 dark:bg-fuel-yellow-700 text-fuel-yellow-950 dark:text-fuel-yellow-100 hover:bg-fuel-yellow-600 dark:hover:bg-fuel-yellow-800",
		},
		outline: {
			primary:
				"border-2 border-shark-500 dark:border-shark-100 text-shark-950 dark:text-shark-100 hover:bg-shark-700/15 dark:hover:bg-shark-100/15",
			secondary:
				"border-2 border-jordy-blue-500 dark:border-jordy-blue-700 text-jordy-blue-950 dark:text-jordy-blue-100 hover:bg-jordy-blue-700/15 dark:hover:bg-jordy-blue-800/15",
			danger:
				"border-2 border-shiraz-500 dark:border-shiraz-700 text-shiraz-950 dark:text-shiraz-100 hover:bg-shiraz-700/15 dark:hover:bg-shiraz-800/15",
			success:
				"border-2 border-eucalyptus-500 dark:border-eucalyptus-700 text-eucalyptus-950 dark:text-eucalyptus-100 hover:bg-eucalyptus-700/15 dark:hover:bg-eucalyptus-800/15",
			warning:
				"border-2 border-fuel-yellow-500 dark:border-fuel-yellow-700 text-fuel-yellow-950 dark:text-fuel-yellow-100 hover:bg-fuel-yellow-700/15 dark:hover:bg-fuel-yellow-800/15",
		},
		ghost: {
			primary:
				"bg-shark-700/20 dark:bg-shark-100/20 text-shark-950 dark:text-shark-100 hover:bg-shark-700/30 dark:hover:bg-shark-100/30",
			secondary:
				"bg-jordy-blue-700/20 dark:bg-jordy-blue-800/20 text-jordy-blue-950 dark:text-jordy-blue-100 hover:bg-jordy-blue-700/30 dark:hover:bg-jordy-blue-800/30",
			danger:
				"bg-shiraz-700/20 dark:bg-shiraz-800/20 text-shiraz-950 dark:text-shiraz-100 hover:bg-shiraz-700/30 dark:hover:bg-shiraz-800/30",
			success:
				"bg-eucalyptus-700/20 dark:bg-eucalyptus-800/20 text-eucalyptus-950 dark:text-eucalyptus-100 hover:bg-eucalyptus-700/30 dark:hover:bg-eucalyptus-800/30",
			warning:
				"bg-fuel-yellow-700/20 dark:bg-fuel-yellow-800/20 border-2 border-fuel-yellow-500 dark:border-fuel-yellow-700 text-fuel-yellow-950 dark:text-fuel-yellow-100 hover:bg-fuel-yellow-700/15 dark:hover:bg-fuel-yellow-800/15",
		}
	};

	return (
		<button
			type={type}
			className={cn(defaultButtonClasses, variants[variant][color])}
		>
			{children}
		</button>
	);
}
