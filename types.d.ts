interface Categoria {
    id: number,
    nome: string,
    icone: string
}

interface Agendamento {
    id: number,
    descricao: string,
    valor: number,
    data: string,
    tipo: "ENTRADA" | "SAIDA",
    categoria: Categoria
}
