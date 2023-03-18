export default class Service {
    constructor() {
        throw new Error('Esta classe não pode ser instanciada');
    }

    static getAll(url) {
        const itens = [
            {
                id: 1,
                picture: 'https://cdn.discordapp.com/avatars/752351959872438302/f51435d56b2cb05b190187cf73d51c9a.png',
                nome: "Stonks",
                preco: 1000,
                renda: 10,
                quantidade: 1
            },
            {
                id: 2,
                picture: 'https://images-ext-1.discordapp.net/external/fruaCfNCrULw5SKlUYrW1WlYx1zRa6b4Jhb7-FxJof0/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/1062079734621679646/6c5996770c985bcd6e5b68131ff2ba04.png',
                nome: "Rafa",
                preco: 5000,
                renda: 50,
                quantidade: 0
            },
            {
                id:3,
                picture: 'https://images-ext-2.discordapp.net/external/QaxZQepNoooN2Ch3-zG5OxJ9VpiY7crQEzjFhxdivRI/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/443797355393974272/b4ddb336627d7266fb24b84eb8bb2c4f.png',
                nome: 'Juan',
                preco: 10000,
                renda: 100,
                quantidade: 0
            },
            {
                id: 4,
                picture: 'https://cdn.discordapp.com/avatars/496471981479428107/06742033f09f6086fbef490a2a9bccf5.png',
                nome: "Coelho",
                preco: 25000,
                renda: 250,
                quantidade: 0
            },
            {
                id: 5,
                picture: 'https://images-ext-2.discordapp.net/external/Knwcy1ILW4wBnNQbI7jEcZ5WYkW_AfTpx-hiU8SJaf4/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/488705510430736384/97c4712b82b3339b6bc057a51c849a35.png',
                nome: "Arthur",
                preco: 38000,
                renda: 380,
                quantidade: 0
            },
            {
                id: 6,
                picture: 'https://images-ext-1.discordapp.net/external/Og-AW1lN3xXa42EcFKvdXuAOoF0Ffpwh2rpZr1cz2wA/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/693670430829051985/21f511509f6e2c32970c411945e510db.png',
                nome: "Mingal",
                preco: 50000,
                renda: 500,
                quantidade: 0
            },
            {
                id: 7,
                picture: 'https://cdn.discordapp.com/avatars/371823685142708244/71133590582b07e7f417e719416314f1.png',
                nome: "Douglas",
                preco: 100000,
                renda: 1000,
                quantidade: 0
            },
            {
                id: 8,
                picture: 'https://cdn.discordapp.com/avatars/369279967374213120/742d46dc6f74fd4c135ef0ac319e4f9f.png',
                nome: "Cellbit",
                preco: 500000,
                renda: 5000,
                quantidade: 0
            },
            {
                id: 9,
                picture: 'https://images-ext-2.discordapp.net/external/i5gakaMry9IV4nZDMtW3XpmAg2YfQm5EWI55VJZxWvQ/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/255752076338921472/c57219e2b1ef8209ac39d782f8e4482f.png',
                nome: 'Nese',
                preco: 750000,
                renda: 7500,
                quantidade: 0
            },
            {
                id: 10,
                picture: 'https://cdn.discordapp.com/avatars/705121634020753578/60a218c4089596cb3c2ab4086085c269.png',
                nome: "Jose",
                preco: 1000000,
                renda: 10000,
                quantidade: 0
            }
        ]
        return itens
    }
}
