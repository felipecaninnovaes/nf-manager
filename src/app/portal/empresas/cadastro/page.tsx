import {
	Form,
	FormContainer,
	FormContext,
	FormHeader,
	FormInput,
	FormLabel,
	FormSelect,
} from "@/components/form";

export default async function FormC() {
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
