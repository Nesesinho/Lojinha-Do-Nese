export default class Service {
    constructor() {
        throw new Error('Esta classe não pode ser instanciada');
    }

    static getAll(url) {
        const itens = [
            {
                id: 1,
                picture: 'https://images-ext-2.discordapp.net/external/PIaL9IFiVRJG28_eZaA9A1tRRQacWK5fyTnubdbVuL8/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/752351959872438302/83930bbccf8e3cd42a7858c0bf5e62d9.png',
                nome: "Stonks",
                preco: 1000,
                renda: 25,
                quantidade: 1
            },
            {
                id: 2,
                picture: 'https://images-ext-2.discordapp.net/external/N-UtqlQ2SxWH7Dl98euMFh8nlkg-QTjKIgaTMIF2w14/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/808088684921618433/6810ee374c1a3b584e7e2ea7959faaec.png',
                nome: "Rafa",
                preco: 5000,
                renda: 125,
                quantidade: 0
            },
            {
                id:3,
                picture: 'https://images-ext-1.discordapp.net/external/thPxQkDuykDr85y8-fHkRUOC0EIYAaqRer5BF63nXk8/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/443797355393974272/0f5559a2b9d0b30e3a0f5ac95d0521a4.png?width=676&height=676',
                nome: 'Juan',
                preco: 10000,
                renda: 250,
                quantidade: 0
            },
            {
                id: 4,
                picture: 'https://images-ext-2.discordapp.net/external/xavUuQEO3LVQjOKpIzOELfzgBd_zhJVbBVpMI06On9M/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/496471981479428107/3381e71b34f4bd397a250d44396dc75c.png',
                nome: "Coelho",
                preco: 25000,
                renda: 625,
                quantidade: 0
            },
            {
                id: 5,
                picture: 'https://images-ext-1.discordapp.net/external/q75DwoVyLWBAi816ExSpCqniygDLx-TqpuZrlSCVp6g/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/488705510430736384/7e0fbb894b5b604adf935f951ad593ac.png',
                nome: "Arthur",
                preco: 38000,
                renda: 937,
                quantidade: 0
            },
            {
                id: 6,
                picture: 'https://cdn.discordapp.com/avatars/693670430829051985/bfb9a309f9c54f4e6979e49131f91cc9.png',
                nome: "Mingal",
                preco: 50000,
                renda: 1250,
                quantidade: 0
            },
            {
                id: 7,
                picture: 'https://images-ext-1.discordapp.net/external/nHTIERnPA5T6ZqYLycFX2L943LO9BUZBcAfxVA-VDIM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/371823685142708244/7c598d1c42d215f19a15dea4cd6f3edb.png?width=676&height=676',
                nome: "Douglas",
                preco: 100000,
                renda: 2500,
                quantidade: 0
            },
            {
                id: 8,
                picture: 'https://images-ext-2.discordapp.net/external/QiF4Hfl2P5JG_ywiixT82Vv7tIayE-m6b_YGSLXfg5Q/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/369279967374213120/e05762cc5314c908153f4e5a68a81d61.png',
                nome: "Cellbit",
                preco: 500000,
                renda: 12500,
                quantidade: 0
            },
            {
                id: 9,
                picture: 'https://cdn.discordapp.com/avatars/705121634020753578/60a218c4089596cb3c2ab4086085c269.png?size=2048',
                nome: "Jose",
                preco: 1000000,
                renda: 25000,
                quantidade: 0
            }
        ]
        return itens
    }
}