class Negociacao {
    //definir atributos/propriedades - constructor()

    constructor(data,quantidade,valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); //Para não poder alterar objeto , tornando suas propriedades imutáveis
    }

    //Função dentro de class vou chamar de método
    //Acesso como se fosse propriedade.
    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}