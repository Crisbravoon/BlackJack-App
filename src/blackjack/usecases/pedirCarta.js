
/**
 * Pide la Carta
 * @param {Array<String>} deck Arreglo de string
 * @returns {String} retorna una carta del Deck
 */

export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
};