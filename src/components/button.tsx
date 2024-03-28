"use client";
import { cn } from "@/libs/utils";
import { IconType } from "react-icons";

type ButtonProps = {
	children?: React.ReactNode;
	type?: "submit" | "button" | "reset";
	variant?: "solid" | "outline" | "ghost";
	color?: "primary" | "secondary" | "danger" | "success" | "warning";
	size?: "sm" | "md" | "lg";
	className?: string;
} & React.ComponentProps<"button">;

export default function Button({
	children,
	color = "primary",
	type = "button",
	variant = "solid",
	size = "md",
	className,
	...props
}: ButtonProps) {
	const defaultButtonClasses =
		"flex relative justify-center items-center gap-2 text-md font-medium rounded-lg focus:outline-none px-4 py-2 transition ease-in-out duration-150";

	const sizes = {
		sm: "px-2 py-1 text-sm",
		md: "px-4 py-2 text-md",
		lg: "px-6 py-3 text-lg",
	};

	const variants = {
		solid: {
			primary:
				"bg-shark-700 dark:bg-shark-500 text-shark-100 dark:text-shark-950 hover:bg-shark-800 dark:hover:bg-shark-600",
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
		},
	};

	return (
		<button
			type={type}
			className={cn(
				className,
				defaultButtonClasses,
				variants[variant][color],
				sizes[size],
			)}
			{...props}
		>
			{children}
		</button>
	);
}
