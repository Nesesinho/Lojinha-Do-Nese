export default class Service {
  constructor() {   
      throw new Error('Esta classe não pode ser instanciada');
  }

  static getAll(url) {
    const itens = [
      {
        id: 1,
        nome: "stonks",
        preco: 1000,
        renda: 50,
        quantidade: 1
      },
      {
        id: 2,
        nome: "rafa",
        preco: 5000, 
        renda: 250,
        quantidade: 0
      },
      {
        id:3,
        nome: 'juan',
        preco: 10000,
        renda: 500,
        quantidade: 0
      },
      {
        id: 4,
        nome: "coelho",
        preco: 25000,
        renda: 1250,
        quantidade: 0
      },
      {
        id: 5,
        nome: "mingal",
        preco: 50000,
        renda: 2500,
        quantidade: 0
      },
      {
        id: 6,
        nome: "douglas",
        preco: 100000,
        renda: 5000,
        quantidade: 0
      },
      {
        id: 8,
        nome: "cellbit",
        preco: 500000,
        renda: 25000,
        quantidade: 0
      },
      {
        id: 9,
        nome: "jose",
        preco: 1000000,
        renda: 50000,
        quantidade: 0
      }
    ]
    return itens
  }
}