//Lista de nogiciação que encapsula nossa regra de negócio
class ListaNegociacoes {
    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        //Devolver copia da lista de negociações
        //Criando novo objeto array
        return [].concat(this._negociacoes);
    }
}