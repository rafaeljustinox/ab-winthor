export interface PCCLIENT {

  /**
   * Código de cliente
   */
  CODCLI: number

  /**
   * Nome
   */
  CLIENTE?: string

  /**
   * CPF ou CNPJ
   */
  CGCENT?: string

  /**
   * Telefone comercial
   */
  TELENT?: string

  /**
   * Código RCA (Vendedor)
   */
  CODUSUR1?: number

  /**
   * Limite de crédito
   */
  LIMCRED?: number

  /**
   * Código de cobrança
   */
  CODCOB?: string

  /**
   * Código de praça
   */
  CODPRACA?: number

  /**
   * Código Filial Nota Fiscal
   */
  CODFILIALNF?: string

  /**
   * Endereço Comercial (Logradouro)
   */
  ENDERENT?: string

  /**
   * Número (Endereço Comercial)
   */
  NUMEROENT?: string

  /**
   * Bairro (Endereço Comercial)
   */
  BAIRROENT?: string

  /**
   * Código de Bairro (Endereço Comercial)
   */
  CODBAIRROENT?: string

  /**
   * Código de Município
   */
  CODMUNICIPIO?: number

  /**
   * Código de Cidade
   */
  CODCIDADE?: string

  /**
   * Nome do Município (Endereço Comercial)
   */
  MUNICENT?: string

  /**
   * Sigla Estado (Endereço Comercial)
   */
  ESTENT?: string

  /**
   * Código de País
   */
  CODPAIS?: number

  /**
   * CEP (Endereço Comercial)
   */
  CEPENT?: string

  /**
   * Celular (Endereço Comercial)
   */
  TELCELENT?: string

  /**
   * Complemento (Endereço Comercial)
   */
  COMPLEMENTOENT?: string

  /**
   * Ponto de Referência
   */
  PONTOREFER?: string

  /**
   * E-mail
   */
  EMAIL?: string

  /**
   * Logradouro (Endereço de Entrega)
   */
  ENDERCOM?: string

  /**
   * Número (Endereço de Entrega)
   */
  NUMEROCOM?: string

}