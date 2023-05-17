let palabra_game;
const btn = document.getElementById('jugar');
const imagen = id('imagen');
const btn_letras = document.querySelectorAll( "#letras button")
let cant_aciertos = 0;
let cant_errores = 0;
const palabras = [
    'Bulbasaur', /* 0 */
    'Ivysaur', /* 1 */
    'Venusaur',
    'Charmander',
    'Charmeleon',
    'Charizard',
    'Squirtle',
    'Wartortle',
    'Blastoise',
    'Caterpie',
    'Metapod',
    'Butterfree',
    'Weedle',
    'Kakuna',
    'Beedrill',
    'Pidgey',
    'Pidgeotto',
    'Pidgeot',
    'Rattata',
    'Raticate',
    'Spearow',
    'Fearow',
    'Ekans',
    'Arbok',
    'Pikachu',
    'Raichu',
    'Sandshrew',
    'Sandslash',
    'Nidoran',
    'Nidorina',
    'Nidoqueen',
    'Nidorino',
    'Nidoking',
    'Clefairy',
    'Clefable',
    'Vulpix',
    'Ninetales',
    'Jigglypuff',
    'Wigglytuff',
    'Zubat',
    'Golbat',
    'Oddish',
    'Gloom',
    'Vileplume',
    'Paras',
    'Parasect',
    'Venonat',
    'Venomoth',
    'Diglett',
    'Dugtrio',
    'Meowth',
    'Persian',
    'Psyduck',
    'Golduck',
    'Mankey',
    'Primeape',
    'Growlithe',
    'Arcanine',
    'Poliwag',
    'Poliwhirl',
    'Poliwrath',
    'Abra',
    'Kadabra',
    'Alakazam',
    'Machop',
    'Machoke',
    'Machamp',
    'Bellsprout',
    'Weepinbell',
    'Victreebel',
    'Tentacool',
    'Tentacruel',
    'Geodude',
    'Graveler',
    'Golem',
    'Ponyta',
    'Rapidash',
    'Slowpoke',
    'Slowbro',
    'Magnemite',
    'Magneton',
    'Farfetchd',
    'Doduo',
    'Dodrio',
    'Seel',
    'Dewgong',
    'Grimer',
    'Muk',
    'Shellder',
    'Cloyster',
    'Gastly',
    'Haunter',
    'Gengar',
    'Onix',
    'Drowzee',
    'Hypno',
    'Krabby',
    'Kingler',
    'Voltorb',
    'Electrode',
    'Exeggcute',
    'Exeggutor',
    'Cubone',
    'Marowak',
    'Hitmonlee',
    'Hitmonchan',
    'Lickitung',
    'Koffing',
    'Weezing',
    'Rhyhorn',
    'Rhydon',
    'Chansey',
    'Tangela',
    'Kangaskhan',
    'Horsea',
    'Seadra',
    'Goldeen',
    'Seaking',
    'Staryu',
    'Starmie',
    'Mr. Mime',
    'Scyther',
    'Jynx',
    'Electabuzz',
    'Magmar',
    'Pinsir',
    'Tauros',
    'Magikarp',
    'Gyarados',
    'Lapras',
    'Ditto',
    'Eevee',
    'Vaporeon',
    'Jolteon',
    'Flareon',
    'Porygon',
    'Omanyte',
    'Omastar',
    'Kabuto',
    'Kabutops',
    'Aerodactyl',
    'Snorlax',
    'Articuno',
    'Zapdos',
    'Moltres',
    'Dratini',
    'Dragonair',
    'Dragonite',
    'Mewtwo',
    'Mew'
]

btn.addEventListener('click', iniciar); /*cuando clickeas en el boton con
etiqueta "click" llama a la función iniciar*/

function id(str){
    return document.getElementById(str);
}

function iniciar (event){
    btn.disabled = true; 
    const parrafo = id('palabra_a_adivinar');
    parrafo.innerHTML = ''; /* vaciar el contenido del parrafo */
    const cantidad_palabras = palabras.length;
    const valor_azar = Math.round(Math.random() * cantidad_palabras);
    
    palabra_game = palabras[valor_azar];
    const letras_palabra_game = palabra_game.length;
    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[i].disabled = false;
    }
    
    for(let i = 0; i < letras_palabra_game; i++){
        const span = document.createElement( 'span' );
        parrafo.appendChild( span );     
    }
   }
 
   for (let i = 0; i < btn_letras.length; i++){
   btn_letras[i].addEventListener('click', click_letra);
   }

   function click_letra(event){
    const spans = document.querySelectorAll( '#palabra_a_adivinar span' );
    const button = event.target;     
    button.disabled = true; 
    const letra = button.innerHTML.toLowerCase( );
    const palabra = palabra_game.toLowerCase( );
    let acierto = false;
    for(let i = 0; i < palabra.length; i++){
        if(letra==palabra[i]){
            spans[i].innerHTML=letra;
            cant_aciertos++;
            acierto=true
        }
    }

    if (acierto == false){
        cant_errores++;
        const source = `img/img${cant_errores}.png`;
        imagen.src=source;
    }

    if(cant_errores==7){
        id('resultado').innerHTML="Ash ha muerto. El pokémon correcto era "+palabra_game;
        game_over();
    }
    else if( cant_aciertos == palabra_game.length ){
        id('resultado').innerHTML = "Victoria!";
        game_over( );
    }
   }

   function game_over(){
    for(let i=0; i<btn_letras.length; i++){
        btn_letras[i].disabled=true;
    }
    btn.disabled=false;
   }

   game_over();