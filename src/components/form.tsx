import { HiCamera, HiUserCircle } from "react-icons/hi";
import Button from "./button";

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
	children?: React.ReactNode;
} & React.ComponentProps<"div">;

type ContextProps = {
	col: "1" | "2" | "3" | "4" | "5" | "6" | "full";
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
				className="appearance-none rounded-none relative block w-full px-4 py-2  border-2 text-shark-950 dark:text-shark-100 border-shark-300 dark:border-shark-700 placeholder-shark-400 dark:placeholder-shark-100 bg-shark-50 dark:bg-shark-800 rounded-t-md focus:outline-none focus:ring-shark-500 focus:border-shark-500 focus:z-10 sm:text-sm"
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

export function FormContainer({ children }: FormContainerProps) {
	return (
		<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
			{children}
		</div>
	);
}

export function FormContext({ col = "1", children }: ContextProps) {
	if (col === "full") {
		return <div className="sm:col-span-full">{children}</div>;
	}
	return <div className={`sm:col-span-${col}`}>{children}</div>;
}

export function FormSelect<T, K extends keyof T>({
	className,
	options,
	...props
}: FormSelectProps<T>): JSX.Element {
	return (
		<div className="mt-2 ">
			<select
				className="appearance-none rounded-none relative block w-full px-4 py-2 border-2 text-shark-950 dark:text-shark-100 border-shark-300 dark:border-shark-700 placeholder-shark-400 dark:placeholder-shark-100 bg-shark-50 dark:bg-shark-800 rounded-t-md focus:outline-none focus:ring-shark-500 focus:border-shark-500 focus:z-10 sm:text-sm"
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
			className="block w-full rounded-md border-0 py-1.5 text-shark-900 shadow-sm ring-1 ring-inset ring-shark-300 placeholder:text-shark-400 dark:placeholder:text-shark-100 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			defaultValue={""}
			{...props}
		/>
	</div>;
}

export default function FormModel() {
	return (
		<Form>
			<FormHeader title="Empresa" subtitle="Informe os dados da empresa." />
			<FormContainer>
				<FormContext col="3">
					<FormLabel htmlFor="firs-name">First name</FormLabel>
					<FormInput
						name="first-name"
						id="first-name"
						autoComplete="given-name"
					/>
				</FormContext>

				<FormContext col="3">
					<FormLabel htmlFor="last-name">Last name</FormLabel>
					<FormInput
						name="last-name"
						id="last-name"
						autoComplete="family-name"
					/>
				</FormContext>

				<FormContext col="4">
					<FormLabel htmlFor="email">Email address</FormLabel>
					<FormInput
						type="email"
						id="email"
						name="email"
						autoComplete="email"
					/>
				</FormContext>

				<FormContext col="3">
					<FormLabel htmlFor="country">Country</FormLabel>
					<FormSelect
						id="country"
						name="country"
						autoComplete="country-name"
						options={[
							{ label: "UNITED STATES", value: "UNITED STATES" },
							{ label: "CANADA", value: "CANADA" },
							{ label: "MEXICO", value: "MEXICO" },
						]}
					/>
				</FormContext>

				<FormContext col="full">
					<FormLabel htmlFor="street-address">Street address</FormLabel>

					<FormInput
						type="text"
						name="street-address"
						id="street-address"
						autoComplete="street-address"
					/>
				</FormContext>

				<FormContext col="2">
					<FormLabel
						htmlFor="city"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						City
					</FormLabel>
					<FormInput
						type="text"
						name="city"
						id="city"
						autoComplete="address-level2"
					/>
				</FormContext>

				<FormContext col="2">
					<FormLabel htmlFor="region">State / Province</FormLabel>
					<FormInput
						type="text"
						name="region"
						id="region"
						autoComplete="address-level1"
					/>
				</FormContext>

				<FormContext col="2">
					<FormLabel htmlFor="postal-code">ZIP / Postal code</FormLabel>
					<FormInput
						type="text"
						name="postal-code"
						id="postal-code"
						autoComplete="postal-code"
					/>
				</FormContext>
			</FormContainer>
		</Form>
	);
}