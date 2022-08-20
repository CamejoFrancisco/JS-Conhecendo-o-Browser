
//STATIC não preciso instanciar com new para poder usar os métodos.
//Static métodos que invoco direto na class
//Such methods cannot be accessed through instantiated objects but could be accessed through the class name
//You cannot call a static method on an object

class DateHelper {
    
    constructor() {
        
        throw new Error('Esta classe não pode ser instanciada');
    }
    
    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
    
    static textoParaData(texto) {
        
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error('Deve estar no formato aaaa-mm-dd');
             
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }
    
}