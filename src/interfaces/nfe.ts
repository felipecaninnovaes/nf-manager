export interface INfe {
  nfe_idnfe: number;
  nfe_cdv: string;
  nfe_cmunfg: string;
  nfe_cnf: string;
  nfe_cuf: string;
  nfe_dhemi: string;
  nfe_dhsaient: string;
  nfe_finnfe: string;
  nfe_nfe_iddest: string;
  nfe_indfinal: string;
  nfe_indintermed: string;
  nfe_indpres: string;
  nfe_modnfe: string;
  nfe_nnf: string;
  nfe_natop: string;
  nfe_procemi: string;
  nfe_serie: string;
  nfe_tpamb: string;
  nfe_tpemis: string;
  nfe_tpimp: string;
  nfe_tpnf: string;
  nfe_verproc: string;
  nfe_nftotal: string;
  nfe_idemit: number;
  nfe_iddest: number;
  emit_idemit: number;
  emit_cnpjcpf: string;
  emit_crt: string;
  emit_ie: string;
  emit_iest: string;
  emit_xfant: string;
  emit_xnome: string;
  emit_idender: number;
  dest_iddest: number;
  dest_cnpjcpf: string;
  dest_ie: string;
  dest_email: string;
  dest_indiedest: string;
  dest_xnome: string;
  dest_idender: number;
}

export interface INfeData {
  Data: INfe[];
  Message: string;
  StatusCode: number;
}
