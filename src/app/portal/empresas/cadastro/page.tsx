import {
	Form,
	FormContainer,
	FormContext,
	FormHeader,
	FormInput,
	FormLabel,
	FormSelect,
} from "@/components/form";
import { empresa } from "@/contexts/EmpresaContext";

export default async function FormC() {
	return (
		<Form action={empresa.cadastrar}>
			<FormHeader title="Empresa" subtitle="Informe os dados da empresa." />
			<FormContainer size="lg">
				<FormContext size="xsm">
					<FormLabel htmlFor="nome">Nome da Empresa</FormLabel>
					<FormInput
						name="nome"
						id="nome"
						autoComplete="given-name"
						placeholder="Digite o nome da empresa..."
					/>
				</FormContext>

				<FormContext size="xsm">
					<FormLabel htmlFor="nome_fant">Nome Fantasia</FormLabel>
					<FormInput
						name="nome_fant"
						id="nome_fant"
						autoComplete="family-name"
						placeholder="Digite o nome fantasia..."
					/>
				</FormContext>

				<FormContext size="sm">
					<FormLabel htmlFor="cnpj">CNPJ</FormLabel>
					<FormInput
						type="number"
						name="cnpj"
						id="cnpj"
						autoComplete="family-name"
						placeholder="Digite o CNPJ..."
					/>
				</FormContext>

				<FormContext size="md">
					<FormLabel htmlFor="email">E-Mail</FormLabel>
					<FormInput
						type="email"
						id="email"
						name="email"
						placeholder="Digite o E-Mail..."
						autoComplete="email"
					/>
				</FormContext>

				<FormContext size="sm">
					<FormLabel htmlFor="telefone">Telefone</FormLabel>
					<FormInput
						type="phone"
						id="telefone"
						name="telefone"
						autoComplete="phone"
						placeholder="Digite o telefone..."
					/>
				</FormContext>

				<FormContext size="sm">
					<FormLabel htmlFor="regime_tributario">Regime</FormLabel>
					<FormSelect
						id="regime_tributario"
						name="regime_tributario"
						autoComplete="country-name"
						options={[
							{ label: "Selecione o Regime", value: "Regime Triburario" },
							{ label: "Mei", value: "Mei" },
							{ label: "Simples Nacional", value: "Simples Nacional" },
							{ label: "Lucro Presumido", value: "Lucro Presumido" },
							{ label: "Lucro Real", value: "Lucro Real" },
						]}
					/>
				</FormContext>

				<FormContext size="md">
					<FormLabel htmlFor="rua">Rua</FormLabel>

					<FormInput
						type="text"
						name="rua"
						id="rua"
						autoComplete="rua"
						placeholder="Digite a rua..."
					/>
				</FormContext>

				<FormContext size="sm">
					<FormLabel
						htmlFor="numero"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Número
					</FormLabel>
					<FormInput
						type="text"
						name="numero"
						id="numero"
						autoComplete="address-level2"
						placeholder="Digite o número..."
					/>
				</FormContext>

				<FormContext size="sm">
					<FormLabel htmlFor="estado">Estado</FormLabel>
					<FormSelect
						id="estado"
						name="estado"
						autoComplete="country-name"
						options={[
							{ label: "Selecione o Estado", value: "Selecione o Estado" },
						]}
					/>
				</FormContext>

				<FormContext size="sm">
					<FormLabel htmlFor="cidade">Cidade</FormLabel>
					<FormSelect
						id="cidade"
						name="cidade"
						autoComplete="country-name"
						options={[
							{ label: "Selecione a Cidade", value: "Selecione a Cidade" },
						]}
					/>
				</FormContext>

				<FormContext size="md">
					<FormLabel htmlFor="bairro">Bairro</FormLabel>
					<FormInput
						type="text"
						name="bairro"
						id="bairro"
						autoComplete="family-name"
						placeholder="Digite o bairro..."
					/>
				</FormContext>

				<FormContext size="sm">
					<FormLabel htmlFor="cep">CEP</FormLabel>
					<FormInput
						type="number"
						name="cep"
						id="cep"
						autoComplete="family-name"
						placeholder="Digite o CEP..."
					/>
				</FormContext>
			</FormContainer>
		</Form>
	);
}
