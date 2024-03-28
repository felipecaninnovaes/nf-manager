export interface IEmpresas {
	idempresa: string;
	nome: string;
	nome_fant: string;
	cnpj: string;
	rua: string;
	numero: string;
	bairro: string;
	cidade: string;
	estado: string;
	cep: string;
	telefone: string;
	email: string;
	regime_tributario: string;
}

export interface IEmpresaData {
	Data: IEmpresas[];
	Message: string;
	StatusCode: number;
}
