export interface PCPEDC {
  /**
   * Número do pedido
   */
  NUMPED?: number

  /**
   * Data
   */
  DATA?: string

  /**
   * Código do Cliente
   */
  CODCLI?: number

  /**
   * Código do RCA (Vendedor)
   */
  CODUSUR?: number

  /**
   * Percentual de Desconto
   */
  PERDESC?: number

  /**
   * Código de Cobrança
   */
  CODCOB?: string

  /**
   * Código do Plano de Pagamento
   */
  CODPLPAG?: number

  /**
   * Tipo de Venda
   */
  CONDVENDA?: number

  /**
   * Valor total
   */
  VLTOTAL?: number
}
