
import _ from "underscore";

 /**
  * @param {Array<String>} tiposCarta  ejem: ['C','D','H','S']
  * @param {Array<String>} tiposEspeciales ejem: ['A','J','Q','K']
  * @returns {Array<String>} regrasa un deck nuevo
  */

export const crearDeck = (tiposCarta, tiposEspeciales) => {

    if(!tiposCarta || tiposCarta.length === 0) 
        throw new Error('tipoCarta es obligatorio como Array');
    
    if(!tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('tiposEspeciales es obligatorio como Array');


    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    return _.shuffle( deck ) ;
};