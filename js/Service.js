export default class Service {
    constructor() {
        throw new Error('Esta classe não pode ser instanciada');
    }

    static getAll(url) {
        const itens = [
            {
                id: 1,
                picture: 'https://cdn.discordapp.com/avatars/693670430829051985/bfb9a309f9c54f4e6979e49131f91cc9.png',
                nome: "Stonks",
                preco: 1000,
                renda: 50,
                quantidade: 1
            },
            {
                id: 2,
                picture: 'https://cdn.discordapp.com/avatars/693670430829051985/bfb9a309f9c54f4e6979e49131f91cc9.png',
                nome: "Rafa",
                preco: 5000,
                renda: 250,
                quantidade: 0
            },
            {
                id:3,
                picture: 'https://cdn.discordapp.com/avatars/693670430829051985/bfb9a309f9c54f4e6979e49131f91cc9.png',
                nome: 'Juan',
                preco: 10000,
                renda: 500,
                quantidade: 0
            },
            {
                id: 4,
                picture: 'https://cdn.discordapp.com/avatars/693670430829051985/bfb9a309f9c54f4e6979e49131f91cc9.png',
                nome: "Coelho",
                preco: 25000,
                renda: 1250,
                quantidade: 0
            },
            {
                id: 5,
                picture: 'https://cdn.discordapp.com/avatars/693670430829051985/bfb9a309f9c54f4e6979e49131f91cc9.png',
                nome: "Mingal",
                preco: 50000,
                renda: 2500,
                quantidade: 0
            },
            {
                id: 6,
                picture: 'https://cdn.discordapp.com/avatars/693670430829051985/bfb9a309f9c54f4e6979e49131f91cc9.png',
                nome: "Douglas",
                preco: 100000,
                renda: 5000,
                quantidade: 0
            },
            {
                id: 8,
                picture: 'https://cdn.discordapp.com/avatars/693670430829051985/bfb9a309f9c54f4e6979e49131f91cc9.png',
                nome: "Cellbit",
                preco: 500000,
                renda: 25000,
                quantidade: 0
            },
            {
                id: 9,
                picture: 'https://cdn.discordapp.com/avatars/693670430829051985/bfb9a309f9c54f4e6979e49131f91cc9.png',
                nome: "Jose",
                preco: 1000000,
                renda: 50000,
                quantidade: 0
            }
        ]
        return itens
    }
}