
import pedirCarta from './';
import valorCarta from './';
/**
 * @param {Number} puntosMinimos Ptos Minmos para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora  elemento HTML para mostrar cartas
 * @param {Array<String>} deck 
 */

export const turnoPC = ( puntosMinimos, puntosHTML, divCartasComputadora,  deck=[]) => {

    let puntosComputadora = 0;

    if(!puntosMinimos || puntosMinimos.lenght > 0) 
        throw new Error('Puntos Minmos son necesario');

    if(!deck) throw new Error('Deck necesario');
    if(!puntosHTML) throw new Error('Deck necesario');


    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}