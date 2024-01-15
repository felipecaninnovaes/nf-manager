"use client";
import Button from "@/components/button";
import { cn } from "@/libs/utils";
import { useState } from "react";

type FormProps = {
	children?: React.ReactNode;
} & React.ComponentProps<"form">;

type FormLabelProps = {
	htmlFor: string;
	className?: string;
	children?: React.ReactNode;
} & React.ComponentProps<"label">;

type FormInputProps = {
	className?: string;
	type?: string;
} & React.ComponentProps<"input">;

type FormHeaderProps = {
	title: string;
	subtitle: string;
} & React.ComponentProps<"div">;

type FormContainerProps = {
	size?: "sm" | "md" | "lg" | "xl";
	children?: React.ReactNode;
} & React.ComponentProps<"div">;

type ContextProps = {
	size?: "sm" | "xsm" | "md" | "xmd" | "lg" | "xlg" | "xl" | "full";
	children?: React.ReactNode;
} & React.ComponentProps<"div">;

interface IOptions {
	value: string;
	label: string;
}

type FormSelectProps<T> = {
	className?: string;
	options: IOptions[];
} & React.ComponentProps<"select">;

type FormTextAreaProps = {
	className?: string;
} & React.ComponentProps<"textarea">;

export function Form({ children, ...props }: FormProps) {
	return (
		<form {...props}>
			<div className="pb-6">{children}</div>
			<div className="col-span-full mt-2">
				<Button
					type="submit"
					variant="solid"
					color="success"
					size="lg"
					className="w-full"
				>
					Salvar
				</Button>
			</div>
		</form>
	);
}

export function FormLabel({
	htmlFor,
	className,
	children,
	...props
}: FormLabelProps) {
	return (
		<label
			className="block text-sm font-medium leading-6 text-shark-900 dark:text-shark-100"
			{...props}
		>
			{children}
		</label>
	);
}

export function FormInput({
	className,
	type = "text",
	...props
}: FormInputProps) {
	return (
		<div className="mt-2">
			<input
				type={type}
				className="appearance-none rounded-none relative block w-full px-4 py-2 border-2 text-shark-950 dark:text-shark-100 border-shark-300 dark:border-shark-700 placeholder-shark-400 dark:placeholder-shark-400 bg-shark-50 dark:bg-shark-800 rounded-t-md focus:outline-none focus:ring-shark-500 focus:border-shark-500 focus:z-10 sm:text-sm"
				{...props}
			/>
		</div>
	);
}

export function FormHeader({ title, subtitle }: FormHeaderProps) {
	return (
		<div>
			<h2 className="text-base font-semibold leading-7 text-shark-950 dark:text-shark-100">
				{title}
			</h2>
			<p className="mt-1 text-sm leading-6 text-shark-600 dark:text-shark-200">
				{subtitle}
			</p>
		</div>
	);
}

export function FormContainer({
	children,
	size: col = "md",
}: FormContainerProps) {
	const classname = "mt-10 grid gap-x-6 gap-y-8";
	const cols = {
		sm: "grid-cols-4",
		md: "grid-cols-6",
		lg: "grid-cols-8",
		xl: "grid-cols-10",
	};
	return <div className={cn(classname, cols[col])}>{children}</div>;
}

export function FormContext({ size: col = "sm", children }: ContextProps) {
	const cols = {
		sm: "sm:col-span-2 col-span-4",
		xsm: "sm:col-span-3 col-span-5",
		md: "sm:col-span-4 col-span-6",
		xmd: "sm:col-span-5 col-span-7",
		lg: "sm:col-span-6 col-span-8",
		xlg: "sm:col-span-7 col-span-9",
		xl: "sm:col-span-8 col-span-10",
		full: "sm:col-span-full",
	};
	if (col === "full") {
		return <div className="sm:col-span-full">{children}</div>;
	}
	return <div className={cn(cols[col])}>{children}</div>;
}

export function FormSelect<T, K extends keyof T>({
	className,
	options,
	...props
}: FormSelectProps<T>): JSX.Element {
	return (
		<div className="mt-2 ">
			<select
				className="appearance-none rounded-none relative block w-full px-4 py-2 border-2 text-shark-950 dark:text-shark-100 border-shark-300 dark:border-shark-700 placeholder-shark-200 dark:placeholder-shark-400 bg-shark-50 dark:bg-shark-800 rounded-t-md focus:outline-none focus:ring-shark-500 focus:border-shark-500 focus:z-10 sm:text-sm"
				{...props}
			>
				{options?.map((item, index) => {
					return (
						<option key={index + 1} value={item.value}>
							{item.label}
						</option>
					);
				})}
			</select>
		</div>
	);
}

export function FormTextArea({ className, ...props }: FormTextAreaProps) {
	<div className="mt-2">
		<textarea
			rows={3}
			className="block w-full rounded-md border-0 py-1.5 text-shark-900 shadow-sm ring-1 ring-inset ring-shark-300 placeholder:text-shark-200 dark:placeholder:text-shark-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			defaultValue={""}
			{...props}
		/>
	</div>;
}
