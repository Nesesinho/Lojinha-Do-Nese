import Service from './Service.js';

export default class ItensController {
    constructor() {
        this.$ = document.querySelector.bind(document);
        this.money = 99999999999;
        this.placeItens = this.$('.itens__list');
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
                const id = parseInt(btn.dataset.id);
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
            <p class="itens__list__iten__quantidade quantidade_${iten.id}">Quantidade: <span>${iten.quantidade}</span></p>
            <p class="itens__list__iten_preco preco_${iten.id}">Preço: <span>${iten.preco.toFixed(0)}</span> R$</p>
            <p class="itens__list__iten__renda">Renda/s: <span>${iten.renda}</span> R$</p>
            <button type="button" class="btn_comprar" data-id="${iten.id}">comprar</button>
          </div>
        </li>
      `;
            this.placeItens.innerHTML += template;
        })
    }

    comprar(id) {
        const iten = this.itens.find(iten => iten.id === id);
        const index = this.itens.indexOf(iten);
        if (!(iten && this.money >= iten.preco)) return window.alert('não tem dinheiro suficiente')
        this.easterEgg(iten.nome, iten.quantidade)
        this.money -= iten.preco;
        iten.preco += iten.preco * (15 / 100);
        iten.quantidade++;
        this.itens[index] = iten;
        const elementQuant = this.$('.quantidade_'+id+' span');
        const elementPreco = this.$('.preco_'+id+' span');
        this.setElementValue({ reset: elementQuant, value: iten.quantidade }, { reset: elementPreco, value: iten.preco.toFixed(0)});
        this.render();
    }

    setElementValue(...setters) {
        setters.forEach(setter => {
            setter.reset.textContent = setter.value;
        })
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
                    this.setElementValue({ reset: this.$('.dinheiro'), value: this.money.toFixed(0)+' R$' });
                }, 1000)
            )
        })
    }

    easterEgg(nome, quantidade) {
        if (nome == 'Douglas' && quantidade == 20) {
            alert('Hum pelo visto alguém quer fazer um harem.')
        }
        if (nome == 'Stonks' && quantidade == 1) {
            alert('Que começe o trafico humano!')
        }
        if (nome == 'Stonks' && quantidade == 50) {
            alert('Faça bom uso desses Stonks')
        }
        if (nome == 'Jose' && quantidade == 0) {
            alert('Raça absoluta alem da conciencia, esse é o poder que beira a onipotencia')
        }
    }
}

