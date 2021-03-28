import Service from './Service.js';

export default class ItensController {
    constructor() {
        this.money = 0;
        this.placeItens = document.querySelector('.itens__list');
        this.itens = Service.getAll('url')
        this.setInterval = [];

        this.init();
    }

    init() {
        this.createItensHtml();
        const btnComprar = document.querySelectorAll('.btn_comprar')
        btnComprar.forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault()
                const id = btn.dataset.id;
                this.comprar(id);
            })
        })
        this.render();
    }

    createItensHtml() {
        this.placeItens.innerHTML = '';
        this.itens.forEach(iten => {
            const template = `
        <li class="itens__list__iten">
          <div class="itens__list__iten__picture">
            <img src="${iten.picture}">
          </div>
          <div class="itens__list__iten__desc">
            <p class="itens__list__iten__nome">${iten.nome}</p>
            <p class="itens__list__iten__quantidade">Quantidade: ${iten.quantidade}</p>
            <p class="itens__list__iten_preco">Preço: ${iten.preco.toFixed(0)} R$</p>
            <p class="itens__list__iten__renda">Renda/m: ${iten.renda} R$</p>
            <button type="button" class="btn_comprar" data-id="${iten.id}">comprar</button>
          </div>
        </li>
      `;
            this.placeItens.innerHTML += template;
        })
    }

    comprar(id) {
        const iten = this.itens.find(iten => iten.id == id);
        const index = this.itens.indexOf(iten);
        if (!(iten && this.money >= iten.preco)) return window.alert('não tem dinheiro suficiente')
        if (iten.nome == 'douglas' && iten.quantidade == 99) {
            alert('hum pelo visto alguém quer fazer um harem.')
        }
        this.money -= iten.preco;
        iten.preco += iten.preco * (25 / 100);
        iten.quantidade++;
        this.itens[index] = iten;
        this.init();
    }

    render() {
        this.setInterval.forEach(interval => {
            clearInterval(interval);
        })
        this.itens.forEach(iten => {
            const getMoney = iten.quantidade > 0? iten.renda*iten.quantidade:0;
            this.setInterval.push(
                setInterval(() => {
                    this.money += getMoney;
                    console.log(getMoney)
                    document.querySelector('.dinheiro').textContent = this.money.toFixed(0)+' R$';

                }, 1000)
            )
        })
    }
}