declare namespace winthor {

  interface PCPEDC {
    NUMPED: number
    DATA: string
    CODCLI: number
    CODUSUR: number
    PERDESC: number
    CODCOB: string
    CODPLPAG: number
    CONDVENDA: number
    VLTOTAL: number
  }

  interface PCPEDI {
    NUMPED: number
    DESCRICAO: string
    CODPROD: number
    PVENDA: number
    QT: number
    VLTOTAL: number
  }

}

export = winthor;